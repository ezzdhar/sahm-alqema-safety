import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import path from 'path';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// CORS setup - allow requests from frontend
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Accept', 'X-Requested-With'],
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Target company email
const TARGET_EMAIL = process.env.TARGET_EMAIL || 'info@sahmalqemma.sa';

// Create Nodemailer Transporter
let transporter;
if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
  transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '465', 10),
    secure: process.env.SMTP_SECURE === 'true' || process.env.SMTP_PORT === '465',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    tls: {
      rejectUnauthorized: process.env.NODE_ENV === 'production',
    },
  });
} else {
  console.warn('\n⚠️ [Sahm Al Qemma Server] SMTP credentials are not configured in .env.');
  console.warn('👉 Emails will be logged to the console for testing. To send real emails, set SMTP_HOST, SMTP_USER, and SMTP_PASS.\n');
}

// Arabic service names mapping
const serviceNames = {
  'market-analysis': 'تحليل السوق والمنافسين',
  'business-dev': 'تطوير الأعمال',
  'web-apps': 'تصميم وبرمجة المواقع والتطبيقات',
  'marketing': 'التسويق بالفيديو والجرافيك ديزاين',
  'social-media': 'إدارة السوشيال ميديا',
  'consulting': 'استشارة أعمال متكاملة',
};

// Health Check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    targetEmail: TARGET_EMAIL,
    smtpConfigured: Boolean(transporter),
    timestamp: new Date().toISOString(),
  });
});

// Email handler function
const handleContactSubmission = async (req, res) => {
  try {
    const data = req.body || {};

    const name = (data.name || data.fullName || `${data.firstName || ''} ${data.lastName || ''}`).trim();
    const email = (data.email || '').trim();
    const phone = (data.phone || '').trim();
    const service = (data.service || '').trim();
    const message = (data.details || data.message || '').trim();
    const lang = data.lang === 'en' ? 'en' : 'ar';

    // Validation
    if (!name || !email || !phone) {
      return res.status(400).json({
        success: false,
        message: lang === 'en'
          ? 'Please fill in all required fields (Name, Email, Phone).'
          : 'يرجى ملء جميع الحقول المطلوبة (الاسم، البريد الإلكتروني، رقم الجوال).',
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: lang === 'en'
          ? 'Please enter a valid email address.'
          : 'صيغة البريد الإلكتروني غير صحيحة.',
      });
    }

    // Resolve service label
    const serviceLabel = data.serviceLabel || serviceNames[service] || service || data.subject || 'استفسار عام';

    // Format clean phone for WhatsApp
    const digitsOnly = phone.replace(/[^0-9]/g, '');
    let waPhone = digitsOnly;
    if (waPhone.startsWith('05') && waPhone.length === 10) {
      waPhone = '966' + waPhone.substring(1);
    } else if (waPhone.startsWith('5') && waPhone.length === 9) {
      waPhone = '966' + waPhone;
    }

    const nowFormatted = new Date().toLocaleString('ar-SA', {
      timeZone: 'Asia/Riyadh',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });

    const emailSubject = `طلب تواصل جديد من موقع سهم القمة: ${name} - ${serviceLabel}`;

    const htmlContent = `
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>طلب تواصل جديد - سهم القمة</title>
</head>
<body style="font-family: 'Tajawal', 'Cairo', 'Segoe UI', Tahoma, Arial, sans-serif; background-color: #f4f6f9; margin: 0; padding: 25px 15px; color: #1e293b; direction: rtl; text-align: right;">
  <div style="max-width: 620px; margin: auto; background: #ffffff; border-radius: 14px; overflow: hidden; box-shadow: 0 10px 25px rgba(9, 22, 39, 0.08); border: 1px solid #e2e8f0;">
    
    <!-- Header -->
    <div style="background: linear-gradient(135deg, #091627 0%, #1A3E6F 100%); padding: 30px 20px; text-align: center; border-bottom: 4px solid #D6214E;">
      <h1 style="color: #ffffff; margin: 0; font-size: 22px; font-weight: 700; letter-spacing: 0.5px;">
        مؤسسة سهم القمة لتطوير وإدارة الأعمال
      </h1>
      <p style="color: #D6214E; margin: 8px 0 0 0; font-size: 15px; font-weight: 600; text-transform: uppercase;">
        SAHM AL QEMMA
      </p>
      <div style="display: inline-block; margin-top: 12px; background: rgba(255, 255, 255, 0.1); padding: 5px 16px; border-radius: 20px; color: #e2e8f0; font-size: 13px;">
        📩 طلب تواصل وتفاصيل مشروع جديد من الموقع الإلكتروني
      </div>
    </div>

    <!-- Content -->
    <div style="padding: 28px 24px;">
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 22px; font-size: 14px;">
        <tr style="border-bottom: 1px solid #f1f5f9;">
          <td style="padding: 12px 8px; font-weight: bold; width: 35%; color: #091627;">الاسم بالكامل:</td>
          <td style="padding: 12px 8px; color: #0f172a; font-weight: 600;">${name}</td>
        </tr>
        <tr style="border-bottom: 1px solid #f1f5f9;">
          <td style="padding: 12px 8px; font-weight: bold; color: #091627;">البريد الإلكتروني:</td>
          <td style="padding: 12px 8px; color: #0f172a;">
            <a href="mailto:${email}" style="color: #D6214E; text-decoration: none; font-weight: 600;">${email}</a>
          </td>
        </tr>
        <tr style="border-bottom: 1px solid #f1f5f9;">
          <td style="padding: 12px 8px; font-weight: bold; color: #091627;">رقم الجوال:</td>
          <td style="padding: 12px 8px; color: #0f172a;">
            <a href="tel:${phone}" dir="ltr" style="color: #1A3E6F; text-decoration: none; font-weight: 600;">${phone}</a>
          </td>
        </tr>
        <tr style="border-bottom: 1px solid #f1f5f9;">
          <td style="padding: 12px 8px; font-weight: bold; color: #091627;">الخدمة المطلوبة:</td>
          <td style="padding: 12px 8px; color: #D6214E; font-weight: 700;">${serviceLabel}</td>
        </tr>
        <tr style="border-bottom: 1px solid #f1f5f9;">
          <td style="padding: 12px 8px; font-weight: bold; color: #091627;">تاريخ وتوقيت الإرسال:</td>
          <td style="padding: 12px 8px; color: #64748b; font-size: 13px;">${nowFormatted}</td>
        </tr>
      </table>

      ${message ? `
      <div style="background-color: #f8fafc; border-right: 4px solid #D6214E; padding: 18px; border-radius: 8px; margin-top: 15px; border: 1px solid #edf2f7; border-right: 4px solid #D6214E;">
        <h4 style="margin: 0 0 10px 0; color: #091627; font-size: 15px; font-weight: 700;">تفاصيل المشروع / الرسالة:</h4>
        <p style="margin: 0; line-height: 1.7; color: #334155; white-space: pre-line; font-size: 14px;">${message.replace(/\n/g, '<br>')}</p>
      </div>` : ''}

      <!-- Action Buttons -->
      <div style="margin-top: 30px; text-align: center;">
        ${waPhone ? `
        <a href="https://wa.me/${waPhone}" target="_blank" style="display: inline-block; background-color: #25D366; color: #ffffff; text-decoration: none; padding: 12px 22px; border-radius: 8px; font-size: 14px; margin: 4px; font-weight: bold;">
          💬 محادثة عبر واتساب
        </a>` : ''}
        <a href="mailto:${email}" style="display: inline-block; background-color: #D6214E; color: #ffffff; text-decoration: none; padding: 12px 22px; border-radius: 8px; font-size: 14px; margin: 4px; font-weight: bold;">
          ✉️ الرد عبر الإيميل
        </a>
      </div>
    </div>

    <!-- Footer -->
    <div style="background-color: #f8fafc; padding: 16px; text-align: center; font-size: 12px; color: #94a3b8; border-top: 1px solid #e2e8f0;">
      تم إرسال هذا البريد تلقائياً عبر موقع مؤسسة سهم القمة (<a href="https://sahmalqemma.sa" style="color: #1A3E6F; text-decoration: none; font-weight: 600;">sahmalqemma.sa</a>).
    </div>

  </div>
</body>
</html>
    `;

    // If transporter is available, send real email
    if (transporter) {
      await transporter.sendMail({
        from: `"موقع سهم القمة" <${process.env.SMTP_FROM || process.env.SMTP_USER || TARGET_EMAIL}>`,
        to: TARGET_EMAIL,
        replyTo: `"${name}" <${email}>`,
        subject: emailSubject,
        html: htmlContent,
      });
      console.log(`✅ [Sahm Al Qemma] Email sent to ${TARGET_EMAIL} from ${name} (${email})`);
    } else {
      // Development mode log
      console.log(`\n📬 [DEV MODE EMAIL] New contact submission:`);
      console.log(`- To: ${TARGET_EMAIL}`);
      console.log(`- From: ${name} <${email}>`);
      console.log(`- Phone: ${phone}`);
      console.log(`- Service: ${serviceLabel}`);
      console.log(`- Details: ${message || '(none)'}`);
      console.log(`- Subject: ${emailSubject}\n`);
    }

    return res.status(200).json({
      success: true,
      message: lang === 'en'
        ? 'Your message has been sent successfully. We will contact you soon.'
        : 'تم إرسال طلبك بنجاح! سيتواصل معك فريق سهم القمة قريباً.',
    });
  } catch (error) {
    console.error('❌ Error sending contact email:', error);
    return res.status(500).json({
      success: false,
      message: 'تعذر إرسال البريد الإلكتروني. يرجى المحاولة لاحقاً أو التواصل معنا مباشرة.',
      error: process.env.NODE_ENV !== 'production' ? error.message : undefined,
    });
  }
};

// Mount endpoints
app.post('/api/contact', handleContactSubmission);
app.post('/api/contact.php', handleContactSubmission); // For compatibility
app.post('/contact', handleContactSubmission);

app.listen(PORT, () => {
  console.log(`🚀 Sahm Al Qemma Email Server running on port ${PORT}`);
  console.log(`📧 Target inbox: ${TARGET_EMAIL}`);
  console.log(`📡 Endpoints: http://localhost:${PORT}/api/contact`);
});
