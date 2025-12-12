# Undaunted Spirits Website Development Plan
## Comprehensive Roadmap for Charity Website

---

## 🎯 Project Overview

**Organization:** Undaunted Spirits (Нескорені духом)  
**Type:** Public Organization supporting persons with disabilities and war-affected communities  
**Founded:** 2018, Ternopil, Ukraine  
**Current Status:** Homepages (EN/UA) live with TOV-aligned messaging and imagery  

---

## 📋 Website Structure & Pages

### Phase 1: Core Pages (Priority 1)
- [x] **Home Page** - Live, bilingual (EN/UA), real photos, TOV-aligned hero/stats/donation messaging
- [ ] **About Us Page**
  - Full organization history
  - Mission, vision, and values
  - Team members and leadership
  - Annual reports and transparency documents
  - Registration and legal information
  
- [x] **Donate Page** ✅ COMPLETE (December 12, 2025)
  - Bank wire transfer with A-Bank SWIFT details
  - Quick reference section (4 essential fields)
  - Full bank details in expandable section
  - Copy-to-clipboard for all fields
  - "Copy All" button for one-click copying
  - Bilingual (EN/UA)
  - **Note:** PayPal/Stripe not available in Ukraine; LiqPay/Fondy planned for card payments

- [ ] **Projects Page**
  - Current active projects (expandable from homepage)
  - Past projects archive
  - Individual project detail pages
  - Progress tracking and updates
  - Success stories and metrics
  
- [ ] **Contact Page**
  - Contact form
  - Email and phone information
  - Office location and map
  - Social media links
  - Newsletter signup

### Phase 2: Enhanced Functionality (Priority 2)
- [ ] **News/Blog**
  - Regular updates on activities
  - Success stories
  - Events calendar
  - Media mentions
  - Photo galleries
  
- [ ] **Volunteer Page**
  - Volunteer opportunities
  - Application form
  - Volunteer testimonials
  - Training and resources
  
- [ ] **Membership Page**
  - Membership benefits
  - Application process
  - Member portal (login required)
  - Member resources and documents
  
- [ ] **Events Page**
  - Upcoming events
  - Past events gallery
  - Event registration
  - Virtual event streaming

### Phase 3: Advanced Features (Priority 3)
- [ ] **Member Portal** (Password Protected)
  - Member directory
  - Internal communications
  - Document repository
  - Meeting minutes
  
- [ ] **Resource Center**
  - Disability rights information
  - Legal resources
  - Healthcare resources
  - Financial assistance information
  
- [ ] **Partner/Sponsor Page**
  - Recognition of supporters
  - Partnership opportunities
  - Corporate giving programs

---

## 🎨 Design System

### Color Palette
- **Primary Blue:** `#0057B7` (Ukrainian flag blue, trust, stability)
- **Accent Gold:** `#FFD700` (warmth, hope, calls-to-action)
- **Secondary Blue:** `#4A90E2` (lighter shade for gradients)
- **Text Dark:** `#333333`
- **Text Light:** `#666666`
- **Background Gray:** `#F9F9F9`
- **White:** `#FFFFFF`

### Typography
- **Primary Font:** Segoe UI, Tahoma, Geneva, Verdana, sans-serif
- **Headings:** Bold, clear hierarchy
- **Body Text:** 1.15rem - 1.2rem for readability
- **Line Height:** 1.6 - 1.8 for accessibility

### Design Principles
- Clean, modern, and professional
- Accessible (WCAG 2.1 AA compliance target)
- Mobile-first responsive design
- Emotional connection through storytelling
- Trust-building through transparency
- Bilingual by design (English/Ukrainian)

---

## 🚀 Technical Specifications

### Current Technology Stack
- **Frontend:** HTML5, CSS3, JavaScript (Vanilla)
- **Hosting:** TBD (Recommendations below)
- **Version Control:** Git

### Recommended Technology Upgrades

#### Option 1: Simple Static Site (Current Approach)
**Pros:** Fast, secure, easy to maintain, free hosting options  
**Tools:**
- Static HTML/CSS/JS (current)
- GitHub Pages for hosting (free)
- Formspree or Netlify Forms for contact forms
- Stripe/PayPal embedded widgets for donations

#### Option 2: Content Management System
**Pros:** Easy content updates, no coding required for changes  
**Recommended CMS:**
- **WordPress** (most popular, many charity themes)
- **Ghost** (modern, clean, focused on content)
- **Webflow** (visual design, no-code)

#### Option 3: Modern Static Site Generator
**Pros:** Fast, secure, easy content management with markdown  
**Recommended:**
- **Jekyll** (GitHub Pages native)
- **Hugo** (very fast)
- **Eleventy (11ty)** (simple, flexible)

#### Option 4: Full-Stack Framework (Future Growth)
**Pros:** Scalable, feature-rich, custom functionality  
**Recommended:**
- **Next.js** (React-based, excellent performance)
- **Nuxt.js** (Vue-based, great for bilingual sites)

### Hosting Recommendations
1. **GitHub Pages** (Free, excellent for static sites)
2. **Netlify** (Free tier, excellent CI/CD, forms)
3. **Vercel** (Free tier, great for modern frameworks)
4. **Cloudflare Pages** (Free, fast global CDN)
5. **DigitalOcean** ($5/month, more control)

### Domain Name
- **Register:** `undauntedspirits.org` or `neskoreniduhom.org`
- **Registrar:** Namecheap, Google Domains, or Cloudflare
- **Cost:** ~$10-15/year

---

## 💳 Donation Integration

### Payment Processors
1. **Stripe** (International credit cards)
   - 2.9% + $0.30 per transaction
   - Supports 135+ currencies
   - Excellent developer experience
   
2. **PayPal** (Familiar to donors worldwide)
   - 2.89% + $0.49 per transaction
   - PayPal Giving Fund (reduced fees for nonprofits)
   
3. **Ukrainian Payment Systems**
   - **LiqPay** (monobank) - Popular in Ukraine
   - **Fondy** (International + Ukrainian cards)
   - **WayForPay** (Good for Ukrainian NGOs)
   
4. **Cryptocurrency** (Optional)
   - Bitcoin, Ethereum for international donors
   - The Giving Block platform for nonprofits

### Donation Features
- One-time and recurring donations
- Donor recognition options (anonymous, public)
- Impact descriptions for each amount
- Project-specific targeting
- Thank you emails (automated)
- Donation receipts
- Progress tracking displays

---

## 📸 Content & Media Requirements

### Photography Needs
1. **Hero Images**
   - Community gatherings
   - Members receiving support
   - Volunteers in action
   - Happy beneficiaries (with consent)

2. **Project Images**
   - Medical equipment distribution
   - Frontline support deliveries
   - Rehabilitation activities
   - Family support programs

3. **Team Photos**
   - Leadership team
   - Board members
   - Key volunteers
   - Professional headshots

4. **Event Photos**
   - Fundraising events
   - Community meetings
   - Awareness campaigns

### Video Content (Future)
- Organization introduction (2-3 minutes)
- Beneficiary testimonials
- Volunteer experiences
- Behind-the-scenes of operations

### Written Content Needed
- Detailed project descriptions
- Success stories and case studies (3-5 per project)
- Team member biographies
- Annual reports (2022, 2023, 2024)
- Financial transparency reports
- FAQ section
- Privacy policy
- Terms of service

---

## 🌍 Bilingual Implementation

### Current Implementation
- Separate pages per language for SEO (`/` English, `/ua/` Ukrainian)
- hreflang tags present
- Shared CSS/JS assets, duplicate content maintained in both files

### Enhancements
- Add `lang` attributes to key text containers for SEO
- Implement proper RTL support if needed
- Add automatic language detection based on browser
- Add language selector in footer for redundancy

### Translation Management
- Create content spreadsheet for easy translation
- Use translation memory for consistency
- Consider professional translation for legal documents
- Community review for Ukrainian content authenticity

---

## 🔍 SEO & Marketing Strategy

### Search Engine Optimization
1. **Technical SEO**
   - Semantic HTML structure
   - Meta descriptions for all pages
   - Open Graph tags for social sharing
   - Structured data (Schema.org for Organization)
   - XML sitemap
   - robots.txt
   - Fast page load times
   
2. **Content SEO**
   - Keyword research for charity sector
   - Long-form blog posts
   - Alt text for all images
   - Internal linking strategy
   
3. **Local SEO**
   - Google My Business listing
   - Local directories in Ukraine
   - Ternopil community listings

### Social Media Integration
- **Facebook:** Primary platform for Ukrainian community
- **Instagram:** Visual storytelling
- **YouTube:** Video content, testimonials
- **Twitter/X:** News and updates
- **LinkedIn:** Professional networking, partnerships

### Email Marketing
- Newsletter signup on all pages
- Monthly updates
- Donor thank-you sequences
- Impact reports
- Event announcements

### Analytics
- Google Analytics 4
- Facebook Pixel
- Donation conversion tracking
- Heatmaps (Hotjar or Microsoft Clarity)

---

## ♿ Accessibility Requirements

### WCAG 2.1 AA Compliance
- Proper heading hierarchy
- Sufficient color contrast (already good!)
- Keyboard navigation support
- Screen reader compatibility
- Alt text for all images
- Form labels and error messages
- Skip navigation links
- Focus indicators on interactive elements

### Testing Tools
- WAVE (Web Accessibility Evaluation Tool)
- axe DevTools
- Lighthouse (Chrome DevTools)
- NVDA or JAWS screen readers

---

## 🔒 Security & Privacy

### Essential Security Measures
1. **SSL Certificate** (HTTPS) - Free with Let's Encrypt
2. **Form Protection**
   - CAPTCHA on contact forms
   - Rate limiting
   - Input validation
   
3. **Content Security Policy** (CSP headers)
4. **Regular Security Updates**
5. **Secure donation processing** (PCI compliance via Stripe/PayPal)

### Privacy Compliance
- **GDPR Compliance** (for EU donors)
  - Privacy policy
  - Cookie consent
  - Data processing agreements
  
- **User Data Protection**
  - Minimal data collection
  - Secure storage
  - Clear data retention policies
  - Right to deletion

---

## 📊 Success Metrics & KPIs

### Website Analytics
- Unique visitors per month
- Page views
- Average time on site
- Bounce rate
- Traffic sources

### Conversion Metrics
- Donation conversion rate
- Average donation amount
- Recurring donor percentage
- Volunteer sign-up rate
- Newsletter subscription rate

### Engagement Metrics
- Social media shares
- Story views
- Video watch time
- Blog post reads
- Event registrations

---

## 📅 Development Timeline

### Phase 1: Foundation (Weeks 1-4)
- [ ] Week 1: Setup hosting and domain
- [ ] Week 2: Complete About and Contact pages
- [ ] Week 3: Implement donation system
- [ ] Week 4: Launch MVP (Home, About, Donate, Contact)

### Phase 2: Content Expansion (Weeks 5-8)
- [ ] Week 5: Projects page with all current projects
- [ ] Week 6: News/Blog section
- [ ] Week 7: Volunteer and Membership pages
- [ ] Week 8: Content population and testing

### Phase 3: Enhancement (Weeks 9-12)
- [ ] Week 9: Member portal foundation
- [ ] Week 10: Resource center
- [ ] Week 11: SEO optimization
- [ ] Week 12: Launch full site

### Ongoing Maintenance
- Weekly: Content updates, news posts
- Monthly: Analytics review, performance optimization
- Quarterly: Security audits, design refreshes
- Annually: Major feature additions, annual reports

---

## 💰 Budget Estimates

### Essential Costs
- **Domain Name:** $10-15/year
- **SSL Certificate:** Free (Let's Encrypt)
- **Hosting:** Free - $60/year (depends on choice)
- **Payment Processing:** 2.9% per transaction

### Optional Enhancements
- **Premium Theme/Template:** $0-200 (one-time)
- **Professional Photography:** $300-1,000
- **Professional Translation:** $0.10-0.25/word
- **Email Marketing Platform:** Free - $30/month
  - Mailchimp: Free up to 500 subscribers
  - SendinBlue: Free up to 300 emails/day
- **Premium Analytics:** $0-100/month (optional)

### Total Estimated First Year
- **Minimal Budget:** $10-50
- **Recommended Budget:** $300-800
- **Premium Budget:** $1,500-3,000

---

## 🎓 Training & Documentation

### For Website Administrators
- Content management training
- Donation tracking
- Analytics interpretation
- Security best practices

### For Content Creators
- Writing style guide
- Image guidelines
- SEO basics
- Social media integration

### Documentation Needed
- Technical documentation
- Content update procedures
- Emergency contact procedures
- Backup and recovery plan

---

## 🤝 Partnership Opportunities

### Technology Partnerships
- **Google for Nonprofits**
  - Free Google Workspace
  - YouTube Nonprofit Program
  - Google Ad Grants ($10,000/month free advertising)
  
- **Microsoft for Nonprofits**
  - Discounted/free software
  - Azure cloud credits
  
- **Cloudflare**
  - Project Galileo (free enterprise plan for at-risk organizations)

### Design & Development
- **Catchafire** - Pro bono professional services
- **TechSoup** - Discounted software
- **GitHub Sponsors** - Open source funding

---

## 📞 Next Steps - Priority Actions

### Immediate (This Week)
1. ✅ Organize existing homepage into proper file structure
2. [ ] Choose and register domain name
3. [ ] Set up GitHub repository
4. [ ] Select hosting platform
5. [ ] Create content inventory

### Short Term (Next 2-4 Weeks)
1. [ ] Gather photos and media
2. [ ] Write content for core pages
3. [ ] Set up donation processing accounts
4. [ ] Design remaining page templates
5. [ ] Test bilingual functionality thoroughly

### Medium Term (1-3 Months)
1. [ ] Launch MVP website
2. [ ] Implement analytics
3. [ ] Set up social media integration
4. [ ] Create content calendar
5. [ ] Begin SEO optimization

### Long Term (3-12 Months)
1. [ ] Add blog/news functionality
2. [ ] Implement member portal
3. [ ] Create resource center
4. [ ] Develop email marketing campaigns
5. [ ] Apply for Google Ad Grants

---

## 📚 Resources & References

### Learning Resources
- **Web Accessibility:** https://www.w3.org/WAI/
- **Donation Best Practices:** https://www.networkforgood.com/
- **Nonprofit Website Guide:** https://www.nonprofitwebsitedesign.org/

### Tools & Services
- **Design Inspiration:** https://www.awwwards.com/websites/charity/
- **Icon Resources:** Font Awesome, Heroicons
- **Image Optimization:** TinyPNG, ImageOptim
- **Form Services:** Formspree, Netlify Forms, Google Forms

### Ukrainian NGO Resources
- **Ukrainian Charity Network:** Various local organizations
- **Transparency International Ukraine:** Best practices
- **Ukrainian nonprofit law resources**

---

## ✅ Quality Checklist

### Before Launch
- [ ] All links working
- [ ] Forms tested and receiving submissions
- [ ] Donation system tested (multiple payment methods)
- [ ] Mobile responsive on all devices
- [ ] Both languages complete and accurate
- [ ] All images have alt text
- [ ] Page load speed < 3 seconds
- [ ] Browser compatibility (Chrome, Firefox, Safari, Edge)
- [ ] Accessibility audit passed
- [ ] SSL certificate installed
- [ ] Privacy policy published
- [ ] Contact information accurate
- [ ] Social media links working
- [ ] Analytics installed
- [ ] Backup system in place

---

## 💡 Future Vision

### Year 1 Goals
- 5,000+ monthly visitors
- $50,000+ in online donations
- 100+ newsletter subscribers
- 50+ volunteer applications
- Strong Google search rankings

### Year 2+ Expansion
- Multi-language support (add Russian, Polish)
- Mobile app for members
- Live donation thermometer
- Virtual event platform
- Automated donor reporting
- CRM integration
- Advanced analytics and AI-powered insights

---

## 📝 Notes

**Strengths of Current Homepage:**
- Beautiful, professional design
- Excellent bilingual implementation
- Strong emotional storytelling
- Clear calls-to-action
- Mobile responsive
- Messaging aligned with Brand TOV (direct help, 100% volunteer-run, $0 admin costs)
- Stats and donation copy emphasize zero overhead and volunteer-driven impact
- Mobile alignment tuned (carousel stacks on mobile, images use aspect-ratio)
- Custom logo and branding
- Engaging carousel for stories
- ✅ All real photos added (mission, projects, community stories)
- ✅ Portrait-focused image positioning (faces visible)
- ✅ Logo image integrated in navigation

**Areas for Improvement:**
- Donation functionality needs implementation
- Real social media links
- Analytics integration
- Form functionality
- Real project data and progress updates
- Add regular story rotation (per Facebook content plan) and social proof updates

---

**Document Version:** 1.2  
**Last Updated:** December 5, 2025  
**Created By:** Development Team  
**Next Review:** After Phase 1 completion
