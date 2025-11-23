# Undaunted Spirits Website
### Нескорені духом

Official website for the Undaunted Spirits public organization, supporting persons with disabilities and communities affected by hardship in Ukraine since 2018.

---

## 🌟 About

**Undaunted Spirits** (Нескорені духом) is a public organization based in Ternopil, Ukraine. Founded in 2018 to support persons with disabilities, we expanded our mission in 2022 to help all those affected by war—veterans, displaced families, and communities in need.

**Registration Details:**
- EDRPOU: 42717428
- Nonprofit Status Code: 0032 (Public Association)
- Location: Ternopil, Ukraine

---

## 🚀 Project Status

**Current Phase:** Foundation & Development  
**Homepage:** Draft Complete ✅  
**Bilingual Support:** English & Ukrainian ✅

---

## 📁 Project Structure

```
NGO/
├── index.html              # Main homepage
├── css/
│   └── styles.css          # All website styles
├── js/
│   └── main.js             # JavaScript functionality
├── images/
│   ├── community/          # Community photos
│   ├── projects/           # Project images
│   └── team/               # Team member photos
├── README.md               # This file
├── WEBSITE_PLAN.md         # Comprehensive development plan
└── .gitignore             # Git ignore rules
```

---

## 🎨 Features

### Current Features
- ✅ Bilingual website (English/Ukrainian)
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Modern, accessible UI
- ✅ Story carousel
- ✅ Project showcase
- ✅ Impact statistics
- ✅ Language persistence (localStorage)

### Planned Features
- 🔄 Donation integration (Stripe, PayPal, LiqPay)
- 🔄 Contact form
- 🔄 News/Blog section
- 🔄 Member portal
- 🔄 Volunteer management
- 🔄 Event calendar
- 🔄 Resource center

---

## 🛠️ Technology Stack

- **Frontend:** HTML5, CSS3, JavaScript (Vanilla)
- **Version Control:** Git
- **Planned Hosting:** GitHub Pages / Netlify / Vercel
- **Future Payment:** Stripe, PayPal, LiqPay

---

## 📦 Getting Started

### Prerequisites
- A modern web browser
- Text editor (VS Code, Sublime, etc.)
- Git (for version control)

### Local Development

1. **Clone the repository:**
```bash
git clone <repository-url>
cd NGO
```

2. **Open the website:**
   - Simply open `index.html` in your web browser
   - Or use a local server:
   
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (http-server)
npx http-server

# Using PHP
php -S localhost:8000
```

3. **Access the website:**
   - Navigate to `http://localhost:8000`

---

## 🌍 Bilingual Support

The website supports both English and Ukrainian languages:

- **Switch Language:** Click the language toggle button in the navigation
- **Persistence:** Language preference is saved in localStorage
- **Implementation:** CSS-based visibility toggling

### How it works:
```html
<p class="en-only">English text</p>
<p class="ua-only">Ukrainian text</p>
```

The `lang` attribute on the `<html>` tag controls which language is visible.

---

## 🎨 Customization

### Colors
Update the color scheme in `css/styles.css`:

```css
Primary Blue: #0057B7
Accent Gold: #FFD700
Secondary Blue: #4A90E2
```

### Content
- **Homepage:** Edit `index.html`
- **Styles:** Modify `css/styles.css`
- **Scripts:** Update `js/main.js`

### Images
Place images in appropriate folders:
- `images/community/` - Community photos
- `images/projects/` - Project images
- `images/team/` - Team member photos

---

## 📝 Content Guidelines

### Adding New Projects

1. Copy an existing project card in `index.html`
2. Update the content for both languages
3. Add project image or use placeholder
4. Update progress bar percentage
5. Update funding goals

### Adding New Stories

1. Duplicate a story card in the carousel
2. Update author information
3. Add story content (bilingual)
3. Add image path
4. The carousel will automatically update

---

## 🚀 Deployment Options

### Option 1: GitHub Pages (Recommended)
1. Push code to GitHub
2. Enable GitHub Pages in repository settings
3. Select main branch and root folder
4. Access at `https://username.github.io/repository-name`

### Option 2: Netlify
1. Connect your GitHub repository
2. Configure build settings (none needed for static site)
3. Deploy automatically on push
4. Custom domain support

### Option 3: Vercel
1. Import GitHub repository
2. Configure project
3. Deploy with automatic updates

---

## 🔒 Security

- All donation processing through secure third-party providers
- SSL/HTTPS required for production
- No sensitive data stored client-side
- Form validation and protection against spam

---

## ♿ Accessibility

This website aims for WCAG 2.1 AA compliance:

- Semantic HTML structure
- Proper heading hierarchy
- Keyboard navigation support
- Sufficient color contrast
- Alt text for images (to be added)
- Screen reader compatible

---

## 📊 Analytics

Planned analytics integration:
- Google Analytics 4
- Facebook Pixel (for ad campaigns)
- Donation conversion tracking

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Report Bugs:** Open an issue describing the problem
2. **Suggest Features:** Share your ideas in issues
3. **Submit Pull Requests:** 
   - Fork the repository
   - Create a feature branch
   - Make your changes
   - Submit a pull request

### Translation Help
Native Ukrainian speakers can help improve translations for accuracy and cultural appropriateness.

---

## 📞 Contact

**Undaunted Spirits (Нескорені духом)**

- **Email:** neskorenidukhom@ukr.net
- **Phone:** +380 98 707 0628
- **Location:** Ternopil, Ukraine
- **Facebook:** [Link to be added]

---

## 📄 License

This website is created for Undaunted Spirits public organization. Content and branding are proprietary to the organization.

---

## 🙏 Acknowledgments

- All volunteers and members of Undaunted Spirits
- Donors and supporters worldwide
- The Ukrainian community

---

## 📅 Roadmap

### Phase 1: Foundation (Weeks 1-4)
- [x] Homepage design and development
- [ ] Domain registration
- [ ] Hosting setup
- [ ] About page
- [ ] Contact page
- [ ] Donation integration

### Phase 2: Content Expansion (Weeks 5-8)
- [ ] Projects page
- [ ] News/Blog section
- [ ] Volunteer page
- [ ] Membership page

### Phase 3: Advanced Features (Weeks 9-12)
- [ ] Member portal
- [ ] Resource center
- [ ] Event management
- [ ] Full SEO optimization

---

## 📚 Documentation

For detailed development plans and technical specifications, see:
- [WEBSITE_PLAN.md](WEBSITE_PLAN.md) - Comprehensive development roadmap

---

## 💙💛 Slava Ukraini!

**Together, we remain undaunted.**

---

**Last Updated:** November 23, 2025  
**Version:** 1.0.0
