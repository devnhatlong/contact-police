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

// Interface cho Contact
export interface Contact {
    id?: string;
    name: string; // Tên trưởng công an
    phone: string;
    ma_xa?: string; // Key để liên kết với Commune
    createdAt?: Date;
    updatedAt?: Date;
}

// Interface cho Commune (Thông tin xã)
export interface Commune {
    id?: string;
    ma_xa: string; // Mã xã (khóa chính)
    ten_xa: string; // Tên xã
    name: string; // Tên đầy đủ (Công an xã...)
    loai: string; // Loại: "Xã", "Phường", "Thị trấn"
    cap: number; // Cấp
    ma_tinh: string; // Mã tỉnh
    ten_tinh: string; // Tên tỉnh
    dan_so: number; // Dân số
    dtich_km2: number; // Diện tích (km²)
    matdo_km2: number; // Mật độ (người/km²)
    address: string; // Địa chỉ trụ sở
    tru_so: string; // Trụ sở
    sap_nhap: string; // Thông tin sáp nhập
    createdAt?: Date;
    updatedAt?: Date;
}

// ==================== CONTACTS FUNCTIONS ====================

// Lấy tất cả contacts
export const getAllContacts = async (): Promise<Contact[]> => {
    try {
        const contactsRef = collection(db, CONTACTS_COLLECTION);
        const q = query(contactsRef, orderBy('name'));
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

// Lấy contact theo ma_xa
export const getContactByMaXa = async (ma_xa: string): Promise<Contact | null> => {
    try {
        const contactsRef = collection(db, CONTACTS_COLLECTION);
        const q = query(contactsRef, where('ma_xa', '==', ma_xa));
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
        console.error('Error getting contact by ma_xa:', error);
        throw error;
    }
};

// Thêm contact mới
export const addContact = async (contact: Omit<Contact, 'id'>): Promise<string> => {
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
export const addCommune = async (commune: Omit<Commune, 'id'>): Promise<string> => {
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

export const getContactWithCommune = async (contactId: string): Promise<ContactWithCommune | null> => {
    try {
        const contactRef = doc(db, CONTACTS_COLLECTION, contactId);
        const contactDoc = await getDocs(query(collection(db, CONTACTS_COLLECTION), where('__name__', '==', contactId)));

        if (contactDoc.empty) {
            return null;
        }

        const contact = {
            id: contactDoc.docs[0].id,
            ...contactDoc.docs[0].data()
        } as Contact;

        // Nếu có ma_xa, lấy thông tin commune
        if (contact.ma_xa) {
            const commune = await getCommuneByMaXa(contact.ma_xa);
            return {
                ...contact,
                communeInfo: commune || undefined
            };
        }

        return contact;
    } catch (error) {
        console.error('Error getting contact with commune:', error);
        throw error;
    }
};

// Lấy tất cả contacts kèm thông tin commune
export const getAllContactsWithCommunes = async (): Promise<ContactWithCommune[]> => {
    try {
        const contacts = await getAllContacts();
        const contactsWithCommunes: ContactWithCommune[] = [];

        for (const contact of contacts) {
            if (contact.ma_xa) {
                const commune = await getCommuneByMaXa(contact.ma_xa);
                contactsWithCommunes.push({
                    ...contact,
                    communeInfo: commune || undefined
                });
            } else {
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

// Thêm dữ liệu mẫu cho Commune
export const addSampleCommune = async (): Promise<void> => {
    const sampleCommune: Omit<Commune, 'id'> = {
        ma_xa: '25054',
        ten_xa: 'Bảo Lâm 1',
        name: 'Công an xã Bảo Lâm 1',
        loai: 'Xã',
        cap: 2,
        ma_tinh: '68',
        ten_tinh: 'Lâm Đồng',
        dan_so: 44151,
        dtich_km2: 204.43,
        matdo_km2: 215.97,
        address: 'đang cập nhật',
        tru_so: 'đang cập nhật',
        sap_nhap: 'Lộc Thắng (thị trấn), Lộc Quảng, Lộc Ngãi'
    };

    try {
        await addCommune(sampleCommune);
        console.log('Sample commune added successfully');
    } catch (error) {
        console.error('Error adding sample commune:', error);
        throw error;
    }
};

// Thêm dữ liệu mẫu Contacts (chỉ chạy 1 lần)
export const addSampleData = async (): Promise<void> => {
    const sampleContacts = [
        {
            name: 'Công an Quận 1',
            phone: '0283823-0026',
            ma_xa: '25054'
        },
        {
            name: 'Công an Quận 3',
            phone: '0283930-3693',
            ma_xa: '25054'
        },
        {
            name: 'Công an Quận 5',
            phone: '0283855-8062',
            ma_xa: '25054'
        },
        {
            name: 'Công an TP.HCM',
            phone: '113',
            ma_xa: '25054'
        },
        {
            name: 'Công an xã Bảo Lâm 1',
            phone: '0123456789',
            ma_xa: '25054' // Liên kết với commune
        }
    ];

    try {
        for (const contact of sampleContacts) {
            await addContact(contact);
        }
        console.log('Sample contacts added successfully');
    } catch (error) {
        console.error('Error adding sample contacts:', error);
        throw error;
    }
};
