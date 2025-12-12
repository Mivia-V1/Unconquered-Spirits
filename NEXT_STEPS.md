# Next Steps for Undaunted Spirits Website

## 🎉 Great Progress! Your project is now set up.

Your website foundation is complete with:
- ✅ Professional homepage with bilingual support
- ✅ Organized file structure
- ✅ Git repository initialized
- ✅ Comprehensive development plan
- ✅ Documentation ready

---

## 🚀 Immediate Actions (This Week)

### 1. Connect to GitHub (HIGH PRIORITY)

You mentioned you have a draft on GitHub. Here's how to connect this project to your GitHub repository:

#### Option A: If you have an existing GitHub repository

```bash
# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push your code to GitHub
git branch -M main
git push -u origin main
```

#### Option B: Create a new GitHub repository

1. Go to https://github.com/new
2. Create a new repository (e.g., "undaunted-spirits-website")
3. **Don't initialize** with README (we already have one)
4. Copy the repository URL
5. Run these commands:

```bash
git remote add origin https://github.com/YOUR_USERNAME/undaunted-spirits-website.git
git branch -M main
git push -u origin main
```

### 2. View Your Website Locally

Open the website in your browser:

```bash
# Option 1: Direct file opening
# Simply double-click index.html

# Option 2: Use Python (if installed)
cd /Users/gavinwerner/NGO
python -m http.server 8000
# Then visit: http://localhost:8000

# Option 3: Use Node.js http-server
npx http-server
# Then visit: http://localhost:8080
```

### 3. Test the Bilingual Functionality

- Click the "EN | UA" button in the navigation
- Verify all content switches properly
- Check that language preference persists on page reload

### 4. ✅ Replace Placeholder Images (COMPLETED)

All images have been added:
- **Community stories:** All 3 carousel stories have real photos
  - Mariya Gomzyak with handmade socks
  - Defender medical supplies photo
  - Community gathering photo
- **Mission section:** Community photo (babusias2.jpg) with portrait focus
- **Project cards:** All 4 projects have real photos
  - Kids receiving mobility aid
  - Defender medical supplies
  - Food distribution
  - Veteran support
- **Logo:** Added to navigation with rounded corners

**CSS Improvements:**
- Images focus on top third for portrait photos (faces visible)
- Proper object-fit and overflow handling
- Consistent styling across all sections

---

## 📋 Priority Tasks (Next 2-4 Weeks)

### Week 1: Domain & Hosting Setup

1. **Register Domain Name**
   - Suggestions: `undauntedspirits.org` or `neskorenidukhom.org`
   - Registrar: Namecheap, Google Domains, or Cloudflare
   - Cost: ~$10-15/year

2. **Choose Hosting Platform**
   
   **Option A: GitHub Pages (Easiest, Free)**
   - Push code to GitHub
   - Go to repository Settings → Pages
   - Select "main" branch and root folder
   - Enable HTTPS
   - Access at: `https://username.github.io/repository-name`
   
   **Option B: Netlify (More Features, Free)**
   - Connect GitHub repository
   - Automatic deployments on push
   - Custom domain support
   - Contact forms included
   - Sign up: https://www.netlify.com
   
   **Option C: Vercel (Modern, Free)**
   - Similar to Netlify
   - Great performance
   - Easy to use
   - Sign up: https://vercel.com

3. **Set Up SSL/HTTPS**
   - All recommended platforms include free SSL
   - Essential for donation processing and trust

### Week 2: Content & Media

1. **Collect Photos**
   - Community events
   - Members and beneficiaries (with consent!)
   - Volunteer activities
   - Project implementations
   - Team members

2. **Write Additional Content**
   - Full "About Us" story
   - Detailed project descriptions
   - Team member bios
   - Success stories (3-5)
   - FAQ section

3. **Prepare Documents**
   - Annual report (if available)
   - Financial transparency report
   - Registration documents
   - Privacy policy
   - Terms of service

### Week 3: Donation Integration

**✅ PARTIALLY COMPLETE - Bank Transfer Live!**

#### Completed (December 12, 2025):
- [x] Donation page created (`/donate.html` and `/ua/donate.html`)
- [x] A-Bank SWIFT transfer details with copy-to-clipboard
- [x] All donate buttons linked to donation page
- [x] Mobile-optimized design
- [x] Bilingual support

#### Important Discovery:
> **PayPal Business and Stripe are NOT available for Ukrainian nonprofits.**
> Wise cannot receive payments to Ukraine business accounts.

#### Next Steps for Card Payments:

**For International Donors (card payments):**
- [ ] **LiqPay** - Requires PrivatBank business account
  - Accepts international Visa/Mastercard
  - [liqpay.ua/en](https://www.liqpay.ua/en)
- [ ] **Fondy** - Ukrainian payment gateway
  - Accepts international cards
  - [fondy.eu](https://fondy.eu/)

**For Ukrainian Donors:**
- [ ] **Monobank Jar** - Easy setup, popular in Ukraine
- [ ] **PrivatBank** - Direct card payments

**Current Status:**
- Bank wire transfer: ✅ Working
- Card payments: 🔄 Pending (need LiqPay or Fondy setup)

### Week 4: Additional Pages

Create these essential pages:

1. **About Us** (`about.html`)
   - Organization history
   - Mission and vision
   - Team members
   - Legal information
   - Annual reports

2. **Contact** (`contact.html`)
   - Contact form (use Formspree or Netlify Forms)
   - Email and phone
   - Office location with map
   - Social media links
   - Office hours

3. **Projects** (`projects.html`)
   - Expand current projects
   - Add past projects
   - Individual project pages
   - Impact metrics

---

## 🎯 Quick Wins (Can Do Today!)

### 1. Update Contact Information

Verify and update these in `index.html` footer:
- Email address ✓ (already correct: neskorenidukhom@ukr.net)
- Phone number ✓ (already correct: +380 98 707 0628)
- Social media links (currently placeholder "#")
- Office address (currently just "Ternopil, Ukraine")

### 2. Add Actual Project Data

Update the progress bars with real data:
- Current funding amounts
- Funding goals
- Specific needs
- Project timelines

### 3. Create Social Media Profiles (if not exist)

If you don't have these yet, create:
- Facebook Page
- Instagram Account
- YouTube Channel (for videos later)

Then add real links to the footer.

### 4. Add Google Analytics

1. Sign up for Google Analytics 4
2. Get tracking code
3. Add to `<head>` of `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

---

## 🔗 Connecting Your Existing GitHub Draft

You mentioned you have a draft on GitHub. Here's how to merge or connect it:

### If you want to use this version:
```bash
# If your GitHub repo already has content, back it up first
# Then force push this new version:
git push -f origin main
```

### If you want to merge with existing content:
```bash
# Pull existing content first
git pull origin main --allow-unrelated-histories

# Resolve any conflicts
# Then push
git push origin main
```

### If you want to keep both:
```bash
# Push this to a new branch
git checkout -b new-design
git push origin new-design

# Then you can compare and merge later
```

---

## 📞 Getting Help

### Free Resources for Nonprofits

1. **Google for Nonprofits**
   - Free Google Workspace
   - $10,000/month in free ads
   - Apply: https://www.google.com/nonprofits/

2. **Microsoft for Nonprofits**
   - Discounted software
   - Cloud credits
   - Apply: https://nonprofit.microsoft.com/

3. **TechSoup**
   - Discounted software and tools
   - https://www.techsoup.org/

4. **Catchafire**
   - Pro bono professional help
   - https://www.catchafire.org/

### Technical Support

If you need help with:
- **Web Development:** Consider Upwork, Fiverr, or local tech volunteers
- **Translation:** Professional translators on ProZ.com or Upwork
- **Photography:** Local photography students or volunteers
- **Legal:** Seek nonprofit legal clinics

---

## 📊 Success Metrics to Track

Once live, monitor these:

### Website Analytics
- Monthly visitors
- Page views
- Average time on site
- Bounce rate
- Traffic sources

### Conversions
- Donation conversion rate
- Average donation amount
- Newsletter signups
- Volunteer applications

### Engagement
- Social media shares
- Story views
- Return visitors
- Geographic distribution

---

## 🎨 Optional Enhancements

When you have time:

1. **Add Favicon**
   - Create 16x16 and 32x32 pixel icons
   - Use your logo
   - Add to `<head>`: `<link rel="icon" href="favicon.ico">`

2. **Meta Tags for Social Sharing**
```html
<meta property="og:title" content="Undaunted Spirits">
<meta property="og:description" content="Supporting communities in Ukraine">
<meta property="og:image" content="https://yoursite.com/images/og-image.jpg">
```

3. **Loading Animation**
   - Add a simple loading screen
   - Improves perceived performance

4. **Newsletter Integration**
   - Mailchimp (free up to 500 subscribers)
   - SendinBlue
   - ConvertKit (free for nonprofits)

---

## ✅ Pre-Launch Checklist

Before going live:

- [ ] All content proofread (both languages)
- [ ] All links tested and working
- [ ] Contact form tested and receiving emails
- [ ] Donation system tested in test mode
- [ ] Mobile responsive tested on multiple devices
- [ ] Browser compatibility (Chrome, Firefox, Safari, Edge)
- [ ] Images optimized for web
- [ ] All images have alt text
- [ ] Privacy policy page created
- [ ] Social media accounts created and linked
- [ ] Google Analytics installed
- [ ] SSL certificate active (HTTPS)
- [ ] Domain name pointed to hosting
- [ ] 404 error page created
- [ ] Backup plan in place

---

## 🎓 Learning Resources

### Web Development
- **Free Course:** https://www.freecodecamp.org/
- **MDN Web Docs:** https://developer.mozilla.org/

### Nonprofit Website Best Practices
- **Nonprofit Hub:** https://nonprofithub.org/
- **TechSoup Courses:** https://www.techsoup.org/

### Accessibility
- **WAVE Tool:** https://wave.webaim.org/
- **A11Y Project:** https://www.a11yproject.com/

### SEO for Nonprofits
- **Google Search Console:** https://search.google.com/search-console
- **Moz Beginner's Guide:** https://moz.com/beginners-guide-to-seo

---

## 💡 Questions to Consider

1. **Who will maintain the website?**
   - Designate a webmaster
   - Create content update schedule
   - Plan for technical issues

2. **What is your donation goal?**
   - Monthly target
   - Annual target
   - Per-project targets

3. **How will you promote the website?**
   - Social media strategy
   - Email campaigns
   - Local press
   - Partnership announcements

4. **What success looks like?**
   - Define clear KPIs
   - Set realistic targets
   - Plan for growth

---

## 📅 Suggested Timeline

| Week | Focus | Key Deliverable |
|------|-------|----------------|
| 1 | Setup | Live website on hosting |
| 2 | Content | All pages complete |
| 3 | Donations | Payment processing active |
| 4 | Polish | SEO, analytics, testing |
| 5-6 | Launch | Public announcement |
| 7-8 | Optimize | Based on initial feedback |

---

## 🎉 You're Ready to Launch!

Your website foundation is solid. The next steps are:

1. **This Week:** Connect to GitHub and set up hosting
2. **Next Week:** Add real content and images
3. **Week 3:** Implement donation system
4. **Week 4:** Test everything thoroughly
5. **Week 5:** Launch! 🚀

---

**Need help with any of these steps?** Feel free to ask! You're making a real difference for your community. 💙💛

**Slava Ukraini!**

---

**Created:** November 23, 2025  
**Last Updated:** December 12, 2025
