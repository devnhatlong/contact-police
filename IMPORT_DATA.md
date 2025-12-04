# Import Data to Firebase

Hướng dẫn import dữ liệu Communes và Contacts lên Firebase Firestore.

## Cấu trúc

### Models
- `src/models/Commune.ts` - Model cho Commune
- `src/models/Contact.ts` - Model cho Contact

### Services
- `src/services/CommuneService.ts` - Service xử lý CRUD cho Communes
- `src/services/ContactService.ts` - Service xử lý CRUD cho Contacts

### Scripts
- `src/scripts/importCommunes.ts` - Import communes lên Firebase
- `src/scripts/importContacts.ts` - Import contacts lên Firebase
- `src/scripts/importAll.ts` - Import tất cả dữ liệu

## Cách sử dụng

### 1. Cài đặt dependencies
```bash
npm install
```

### 2. Cấu hình Firebase
Đảm bảo file `src/config/firebase.ts` đã được cấu hình đúng với Firebase project của bạn.

### 3. Chạy scripts import

#### Import chỉ Communes:
```bash
npx ts-node src/scripts/importCommunes.ts
```

#### Import chỉ Contacts:
```bash
npx ts-node src/scripts/importContacts.ts
```

#### Import tất cả dữ liệu (Communes + Contacts):
```bash
npx ts-node src/scripts/importAll.ts
```

## Cấu trúc dữ liệu Firebase

### Collection: `communes`
```typescript
{
  id: string (auto-generated)
  ma_xa: string
  ten_xa: string
  name: string
  loai: string
  cap: number
  ma_tinh: string
  ten_tinh: string
  dan_so: number
  dtich_km2: number
  matdo_km2: number
  address: string
  tru_so: string
  sap_nhap: string
  createdAt: Date
  updatedAt: Date
}
```

### Collection: `contacts`
```typescript
{
  id: string (auto-generated)
  ma_xa: string
  ten_xa: string
  chief: string
  mobile: string | null
  createdAt: Date
  updatedAt: Date
}
```

## Services API

### CommuneService
- `create(data)` - Tạo một commune
- `getById(id)` - Lấy commune theo ID
- `getByMaXa(ma_xa)` - Lấy commune theo mã xã
- `getAll()` - Lấy tất cả communes
- `update(id, data)` - Cập nhật commune
- `delete(id)` - Xóa commune
- `batchCreate(communes)` - Import nhiều communes
- `deleteAll()` - Xóa tất cả communes

### ContactService
- `create(data)` - Tạo một contact
- `getById(id)` - Lấy contact theo ID
- `getByMaXa(ma_xa)` - Lấy contact theo mã xã
- `getAll()` - Lấy tất cả contacts
- `update(id, data)` - Cập nhật contact
- `delete(id)` - Xóa contact
- `batchCreate(contacts)` - Import nhiều contacts
- `deleteAll()` - Xóa tất cả contacts

## Lưu ý

- Scripts sử dụng batch write để tối ưu hiệu suất (500 documents/batch)
- Firestore giới hạn 500 operations per batch
- Cần có quyền write vào Firestore để chạy scripts
- Nên backup dữ liệu trước khi chạy `deleteAll()`
