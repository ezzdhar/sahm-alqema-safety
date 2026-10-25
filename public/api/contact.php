<?php
/**
 * Sahm Al Qemma - Contact Form Email Handler
 * مؤسسة سهم القمة لتطوير وإدارة الأعمال
 * Target Email: info@sahmalqemma.sa
 * Website: https://sahmalqemma.sa
 */

// Set timezone to Saudi Arabia
date_default_timezone_set('Asia/Riyadh');

// CORS and response headers
header('Content-Type: application/json; charset=UTF-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Accept, X-Requested-With');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Ensure POST request
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'success' => false,
        'message' => 'Method Not Allowed. Only POST requests are accepted.'
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

// Read raw JSON or form-urlencoded POST
$rawInput = file_get_contents('php://input');
$data = json_decode($rawInput, true);

if (!is_array($data)) {
    $data = $_POST;
}

// Extract and sanitize fields
$name = '';
if (isset($data['name'])) {
    $name = trim(strip_tags((string)$data['name']));
} elseif (isset($data['fullName'])) {
    $name = trim(strip_tags((string)$data['fullName']));
} elseif (isset($data['firstName']) || isset($data['lastName'])) {
    $name = trim(strip_tags(((string)($data['firstName'] ?? '')) . ' ' . ((string)($data['lastName'] ?? ''))));
}

$email   = isset($data['email']) ? filter_var(trim((string)$data['email']), FILTER_SANITIZE_EMAIL) : '';
$phone   = isset($data['phone']) ? trim(strip_tags((string)$data['phone'])) : '';
$service = isset($data['service']) ? trim(strip_tags((string)$data['service'])) : '';
$subject = isset($data['subject']) ? trim(strip_tags((string)$data['subject'])) : '';
$message = '';

if (isset($data['details']) && !empty(trim((string)$data['details']))) {
    $message = trim(strip_tags((string)$data['details']));
} elseif (isset($data['message']) && !empty(trim((string)$data['message']))) {
    $message = trim(strip_tags((string)$data['message']));
}

$lang = (isset($data['lang']) && $data['lang'] === 'en') ? 'en' : 'ar';

// Service name mapping (slug/value to Arabic readable label)
$serviceNames = [
    'market-analysis' => 'تحليل السوق والمنافسين',
    'business-dev'    => 'تطوير الأعمال',
    'web-apps'        => 'تصميم وبرمجة المواقع والتطبيقات',
    'marketing'       => 'التسويق بالفيديو والجرافيك ديزاين',
    'social-media'    => 'إدارة السوشيال ميديا',
    'consulting'      => 'استشارة أعمال متكاملة',
];

$serviceLabel = '';
if (!empty($data['serviceLabel'])) {
    $serviceLabel = trim(strip_tags((string)$data['serviceLabel']));
} elseif (!empty($service) && isset($serviceNames[$service])) {
    $serviceLabel = $serviceNames[$service];
} elseif (!empty($service)) {
    $serviceLabel = $service;
} elseif (!empty($subject)) {
    $serviceLabel = $subject;
}

// Validation
if (empty($name) || empty($email) || empty($phone)) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => ($lang === 'en')
            ? 'Please fill in all required fields (Name, Email, Phone).'
            : 'يرجى ملء جميع الحقول المطلوبة (الاسم، البريد الإلكتروني، رقم الجوال).'
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => ($lang === 'en')
            ? 'Please enter a valid email address.'
            : 'صيغة البريد الإلكتروني غير صحيحة.'
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

// Target email settings
$toEmail = 'info@sahmalqemma.sa';
$emailSubject = 'طلب تواصل جديد من موقع سهم القمة: ' . $name . (!empty($serviceLabel) ? ' - ' . $serviceLabel : '');

// Format clean phone for WhatsApp link (Saudi numbers 05XXXXXXXX -> 9665XXXXXXXX)
$digitsOnly = preg_replace('/[^0-9]/', '', $phone);
$waPhone = $digitsOnly;
if (strpos($waPhone, '05') === 0 && strlen($waPhone) === 10) {
    $waPhone = '966' . substr($waPhone, 1);
} elseif (strpos($waPhone, '5') === 0 && strlen($waPhone) === 9) {
    $waPhone = '966' . $waPhone;
}

$formattedDate = date('Y-m-d H:i') . ' بتوقيت الرياض';

// Build rich HTML Message Body
$emailBody = '<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>طلب تواصل جديد - سهم القمة</title>
</head>
<body style="font-family: \'Tajawal\', \'Cairo\', \'Segoe UI\', Tahoma, Arial, sans-serif; background-color: #f4f6f9; margin: 0; padding: 25px 15px; color: #1e293b; direction: rtl; text-align: right;">
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
          <td style="padding: 12px 8px; color: #0f172a; font-weight: 600;">' . htmlspecialchars($name) . '</td>
        </tr>
        <tr style="border-bottom: 1px solid #f1f5f9;">
          <td style="padding: 12px 8px; font-weight: bold; color: #091627;">البريد الإلكتروني:</td>
          <td style="padding: 12px 8px; color: #0f172a;"><a href="mailto:' . htmlspecialchars($email) . '" style="color: #D6214E; text-decoration: none; font-weight: 600;">' . htmlspecialchars($email) . '</a></td>
        </tr>
        <tr style="border-bottom: 1px solid #f1f5f9;">
          <td style="padding: 12px 8px; font-weight: bold; color: #091627;">رقم الجوال:</td>
          <td style="padding: 12px 8px; color: #0f172a;"><a href="tel:' . htmlspecialchars($phone) . '" dir="ltr" style="color: #1A3E6F; text-decoration: none; font-weight: 600;">' . htmlspecialchars($phone) . '</a></td>
        </tr>';

if (!empty($serviceLabel)) {
  $emailBody .= '
        <tr style="border-bottom: 1px solid #f1f5f9;">
          <td style="padding: 12px 8px; font-weight: bold; color: #091627;">الخدمة المطلوبة:</td>
          <td style="padding: 12px 8px; color: #D6214E; font-weight: 700;">' . htmlspecialchars($serviceLabel) . '</td>
        </tr>';
}

$emailBody .= '
        <tr style="border-bottom: 1px solid #f1f5f9;">
          <td style="padding: 12px 8px; font-weight: bold; color: #091627;">تاريخ وتوقيت الإرسال:</td>
          <td style="padding: 12px 8px; color: #64748b; font-size: 13px;">' . $formattedDate . '</td>
        </tr>
      </table>';

if (!empty($message)) {
  $emailBody .= '
      <div style="background-color: #f8fafc; border-right: 4px solid #D6214E; padding: 18px; border-radius: 8px; margin-top: 15px; border: 1px solid #edf2f7; border-right: 4px solid #D6214E;">
        <h4 style="margin: 0 0 10px 0; color: #091627; font-size: 15px; font-weight: 700;">تفاصيل المشروع / الرسالة:</h4>
        <p style="margin: 0; line-height: 1.7; color: #334155; white-space: pre-line; font-size: 14px;">' . nl2br(htmlspecialchars($message)) . '</p>
      </div>';
}

$emailBody .= '
      <!-- Quick Action Buttons -->
      <div style="margin-top: 30px; text-align: center;">';

if (!empty($waPhone)) {
  $emailBody .= '
        <a href="https://wa.me/' . $waPhone . '" target="_blank" style="display: inline-block; background-color: #25D366; color: #ffffff; text-decoration: none; padding: 12px 22px; border-radius: 8px; font-size: 14px; margin: 4px; font-weight: bold;">
          💬 محادثة عبر واتساب
        </a>';
}

$emailBody .= '
        <a href="mailto:' . htmlspecialchars($email) . '" style="display: inline-block; background-color: #D6214E; color: #ffffff; text-decoration: none; padding: 12px 22px; border-radius: 8px; font-size: 14px; margin: 4px; font-weight: bold;">
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
</html>';

// Standard PHP mail headers with UTF-8 support
$headers = [];
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-type: text/html; charset=UTF-8';
$headers[] = 'From: ' . '=?UTF-8?B?' . base64_encode('موقع سهم القمة') . '?= <' . $toEmail . '>';
$headers[] = 'Reply-To: ' . '=?UTF-8?B?' . base64_encode($name) . '?= <' . $email . '>';
$headers[] = 'Return-Path: <' . $toEmail . '>';
$headers[] = 'X-Mailer: PHP/' . phpversion();

// UTF-8 encoded subject
$encodedSubject = '=?UTF-8?B?' . base64_encode($emailSubject) . '?=';

// Send email
$mailSent = @mail($toEmail, $encodedSubject, $emailBody, implode("\r\n", $headers));

if ($mailSent) {
    http_response_code(200);
    echo json_encode([
        'success' => true,
        'message' => ($lang === 'en')
            ? 'Your message has been sent successfully. We will contact you soon.'
            : 'تم إرسال طلبك بنجاح! سيتواصل معك فريق سهم القمة قريباً.'
    ], JSON_UNESCAPED_UNICODE);
} else {
    // If mail() failed on server (e.g. local development or unconfigured sendmail)
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => ($lang === 'en')
            ? 'Could not send email via server. Please verify mail server settings.'
            : 'تعذر إرسال البريد عبر الخادم. يرجى التأكد من إعدادات خادم البريد (Mail Server) أو استخدام Node.js SMTP.'
    ], JSON_UNESCAPED_UNICODE);
}
