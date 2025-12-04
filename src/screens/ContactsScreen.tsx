import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, TextInput, Linking, ImageBackground } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';

interface PoliceStation {
    id: number;
    name: string;
    address: string;
    chief?: string;
    phone?: string;
}

const ContactsScreen = () => {
    const [expandedId, setExpandedId] = useState<number | null>(null);
    const [searchQuery, setSearchQuery] = useState<string>('');

    const policeStations: PoliceStation[] = [
        { id: 1, name: "Số điện thoại khẩn cấp", address: "" },
        { id: 2, name: "Phòng Cảnh sát giao thông", address: "" },

        { id: 31, name: "Công an phường 1 Bảo Lộc", address: "47 Trần Bình Trọng, Phường 5, Đà Lạt, Lâm Đồng", chief: "Nguyễn Văn A", phone: "0123456789" },
        { id: 32, name: "Công an phường 2 Bảo Lộc", address: "47 Trần Bình Trọng, Phường 5, Đà Lạt, Lâm Đồng", chief: "Nguyễn Văn A", phone: "0123456789" },
        { id: 33, name: "Công an phường 3 Bảo Lộc", address: "47 Trần Bình Trọng, Phường 5, Đà Lạt, Lâm Đồng", chief: "Nguyễn Văn A", phone: "0123456789" },
        { id: 34, name: "Công an phường B'Lao", address: "47 Trần Bình Trọng, Phường 5, Đà Lạt, Lâm Đồng", chief: "Nguyễn Văn A", phone: "0123456789" },
        { id: 35, name: "Công an phường Bắc Gia Nghĩa", address: "47 Trần Bình Trọng, Phường 5, Đà Lạt, Lâm Đồng", chief: "Nguyễn Văn A", phone: "0123456789" },
        { id: 36, name: "Công an phường Bình Thuận", address: "47 Trần Bình Trọng, Phường 5, Đà Lạt, Lâm Đồng", chief: "Nguyễn Văn A", phone: "0123456789" },
        { id: 37, name: "Công an phường Cam Ly - Đà Lạt", address: "47 Trần Bình Trọng, Phường 5, Đà Lạt, Lâm Đồng", chief: "Nguyễn Văn A", phone: "0123456789" },
        { id: 38, name: "Công an phường Hàm Thắng", address: "47 Trần Bình Trọng, Phường 5, Đà Lạt, Lâm Đồng", chief: "Nguyễn Văn A", phone: "0123456789" },
        { id: 39, name: "Công an phường La Gi", address: "47 Trần Bình Trọng, Phường 5, Đà Lạt, Lâm Đồng", chief: "Nguyễn Văn A", phone: "0123456789" },
        { id: 40, name: "Công an phường Lâm Viên - Đà Lạt", address: "47 Trần Bình Trọng, Phường 5, Đà Lạt, Lâm Đồng", chief: "Nguyễn Văn A", phone: "0123456789" },
        { id: 41, name: "Công an phường LangBiang - Đà Lạt", address: "47 Trần Bình Trọng, Phường 5, Đà Lạt, Lâm Đồng", chief: "Nguyễn Văn A", phone: "0123456789" },
        { id: 42, name: "Công an phường Mũi Né", address: "47 Trần Bình Trọng, Phường 5, Đà Lạt, Lâm Đồng", chief: "Nguyễn Văn A", phone: "0123456789" },
        { id: 43, name: "Công an phường Nam Gia Nghĩa", address: "47 Trần Bình Trọng, Phường 5, Đà Lạt, Lâm Đồng", chief: "Nguyễn Văn A", phone: "0123456789" },
        { id: 44, name: "Công an phường Phan Thiết", address: "47 Trần Bình Trọng, Phường 5, Đà Lạt, Lâm Đồng", chief: "Nguyễn Văn A", phone: "0123456789" },
        { id: 45, name: "Công an phường Phú Thủy", address: "47 Trần Bình Trọng, Phường 5, Đà Lạt, Lâm Đồng", chief: "Nguyễn Văn A", phone: "0123456789" },
        { id: 46, name: "Công an phường Phước Hội", address: "47 Trần Bình Trọng, Phường 5, Đà Lạt, Lâm Đồng", chief: "Nguyễn Văn A", phone: "0123456789" },
        { id: 47, name: "Công an phường Tiến Thành", address: "47 Trần Bình Trọng, Phường 5, Đà Lạt, Lâm Đồng", chief: "Nguyễn Văn A", phone: "0123456789" },
        { id: 48, name: "Công an phường Xuân Hương - Đà Lạt", address: "47 Trần Bình Trọng, Phường 5, Đà Lạt, Lâm Đồng", chief: "Nguyễn Văn A", phone: "0123456789" },
        { id: 49, name: "Công an phường Xuân Trường - Đà Lạt", address: "47 Trần Bình Trọng, Phường 5, Đà Lạt, Lâm Đồng", chief: "Nguyễn Văn A", phone: "0123456789" },
        { id: 50, name: "Công an phường Đông Gia Nghĩa", address: "47 Trần Bình Trọng, Phường 5, Đà Lạt, Lâm Đồng", chief: "Nguyễn Văn A", phone: "0123456789" },

        // ---- DANH SÁCH XÃ ----
        { id: 51, name: "Công an xã Bắc Bình", address: "" },
        { id: 52, name: "Công an xã Bắc Ruộng", address: "" },
        { id: 53, name: "Công an xã Bảo Lâm 1", address: "" },
        { id: 54, name: "Công an xã Bảo Lâm 2", address: "" },
        { id: 55, name: "Công an xã Bảo Lâm 3", address: "" },
        { id: 56, name: "Công an xã Bảo Lâm 4", address: "" },
        { id: 57, name: "Công an xã Bảo Lâm 5", address: "" },
        { id: 58, name: "Công an xã Bảo Thuận", address: "" },
        { id: 59, name: "Công an xã Cát Tiên", address: "" },
        { id: 60, name: "Công an xã Cát Tiên 2", address: "" },
        { id: 61, name: "Công an xã Cát Tiên 3", address: "" },
        { id: 62, name: "Công an xã Cư Jút", address: "" },
        { id: 63, name: "Công an xã D'Ran", address: "" },
        { id: 64, name: "Công an xã Di Linh", address: "" },
        { id: 65, name: "Công an xã Gia Hiệp", address: "" },
        { id: 66, name: "Công an xã Hải Ninh", address: "" },
        { id: 67, name: "Công an xã Hàm Kiệm", address: "" },
        { id: 68, name: "Công an xã Hàm Liêm", address: "" },
        { id: 69, name: "Công an xã Hàm Tân", address: "" },
        { id: 70, name: "Công an xã Hàm Thạnh", address: "" },
        { id: 71, name: "Công an xã Hàm Thuận", address: "" },
        { id: 72, name: "Công an xã Hàm Thuận Bắc", address: "" },
        { id: 73, name: "Công an xã Hàm Thuận Nam", address: "" },
        { id: 74, name: "Công an xã Hiệp Thạnh", address: "" },
        { id: 75, name: "Công an xã Hòa Bắc", address: "" },
        { id: 76, name: "Công an xã Hòa Ninh", address: "" },
        { id: 77, name: "Công an xã Hòa Thắng", address: "" },
        { id: 78, name: "Công an xã Hoài Đức", address: "" },
        { id: 79, name: "Công an xã Hồng Sơn", address: "" },
        { id: 80, name: "Công an xã Hồng Thái", address: "" },
        { id: 81, name: "Công an xã Ka Đô", address: "" },
        { id: 82, name: "Công an xã Kiến Đức", address: "" },
        { id: 83, name: "Công an xã Krông Nô", address: "" },
        { id: 84, name: "Công an xã La Dạ", address: "" },
        { id: 85, name: "Công an xã Lạc Dương", address: "" },
        { id: 86, name: "Công an xã Liên Hương", address: "" },
        { id: 87, name: "Công an xã Lương Sơn", address: "" },
        { id: 88, name: "Công an xã Nam Ban Lâm Hà", address: "" },
        { id: 89, name: "Công an xã Nam Dong", address: "" },
        { id: 90, name: "Công an xã Nam Hà Lâm Hà", address: "" },
        { id: 91, name: "Công an xã Nâm Nung", address: "" },
        { id: 92, name: "Công an xã Nam Thành", address: "" },
        { id: 93, name: "Công an xã Nam Đà", address: "" },
        { id: 94, name: "Công an xã Nghị Đức", address: "" },
        { id: 95, name: "Công an xã Nhân Cơ", address: "" },
        { id: 96, name: "Công an xã Ninh Gia", address: "" },
        { id: 97, name: "Công an xã Phan Rí Cửa", address: "" },
        { id: 98, name: "Công an xã Phan Sơn", address: "" },
        { id: 99, name: "Công an xã Phú Sơn Lâm Hà", address: "" },
        { id: 100, name: "Công an xã Phúc Thọ Lâm Hà", address: "" },

        { id: 101, name: "Công an xã Quảng Hòa", address: "" },
        { id: 102, name: "Công an xã Quảng Khê", address: "" },
        { id: 103, name: "Công an xã Quảng Lập", address: "" },
        { id: 104, name: "Công an xã Quảng Phú", address: "" },
        { id: 105, name: "Công an xã Quảng Sơn", address: "" },
        { id: 106, name: "Công an xã Quảng Tân", address: "" },
        { id: 107, name: "Công an xã Quảng Tín", address: "" },
        { id: 108, name: "Công an xã Quảng Trực", address: "" },
        { id: 109, name: "Công an xã Sơn Mỹ", address: "" },
        { id: 110, name: "Công an xã Sơn Điền", address: "" },
        { id: 111, name: "Công an xã Sông Lũy", address: "" },
        { id: 112, name: "Công an xã Suối Kiết", address: "" },
        { id: 113, name: "Công an xã Tà Hine", address: "" },
        { id: 114, name: "Công an xã Tà Năng", address: "" },
        { id: 115, name: "Công an xã Tà Đùng", address: "" },
        { id: 116, name: "Công an xã Tân Hà Lâm Hà", address: "" },
        { id: 117, name: "Công an xã Tân Hải", address: "" },
        { id: 118, name: "Công an xã Tân Hội", address: "" },
        { id: 119, name: "Công an xã Tân Lập", address: "" },
        { id: 120, name: "Công an xã Tân Minh", address: "" },
        { id: 121, name: "Công an xã Tân Thành", address: "" },
        { id: 122, name: "Công an xã Tánh Linh", address: "" },
        { id: 123, name: "Công an xã Thuận An", address: "" },
        { id: 124, name: "Công an xã Thuận Hạnh", address: "" },
        { id: 125, name: "Công an xã Trà Tân", address: "" },
        { id: 126, name: "Công an xã Trường Xuân", address: "" },
        { id: 127, name: "Công an xã Tuy Phong", address: "" },
        { id: 128, name: "Công an xã Tuy Đức", address: "" },
        { id: 129, name: "Công an xã Tuyên Quang", address: "" },
        { id: 130, name: "Công an xã Vĩnh Hảo", address: "" },

        { id: 131, name: "Công an xã Đạ Huoai", address: "" },
        { id: 132, name: "Công an xã Đạ Huoai 2", address: "" },
        { id: 133, name: "Công an xã Đạ Huoai 3", address: "" },
        { id: 134, name: "Công an xã Đạ Tẻh", address: "" },
        { id: 135, name: "Công an xã Đạ Tẻh 2", address: "" },
        { id: 136, name: "Công an xã Đạ Tẻh 3", address: "" },
        { id: 137, name: "Công an xã Đắk Mil", address: "" },
        { id: 138, name: "Công an xã Đắk Sắk", address: "" },
        { id: 139, name: "Công an xã Đắk Song", address: "" },
        { id: 140, name: "Công an xã Đắk Wil", address: "" },

        { id: 141, name: "Công an xã Đam Rông 1", address: "" },
        { id: 142, name: "Công an xã Đam Rông 2", address: "" },
        { id: 143, name: "Công an xã Đam Rông 3", address: "" },
        { id: 144, name: "Công an xã Đam Rông 4", address: "" },

        { id: 145, name: "Công an xã Đinh Trang Thượng", address: "" },
        { id: 146, name: "Công an xã Đinh Văn Lâm Hà", address: "" },
        { id: 147, name: "Công an xã Đơn Dương", address: "" },
        { id: 148, name: "Công an xã Đông Giang", address: "" },
        { id: 149, name: "Công an xã Đồng Kho", address: "" },
        { id: 150, name: "Công an xã Đức An", address: "" },
        { id: 151, name: "Công an xã Đức Lập", address: "" },
        { id: 152, name: "Công an xã Đức Linh", address: "" },
        { id: 153, name: "Công an xã Đức Trọng", address: "" },

        { id: 154, name: "Đặc khu Phú Quý", address: "" },
        { id: 155, name: "Đồn Công an KCN Nhân Cơ", address: "" },
        { id: 156, name: "Đồn Công an KCN Tân Rai", address: "" },
    ];

    const filteredStations = policeStations.filter((station) =>
        station.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const renderItem = ({ item }: { item: PoliceStation }) => {
        const isExpanded = item.id === expandedId;

        const handleCall = (phone: string) => {
            const phoneNumber = phone.replace(/\./g, '');
            Linking.openURL(`tel:${phoneNumber}`);
        };

        return (
            <TouchableOpacity
                style={styles.card}
                onPress={() => setExpandedId(isExpanded ? null : item.id)}
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
                            <Text style={styles.name}>{item.name}</Text>
                            {item.address && (
                                <Text style={styles.addressPreview} numberOfLines={1}>
                                    {item.address}
                                </Text>
                            )}
                        </View>
                    </View>
                    <AntDesign name="right" size={20} color="red" />
                </View>
                {isExpanded && item.address && (
                    <View style={styles.infoContainer}>
                        {item.chief && (
                            <View style={styles.chiefContainer}>
                                <View style={styles.chiefRow}>
                                    <View style={styles.chiefTextContainer}>
                                        <Text style={styles.chief}>{item.chief}</Text>
                                        <Text style={styles.phone}>{item.phone}</Text>
                                    </View>
                                    {item.phone && (
                                        <TouchableOpacity 
                                            onPress={() => handleCall(item.phone!)}
                                            style={styles.phoneButtonExpanded}
                                        >
                                            <Feather name="phone" size={20} color="red" style={{ transform: [{ scaleX: -1 }] }} />
                                        </TouchableOpacity>
                                    )}
                                </View>
                            </View>
                        )}
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
                placeholder="Nhập tên đơn vị..."
                value={searchQuery}
                onChangeText={(text) => setSearchQuery(text)}
            />
            <FlatList
                data={filteredStations}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItem}
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
    header: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    searchBar: {
        backgroundColor: '#f0f0f0',
        borderRadius: 8,
        padding: 10,
        marginBottom: 10,
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
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        marginRight: 8,
    },
    infoContainer: {
        marginTop: 10,
        paddingLeft: 24,
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
    address: {
        color: '#666',
        marginBottom: 4,
        fontSize: 14,
    },
    chiefContainer: {
        marginTop: 4,
    },
    chiefRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    chiefTextContainer: {
        flex: 1,
    },
    phoneButtonExpanded: {
        padding: 4,
        marginLeft: 8,
    },
    chief: {
        fontWeight: 'bold',
        fontSize: 14,
    },
    phone: {
        color: '#007AFF',
        fontSize: 14,
    },
});

export default ContactsScreen;