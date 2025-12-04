import {
    collection,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
    query,
    orderBy,
    where
} from 'firebase/firestore';
import { db } from '../config/firebase';

const CONTACTS_COLLECTION = 'contacts';
const COMMUNES_COLLECTION = 'communes'; // Thông tin xã
const COMMUNES_DROPDOWN_COLLECTION = 'communes_dropdown'; // Thông tin xã từ dropdown

// Import interfaces từ các file dữ liệu
export interface contactInfo {
    unitCode: string;
    fullName: string;
    mobile?: string | null;
}

export interface CommuneDropdown {
    ten_xa: string;
    ma_xa: string;
}

export interface CommuneInfo {
    ma_xa: string;
    ten_xa: string;
    name: string;
    loai: string;
    cap: number;
    ma_tinh: string;
    ten_tinh: string;
    dan_so: number;
    dtich_km2: number;
    matdo_km2: number;
    address: string;
    tru_so: string;
    sap_nhap: string;
}

// Interface cho Firestore (có thêm id và timestamps)
export interface Contact extends contactInfo {
    id?: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface Commune extends CommuneInfo {
    id?: string;
    createdAt?: Date;
    updatedAt?: Date;
}

// ==================== CONTACTS FUNCTIONS ====================

// Lấy tất cả contacts
export const getAllContacts = async (): Promise<Contact[]> => {
    try {
        const contactsRef = collection(db, CONTACTS_COLLECTION);
        const q = query(contactsRef, orderBy('fullName'));
        const querySnapshot = await getDocs(q);

        const contacts: Contact[] = [];
        querySnapshot.forEach((doc) => {
            contacts.push({
                id: doc.id,
                ...doc.data()
            } as Contact);
        });

        return contacts;
    } catch (error) {
        console.error('Error getting contacts:', error);
        throw error;
    }
};

// Lấy contact theo unitCode
export const getContactByUnitCode = async (unitCode: string): Promise<Contact | null> => {
    try {
        const contactsRef = collection(db, CONTACTS_COLLECTION);
        const q = query(contactsRef, where('unitCode', '==', unitCode));
        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty) {
            return null;
        }

        const doc = querySnapshot.docs[0];
        return {
            id: doc.id,
            ...doc.data()
        } as Contact;
    } catch (error) {
        console.error('Error getting contact by unitCode:', error);
        throw error;
    }
};

// Thêm contact mới
export const addContact = async (contact: Omit<Contact, 'id' | 'createdAt' | 'updatedAt'>): Promise<string> => {
    try {
        const contactsRef = collection(db, CONTACTS_COLLECTION);
        const docRef = await addDoc(contactsRef, {
            ...contact,
            createdAt: new Date(),
            updatedAt: new Date()
        });

        return docRef.id;
    } catch (error) {
        console.error('Error adding contact:', error);
        throw error;
    }
};

// Cập nhật contact
export const updateContact = async (id: string, contact: Partial<Contact>): Promise<void> => {
    try {
        const contactRef = doc(db, CONTACTS_COLLECTION, id);
        await updateDoc(contactRef, {
            ...contact,
            updatedAt: new Date()
        });
    } catch (error) {
        console.error('Error updating contact:', error);
        throw error;
    }
};

// Xóa contact
export const deleteContact = async (id: string): Promise<void> => {
    try {
        const contactRef = doc(db, CONTACTS_COLLECTION, id);
        await deleteDoc(contactRef);
    } catch (error) {
        console.error('Error deleting contact:', error);
        throw error;
    }
};

// ==================== COMMUNES FUNCTIONS ====================

// Lấy tất cả communes
export const getAllCommunes = async (): Promise<Commune[]> => {
    try {
        const communesRef = collection(db, COMMUNES_COLLECTION);
        const q = query(communesRef, orderBy('name'));
        const querySnapshot = await getDocs(q);

        const communes: Commune[] = [];
        querySnapshot.forEach((doc) => {
            communes.push({
                id: doc.id,
                ...doc.data()
            } as Commune);
        });

        return communes;
    } catch (error) {
        console.error('Error getting communes:', error);
        throw error;
    }
};

// Lấy commune theo ma_xa
export const getCommuneByMaXa = async (ma_xa: string): Promise<Commune | null> => {
    try {
        const communesRef = collection(db, COMMUNES_COLLECTION);
        const q = query(communesRef, where('ma_xa', '==', ma_xa));
        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty) {
            return null;
        }

        const doc = querySnapshot.docs[0];
        return {
            id: doc.id,
            ...doc.data()
        } as Commune;
    } catch (error) {
        console.error('Error getting commune by ma_xa:', error);
        throw error;
    }
};

// Lấy communes theo tỉnh
export const getCommunesByTinh = async (ma_tinh: string): Promise<Commune[]> => {
    try {
        const communesRef = collection(db, COMMUNES_COLLECTION);
        const q = query(communesRef, where('ma_tinh', '==', ma_tinh), orderBy('name'));
        const querySnapshot = await getDocs(q);

        const communes: Commune[] = [];
        querySnapshot.forEach((doc) => {
            communes.push({
                id: doc.id,
                ...doc.data()
            } as Commune);
        });

        return communes;
    } catch (error) {
        console.error('Error getting communes by tinh:', error);
        throw error;
    }
};

// Thêm commune mới
export const addCommune = async (commune: Omit<Commune, 'id' | 'createdAt' | 'updatedAt'>): Promise<string> => {
    try {
        const communesRef = collection(db, COMMUNES_COLLECTION);
        const docRef = await addDoc(communesRef, {
            ...commune,
            createdAt: new Date(),
            updatedAt: new Date()
        });

        return docRef.id;
    } catch (error) {
        console.error('Error adding commune:', error);
        throw error;
    }
};

// Cập nhật commune
export const updateCommune = async (id: string, commune: Partial<Commune>): Promise<void> => {
    try {
        const communeRef = doc(db, COMMUNES_COLLECTION, id);
        await updateDoc(communeRef, {
            ...commune,
            updatedAt: new Date()
        });
    } catch (error) {
        console.error('Error updating commune:', error);
        throw error;
    }
};

// Xóa commune
export const deleteCommune = async (id: string): Promise<void> => {
    try {
        const communeRef = doc(db, COMMUNES_COLLECTION, id);
        await deleteDoc(communeRef);
    } catch (error) {
        console.error('Error deleting commune:', error);
        throw error;
    }
};

// ==================== COMBINED FUNCTIONS ====================

// Lấy contact kèm thông tin commune
export interface ContactWithCommune extends Contact {
    communeInfo?: Commune;
}

// Lấy tất cả contacts với thông tin commune (nếu có unitCode khớp với ma_xa)
export const getAllContactsWithCommunes = async (): Promise<ContactWithCommune[]> => {
    try {
        const contacts = await getAllContacts();
        const contactsWithCommunes: ContactWithCommune[] = [];

        for (const contact of contacts) {
            // Thử tìm commune bằng unitCode (nếu unitCode trùng với ma_xa)
            try {
                const commune = await getCommuneByMaXa(contact.unitCode);
                contactsWithCommunes.push({
                    ...contact,
                    communeInfo: commune || undefined
                });
            } catch {
                // Nếu không tìm thấy commune, chỉ thêm contact
                contactsWithCommunes.push(contact);
            }
        }

        return contactsWithCommunes;
    } catch (error) {
        console.error('Error getting contacts with communes:', error);
        throw error;
    }
};

// ==================== SAMPLE DATA ====================

// 1. Thêm tất cả communes từ communes_info.ts (dữ liệu đầy đủ)
export const addCommunesFromInfo = async (): Promise<void> => {
    try {
        const { communesInfo } = await import('./communes_info');
        
        console.log(`Starting to add ${communesInfo.length} communes from communes_info.ts...`);
        
        let successCount = 0;
        let errorCount = 0;
        
        for (let i = 0; i < communesInfo.length; i++) {
            try {
                // communesInfo đã đúng interface CommuneInfo, chỉ cần spread
                const communeData: Omit<Commune, 'id' | 'createdAt' | 'updatedAt'> = {
                    ...communesInfo[i]
                };
                
                await addCommune(communeData);
                successCount++;
                
                if ((i + 1) % 10 === 0) {
                    console.log(`Progress: ${i + 1}/${communesInfo.length} communes processed`);
                }
            } catch (error) {
                errorCount++;
                console.error(`Error adding commune ${communesInfo[i].ma_xa} - ${communesInfo[i].ten_xa}:`, error);
            }
        }
        
        console.log(`Completed! Successfully added ${successCount} communes, ${errorCount} errors`);
    } catch (error) {
        console.error('Error adding communes from info:', error);
        throw error;
    }
};

// 2. Thêm communes từ communes_dropdown.ts (chỉ có tên và mã xã)
export const addCommunesFromDropdown = async (): Promise<void> => {
    try {
        const { communesDropdown } = await import('./communes_dropdown');
        
        console.log(`Starting to add ${communesDropdown.length} communes from communes_dropdown.ts...`);
        
        let successCount = 0;
        let errorCount = 0;
        
        for (let i = 0; i < communesDropdown.length; i++) {
            try {
                // Xác định loại xã/phường/thị trấn từ tên
                let loai = 'Khác';
                if (communesDropdown[i].ten_xa.includes('Phường')) {
                    loai = 'Phường';
                } else if (communesDropdown[i].ten_xa.includes('Thị trấn')) {
                    loai = 'Thị trấn';
                } else if (communesDropdown[i].ten_xa.includes('Xã')) {
                    loai = 'Xã';
                }
                
                const communeData: Omit<Commune, 'id' | 'createdAt' | 'updatedAt'> = {
                    ma_xa: communesDropdown[i].ma_xa,
                    ten_xa: communesDropdown[i].ten_xa,
                    name: `Công an ${communesDropdown[i].ten_xa}`,
                    loai: loai,
                    cap: 2,
                    ma_tinh: '68',
                    ten_tinh: 'Lâm Đồng',
                    dan_so: 0,
                    dtich_km2: 0,
                    matdo_km2: 0,
                    address: 'đang cập nhật',
                    tru_so: 'đang cập nhật',
                    sap_nhap: ''
                };
                
                const communesRef = collection(db, COMMUNES_DROPDOWN_COLLECTION);
                const docRef = await addDoc(communesRef, {
                    ...communeData,
                    createdAt: new Date(),
                    updatedAt: new Date()
                });
                successCount++;
                
                if ((i + 1) % 10 === 0) {
                    console.log(`Progress: ${i + 1}/${communesDropdown.length} communes processed`);
                }
            } catch (error) {
                errorCount++;
                console.error(`Error adding commune ${communesDropdown[i].ma_xa} - ${communesDropdown[i].ten_xa}:`, error);
            }
        }
        
        console.log(`Completed! Successfully added ${successCount} communes, ${errorCount} errors`);
    } catch (error) {
        console.error('Error adding communes from dropdown:', error);
        throw error;
    }
};

// 3. Thêm contacts từ contact_info.ts (danh sách trưởng công an)
export const addContactsFromFile = async (): Promise<void> => {
    try {
        const { contactInfo } = await import('./contact_info');
        
        console.log(`Starting to add ${contactInfo.length} contacts from contact_info.ts...`);
        
        let successCount = 0;
        let errorCount = 0;
        
        for (let i = 0; i < contactInfo.length; i++) {
            try {
                // contactInfo đã đúng interface contactInfo, chỉ cần spread
                const contactData: Omit<Contact, 'id' | 'createdAt' | 'updatedAt'> = {
                    ...contactInfo[i]
                };
                
                await addContact(contactData);
                successCount++;
                
                if ((i + 1) % 10 === 0) {
                    console.log(`Progress: ${i + 1}/${contactInfo.length} contacts processed`);
                }
            } catch (error) {
                errorCount++;
                console.error(`Error adding contact ${contactInfo[i].fullName}:`, error);
            }
        }
        
        console.log(`Completed! Successfully added ${successCount} contacts, ${errorCount} errors`);
    } catch (error) {
        console.error('Error adding contacts from file:', error);
        throw error;
    }
};

// 4. Thêm tất cả dữ liệu (communes_info + communes_dropdown + contacts)
export const addAllData = async (): Promise<void> => {
    try {
        console.log('=== Starting to add all data ===');
        
        // 1. Thêm communes từ communes_info.ts (dữ liệu đầy đủ)
        console.log('\n1. Adding communes from communes_info.ts...');
        await addCommunesFromInfo();
        
        // 2. Thêm communes từ communes_dropdown.ts (dữ liệu cơ bản)
        console.log('\n2. Adding communes from communes_dropdown.ts...');
        await addCommunesFromDropdown();
        
        // 3. Thêm contacts từ contact_info.ts
        console.log('\n3. Adding contacts from contact_info.ts...');
        await addContactsFromFile();
        
        console.log('\n=== All data added successfully! ===');
    } catch (error) {
        console.error('Error adding all data:', error);
        throw error;
    }
};