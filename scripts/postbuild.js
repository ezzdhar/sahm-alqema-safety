import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// 1. Prepare dist files
const distSourceHtml = path.join(rootDir, 'dist', 'index.source.html');
const distIndexHtml = path.join(rootDir, 'dist', 'index.html');
const dist404Html = path.join(rootDir, 'dist', '404.html');

if (fs.existsSync(distSourceHtml)) {
  fs.copyFileSync(distSourceHtml, distIndexHtml);
  fs.copyFileSync(distSourceHtml, dist404Html);
}

// 2. Mirror compiled output directly to repository root for GitHub Pages branch deployment
const rootIndexHtml = path.join(rootDir, 'index.html');
const root404Html = path.join(rootDir, '404.html');
const rootNoJekyll = path.join(rootDir, '.nojekyll');
const rootAssetsDir = path.join(rootDir, 'assets');
const distAssetsDir = path.join(rootDir, 'dist', 'assets');

if (fs.existsSync(distIndexHtml)) {
  fs.copyFileSync(distIndexHtml, rootIndexHtml);
  fs.copyFileSync(distIndexHtml, root404Html);
  fs.writeFileSync(rootNoJekyll, '');
}

if (fs.existsSync(distAssetsDir)) {
  if (fs.existsSync(rootAssetsDir)) {
    for (const entry of fs.readdirSync(rootAssetsDir)) {
      if (/^main-[\w-]+\.(js|css)$/.test(entry)) {
        try {
          fs.unlinkSync(path.join(rootAssetsDir, entry));
        } catch {
          // Ignore locked files on Windows
        }
      }
    }
  }
  fs.cpSync(distAssetsDir, rootAssetsDir, { recursive: true, force: true });
}

console.log('✅ Production bundle successfully mirrored to repository root for GitHub Pages direct deployment.');
