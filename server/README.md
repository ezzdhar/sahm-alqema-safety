# إعداد إرسال البريد لموقع سهم القمة (Sahm Al Qemma Email Guide)

تم إعداد وتجهيز خيارين لإرسال رسائل نموذج التواصل مباشرة إلى البريد الإلكتروني:
`info@sahmalqemma.sa`

---

## الخيار 1: باستخدام PHP (الأسهل والأسرع على استضافات cPanel / Apache / LiteSpeed)

تم إنشاء الملف في المسار:
`public/api/contact.php` (وكذلك اختصار `public/contact.php`)

### كيف يعمل؟
- عند بناء المشروع (`npm run build`)، يتم نسخ مجلد `public` تلقائياً إلى داخل `dist/`.
- عند رفع محتويات `dist` إلى الاستضافة الخاصة بك (`public_html` لـ `sahmalqemma.sa`):
  سيعمل الرابط تلقائياً:
  `https://sahmalqemma.sa/api/contact.php`
- يستخدم دالة `mail()` القياسية مع ترويسات UTF-8 وقالب HTML عربي متجاوب وجميل يحمل هوية سهم القمة (الأحمر والأزرق الداكن).
- يحتوي على أزرار سريعة للتواصل الفوري عبر واتساب مباشرة أو الرد بالبريد.

---

## الخيار 2: باستخدام Node.js (عبر Express & Nodemailer)

تم إنشاء الخادم في مجلد `server/`:

### الخطوات لتشغيله:
1. افتح الطرفية وانتقل لمجلد الخادم:
   ```bash
   cd server
   npm install
   ```

2. انسخ ملف الإعدادات:
   ```bash
   cp .env.example .env
   ```

3. افتح ملف `.env` وقم بملء بيانات الـ SMTP الخاصة ببريد `info@sahmalqemma.sa`:
   ```env
   PORT=3001
   TARGET_EMAIL=info@sahmalqemma.sa
   SMTP_HOST=mail.sahmalqemma.sa
   SMTP_PORT=465
   SMTP_SECURE=true
   SMTP_USER=info@sahmalqemma.sa
   SMTP_PASS=كلمة_مرور_البريد_هنا
   ```

4. شغّل الخادم:
   ```bash
   npm start
   # أو أثناء التطوير:
   npm run dev
   ```

5. في حال استخدام Node.js، يمكنك ربط الواجهة الأمامية بالخادم عن طريق إضافة متغير بيئي في ملف `.env` للمشروع الرئيسي:
   ```env
   VITE_API_URL=http://localhost:3001/api/contact
   # أو رابط خادم الإنتاج:
   # VITE_API_URL=https://api.sahmalqemma.sa/api/contact
   ```
