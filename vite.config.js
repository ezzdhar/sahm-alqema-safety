import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

/**
 * Dev server plugin to handle /api/contact.php and /api/contact during local development (Vite).
 * This prevents Vite from serving contact.php as raw static text and executes the submission.
 */
function contactApiDevPlugin() {
  return {
    name: 'contact-api-dev',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = req.url ? req.url.split('?')[0] : '';
        if (req.method === 'POST' && (url === '/api/contact.php' || url === '/api/contact' || url === '/contact.php')) {
          let body = '';
          req.on('data', chunk => {
            body += chunk;
          });
          req.on('end', () => {
            try {
              const data = JSON.parse(body || '{}');
              console.log('\n=========================================');
              console.log('📬 [سهم القمة] تم استلام طلب تواصل جديد (Vite Dev Server):');
              console.log(`- الاسم: ${data.name || ''}`);
              console.log(`- البريد: ${data.email || ''}`);
              console.log(`- رقم الجوال: ${data.phone || ''}`);
              console.log(`- الخدمة المطلوبة: ${data.serviceLabel || data.service || ''}`);
              console.log(`- التفاصيل: ${data.details || data.message || ''}`);
              console.log(`- البريد المستهدف: info@sahmalqemma.sa`);
              console.log('=========================================\n');

              res.setHeader('Content-Type', 'application/json; charset=utf-8');
              res.statusCode = 200;
              res.end(JSON.stringify({
                success: true,
                message: 'تم إرسال طلبك بنجاح! سيتواصل معك فريق سهم القمة قريباً.'
              }));
            } catch (err) {
              res.setHeader('Content-Type', 'application/json; charset=utf-8');
              res.statusCode = 400;
              res.end(JSON.stringify({
                success: false,
                message: 'بيانات غير صالحة.'
              }));
            }
          });
          return;
        }
        next();
      });
    }
  };
}

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [vue(), contactApiDevPlugin()],
})
