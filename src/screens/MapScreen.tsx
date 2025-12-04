import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList } from "react-native";
import { useState } from "react";
import { WebView } from "react-native-webview";
import AntDesign from "@expo/vector-icons/AntDesign";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  overlayContainer: {
    position: "absolute",
    width: "100%",
    top: 10,
    paddingHorizontal: 12,
    zIndex: 999,
  },

  dropdownBox: {
    backgroundColor: "#fff",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#d9d9d9",
    padding: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    elevation: 4,
  },

  searchInput: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginTop: 10,
  },

  dropdownList: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    marginTop: 5,
    maxHeight: 350,
  },

  item: {
    padding: 14,
    borderBottomWidth: 1,
    borderColor: "#eee",
  },

  itemText: {
    fontSize: 16,
  },
});

const ALL_COMMUNES = [
  "Xã Bảo Thuận",
  "Xã Lộc Ngãi",
  "Xã Lộc Đức",
  "Xã Đinh Trang Thượng",
  "Xã Lộc An",
  "Xã Mỹ Lâm",
  "Xã Hòa Ninh",
  "Xã Hòa Nam",
  "Xã Tân Nghĩa",
  "Xã Tân Lâm",
  "Xã Liên Đầm",
  "Xã Gia Lâm",
  "Xã Phú Hội",
  "Xã Tân Hội",
  "Xã Tân Hà",
  "Xã Phú Sơn",
  "Xã Lộc Bắc",
  "Xã Lộc Bảo",
  "Xã Lộc Phú",
  "Xã Lộc Tân",
  "Xã Lộc Quảng",
];

const MapScreen = () => {
  const myMapUrl =
    "https://www.google.com/maps/d/u/0/viewer?mid=1ZB99i3agA0Wc0QqlquYLGWbEMfLGUZM&usp=sharing";

  const [open, setOpen] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [selected, setSelected] = useState("Chọn xã/phường");

  const filteredList = ALL_COMMUNES.filter((x) =>
    x.toLowerCase().includes(keyword.toLowerCase())
  ).slice(0, 10); // LIMIT 10

  // Chặn mở trang Google
  const handleShouldStartLoadWithRequest = (request: any) => {
    if (
      request.url.includes("google.com/maps/d") &&
      request.url.includes("1ZB99i3agA0Wc0QqlquYLGWbEMfLGUZM")
    ) {
      return true;
    }
    return false;
  };

  // CSS inject ẩn Google elements
  const injectedJavaScript = ` ... giữ nguyên như code bạn gửi ... `;

  return (
    <View style={styles.container}>
      {/* 🔍 Overlay Search */}
      <View style={styles.overlayContainer}>
        
        {/* Hộp chọn xã */}
        <TouchableOpacity
          style={styles.dropdownBox}
          onPress={() => setOpen(!open)}
        >
          <Text style={{ fontSize: 16 }}>{selected}</Text>
          <AntDesign name={open ? "up" : "down"} size={18} />
        </TouchableOpacity>

        {/* Ô tìm kiếm */}
        {open && (
          <>
            <TextInput
              placeholder="Tìm kiếm xã/phường..."
              style={styles.searchInput}
              value={keyword}
              onChangeText={setKeyword}
            />

            {/* Danh sách */}
            <View style={styles.dropdownList}>
              <FlatList
                data={filteredList}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={styles.item}
                    onPress={() => {
                      setSelected(item);
                      setOpen(false);
                    }}
                  >
                    <Text style={styles.itemText}>{item}</Text>
                  </TouchableOpacity>
                )}
              />
            </View>
          </>
        )}
      </View>

      {/* WebView map */}
      <WebView
        source={{ uri: myMapUrl }}
        style={{ flex: 1 }}
        injectedJavaScript={injectedJavaScript}
        javaScriptEnabled={true}
        onShouldStartLoadWithRequest={handleShouldStartLoadWithRequest}
        originWhitelist={["https://www.google.com"]}
        allowsBackForwardNavigationGestures={false}
      />
    </View>
  );
};

export default MapScreen;