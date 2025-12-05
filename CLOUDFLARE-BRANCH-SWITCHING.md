# Cloudflare Pages - Branch Switching Guide
## How to Show "Coming Soon" Page While Developing Full Site

---

## ✅ What We Just Set Up

I've created a **`production`** branch that contains only your "Coming Soon" maintenance page.

### Branch Overview:

| Branch | Purpose | Contents | Status |
|--------|---------|----------|--------|
| **`production`** | Public-facing site | Coming-soon page only (minimal, fast) | ✅ Ready for deployment |
| **`coming-soon`** | Development | Full site with all features, photos, TOV messaging | ✅ Continue working here |
| **`main`** | Archive | Original site structure | Keep as backup |

---

## 📋 How to Switch Cloudflare Pages to "Coming Soon" Page

### Step 1: Log into Cloudflare Pages

1. Go to https://dash.cloudflare.com/
2. Click on **"Workers & Pages"** in the left sidebar
3. Find your **Undaunted Spirits** project
4. Click on it to open settings

### Step 2: Change Production Branch

1. Click on **"Settings"** tab
2. Scroll down to **"Builds & deployments"** section
3. Find **"Production branch"**
4. Click **"Change"** or **"Configure"**
5. Select **`production`** from the dropdown
6. Click **"Save"**

### Step 3: Trigger Redeploy

1. Go to **"Deployments"** tab
2. Click **"Retry deployment"** on the latest production deploy
   - OR -
3. The site will auto-deploy from `production` branch within 1-2 minutes

### Step 4: Verify

1. Visit **undauntedspirits.org**
2. You should now see the "Coming Soon" page with:
   - ✅ Bilingual language switcher
   - ✅ Organization info
   - ✅ Contact information
   - ✅ "Website Coming Soon" badge

---

## 🔍 Where to View Your Full Development Site

Cloudflare Pages automatically creates **preview deployments** for all branches.

### Option A: Find Your Preview URL

1. In Cloudflare Pages dashboard
2. Go to **"Deployments"** tab
3. Look for deployments from **`coming-soon`** branch
4. Click on the latest one
5. Copy the **preview URL** (looks like: `coming-soon.undaunted-spirits.pages.dev`)

### Option B: Use Branch-Based URL Pattern

Cloudflare preview URLs typically follow this pattern:
```
https://[branch].[project-name].pages.dev
```

For your site, the `coming-soon` branch preview should be at:
```
https://coming-soon.undaunted-spirits.pages.dev
```
*(Replace `undaunted-spirits` with your actual Cloudflare project name)*

**Share this URL privately** with team members to review the full site before launch.

---

## 🚀 When Ready to Launch Full Site

### Step 1: Switch Production Branch Back

1. Go to Cloudflare Pages → Your Project → **Settings**
2. Find **"Production branch"**
3. Change from **`production`** to **`coming-soon`**
4. Save

### Step 2: Verify Deployment

1. Check **"Deployments"** tab
2. Wait for deployment to complete (~1-2 minutes)
3. Visit **undauntedspirits.org** to see full site live

### Step 3: Keep Production Branch (Optional)

You can:
- **Delete `production` branch** after launch (no longer needed)
- **Keep it** as a quick rollback option if you ever need maintenance mode again

---

## 📊 Branch Management Going Forward

### Recommended Workflow:

```
production     → Public site (coming-soon page) [Currently live]
coming-soon    → Development site (full site) [Continue working here]
main           → Original backup [Keep as archive]
```

### When Developing:

1. **Always work on `coming-soon` branch:**
   ```bash
   git checkout coming-soon
   # Make changes, commit, push
   git push origin coming-soon
   ```

2. **View your changes:**
   - Go to Cloudflare preview URL for `coming-soon` branch
   - Test thoroughly before switching production

3. **When ready to go live:**
   - Follow "When Ready to Launch Full Site" steps above
   - Switch Cloudflare production branch to `coming-soon`

---

## 🔄 Future Maintenance Mode (If Needed)

If you ever need to show maintenance page again:

### Quick Method:
```bash
git checkout production
git push origin production
```
Then switch Cloudflare production branch back to `production`.

### Or Create New Maintenance Page:
```bash
git checkout -b maintenance
# Edit files
git commit -m "Update maintenance page"
git push origin maintenance
```
Then switch Cloudflare to deploy from `maintenance` branch.

---

## ⚠️ Important Notes

### Don't Accidentally Merge!

- **DO NOT** merge `production` into `coming-soon` (it will delete your full site files)
- **DO NOT** merge `coming-soon` into `production` (defeats the purpose of separate branches)

Keep them independent:
- `production` = Lightweight "coming soon" page
- `coming-soon` = Full feature-rich site

### GitHub Branch Protection (Recommended)

Consider protecting your `coming-soon` branch:
1. Go to GitHub → Your repo → **Settings** → **Branches**
2. Add branch protection rule for `coming-soon`
3. Enable:
   - ✅ Require pull request reviews
   - ✅ Require status checks to pass

---

## 🛠️ Troubleshooting

### Issue: Changes to `coming-soon` still showing on production

**Solution:**
- Check Cloudflare Pages → Settings → Production branch
- Make sure it's set to `production`, not `coming-soon`
- Clear browser cache (Ctrl+Shift+R / Cmd+Shift+R)

### Issue: Coming-soon page not showing properly

**Solution:**
- Check Cloudflare Pages → Deployments
- Look for errors in latest `production` deployment
- Verify `index.html` exists in `production` branch

### Issue: Preview URL not working

**Solution:**
- Check if branch is pushed to GitHub: `git push origin coming-soon`
- Wait 2-3 minutes for Cloudflare to build preview
- Check Cloudflare Pages → Deployments for status

---

## 📞 Quick Reference Commands

### Switch between branches locally:
```bash
# Work on full site
git checkout coming-soon

# View production (coming-soon page)
git checkout production

# Return to full site development
git checkout coming-soon
```

### Push changes:
```bash
# After making changes to coming-soon
git add .
git commit -m "Your changes"
git push origin coming-soon
```

### Check current branch:
```bash
git branch
# * indicates current branch
```

---

## 📝 Summary

**Current Status:**
- ✅ `production` branch created with coming-soon page
- ✅ `coming-soon` branch preserved with full site
- ✅ You're back on `coming-soon` branch for development

**Next Steps:**
1. Go to Cloudflare Pages dashboard
2. Change production branch from `coming-soon` to `production`
3. Wait 2 minutes for deployment
4. Your site will show "Coming Soon" page
5. Continue developing on `coming-soon` branch
6. View progress on Cloudflare preview URL

**When ready to launch:**
- Switch Cloudflare production branch to `coming-soon`
- Full site goes live instantly!

---

**Created:** December 5, 2025  
**Purpose:** Guide for managing production vs. development branches  
**Status:** Ready to implement

