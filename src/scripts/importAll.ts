import { importCommunes } from './importCommunes';
import { importContacts } from './importContacts';

/**
 * Script import tất cả dữ liệu lên Firebase
 * Chạy: npx ts-node src/scripts/importAll.ts
 */
async function importAll() {
  try {
    console.log('='.repeat(50));
    console.log('🚀 BẮT ĐẦU IMPORT TẤT CẢ DỮ LIỆU LÊN FIREBASE');
    console.log('='.repeat(50));
    
    // Import communes
    console.log('\n📍 BƯỚC 1: Import Communes');
    console.log('-'.repeat(50));
    await importCommunes();
    
    // Import contacts
    console.log('\n📞 BƯỚC 2: Import Contacts');
    console.log('-'.repeat(50));
    await importContacts();
    
    console.log('\n' + '='.repeat(50));
    console.log('✅ ĐÃ IMPORT THÀNH CÔNG TẤT CẢ DỮ LIỆU!');
    console.log('='.repeat(50));
    
  } catch (error) {
    console.error('\n❌ LỖI KHI IMPORT DỮ LIỆU:', error);
    process.exit(1);
  }
}

// Chạy script
if (require.main === module) {
  importAll()
    .then(() => {
      console.log('\n🎉 Hoàn tất toàn bộ quá trình import!');
      process.exit(0);
    })
    .catch((error) => {
      console.error('❌ Script thất bại:', error);
      process.exit(1);
    });
}

export { importAll };
