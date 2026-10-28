import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

/**
 * Dev server plugin to rewrite / and /index.html to /index.source.html
 * so that Vite dev server serves the live HMR Vue app, even while
 * the root index.html hosts the compiled production bundle for GitHub Pages.
 */
function devHtmlRewritePlugin() {
  return {
    name: 'dev-html-rewrite',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = req.url ? req.url.split('?')[0] : ''
        if (url === '' || url === '/' || url === '/index.html') {
          const query = req.url && req.url.includes('?') ? req.url.slice(req.url.indexOf('?')) : ''
          req.url = '/index.source.html' + query
        }
        next()
      })
    }
  }
}

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
  plugins: [devHtmlRewritePlugin(), vue(), contactApiDevPlugin()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.source.html'),
      },
    },
  },
})
