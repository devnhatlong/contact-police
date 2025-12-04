import { ContactService } from '../services/ContactService';
import { contactInfo } from '../data/contact_info';

/**
 * Script import dữ liệu contacts lên Firebase
 * Chạy: npx ts-node src/scripts/importContacts.ts
 */
async function importContacts() {
  try {
    console.log('🚀 Bắt đầu import contacts...');
    console.log(`📊 Tổng số contacts: ${contactInfo.length}`);
    
    // Xác nhận trước khi xóa data cũ (nếu có)
    console.log('\n⚠️  Bạn có muốn xóa tất cả dữ liệu contacts cũ không? (y/n)');
    
    // Trong môi trường production, có thể comment dòng này
    // await ContactService.deleteAll();
    
    // Import data mới
    await ContactService.batchCreate(contactInfo);
    
    console.log('\n✅ Import thành công!');
    console.log(`📈 Đã import ${contactInfo.length} contacts`);
    
    // Kiểm tra kết quả
    const allContacts = await ContactService.getAll();
    console.log(`📊 Tổng số contacts trong database: ${allContacts.length}`);
    
  } catch (error) {
    console.error('❌ Lỗi khi import contacts:', error);
    process.exit(1);
  }
}

// Chạy script
if (require.main === module) {
  importContacts()
    .then(() => {
      console.log('\n🎉 Hoàn tất!');
      process.exit(0);
    })
    .catch((error) => {
      console.error('❌ Script thất bại:', error);
      process.exit(1);
    });
}

export { importContacts };
