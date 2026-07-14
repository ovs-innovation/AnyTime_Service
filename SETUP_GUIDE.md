# Anytime Services — Contact & Email System Setup Guide

This guide provides instructions to configure, run, and test the production-ready Contact & Email System for Anytime Services.

---

## 📂 Project Architecture

```
AnyTime=Service/
├── public/                 # Static assets (robots.txt, sitemap.xml, favicon.svg)
├── src/                    # React 19 Frontend
│   ├── pages/
│   │   └── Contact.jsx     # Contact Page (Form with Axios, react-hook-form, validation, loader, and toasts)
│   └── App.jsx             # App entry point with Toaster component
├── server/                 # Node.js + Express Backend
│   ├── src/
│   │   ├── config/
│   │   │   └── email.js    # Nodemailer Transporter Configuration
│   │   ├── controllers/
│   │   │   └── contactController.js # Handles mail API requests
│   │   ├── middleware/
│   │   │   ├── rateLimiter.js # Limits requests to prevent API abuse
│   │   │   └── validator.js   # Server-side validation & XSS sanitization
│   │   ├── routes/
│   │   │   └── contactRoutes.js # Routes mapped to /contact
│   │   ├── services/
│   │   │   ├── emailService.js  # Dispatches SMTP messages
│   │   │   └── emailTemplates.js # Modern HTML templates (Admin notification & Client auto-reply)
│   │   ├── utils/
│   │   │   └── sanitize.js # Escape utility to prevent injection attacks
│   │   └── app.js          # Express app entry point
│   ├── .env.example        # Environment variables template
│   └── package.json        # Backend dependencies
└── README.md
```

---

## 🛠️ Step 1: Configure Backend Environment Variables

1. Go to the `server/` directory:
   ```bash
   cd server
   ```
2. Duplicate `.env.example` to create a new `.env` file:
   ```bash
   cp .env.example .env
   ```
3. Open `.env` and fill in your actual SMTP credentials and settings:
   ```env
   PORT=5000
   NODE_ENV=development

   # Example SMTP credentials (e.g. Mailtrap, SendGrid, Gmail, custom business SMTP)
   EMAIL_HOST=smtp.mailtrap.io
   EMAIL_PORT=2525
   EMAIL_USER=your_smtp_username
   EMAIL_PASS=your_smtp_password

   # The email address that receives incoming business enquiries
   RECEIVER_EMAIL=info@anytimeservices.in
   ```

---

## 🚀 Step 2: Install Dependencies and Start the Backend Server

Inside the `server/` directory, run the following commands:

1. Install Node.js packages:
   ```bash
   npm install
   ```
2. Start the server in development mode (auto-reloading via node --watch):
   ```bash
   npm run dev
   ```

The backend server will run on: **`http://localhost:5000`**

---

## 💻 Step 3: Run the Frontend Application

1. Open a new terminal in the root `AnyTime=Service/` folder.
2. Install frontend dependencies (if not already completed):
   ```bash
   npm install
   ```
3. Launch the Vite dev server:
   ```bash
   npm run dev
   ```

The frontend will run on: **`http://localhost:5173`** (or another port outputted in the console)

---

## 🛡️ Security Features Implemented

* **Rate Limiting:** Protects the `/api/contact` endpoint. Each IP is limited to 5 submissions every 15 minutes.
* **CORS Protection:** Configured in `app.js` to whitelist specific domains (localhost and production target domains).
* **Helmet.js:** Custom HTTP headers enabled to shield the server from common web vulnerabilities.
* **XSS Protection:** Backend validator parses and escapes all input strings prior to processing.
* **Server-side Validation:** Ensures fields cannot be bypassed with missing/corrupted browser payloads.
