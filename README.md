# Undaunted Spirits Website
### Нескорені духом | undauntedspirits.org

Official bilingual website for the Undaunted Spirits public organization, supporting persons with disabilities and war-affected communities in Ukraine since 2018.

---

## 🌟 About

**Undaunted Spirits** (Нескорені духом) is a public organization based in Ternopil, Ukraine. Founded in 2018 to support persons with disabilities, we expanded our mission in 2022 to help all those affected by war—veterans, displaced families, and communities in need.

**Registration Details:**
- EDRPOU: 42717428
- Nonprofit Status Code: 0032 (Public Association)
- Location: Ternopil, Ukraine
- Email: neskorenidukhom@ukr.net
- Phone: +380 98 707 0628

---

## 🚀 Project Status

**Current Phase:** Full Website Launch Ready  
**English Homepage:** Complete ✅  
**Ukrainian Homepage:** Complete ✅  
**Bilingual Structure:** Separate pages for each language ✅  
**Donation Page:** Complete ✅ (Bank transfer with SWIFT details)  
**Brand TOV:** Fully aligned ✅

---

## 🌐 Website Structure

```
undauntedspirits.org/          → English (default for international donors)
undauntedspirits.org/ua/       → Ukrainian (Українська)

neskoreni.org                  → Redirects to undauntedspirits.org/ua/
```

---

## 📁 Project Structure

```
NGO/
├── index.html                 # English homepage
├── donate.html                # English donation page (SWIFT bank transfer)
├── ua/
│   ├── index.html             # Ukrainian homepage (Українська)
│   └── donate.html            # Ukrainian donation page
├── css/
│   └── styles.css             # Shared stylesheet (one file for both languages)
├── js/
│   └── main.js                # Shared JavaScript (one file for both languages)
├── images/
│   ├── community/             # Community photos
│   ├── projects/              # Project images
│   └── team/                  # Team member photos
├── pages/                     # Additional pages (future)
├── videos/                    # Video content
│   ├── optimized/
│   └── raw/
├── subtitles/                 # Video subtitles
├── _redirects                 # Cloudflare/Netlify redirect rules
├── README.md                  # This file
├── AGENTS.md                  # AI agent development guidelines
├── BRAND-TOV.md               # Brand narrative & tone of voice
├── WEBSITE_PLAN.md            # Comprehensive development plan
├── NEXT_STEPS.md              # Development roadmap
├── DEPLOYMENT-GUIDE.md        # Cloudflare deployment guide
├── SECURITY-PLAN.md           # Security analysis and plan
└── index-coming-soon.html     # Coming soon page (production branch)
```

---

## 🎨 Features

### Current Features
- ✅ **Bilingual website** (English `/` and Ukrainian `/ua/`)
- ✅ **Responsive design** (mobile, tablet, desktop)
- ✅ **Mobile alignment tuned** (story carousel stacks, images use aspect-ratio)
- ✅ **Professional navigation** with language switcher
- ✅ **Hero section** with call-to-action (Brand TOV aligned)
- ✅ **Impact statistics** (100% volunteer, $0 admin, 1,500+ people, 7 years)
- ✅ **Mission & values section** (concrete, unique values)
- ✅ **Project showcase** with progress bars
- ✅ **Donation page** with A-Bank SWIFT details and copy-to-clipboard
- ✅ **Donation impact examples** ($10-$500)
- ✅ **Community stories carousel** (featuring Mariya Gomzyak)
- ✅ **How to help section** (Donate, Volunteer, Membership, Share)
- ✅ **Full footer** with contact info & links
- ✅ **SEO optimized** (hreflang, Open Graph, structured data)
- ✅ **Smooth scrolling** for anchor links
- ✅ **Brand TOV compliance** (Three-Yes Test, concrete language)

### Planned Features
- 🔄 LiqPay/Fondy card payment integration (PayPal/Stripe not available in Ukraine)
- 🔄 Contact form with email notifications
- 🔄 News/Blog section
- 🔄 Member portal
- 🔄 Volunteer management
- 🔄 Event calendar
- 🔄 Resource center
- 🔄 Real social media links
- 🔄 Monobank Jar for Ukrainian donors

---

## 🛠️ Technology Stack

- **Frontend:** HTML5, CSS3, JavaScript (Vanilla)
- **SEO:** hreflang tags, JSON-LD structured data, Open Graph
- **Version Control:** Git
- **Hosting:** Cloudflare Pages
- **Current Payment:** Bank wire transfer (A-Bank SWIFT)
- **Future Payment:** LiqPay, Fondy (Ukrainian processors)

> **Note:** PayPal Business and Stripe are not available for Ukrainian nonprofits. Wise cannot receive payments to Ukraine business accounts.

---

## 📦 Getting Started

### Prerequisites
- A modern web browser
- Text editor (VS Code, Cursor, etc.)
- Git (for version control)

### Local Development

1. **Clone the repository:**
```bash
git clone https://github.com/YOUR_USERNAME/undaunted-spirits.git
cd undaunted-spirits
```

2. **Start a local server:**
```bash
# Using Python 3
python3 -m http.server 8080

# Using Node.js
npx http-server -p 8080

# Using PHP
php -S localhost:8080
```

3. **Access the website:**
   - English: `http://localhost:8080`
   - Ukrainian: `http://localhost:8080/ua/`

---

## 🌍 Bilingual Implementation

The website uses **separate pages** for each language (better for SEO):

| Language | URL | File |
|----------|-----|------|
| English | `/` | `/index.html` |
| Ukrainian | `/ua/` | `/ua/index.html` |

### hreflang Tags (for SEO)
Both pages include proper language alternate tags:
```html
<link rel="alternate" hreflang="en" href="https://undauntedspirits.org/">
<link rel="alternate" hreflang="uk" href="https://undauntedspirits.org/ua/">
<link rel="alternate" hreflang="x-default" href="https://undauntedspirits.org/">
```

### Shared Resources
- **CSS:** Both pages use `/css/styles.css`
- **JavaScript:** Both pages use `/js/main.js`
- **Images:** Both pages reference `/images/`

---

## 🚀 Deployment

### Cloudflare Pages (Recommended)

1. **Push to GitHub:**
```bash
git add .
git commit -m "Full bilingual site"
git push origin main
```

2. **Connect to Cloudflare Pages:**
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com/) → Pages
   - Click "Create a project" → "Connect to Git"
   - Select your GitHub repository
   - Build settings: Leave empty (static site)
   - Deploy!

3. **Configure Custom Domain:**
   - In Cloudflare Pages → Your project → Custom domains
   - Add `undauntedspirits.org`

### Secondary Domain Redirect
Configure `neskoreni.org` to redirect to `undauntedspirits.org/ua/`:
- **When:** `neskoreni.org/*`
- **Then:** Redirect to `https://undauntedspirits.org/ua/$1`
- **Status:** 301 (Permanent Redirect)

---

## 🔧 Maintenance Guide

### Updating Content

**Important:** Changes must be made in **both** language files!

| To Update | English File | Ukrainian File |
|-----------|--------------|----------------|
| Homepage | `/index.html` | `/ua/index.html` |
| Donate Page | `/donate.html` | `/ua/donate.html` |
| Styles | `/css/styles.css` | Same file! |
| JavaScript | `/js/main.js` | Same file! |

### Adding New Pages

1. Create the English version: `/about.html`
2. Create the Ukrainian version: `/ua/about.html`
3. Add hreflang tags to both files
4. Update navigation in both homepages

### Adding New Projects

1. Copy an existing project card in both `index.html` files
2. Update content (English and Ukrainian)
3. Add project image to `/images/projects/`
4. Update progress bar percentage and funding goals

### Adding New Community Stories

1. Duplicate a story card in the carousel (both languages)
2. Update author information
3. Add image to `/images/community/`
4. The carousel will automatically update indicators

---

## 🎨 Design System

### Colors
```css
Primary Blue:    #0057B7  (Ukrainian flag blue)
Accent Gold:     #FFD700  (Ukrainian flag yellow)
Secondary Blue:  #4A90E2
Dark Text:       #333333
Light Gray:      #f9f9f9
Footer Dark:     #1a1a1a
```

### Typography
- **Primary Font:** 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
- **Headings:** Bold, blue (#0057B7)
- **Body:** Regular, dark gray (#333)

---

## ✅ Pre-Launch Checklist

- [x] English homepage complete
- [x] Ukrainian homepage complete
- [x] Responsive design tested
- [x] SEO meta tags added
- [x] hreflang tags configured
- [x] Community photo added (Mariya Gomzyak)
- [x] Replace remaining placeholder images (all photos added with portrait focus)
- [x] Logo image added to navigation
- [x] Project card images (4 projects with real photos)
- [x] Mission section image (community gathering)
- [x] Community stories carousel images (all 3 stories)
- [x] Donation page with bank transfer details
- [x] Brand TOV copy alignment (Three-Yes Test passed)
- [x] All donate buttons linked to donation page
- [ ] Add real social media links
- [ ] Add LiqPay/Fondy card payments
- [ ] Configure neskoreni.org redirect
- [ ] Set up Google Analytics
- [ ] Submit sitemap to Google Search Console

---

## 📞 Contact

**Undaunted Spirits (Нескорені духом)**

- **Email:** neskorenidukhom@ukr.net
- **Phone:** +380 98 707 0628
- **Location:** Ternopil, Ukraine

**Leadership:**
- Svetlana Bychkovska - Chairperson
- Olga Pavlyshyn - Deputy Head
- Oksana Sobkiv - Board Member

---

## 📄 License

This website is created for Undaunted Spirits public organization. Content and branding are proprietary to the organization.

---

## 💙💛 Слава Україні!

**Together, we remain undaunted.**

---

**Last Updated:** December 12, 2025  
**Version:** 2.2.0
