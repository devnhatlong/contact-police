# Hướng dẫn cấu hình Firebase

## Bước 1: Tạo Firebase Project

1. Truy cập [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project" (Thêm dự án)
3. Đặt tên project (vd: "contact-police")
4. Làm theo hướng dẫn để tạo project

## Bước 2: Đăng ký app

1. Trong Firebase Console, click vào icon Web `</>`
2. Đặt tên app (vd: "Contact Police App")
3. Click "Register app"
4. Copy **Firebase Configuration** (sẽ có dạng như sau):

```javascript
const firebaseConfig = {
  apiKey: "AIza...",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc..."
};
```

## Bước 3: Cập nhật Firebase Config

1. Mở file `src/config/firebase.ts`
2. Thay thế các giá trị `YOUR_API_KEY`, `YOUR_PROJECT_ID`, etc. bằng giá trị thực từ Firebase Console

## Bước 4: Tạo Firestore Database

1. Trong Firebase Console, vào **Build** → **Firestore Database**
2. Click "Create database"
3. Chọn mode:
   - **Test mode**: Cho phép đọc/ghi tự do (dùng cho development)
   - **Production mode**: Cần cấu hình rules (khuyến nghị)
4. Chọn location (vd: asia-southeast1)
5. Click "Enable"

## Bước 5: Cấu hình Firestore Rules

Trong tab **Rules**, thay đổi rules như sau:

### Test Mode (Development):
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if true;
    }
  }
}
```

### Production Mode:
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /contacts/{contactId} {
      allow read: if true;
      allow write: if request.auth != null; // Chỉ user đã đăng nhập mới được ghi
    }
  }
}
```

## Bước 6: Thêm dữ liệu mẫu (Optional)

Chạy hàm này MỘT LẦN trong app để thêm dữ liệu mẫu:

```typescript
import { addSampleData } from './src/services/firebaseService';

// Gọi trong useEffect hoặc button
addSampleData();
```

Hoặc thêm thủ công trong Firebase Console:
1. Vào **Firestore Database** → **Data**
2. Click "Start collection"
3. Collection ID: `contacts`
4. Thêm documents với các fields:
   - `name` (string)
   - `phone` (string)
   - `latitude` (number)
   - `longitude` (number)
   - `address` (string)
   - `createdAt` (timestamp)

## Bước 7: Test

1. Chạy app: `npm start`
2. Kiểm tra xem dữ liệu có load từ Firebase không
3. Kiểm tra console để xem errors (nếu có)

## Troubleshooting

### Lỗi: "Firebase: Error (auth/api-key-not-valid)"
- Kiểm tra lại `apiKey` trong `firebase.ts`

### Lỗi: "Missing or insufficient permissions"
- Cấu hình Firestore Rules ở chế độ test mode

### Lỗi khi import Firebase
- Chạy: `npm install firebase`
- Restart Metro bundler: `npm start -- --reset-cache`

## API Functions

### Lấy tất cả contacts
```typescript
import { getAllContacts } from './src/services/firebaseService';

const contacts = await getAllContacts();
```

### Thêm contact mới
```typescript
import { addContact } from './src/services/firebaseService';

const id = await addContact({
  name: 'Công an Quận 1',
  phone: '0283823-0026',
  latitude: 10.7769,
  longitude: 106.7009,
  address: '206 Hai Bà Trưng, Quận 1, TP.HCM'
});
```

### Cập nhật contact
```typescript
import { updateContact } from './src/services/firebaseService';

await updateContact('contact-id', {
  name: 'Tên mới',
  phone: '0987654321'
});
```

### Xóa contact
```typescript
import { deleteContact } from './src/services/firebaseService';

await deleteContact('contact-id');
```
