# Deploy "Coming Soon" Landing Page

## 🚀 Quick Deploy Options

You have a beautiful "Coming Soon" landing page ready to deploy! Here are your options:

---

## ✅ OPTION 1: GitHub Pages (Recommended - FREE!)

### Step 1: Push the coming-soon branch

```bash
cd /Users/gavinwerner/NGO
git add -A
git commit -m "Add coming soon landing page"
git push origin coming-soon
```

### Step 2: Enable GitHub Pages

1. Go to: https://github.com/Mivia-V1/Unconquered-Spirits/settings/pages
2. Under "Source", select: **coming-soon** branch
3. Root folder: **/ (root)**
4. Click **Save**
5. Wait 1-2 minutes

**Your site will be live at:**
`https://mivia-v1.github.io/Unconquered-Spirits/`

### Step 3: Connect Your Custom Domain

Once you have `undauntedspirits.org`:

1. In your domain registrar (Namecheap, Google Domains, etc.), add these DNS records:
   ```
   Type: A
   Host: @
   Value: 185.199.108.153
   
   Type: A
   Host: @
   Value: 185.199.109.153
   
   Type: A
   Host: @
   Value: 185.199.110.153
   
   Type: A
   Host: @
   Value: 185.199.111.153
   
   Type: CNAME
   Host: www
   Value: mivia-v1.github.io
   ```

2. In GitHub Pages settings, add custom domain: `undauntedspirits.org`
3. Enable "Enforce HTTPS"
4. Done! ✅

---

## 🌟 OPTION 2: Cloudflare Pages (Also FREE!)

### Why Cloudflare?
- Faster global CDN
- Better DDoS protection
- Free SSL certificate
- Automatic deployments
- Perfect for Ukraine-based organizations

### Setup Steps:

1. **Sign up for Cloudflare** (if you haven't):
   - Go to: https://dash.cloudflare.com/sign-up
   - Use your organization email

2. **Connect GitHub Repository:**
   - Go to: https://dash.cloudflare.com/
   - Click "Pages" in sidebar
   - Click "Create a project"
   - Click "Connect to Git"
   - Select your GitHub account
   - Choose repository: `Unconquered-Spirits`
   - Branch: `coming-soon`
   - Build settings: None (static HTML)
   - Click "Save and Deploy"

3. **Custom Domain:**
   - In Cloudflare Pages project settings
   - Click "Custom domains"
   - Add: `undauntedspirits.org` and `www.undauntedspirits.org`
   - Cloudflare will auto-configure DNS

**Your site will be at:**
- `https://unconquered-spirits.pages.dev` (free subdomain)
- `https://undauntedspirits.org` (your custom domain)

---

## 🔄 OPTION 3: Temporary Deploy (Replace Main Branch)

If you want to deploy the coming soon page RIGHT NOW on the main branch:

```bash
cd /Users/gavinwerner/NGO

# Save your full website work
git checkout main
git checkout -b full-website-dev

# Put coming soon on main temporarily
git checkout main
git checkout coming-soon -- index.html
git commit -m "Temporary: Deploy coming soon page"
git push origin main

# Later, when full site is ready:
git checkout main
git merge full-website-dev
git push origin main
```

---

## 📊 What's Included in Coming Soon Page

Your landing page includes:
- ✅ Professional design with your logo
- ✅ Bilingual support (EN/UA)
- ✅ Organization stats (200+ members, 7 years, 1,500+ helped)
- ✅ Three service cards (Medical, Veteran, Humanitarian)
- ✅ Contact information with click-to-call
- ✅ Email links:
  - `info@undauntedspirits.org`
  - `svitlana@undauntedspirits.org`
- ✅ Legal/registration information
- ✅ Mobile responsive
- ✅ Ukrainian flag colors accent
- ✅ SEO meta tags
- ✅ Social sharing tags (Open Graph)

---

## 📧 Email Setup Required

The coming soon page uses these email addresses:
- `info@undauntedspirits.org`
- `svitlana@undauntedspirits.org`

### To set up emails:

**Option A: Google Workspace (Recommended for nonprofits)**
- Free for verified nonprofits: https://www.google.com/nonprofits/
- Professional email: `name@undauntedspirits.org`
- Includes Google Drive, Docs, Calendar

**Option B: Cloudflare Email Routing (FREE!)**
- Forward to existing email
- Set up in Cloudflare dashboard
- No mailbox, but perfect for forwarding

**Option C: Zoho Mail**
- Free plan for custom domain
- Basic but functional

### How to set up (Cloudflare example):
1. Add domain to Cloudflare
2. Go to Email → Email Routing
3. Enable Email Routing
4. Add destination email (your current email)
5. Create forwards:
   - `info@undauntedspirits.org` → your.email@gmail.com
   - `svitlana@undauntedspirits.org` → svitlana.email@ukr.net

---

## 🎯 Deployment Checklist

### Before Going Live:
- [ ] Domain name registered (`undauntedspirits.org`)
- [ ] Email forwarding or mailboxes set up
- [ ] Test email links work
- [ ] Test phone number link works on mobile
- [ ] Test language switcher
- [ ] Test on mobile devices
- [ ] Test on different browsers
- [ ] SSL/HTTPS enabled
- [ ] Custom domain connected

### After Going Live:
- [ ] Submit to Google Search Console
- [ ] Add Google Analytics (optional)
- [ ] Share link on social media
- [ ] Update Facebook page link
- [ ] Add to email signatures
- [ ] Announce to members

---

## 🔄 When Full Website is Ready

### To Replace Coming Soon with Full Site:

```bash
cd /Users/gavinwerner/NGO

# Switch to main branch
git checkout main

# Merge full website
git merge full-website-dev

# Push to GitHub
git push origin main
```

GitHub Pages will automatically update within 1-2 minutes!

---

## 📈 Next Steps

### This Week:
1. **Push coming-soon branch to GitHub** (command above)
2. **Enable GitHub Pages** from coming-soon branch
3. **Register domain name** `undauntedspirits.org`

### Next Week:
4. **Set up email forwarding**
5. **Connect custom domain to GitHub Pages**
6. **Test everything thoroughly**
7. **Announce your new website!**

### Ongoing:
8. **Continue developing full website** on main branch
9. **Add real content, photos, videos**
10. **Set up donation processing**
11. **Launch full site** when ready

---

## 💡 Pro Tips

1. **Keep coming-soon branch:** Don't delete it! You might need it for maintenance pages

2. **Test First:** Use the GitHub Pages URL before connecting your domain

3. **Email First:** Set up email forwarding BEFORE going live

4. **Announce Gradually:**
   - First: Share with team members
   - Then: Share with current supporters
   - Finally: Public announcement

5. **Collect Emails:** Consider adding a newsletter signup to coming soon page (later)

---

## 🆘 Troubleshooting

### "Page Not Found" after enabling GitHub Pages
- Wait 2-5 minutes, it takes time to build
- Check branch name is correct (coming-soon)
- Verify index.html is in root folder

### Custom domain not working
- DNS changes take 24-48 hours
- Verify A records are correct
- Clear browser cache
- Try incognito/private mode

### Emails not working
- Emails must be set up separately
- Coming soon page just has links
- Set up forwarding or mailboxes first

### Phone link not working
- Works on mobile devices only
- Desktop computers can't make calls
- That's normal behavior

---

## 📞 Quick Command Reference

```bash
# Push coming soon page
cd /Users/gavinwerner/NGO
git checkout coming-soon
git add -A
git commit -m "Add coming soon landing page"
git push origin coming-soon

# Switch back to main branch to continue development
git checkout main

# View all branches
git branch -a

# Check current branch
git branch
```

---

**Ready to launch?** Run the commands above and your beautiful landing page will be live in minutes! 🚀

**Questions?** Open NEXT_STEPS.md or WEBSITE_PLAN.md for more detailed guides.

---

**Slava Ukraini! 💙💛**

