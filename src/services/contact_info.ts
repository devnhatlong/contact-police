export interface contactInfo {
    unitCode: string;
    fullName: string;
    mobile?: string | null;
}

export const contactInfo: contactInfo[] = [
    { unitCode: "PV01", fullName: "Đỗ Minh Đức - Trưởng phòng", mobile: "0908840666" },
    { unitCode: "PV06", fullName: "Đặng Ái Ly - Trưởng phòng", mobile: "0993862888" },
    { unitCode: "PX01", fullName: "Nguyễn Thanh Nam - Trưởng phòng", mobile: "0903312356" },
    { unitCode: "PX03", fullName: "Trần Quang Trung - Trưởng phòng", mobile: "0933944333" },
    { unitCode: "PX05", fullName: "Phạm Quang Lập - Trưởng phòng", mobile: "0993481717" },
    { unitCode: "PX06", fullName: "Nguyễn Quang Hương - Trưởng phòng", mobile: "0993867786" },
    { unitCode: "PH10", fullName: "Nguyễn Quốc Trường - Trưởng phòng", mobile: "0901337777" },

    { unitCode: "PA01", fullName: "Phạm Thanh Bình - Trưởng phòng", mobile: "0905022356" },
    { unitCode: "PA02", fullName: "Huỳnh Hữu Kim - Trưởng phòng", mobile: "0799776969" },
    { unitCode: "PA03", fullName: "Trần Văn Hiệp - Trưởng phòng", mobile: "0593345567" },
    { unitCode: "PA04", fullName: "Nguyễn Minh Tuyên - Trưởng phòng", mobile: "0993863333" },
    { unitCode: "PA05", fullName: "Vũ Hoàng Anh - Trưởng phòng", mobile: "0775765577" },
    { unitCode: "PA06", fullName: "Nguyễn Mạnh Cường - Trưởng phòng", mobile: "0769506879" },
    { unitCode: "PA08", fullName: "Mai Lâm - Trưởng phòng", mobile: "0786170888" },
    { unitCode: "PA09", fullName: "Ung Chiêu Thành - Trưởng phòng", mobile: "0993861888" },

    { unitCode: "PC01", fullName: "Hà Duy Tân - Trưởng phòng", mobile: "0901112890" },
    { unitCode: "PC02", fullName: "Trần Văn Trà - Trưởng phòng", mobile: "0762117777" },
    { unitCode: "PC03", fullName: "Lê Anh Trọng", mobile: "0798703879" },
    { unitCode: "PC04", fullName: "Hoàng Văn Thanh - Trưởng phòng", mobile: "0896363968" },
    { unitCode: "PC06", fullName: "Nguyễn Đăng Khoa - Trưởng phòng", mobile: "0901267676" },
    { unitCode: "PC07", fullName: "Nguyễn Tiến Hồng", mobile: "0785686821" },
    { unitCode: "PC08", fullName: "Nguyễn Văn Tiếp - Trưởng phòng", mobile: "0772208686" },
    { unitCode: "PC09", fullName: "Lê Thanh Thy - Trưởng phòng", mobile: "0797938839" },
    { unitCode: "PC10", fullName: "Đình Thanh Tùng - Trưởng phòng", mobile: "0905349799" },

    { unitCode: "Trại Giam số 01", fullName: "Nguyễn Song Hào - Trưởng phòng", mobile: "0934081975" },
    { unitCode: "Trại Giam số 02", fullName: "Dương Văn Mạnh - Trưởng phòng", mobile: "0993908686" },
    { unitCode: "Trại Giam số 03", fullName: "Phạm Văn Toán - Trưởng phòng", mobile: "0993865686" },
    { unitCode: "PK02", fullName: "Cù Xuân Dũng - Trưởng phòng", mobile: "0931882255" },

    { unitCode: "Công an phường Xuân Hương - Đà Lạt", fullName: "Hồ Hải Dương - Trưởng Công an phường", mobile: "0937399779" },
    { unitCode: "Công an phường Cam Ly - Đà Lạt", fullName: "Đàm Văn Khánh - Trưởng Công an phường", mobile: "0937341011" },
    { unitCode: "Công an phường Lâm Viên - Đà Lạt", fullName: "Lê Ngô Hồng Vũ - Trưởng Công an phường", mobile: "0902646555" },
    { unitCode: "Công an phường Xuân Trường - Đà Lạt", fullName: "Phạm Đăng Tuấn - Trưởng Công an phường", mobile: "0799725533" },
    { unitCode: "Công an phường Lang Biang - Đà Lạt", fullName: "Nguyễn Xuân Giang - Trưởng Công an phường", mobile: "0798407799" },
    { unitCode: "Công an phường 1 Bảo Lộc", fullName: "Phạm Thành Giang - Trưởng Công an phường", mobile: "0908334383" },
    { unitCode: "Công an phường 2 Bảo Lộc", fullName: "Lê Văn Nam - Trưởng Công an phường", mobile: "0798175666" },
    { unitCode: "Công an phường 3 Bảo Lộc", fullName: "Lưu Tiến Thành - Trưởng Công an phường", mobile: "0943593456" },
    { unitCode: "Công an phường B'lao", fullName: "Đinh Sỹ Đức - Trưởng Công an phường", mobile: "0908034564" },

    { unitCode: "Công an xã Bảo Lâm 1", fullName: "Nguyễn Văn Nhật - Trưởng Công an xã", mobile: "078777719" },
    { unitCode: "Công an xã Bảo Lâm 2", fullName: "Phạm Đình Long - Trưởng Công an xã", mobile: "0797492678" },
    { unitCode: "Công an xã Bảo Lâm 3", fullName: "Tạ Thanh Bình - Trưởng Công an xã", mobile: "0793868585" },
    { unitCode: "Công an xã Bảo Lâm 4", fullName: "Nguyễn Đình Hải - Trưởng Công an xã", mobile: "0784494678" },
    { unitCode: "Công an xã Bảo Lâm 5", fullName: "Nguyễn Sỹ Tý - Trưởng Công an xã", mobile: "0933489548" },

    { unitCode: "Công an xã Di Linh", fullName: "Lương Anh - Trưởng Công an xã", mobile: "0908165679" },
    { unitCode: "Công an xã Hòa Ninh", fullName: "Nguyễn Trọng Bình - Trưởng Công an xã", mobile: "0794888813" },
    { unitCode: "Công an xã Hòa Bắc", fullName: "Đoàn Xuân Thành - Trưởng Công an xã", mobile: "0792251225" },

    { unitCode: "Công an xã Đinh Trang Thượng", fullName: "Đinh Ngọc Tài - Trưởng Công an xã", mobile: "0909594266" },
    { unitCode: "Công an xã Bảo Thuận", fullName: "Nguyễn Chí Thanh - Trưởng Công an xã", mobile: "0793737576" },
    { unitCode: "Công an xã Sơn Điền", fullName: "Lê Công Ánh - Trưởng Công an xã", mobile: "0906680686" },
    { unitCode: "Công an xã Gia Hiệp", fullName: "Nguyễn Đức Lợi - Trưởng Công an xã", mobile: "0799734168" },

    { unitCode: "Công an xã Đạ Huoai", fullName: "Trần Văn Hùng - Trưởng Công an xã", mobile: "0783666737" },
    { unitCode: "Công an xã Đạ Huoai 2", fullName: "Trần Tiến Cảnh - Trưởng Công an xã", mobile: "0909992441" },
    { unitCode: "Công an xã Đạ Huoai 3", fullName: "Nguyễn Văn Bản - Trưởng Công an xã", mobile: "0792898818" },

    { unitCode: "Công an xã Đạ Tẻh 1", fullName: "Nguyễn Đức Thuận - Trưởng Công an xã", mobile: "0933397179" },
    { unitCode: "Công an xã Đạ Tẻh 2", fullName: "Nguyễn Tiến Công - Trưởng Công an xã", mobile: "0792045567" },
    { unitCode: "Công an xã Đạ Tẻh 3", fullName: "Hồ Quốc Thanh - Trưởng Công an xã", mobile: "0793787378" },

    { unitCode: "Công an xã Cát Tiên", fullName: "Lê Văn Việt - Trưởng Công an xã", mobile: "0784477768" },
    { unitCode: "Công an xã Cát Tiên 2", fullName: "Nguyễn Văn Tỉnh - Trưởng Công an xã", mobile: "0937614615" },
    { unitCode: "Công an xã Cát Tiên 3", fullName: "Hoàng Trung Kiên - Trưởng Công an xã", mobile: "0785252789" },

    { unitCode: "Công an xã Đam Rông 1", fullName: "Trần Văn Hậu - Trưởng Công an xã", mobile: "0937667168" },
    { unitCode: "Công an xã Đam Rông 2", fullName: "Bùi Văn Khanh - Trưởng Công an xã", mobile: "0785505323" },
    { unitCode: "Công an xã Đam Rông 3", fullName: "Lê Xuân Thiện - Trưởng Công an xã", mobile: "0794476555" },
    { unitCode: "Công an xã Đam Rông 4", fullName: "Trần Quang Hữu - Trưởng Công an xã", mobile: "0937206420" },

    { unitCode: "Công an xã Hiệp Thạnh", fullName: "Phan Hữu Sơn - Trưởng Công an xã", mobile: "0965464748" },
    { unitCode: "Công an xã Đức Trọng", fullName: "Hà Xuân Tùng - Trưởng Công an xã", mobile: "0784146865" },
    { unitCode: "Công an xã Tân Hội", fullName: "Nguyễn Chí Linh - Trưởng Công an xã", mobile: "0933348489" },

    { unitCode: "Công an xã Ninh Gia", fullName: "Hoàng Văn Phước - Trưởng Công an xã", mobile: "0937377829" },
    { unitCode: "Công an xã Tà Hine", fullName: "Nguyễn Hoàng Giang - Trưởng Công an xã", mobile: "0786326282" },
    { unitCode: "Công an xã Tà Năng", fullName: "Nguyễn Duy Đức - Trưởng Công an xã", mobile: "0797609567" },

    { unitCode: "Công an xã Đơn Dương", fullName: "Phạm Minh Cường - Trưởng Công an xã", mobile: "0798631113" },
    { unitCode: "Công an xã Ka Đô", fullName: "Phan Hồng Nguyên - Trưởng Công an xã", mobile: "0785249789" },
    { unitCode: "Công an xã Quảng Lập", fullName: "Chu Anh Quang - Trưởng Công an xã", mobile: "0934396750" },
    { unitCode: "Công an xã D'ran", fullName: "Lê Duy Quang - Trưởng Công an xã", mobile: "0909922592" },
    { unitCode: "Công an xã Lạc Dương", fullName: "Bùi Quốc Huy - Trưởng Công an xã", mobile: "0931626789" },

    { unitCode: "Công an xã Đinh Văn Lâm Hà", fullName: "Nguyễn Thế Anh - Trưởng Công an xã", mobile: "0908347374" },
    { unitCode: "Công an xã Phú Sơn Lâm Hà", fullName: "Nguyễn Hữu Hoàng - Trưởng Công an xã", mobile: "0784616030" },
    { unitCode: "Công an xã Nam Hà Lâm Hà", fullName: "Võ Thái Thuận - Trưởng Công an xã", mobile: "0792160606" },
    { unitCode: "Công an xã Nam Ban Lâm Hà", fullName: "Trần Kim Thanh - Trưởng Công an xã", mobile: "0797033879" },
    { unitCode: "Công an xã Tân Hà Lâm Hà", fullName: "Nguyễn Đức Tiệp - Trưởng Công an xã", mobile: "0777081184" },
    { unitCode: "Công an xã Phúc Thọ Lâm Hà", fullName: "Phạm Hùng - Trưởng Công an xã", mobile: "0795234555" },

    { unitCode: "Công an xã Vĩnh Hảo", fullName: "Hồ Thái Sơn - Trưởng Công an xã", mobile: "0798187778" },
    { unitCode: "Công an xã Liên Hương", fullName: "Bá Xuân Nên - Trưởng Công an xã", mobile: "0909386424" },
    { unitCode: "Công an xã Tuy Phong", fullName: "Nguyễn Đình Phước - Trưởng Công an xã", mobile: "0933707876" },
    { unitCode: "Công an xã Phan Rí Cửa", fullName: "Võ Anh Tuấn - Trưởng Công an xã", mobile: "0792202526" },
    { unitCode: "Công an xã Bắc Bình", fullName: "Nguyễn Chánh Tín - Trưởng Công an xã", mobile: "0935571113" },
    { unitCode: "Công an xã Hồng Thái", fullName: "Nguyễn Thế Vinh - Trưởng Công an xã", mobile: "0783404868" },
    { unitCode: "Công an xã Hải Ninh", fullName: "Nguyễn Đức Thuận - Trưởng Công an xã", mobile: "0908216234" },

    { unitCode: "Công an xã Phan Sơn", fullName: "K'Sáng - Trưởng Công an xã", mobile: "0931971992" },
    { unitCode: "Công an xã Sông Lũy", fullName: "Nguyễn Tiến Doanh - Trưởng Công an xã", mobile: "0794878777" },
    { unitCode: "Công an xã Lương Sơn", fullName: "Nguyễn Đệ - Trưởng Công an xã", mobile: "0937173799" },
    { unitCode: "Công an xã Hòa Thắng", fullName: "Trần Trung Hiếu - Trưởng Công an xã", mobile: "0797614456" },
    { unitCode: "Công an xã Đông Giang", fullName: "Lê Thanh Tùng - Trưởng Công an xã", mobile: "0909028079" },
    { unitCode: "Công an xã La Dạ", fullName: "Hồ Thắng Lãm - Trưởng Công an xã", mobile: "0937571975" },

    { unitCode: "Công an xã Hàm Thuận Bắc", fullName: "Chu Hồng Trường - Trưởng Công an xã", mobile: "0993861272" },
    { unitCode: "Công an xã Hàm Thuận", fullName: "Lê Ngọc Mến - Trưởng Công an xã", mobile: "0908731718" },
    { unitCode: "Công an xã Hồng Sơn", fullName: "Hà Huy Thành - Trưởng Công an xã", mobile: "0933632707" },
    { unitCode: "Công an xã Hàm Liêm", fullName: "Đặng Quốc Phát - Trưởng Công an xã", mobile: "0931294949" },

    { unitCode: "Công an phường Hàm Thắng", fullName: "Nguyễn Đức - Trưởng Công an phường", mobile: "0784020279" },
    { unitCode: "Công an phường Bình Thuận", fullName: "Nguyễn Ngọc Thanh - Trưởng Công an phường", mobile: "0909494995" },
    { unitCode: "Công an phường Mũi Né", fullName: "Lê Minh Hoàng - Trưởng Công an phường", mobile: "0799446767" },
    { unitCode: "Công an phường Phú Thủy", fullName: "Bùi Quốc Nam - Trưởng Công an phường", mobile: "0937099336" },
    { unitCode: "Công an phường Phan Thiết", fullName: "Nguyễn Ngọc Sáu - Trưởng Công an phường", mobile: "0933600666" },
    { unitCode: "Công an phường Tiến Thành", fullName: "Phan Văn Hóa - Trưởng Công an phường", mobile: "0993864422" },

    { unitCode: "Công an xã Tuyên Quang", fullName: "Ngô Khắc Minh Vũ - Trưởng Công an xã", mobile: "0931280379" },
    { unitCode: "Công an xã Hàm Thạnh", fullName: "Nguyễn Lê Anh Phương - Trưởng Công an xã", mobile: "0933639091" },
    { unitCode: "Công an xã Hàm Kiệm", fullName: "Tô Đức Nghĩa - Trưởng Công an xã", mobile: "0993863553" },
    { unitCode: "Công an xã Tân Thành", fullName: "Hà Văn Hiền - Trưởng Công an xã", mobile: "0993864686" },
    { unitCode: "Công an xã Hàm Thuận Nam", fullName: "Nguyễn Văn Tới - Trưởng Công an xã", mobile: "0993863399" },

    { unitCode: "Công an xã Tân Lập", fullName: "Trần Thanh Trúc - Trưởng Công an xã", mobile: "0993867113" },
    { unitCode: "Công an xã Tân Minh", fullName: "Nguyễn Ngọc Hải - Trưởng Công an xã", mobile: "0786040709" },
    { unitCode: "Công an xã Hàm Tân", fullName: "Hà Xuân Hoan - Trưởng Công an xã", mobile: "0993864685" },
    { unitCode: "Công an xã Sơn Mỹ", fullName: "Nguyễn Đông - Trưởng Công an xã", mobile: "0906675608" },

    { unitCode: "Công an phường La Gi", fullName: "Phan Hồ Bắc - Trưởng Công an phường", mobile: "0937503777" },
    { unitCode: "Công an phường Phước Hội", fullName: "Trịnh Văn Tú - Trưởng Công an phường", mobile: "0993865005" },
    { unitCode: "Công an phường Tân Hải", fullName: "Nguyễn Hoàng Hải - Trưởng Công an phường", mobile: "0779507508" },

    { unitCode: "Công an xã Nghị Đức", fullName: "Trần Tuấn Duy - Trưởng Công an xã", mobile: "0993863507" },
    { unitCode: "Công an xã Bắc Ruộng", fullName: "Nguyễn Hữu Phúc - Trưởng Công an xã", mobile: "0993863038" },
    { unitCode: "Công an xã Đồng Kho", fullName: "Nguyễn Văn Sang - Trưởng Công an xã", mobile: "0785434858" },
    { unitCode: "Công an xã Tánh Linh", fullName: "Lê Công Hòa - Trưởng Công an xã", mobile: "0797826677" },
    { unitCode: "Công an xã Suối Khiết", fullName: "Nguyễn Danh Tuyên - Trưởng Công an xã", mobile: "0784689799" },
    { unitCode: "Công an xã Nam Thành", fullName: "Lường Minh Long - Trưởng Công an xã", mobile: "0799912020" },
    { unitCode: "Công an xã Đức Linh", fullName: "Trịn Mai Thanh - Trưởng Công an xã", mobile: "0797581984" },
    { unitCode: "Công an xã Hoài Đức", fullName: "Trịnh Huy Nam - Trưởng Công an xã", mobile: "0797255567" },
    { unitCode: "Công an xã Trà Tân", fullName: "Nguyễn Ngọc Việt - Trưởng Công an xã", mobile: "0797965886" },

    { unitCode: "Đặc Khu Phú Quý", fullName: "Nguyễn Phúc Thùy - Trưởng Công an Đặc Khu Phú Quý", mobile: "0993988833" },

    { unitCode: "Công an phường Bắc Gia Nghĩa", fullName: "Lương Ngọc Hiếu - Trưởng Công an phường", mobile: "0706117007" },
    { unitCode: "Công an phường Nam Gia Nghĩa", fullName: "Nguyễn Mạnh Hùng - Trưởng Công an phường", mobile: "0901152345" },
    { unitCode: "Công an phường Đông Gia Nghĩa", fullName: "Bùi Trung Hiếu - Trưởng Công an phường", mobile: "0905585836" },

    { unitCode: "Công an xã Quảng Khê", fullName: "Nguyễn Thế Anh - Trưởng Công an xã", mobile: "0905199977" },
    { unitCode: "Công an xã Tà Đùng", fullName: "Nguyễn Thanh Hải - Trưởng Công an xã", mobile: "0906443119" },
    { unitCode: "Công an xã Quảng Hòa", fullName: "Nguyễn Hồng Nguyên - Trưởng Công an xã", mobile: "0932687687" },
    { unitCode: "Công an xã Quảng Sơn", fullName: "Trần Anh Quốc - Trưởng Công an xã", mobile: "0782657579" },
    { unitCode: "Công an xã Đức Lập", fullName: "Trịnh Ngọc Dũng - Trưởng Công an xã", mobile: "0935817979" },
    { unitCode: "Công an xã Thuận An", fullName: "Nguyễn Cao Cường - Trưởng Công an xã", mobile: "0931933838" },

    { unitCode: "Công an xã Đắk Mil", fullName: "Triệu Nguyễn Dũng - Trưởng Công an xã", mobile: "0799334747" },
    { unitCode: "Công an xã Đắk Sắk", fullName: "Nguyễn Hồng Tráng - Trưởng Công an xã", mobile: "0905001088" },
    { unitCode: "Công an xã Nâm Nung", fullName: "Lâm Văn Thôn - Trưởng Công an xã", mobile: "0905199915" },
    { unitCode: "Công an xã Quảng Phú", fullName: "Trần Thanh Tuấn - Trưởng Công an xã", mobile: "0772448989" },
    { unitCode: "Công an xã Kiến Đức", fullName: "Nguyễn Trường Khanh - Trưởng Công an xã", mobile: "0794513456" },
    { unitCode: "Công an xã Nhân Cơ", fullName: "Đỗ Văn Kiên - Trưởng Công an xã", mobile: "0905121274" },

    { unitCode: "Công an xã Quảng Tín", fullName: "Nguyễn Minh Vỹ - Trưởng Công an xã", mobile: "0905068084" },
    { unitCode: "Công an xã Quảng Tân", fullName: "Đinh Mạnh Cường - Trưởng Công an xã", mobile: "0993629777" },
    { unitCode: "Công an xã Đức An", fullName: "Nguyễn Đức Thùy - Trưởng Công an xã", mobile: "0769418168" },
    { unitCode: "Công an xã Trường Xuân", fullName: "Nguyễn Xuân Đức - Trưởng Công an xã", mobile: "0905124679" },
    { unitCode: "Công an xã Đắk Song", fullName: "Y Bhim Kển - Trưởng Công an xã", mobile: "0769526968" },
    { unitCode: "Công an xã Thuận Hạnh", fullName: "Vũ Hồng Luyện - Trưởng Công an xã", mobile: "0905047679" },
    { unitCode: "Công an xã Cư Jút", fullName: "Nguyễn Sử - Trưởng Công an xã", mobile: "0905197378" },
    { unitCode: "Công an xã Nam Dong", fullName: "Ngô Ngọc Sơn - Trưởng Công an xã", mobile: "0789579777" },
    { unitCode: "Công an xã Krông Nô", fullName: "Đỗ Hữu Huy - Trưởng Công an xã", mobile: "0905020100" },
    { unitCode: "Công an xã Tuy Đức", fullName: "Lê Thanh Xuân - Trưởng Công an xã", mobile: "0794641123" },
    { unitCode: "Công an xã Quảng Trực", fullName: "Cao Xuân Thủy - Trưởng Công an xã", mobile: "0905257696" },
    { unitCode: "Công an xã Nam Đà", fullName: "Nguyễn Thành Trung - Trưởng Công an xã", mobile: "0903578886" },
    { unitCode: "Công an xã Đắk Wil", fullName: "Hoàng Văn Hùng - Trưởng Công an xã", mobile: "0905001176" }
];

