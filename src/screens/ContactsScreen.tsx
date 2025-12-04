import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, TextInput, Linking, ImageBackground, ActivityIndicator, Alert } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { getAllContactsWithCommunes, deleteContact } from '../services';
import type { ContactWithCommune } from '../models';

type RootStackParamList = {
    ContactsList: undefined;
    CommuneDetail: { communeInfo: any };
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const ContactsScreen = () => {
    const navigation = useNavigation<NavigationProp>();
    const [expandedId, setExpandedId] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [contacts, setContacts] = useState<ContactWithCommune[]>([]);
    const [loading, setLoading] = useState(true);

    // Load contacts từ Firebase
    useEffect(() => {
        loadContacts();
    }, []);

    const loadContacts = async () => {
        try {
            setLoading(true);
            const data = await getAllContactsWithCommunes();
            setContacts(data);
        } catch (error) {
            console.error('Error loading contacts:', error);
            Alert.alert('Lỗi', 'Không thể tải danh sách liên hệ');
        } finally {
            setLoading(false);
        }
    };

    const handleDeleteContact = async (id: string, fullName: string) => {
        Alert.alert(
            'Xác nhận xóa',
            `Bạn có chắc muốn xóa "${fullName}"?`,
            [
                { text: 'Hủy', style: 'cancel' },
                {
                    text: 'Xóa',
                    style: 'destructive',
                    onPress: async () => {
                        try {
                            await deleteContact(id);
                            loadContacts(); // Refresh danh sách
                            Alert.alert('Thành công', 'Đã xóa liên hệ');
                        } catch (error) {
                            Alert.alert('Lỗi', 'Không thể xóa liên hệ');
                        }
                    }
                }
            ]
        );
    };

    const filteredContacts = contacts.filter((contact) =>
        contact.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (contact.communeInfo?.ten_xa || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
        (contact.communeInfo?.ten_tinh || '').toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (loading) {
        return (
            <View style={[styles.container, styles.centerContent]}>
                <ActivityIndicator size="large" color="#007AFF" />
                <Text style={styles.loadingText}>Đang tải...</Text>
            </View>
        );
    }

    const renderItem = ({ item }: { item: ContactWithCommune }) => {
        const isExpanded = item.id === expandedId;

        const handleCall = (mobile: string | null | undefined) => {
            if (!mobile) return;
            const phoneNumber = mobile.replace(/\./g, '').replace(/\-/g, '').replace(/\s/g, '');
            Linking.openURL(`tel:${phoneNumber}`);
        };

        const handleViewDetail = () => {
            if (item.communeInfo) {
                navigation.navigate('CommuneDetail', { communeInfo: item.communeInfo });
            }
        };

        return (
            <TouchableOpacity
                style={styles.card}
                onPress={() => setExpandedId(isExpanded ? null : item.id || null)}
            >
                <View style={styles.cardHeader}>
                    <View style={styles.nameContainer}>
                        <AntDesign 
                            name={isExpanded ? "down" : "right"} 
                            size={16} 
                            color="#333" 
                            style={styles.icon} 
                        />
                        <View style={styles.textContainer}>
                            <Text style={styles.name}>{item.communeInfo?.name || item.fullName}</Text>
                            {item.communeInfo && (
                                <Text style={styles.addressPreview} numberOfLines={1}>
                                    {item.communeInfo.ten_xa}, {item.communeInfo.ten_tinh}
                                </Text>
                            )}
                        </View>
                    </View>
                    <View style={styles.rightActions}>
                        <TouchableOpacity onPress={handleViewDetail}>
                            <AntDesign name="right-circle" size={20} color="red" />
                        </TouchableOpacity>
                    </View>
                </View>
                
                {isExpanded && (
                    <View style={styles.infoContainer}>
                        {/* Thông tin người đứng đầu và điện thoại */}
                        <View style={styles.chiefContainer}>
                            <View style={styles.chiefInfo}>
                                <Text style={styles.chiefName}>{item.fullName}</Text>
                                {item.mobile && (
                                    <Text style={styles.phoneNumber}>{item.mobile}</Text>
                                )}
                            </View>
                            {item.mobile && (
                                <TouchableOpacity 
                                    onPress={() => handleCall(item.mobile)}
                                    style={styles.phoneIconButton}
                                >
                                    <Feather name="phone" size={24} color="red" style={{ transform: [{ scaleX: -1 }] }} />
                                </TouchableOpacity>
                            )}
                        </View>
                    </View>
                )}
            </TouchableOpacity>
        );
    };

    return (
        <ImageBackground
            source={require('../../assets/images/bg.png')}
            style={styles.container}
            resizeMode="cover"
            imageStyle={{ opacity: 0.2 }}
        >
            <Text style={styles.header}>Danh bạ điện thoại</Text>
            <TextInput
                style={styles.searchBar}
                placeholder="Nhập tên đơn vị, xã, phường"
                value={searchQuery}
                onChangeText={(text) => setSearchQuery(text)}
            />
            <FlatList
                data={filteredContacts}
                keyExtractor={(item) => item.id?.toString() || Math.random().toString()}
                renderItem={renderItem}
                ListEmptyComponent={
                    <View style={styles.emptyContainer}>
                        <Text style={styles.emptyText}>Chưa có liên hệ nào</Text>
                    </View>
                }
            />
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
        padding: 10,
    },
    centerContent: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    loadingText: {
        marginTop: 10,
        fontSize: 16,
        color: '#666',
    },
    header: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    searchBar: {
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 10,
        marginBottom: 10,
        height: 50
    },
    card: {
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        borderRadius: 10,
        padding: 16,
        marginBottom: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    cardHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    nameContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    textContainer: {
        flex: 1,
    },
    rightActions: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    phoneButton: {
        padding: 4,
    },
    icon: {
        marginRight: 8,
    },
    infoContainer: {
        marginTop: 12,
        paddingLeft: 24,
    },
    address: {
        fontSize: 14,
        color: '#666',
        marginBottom: 12,
        lineHeight: 20,
    },
    chiefContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    chiefInfo: {
        flex: 1,
    },
    chiefName: {
        fontSize: 15,
        fontWeight: '600',
        color: '#333',
        marginBottom: 4,
    },
    phoneNumber: {
        fontSize: 14,
        color: '#007AFF',
    },
    phoneIconButton: {
        padding: 8,
        marginLeft: 12,
    },
    name: {
        fontWeight: '600',
        fontSize: 16,
        color: '#333',
    },
    addressPreview: {
        color: '#999',
        fontSize: 13,
        marginTop: 2,
    },
    divider: {
        height: 1,
        backgroundColor: '#e0e0e0',
        marginVertical: 12,
    },
    sectionTitle: {
        fontSize: 15,
        fontWeight: '600',
        color: '#007AFF',
        marginBottom: 8,
    },
    infoRow: {
        flexDirection: 'row',
        marginBottom: 6,
    },
    infoLabel: {
        fontSize: 14,
        color: '#666',
        width: 110,
        fontWeight: '500',
    },
    infoValue: {
        fontSize: 14,
        color: '#333',
        flex: 1,
    },
    deleteButton: {
        backgroundColor: '#ff3b30',
        padding: 10,
        borderRadius: 6,
        alignItems: 'center',
        marginTop: 12,
    },
    deleteButtonText: {
        color: 'white',
        fontWeight: '600',
    },
    emptyContainer: {
        padding: 40,
        alignItems: 'center',
    },
    emptyText: {
        fontSize: 16,
        color: '#999',
    },
});

export default ContactsScreen;
