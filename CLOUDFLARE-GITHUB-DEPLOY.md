# Deploy to Cloudflare Pages or GitHub Pages

## 🎉 Your Domains

- **Primary:** undauntedspirits.org
- **Secondary:** neskreni.org  
- **Google Workspace:** ✅ Set up

---

## 🚀 OPTION 1: Cloudflare Pages (Recommended)

### Why Cloudflare?
- ✅ Faster global CDN
- ✅ Better DDoS protection  
- ✅ Automatic HTTPS
- ✅ Easy multi-domain setup
- ✅ Free forever
- ✅ Automatic deployments from GitHub

### Step-by-Step Setup:

#### 1. Sign Up / Log In to Cloudflare
- Go to: https://dash.cloudflare.com
- Sign up or log in

#### 2. Add Your Domains to Cloudflare

**For undauntedspirits.org:**
1. Click "Add a site" in Cloudflare dashboard
2. Enter: `undauntedspirits.org`
3. Select "Free" plan
4. Copy the nameservers Cloudflare provides (usually 2):
   ```
   Example:
   alex.ns.cloudflare.com
   lucy.ns.cloudflare.com
   ```
5. Go to your domain registrar (Google Domains, Namecheap, etc.)
6. Change nameservers to the Cloudflare ones
7. Wait 5-10 minutes for verification

**For neskreni.org:**
- Repeat the same process

#### 3. Create Cloudflare Pages Project

1. In Cloudflare dashboard, click **"Pages"** in sidebar
2. Click **"Create a project"**
3. Click **"Connect to Git"**
4. Click **"Connect GitHub"** (authorize if needed)
5. Select repository: **`Unconquered-Spirits`**
6. Click **"Begin setup"**

**Configuration:**
```
Project name: undaunted-spirits
Production branch: coming-soon
Build settings: None (Framework preset: None)
Build command: (leave empty)
Build output directory: / (root)
```

7. Click **"Save and Deploy"**

#### 4. Add Both Custom Domains

Once deployed:

1. Go to your Pages project
2. Click **"Custom domains"** tab
3. Click **"Set up a custom domain"**

**Add Primary Domain:**
- Enter: `undauntedspirits.org`
- Click "Continue"
- Also add: `www.undauntedspirits.org`
- Cloudflare will auto-configure DNS ✅

**Add Secondary Domain:**
- Click "Set up a custom domain" again
- Enter: `neskreni.org`
- Click "Continue"
- Also add: `www.neskreni.org`
- Cloudflare will auto-configure DNS ✅

#### 5. Verify Email DNS Records

Since you're using Google Workspace, make sure these DNS records exist:

In Cloudflare DNS settings for each domain, verify:
```
Type: MX
Name: @
Priority: 1
Content: smtp.google.com

Type: TXT
Name: @
Content: "v=spf1 include:_spf.google.com ~all"
```

(Google Workspace usually adds these automatically)

#### 6. Done! 🎉

Your site will be live at:
- https://undauntedspirits.org
- https://www.undauntedspirits.org  
- https://neskreni.org
- https://www.neskreni.org

**All domains will show the same coming soon page!**

**Auto-Deploy:** Every time you push to the `coming-soon` branch, Cloudflare will automatically update your site!

---

## 🔄 OPTION 2: GitHub Pages (Alternative)

### Step-by-Step Setup:

#### 1. Enable GitHub Pages

1. Go to: https://github.com/Mivia-V1/Unconquered-Spirits/settings/pages
2. Under **"Source"**, select:
   - Branch: **`coming-soon`**
   - Folder: **`/ (root)`**
3. Click **"Save"**
4. Wait 1-2 minutes

Your site will be at: `https://mivia-v1.github.io/Unconquered-Spirits/`

#### 2. Add Custom Domain (Primary)

1. Still in GitHub Pages settings
2. Under **"Custom domain"**, enter: `undauntedspirits.org`
3. Click **"Save"**
4. Check **"Enforce HTTPS"** (wait a few minutes if not available yet)

#### 3. Configure DNS in Your Domain Registrar

**For undauntedspirits.org:**

Add these DNS records:
```
Type: A
Name: @
Value: 185.199.108.153

Type: A
Name: @
Value: 185.199.109.153

Type: A
Name: @
Value: 185.199.110.153

Type: A
Name: @
Value: 185.199.111.153

Type: CNAME
Name: www
Value: mivia-v1.github.io
```

**For neskreni.org (redirect to primary):**

Since GitHub Pages only supports one custom domain, you'll need to:

Option A: Use your domain registrar's redirect feature
- Set up a URL redirect from neskreni.org → undauntedspirits.org

Option B: Use Cloudflare (free) for the redirect
- Add neskreni.org to Cloudflare (free plan)
- Create a Page Rule to redirect to undauntedspirits.org

#### 4. Wait for DNS Propagation

- DNS changes take 5 minutes to 48 hours
- Usually works within 1-2 hours
- Check status: https://dnschecker.org

#### 5. Done! 🎉

Your site will be live at:
- https://undauntedspirits.org
- https://www.undauntedspirits.org
- https://neskreni.org (if redirect configured)

---

## 🎯 Recommendation

**Use Cloudflare Pages because:**
1. ✅ Easier multi-domain setup (both domains work automatically)
2. ✅ Faster global CDN
3. ✅ Better for Ukrainian visitors (servers closer)
4. ✅ More protection against attacks
5. ✅ Free SSL for all domains
6. ✅ Automatic deployments

**GitHub Pages is fine if:**
- You only want to use one domain (undauntedspirits.org)
- You're already familiar with GitHub
- You don't mind manual redirect setup for second domain

---

## 📧 Email Configuration

Your emails are already set up via Google Workspace! ✅

The coming soon page uses:
- `info@undauntedspirits.org` ✅
- `svitlana@undauntedspirits.org` ✅

Make sure these email addresses exist in your Google Workspace:
1. Go to: https://admin.google.com
2. Navigate to Users
3. Create these email accounts if they don't exist
4. Or set up email aliases to forward to existing accounts

---

## 🔄 Switching to Full Website Later

When your full website is ready:

### If Using Cloudflare Pages:
1. Go to Pages project settings
2. Change "Production branch" from `coming-soon` to `main`
3. Click "Save"
4. Cloudflare redeploys automatically

### If Using GitHub Pages:
1. Go to GitHub Pages settings
2. Change branch from `coming-soon` to `main`
3. Click "Save"
4. GitHub redeploys automatically

**Zero downtime!** 🎉

---

## 📊 What Visitors Will See

Your beautiful coming soon page with:
- ✅ Professional design with your logo
- ✅ Bilingual support (EN/UA)
- ✅ Organization info (200+ members, 7 years, 1,500+ helped)
- ✅ Your services (Medical, Veteran, Humanitarian support)
- ✅ Contact info with working emails
- ✅ Click-to-call phone number
- ✅ Full legal/registration details
- ✅ Mobile responsive
- ✅ Ukrainian flag colors

---

## ✅ Pre-Launch Checklist

- [x] Domains registered (undauntedspirits.org, neskreni.org)
- [x] Google Workspace set up
- [x] Coming soon page ready
- [x] Code pushed to GitHub
- [ ] Choose deployment platform (Cloudflare or GitHub)
- [ ] Configure DNS records
- [ ] Add custom domain(s)
- [ ] Verify emails work (send test email)
- [ ] Test website on mobile
- [ ] Test both domains load correctly
- [ ] Test language switcher
- [ ] Test phone number on mobile
- [ ] Announce to team!

---

## 🆘 Troubleshooting

### DNS not propagating
- Wait 1-2 hours
- Clear browser cache
- Try incognito mode
- Check: https://dnschecker.org

### Email not working
- Verify MX records in DNS
- Check Google Workspace admin panel
- Make sure accounts exist

### Page not found (404)
- Wait 2-5 minutes after enabling
- Verify branch name is correct
- Check `index.html` is in root folder

### Multiple domains not working (GitHub)
- GitHub Pages only supports 1 custom domain
- Use Cloudflare Pages instead for multiple domains

---

## 📞 Quick Commands Reference

```bash
# Check current branch
cd /Users/gavinwerner/NGO
git branch

# View your live coming soon page
git checkout coming-soon

# Make changes and push
git add .
git commit -m "Update coming soon page"
git push origin coming-soon

# Switch back to full website development
git checkout main
```

---

## 🎉 Ready to Launch!

Everything is ready! Choose your deployment platform above and follow the steps. You'll be live in 10-15 minutes!

**Questions?** 
- Cloudflare support: https://community.cloudflare.com
- GitHub Pages docs: https://docs.github.com/pages

---

**Slava Ukraini! 💙💛**

Your website is about to go live to the world!

