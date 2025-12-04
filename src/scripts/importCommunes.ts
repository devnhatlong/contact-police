import { CommuneService } from '../services/CommuneService';
import { communesInfo } from '../data/commune_info';

/**
 * Script import dữ liệu communes lên Firebase
 * Chạy: npx ts-node src/scripts/importCommunes.ts
 */
async function importCommunes() {
  try {
    console.log('🚀 Bắt đầu import communes...');
    console.log(`📊 Tổng số communes: ${communesInfo.length}`);
    
    // Xác nhận trước khi xóa data cũ (nếu có)
    console.log('\n⚠️  Bạn có muốn xóa tất cả dữ liệu communes cũ không? (y/n)');
    
    // Trong môi trường production, có thể comment dòng này
    // await CommuneService.deleteAll();
    
    // Import data mới
    await CommuneService.batchCreate(communesInfo);
    
    console.log('\n✅ Import thành công!');
    console.log(`📈 Đã import ${communesInfo.length} communes`);
    
    // Kiểm tra kết quả
    const allCommunes = await CommuneService.getAll();
    console.log(`📊 Tổng số communes trong database: ${allCommunes.length}`);
    
  } catch (error) {
    console.error('❌ Lỗi khi import communes:', error);
    process.exit(1);
  }
}

// Chạy script
if (require.main === module) {
  importCommunes()
    .then(() => {
      console.log('\n🎉 Hoàn tất!');
      process.exit(0);
    })
    .catch((error) => {
      console.error('❌ Script thất bại:', error);
      process.exit(1);
    });
}

export { importCommunes };
