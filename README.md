# Nako Creative Design (NCD) — Business Website

> **Future Interns Full Stack Web Development Internship — Task 3**
> Built and deployed by Teboho Mosehle | April 2026

Live site: [https://nakocreativedesigns.co.za](https://nakocreativedesigns.co.za)

---

## About the Project

This is the official website for **Nako Creative Design (NCD)**, a registered creative agency co-founded by Teboho Modiba and Inako Bukani. NCD offers professional web development, graphic design, branding, and digital marketing services to businesses across South Africa.

For Future Interns Task 3, rather than building a website for an external business, this project involved **upgrading NCD's existing website** — migrating it from a plain HTML/CSS/JS stack to a modern **React.js** application. The result is a faster, more maintainable, component-based site that better represents the agency's brand and capabilities.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend Framework | React 18 (Vite) |
| Routing | React Router DOM v6 |
| Styling | Custom CSS (original brand styles preserved) |
| Contact Integration | WhatsApp API |
| Deployment | HostKing cPanel (South Africa) |
| Domain | nakocreativedesigns.co.za |

---

## Features

- Responsive design — mobile, tablet, and desktop
- Auto-play image slider with touch support, dot navigation, and pause-on-hover
- WhatsApp contact form with team member selection (Teboho or Inako)
- Dynamic page titles per route using a custom `useTitle` hook
- Client-side routing with SPA fallback via `.htaccess`
- Automatic HTTPS and www redirect
- Optimised favicon and meta tags

---

## Pages

| Page | Route | Description |
|---|---|---|
| Home | `/` | Hero section, image slider, intro |
| About | `/about` | Team overview, agency story |
| Services | `/services` | Web dev, graphic design, branding |
| Portfolio | `/portfolio` | Past work and case studies |
| Contact | `/contact` | WhatsApp-integrated contact form |

---

## Project Structure

```
ncd-website/
├── public/
│   └── assets/          # Favicon, images
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── ImageSlider.jsx
│   │   ├── ContactForm.jsx
│   │   └── Layout.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Portfolio.jsx
│   │   └── Contact.jsx
│   ├── hooks/
│   │   └── useTitle.js
│   ├── styles.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── vite.config.js
└── package.json
```

---

## Getting Started

### Prerequisites

- Node.js v18+
- npm v9+

### Installation

```bash
# Clone the repository
git clone https://github.com/TebohoModiba/Future_FS_03
cd ncd-website

# Install dependencies
npm install

# Start the development server
npm run dev
```

The site will be available at `http://localhost:5173`.

---

## Building for Production

```bash
npm run build
```

This generates an optimised `dist/` folder ready for deployment.

---

## Deployment (HostKing / cPanel)

1. Run `npm run build` to generate the `dist/` folder.
2. Log in to your HostKing cPanel.
3. Open **File Manager** and navigate to `public_html`.
4. Upload the **contents** of `dist/` (not the folder itself) into `public_html`.
5. Create a `.htaccess` file in `public_html` with the following:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On

  # Force HTTPS
  RewriteCond %{HTTPS} off
  RewriteRule ^ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

  # Force www
  RewriteCond %{HTTP_HOST} !^www\.
  RewriteRule ^ https://www.%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

  # SPA fallback for React Router
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

6. Clear your browser cache and visit your domain to confirm the deployment.

---

## Customisation

### Updating the Image Slider

Add or replace images in `src/components/ImageSlider.jsx` by updating the `images` array.

### Updating Contact Recipients

Edit `src/components/ContactForm.jsx` and update the WhatsApp numbers in the `teamMembers` object.

### Adding a New Page

1. Create a new file in `src/pages/`, e.g. `Blog.jsx`.
2. Add a route in `src/App.jsx`.
3. Add a navigation link in `src/components/Navbar.jsx`.

---

## Business Pitch Summary

**Problem:** NCD's original HTML/CSS/JS site was difficult to maintain and scale as the business grew.

**Solution:** Migrated to React, introducing component reusability, cleaner state management, and a structured codebase that any developer can onboard onto quickly.

**Business impact:**
- Easier to update content and add new pages
- Improved user experience with smoother navigation (no full page reloads)
- Professional presentation that builds client trust
- Foundation for future features: CMS integration, blog, client portal

---

## Author

**Teboho Modiba**
Co-Founder & Lead Web Developer, Nako Creative Design
BSc Computer and Information Sciences (Application Development) — Emeris, Midrand
Future Interns Full Stack Web Development Intern, 2026

---

## License

This project is proprietary. All rights reserved — Nako Creative Design (Pty) Ltd.
