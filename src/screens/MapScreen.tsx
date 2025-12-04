import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

const MapScreen = () => {
  const myMapUrl = "https://www.google.com/maps/d/u/0/edit?mid=1ZB99i3agA0Wc0QqlquYLGWbEMfLGUZM&usp=sharing";

  // Inject CSS để ẩn các phần tử không cần thiết
  const injectedJavaScript = `
    (function() {
      // Thêm CSS để ẩn các phần tử
      const style = document.createElement('style');
      style.innerHTML = \`
        /* Ẩn nút đăng nhập */
        .Te60Vd-ZMv3u.dIxMhd-bN97Pc-b3rLgd,
        button[aria-label*="Đăng nhập"],
        .gb_Lf.gb_la.gb_kf,
        .gb_Qd,
        .gb_Ld {
          display: none !important;
        }
        
        /* Ẩn thanh tỷ lệ bản đồ */
        .yePe5c-haAclf.yePe5c-HzV7m.yePe5c-hJDwNd {
          display: none !important;
        }
        
        /* Ẩn logo Google My Maps */
        a[href*="google.com/maps"],
        #watermark,
        .logo,
        [aria-label*="Google"],
        .gm-style-cc {
          display: none !important;
        }
        
        /* Ẩn dòng "Dữ liệu bản đồ" và copyright */
        .gm-style-cc,
        .gmnoprint,
        div[style*="color: rgb(0, 0, 0)"],
        .gm-style-pbc {
          display: none !important;
        }
        
        /* Ẩn tất cả text ở footer */
        footer,
        .footer-text,
        [class*="copyright"],
        [class*="attribution"] {
          display: none !important;
        }
      \`;
      document.head.appendChild(style);
      
      // Hàm ẩn các element bằng JavaScript (sau khi DOM load)
      function hideElements() {
        // Ẩn tất cả link có chứa "google.com/maps"
        document.querySelectorAll('a[href*="google.com/maps"]').forEach(el => {
          el.style.display = 'none';
          el.style.pointerEvents = 'none';
          el.remove(); // Xóa luôn khỏi DOM
        });
        
        // Ẩn theo class
        const classesToHide = [
          'yePe5c-haAclf',
          'Te60Vd-ZMv3u',
          'gb_Lf',
          'gb_Qd',
          'gb_Ld',
          'gmnoprint',
          'gm-style-cc'
        ];
        
        classesToHide.forEach(className => {
          document.querySelectorAll('.' + className).forEach(el => {
            el.style.display = 'none';
            el.style.pointerEvents = 'none';
            el.remove(); // Xóa luôn khỏi DOM
          });
        });
        
        // Ẩn tất cả element chứa text cụ thể
        document.querySelectorAll('*').forEach(el => {
          const text = el.textContent || '';
          if (text.includes('Google My Maps') || 
              text.includes('Dữ liệu bản đồ') ||
              text.includes('©2025') ||
              text.includes('20 km') ||
              text.includes('Điều khoản') ||
              text.includes('Đăng nhập') ||
              text.includes('Google')) {
            if (el.children.length === 0 || el.tagName === 'A' || el.tagName === 'BUTTON') {
              el.style.display = 'none';
              el.style.visibility = 'hidden';
              el.style.opacity = '0';
              el.style.pointerEvents = 'none';
            }
          }
        });
        
        // Ẩn tất cả button trừ các button cần thiết
        document.querySelectorAll('button').forEach(el => {
          const text = el.textContent || '';
          const ariaLabel = el.getAttribute('aria-label') || '';
          if (ariaLabel.includes('Đăng nhập') || 
              ariaLabel.includes('Google') ||
              text.includes('Đăng nhập')) {
            el.style.display = 'none';
            el.style.pointerEvents = 'none';
            el.remove(); // Xóa luôn khỏi DOM
          }
        });
        
        // Chặn tất cả click vào link
        document.querySelectorAll('a').forEach(link => {
          link.addEventListener('click', function(e) {
            const href = link.getAttribute('href') || '';
            if (href.includes('google.com') || 
                href.includes('maps') ||
                href.includes('terms')) {
              e.preventDefault();
              e.stopPropagation();
              return false;
            }
          }, true);
        });
      }
      
      // Chạy ngay khi load
      hideElements();
      
      // Chạy lại sau 1s để bắt các element load muộn
      setTimeout(hideElements, 1000);
      setTimeout(hideElements, 2000);
      
      // Theo dõi thay đổi DOM và ẩn tiếp
      const observer = new MutationObserver(hideElements);
      observer.observe(document.body, { 
        childList: true, 
        subtree: true 
      });
    })();
    true;
  `;

  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: myMapUrl }}
        style={styles.container}
        injectedJavaScript={injectedJavaScript}
        javaScriptEnabled={true}
      />
    </View>
  );
};

export default MapScreen;