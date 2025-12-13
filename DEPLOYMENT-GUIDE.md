# Cloudflare Deployment Guide
## Complete Guide for Undaunted Spirits Website Deployment

---

## 🔑 Key Concept: How Cloudflare Auto-Deploys

```
┌─────────────┐     git push     ┌─────────────┐     auto-deploy     ┌─────────────┐
│   GitHub    │ ───────────────→ │  Cloudflare │ ──────────────────→ │  Live Site  │
│  Repository │                  │    Pages    │                     │   Public    │
└─────────────┘                  └─────────────┘                     └─────────────┘
```

**How it works:**
1. You push code to GitHub
2. Cloudflare Pages **automatically detects** the push (via webhook)
3. Cloudflare builds and deploys within **1-2 minutes**
4. Changes are **immediately live** on undauntedspirits.org

**⚠️ Important:** Any push to the production branch goes live automatically. This is why we use branch protection.

---

## 📊 Current Branch Structure

| Branch | Purpose | Cloudflare Setting | Auto-Deploys? |
|--------|---------|-------------------|---------------|
| `production` | **Coming Soon page** (public) | Production deployment | ✅ Yes → undauntedspirits.org |
| `coming-soon` | **Full site** (development) | Preview deployment | ✅ Yes → preview URL only |
| `main` | Archive/backup | Preview deployment | ✅ Yes → preview URL only |

### Current Configuration:
- **Production branch:** `production` (shows Coming Soon page)
- **Full site development:** `coming-soon` (visible on preview URL)

---

## 🌐 Your Domains

| Domain | Purpose | Status |
|--------|---------|--------|
| undauntedspirits.org | Primary (English default) | ✅ Connected |
| www.undauntedspirits.org | WWW redirect | ✅ Connected |
| neskoreni.org | Secondary (Ukrainian) | ✅ Redirects to /ua/ (Page Rule configured) |

---

## 🔄 How Updates Get Deployed

### Automatic Flow:

```
1. You run: git push origin production
              ↓
2. GitHub receives the push
              ↓
3. Cloudflare webhook triggers (~30 seconds)
              ↓
4. Cloudflare builds site (~30 seconds)
              ↓
5. Site goes live on undauntedspirits.org (~30 seconds)
              ↓
6. Total time: ~1-2 minutes
```

### What Triggers a Deployment:

| Action | Result |
|--------|--------|
| Push to `production` | ✅ Live site updates automatically |
| Push to `coming-soon` | ✅ Preview URL updates (not live site) |
| Push to `main` | ✅ Preview URL updates (not live site) |
| Merge PR to `production` | ✅ Live site updates automatically |
| Direct edit on GitHub | ✅ Triggers deployment |

---

## 🛡️ Safe Deployment Workflow

### Branch Protection Setup

**Why needed:** Prevent accidental changes going live.

**Setup on GitHub:**
1. Go to: https://github.com/Mivia-V1/Unconquered-Spirits/settings/branches
2. Add rule for `production` branch:
   - ✅ Require pull request before merging
   - ✅ Require 1 approval
   - ✅ Do not allow bypassing

### Daily Workflow:

```
development → PR → coming-soon → PR (with approval) → production → AUTO-DEPLOY
    ↑                  ↑                                    ↓
 You work           Preview                             Live site
  here               URL                              undauntedspirits.org
```

### Safe Commands:

```bash
# 1. Always work on coming-soon (or development if created)
git checkout coming-soon

# 2. Make changes
# ... edit files ...

# 3. Commit and push
git add .
git commit -m "Your changes"
git push origin coming-soon

# 4. View on preview URL (NOT live site)
# Find at: Cloudflare Pages → Deployments → coming-soon

# 5. When ready for production, create Pull Request on GitHub:
# Base: production ← Compare: coming-soon

# 6. Review, approve, merge → Site goes live automatically
```

---

## 🎛️ Cloudflare Pages Dashboard

### Where to Find Things:

**Dashboard URL:** https://dash.cloudflare.com/

**Navigation:**
```
Cloudflare Dashboard
└── Workers & Pages
    └── Your Project (undaunted-spirits)
        ├── Deployments (see all builds)
        ├── Settings
        │   └── Builds & deployments
        │       └── Production branch ← CHANGE THIS TO SWITCH
        └── Custom domains
```

### Changing Production Branch:

1. Go to **Settings** → **Builds & deployments**
2. Find **"Production branch"**
3. Click **Change**
4. Select branch (`production` or `coming-soon`)
5. Save

**Result:** Next deployment from that branch goes live.

---

## 📱 Preview URLs

Cloudflare creates preview URLs for every branch:

| Branch | Preview URL Pattern |
|--------|---------------------|
| `coming-soon` | `coming-soon.undaunted-spirits.pages.dev` |
| `main` | `main.undaunted-spirits.pages.dev` |
| Any feature branch | `[branch-name].undaunted-spirits.pages.dev` |

**Finding your preview URL:**
1. Go to Cloudflare Pages → Your Project → **Deployments**
2. Find the deployment for your branch
3. Click to open → Copy URL

**Share preview URLs** for review before going live.

---

## 🔀 Switching Between Live States

### Currently: Coming Soon Page is Live

To make the **full site live**:
1. Cloudflare → Settings → Production branch
2. Change from `production` to `coming-soon`
3. Save → Auto-deploys in 2 minutes
4. undauntedspirits.org now shows full site

### Currently: Full Site is Live

To show **Coming Soon page** again:
1. Cloudflare → Settings → Production branch
2. Change from `coming-soon` to `production`
3. Save → Auto-deploys in 2 minutes
4. undauntedspirits.org now shows Coming Soon

**Zero downtime either way.**

---

## 🚨 Emergency Procedures

### Rollback (If Something Goes Wrong)

**Option 1: Cloudflare Dashboard (Instant)**
1. Go to Deployments tab
2. Find last working deployment
3. Click "..." → **Rollback to this deployment**
4. Site reverts immediately

**Option 2: Switch Branch (30 seconds)**
1. Go to Settings → Production branch
2. Switch to `production` (Coming Soon page)
3. Safe fallback while you fix issues

**Option 3: Git Revert (2-3 minutes)**
```bash
git checkout production
git revert HEAD
git push origin production
# Cloudflare auto-deploys the fix
```

### Site Down Checklist:
1. [ ] Check Cloudflare status: https://www.cloudflarestatus.com/
2. [ ] Check Deployments tab for build errors
3. [ ] Try rollback to previous deployment
4. [ ] Switch production branch if needed
5. [ ] Contact team if still down

---

## 📋 Deployment Checklist

### Before Pushing to Production:

- [ ] Tested on preview URL
- [ ] Mobile responsive checked
- [ ] Both EN and UA work
- [ ] No console errors
- [ ] All links work
- [ ] Images loading
- [ ] Forms tested (when applicable)
- [ ] Team notified

### After Deployment:

- [ ] Visit undauntedspirits.org (hard refresh)
- [ ] Check EN version
- [ ] Check UA version  
- [ ] Test on mobile device
- [ ] Verify in Cloudflare (deployment successful)
- [ ] Monitor for 15 minutes

---

## ⚙️ Initial Cloudflare Setup (Already Done)

For reference, here's how Cloudflare Pages was configured:

### Project Settings:
```
Project name: undaunted-spirits
Git provider: GitHub
Repository: Mivia-V1/Unconquered-Spirits
Production branch: production (or coming-soon)
Build command: (empty - static site)
Build output directory: / (root)
```

### Custom Domains:
```
undauntedspirits.org → Connected ✅
www.undauntedspirits.org → Connected ✅
```

### DNS Records (Auto-configured by Cloudflare):
```
CNAME  @    → undaunted-spirits.pages.dev
CNAME  www  → undaunted-spirits.pages.dev
```

---

## 📧 Email Configuration

Email is handled separately via **Google Workspace**.

**Active addresses:**
- info@undauntedspirits.org
- svitlana@undauntedspirits.org
- neskorenidukhom@ukr.net

**DNS records for email (in Cloudflare DNS):**
```
MX     @     → smtp.google.com (priority 1)
TXT    @     → "v=spf1 include:_spf.google.com ~all"
```

---

## 🔧 Common Tasks

### Update Coming Soon Page:
```bash
git checkout production
# Edit index.html
git add index.html
git commit -m "Update coming soon message"
git push origin production
# Live in 2 minutes
```

### Add New Feature to Full Site:
```bash
git checkout coming-soon
# Make changes
git add .
git commit -m "Add new feature"
git push origin coming-soon
# View on preview URL, then create PR to production when ready
```

### View Deployment History:
1. Cloudflare Dashboard → Pages → Your Project
2. Click **Deployments** tab
3. See all builds with status, branch, time

### Check Build Logs (If Deployment Fails):
1. Cloudflare → Deployments
2. Click on failed deployment
3. View **Build log** for error details

---

## 📊 Quick Reference

### URLs:
| Purpose | URL |
|---------|-----|
| Live site | https://undauntedspirits.org |
| Cloudflare dashboard | https://dash.cloudflare.com |
| GitHub repo | https://github.com/Mivia-V1/Unconquered-Spirits |
| Cloudflare status | https://www.cloudflarestatus.com |

### Branches:
| Branch | Contains | Deploys To |
|--------|----------|------------|
| `production` | Coming Soon page | Live site (when set as production) |
| `coming-soon` | Full website | Preview URL |

### Key Commands:
```bash
# Check current branch
git branch

# Switch branches
git checkout coming-soon
git checkout production

# Push changes
git push origin [branch-name]

# View recent commits
git log --oneline -5
```

---

## ✅ Summary

1. **Cloudflare auto-deploys** when you push to GitHub
2. **Production branch** = what's live on undauntedspirits.org
3. **Use PRs + reviews** for safe deployments
4. **Preview URLs** let you test before going live
5. **Switch branches** in Cloudflare to change what's public
6. **Rollback instantly** via Cloudflare dashboard if needed

---

## 📞 Support Resources

- **Cloudflare Pages docs:** https://developers.cloudflare.com/pages/
- **Cloudflare Community:** https://community.cloudflare.com/
- **GitHub Actions status:** https://www.githubstatus.com/

---

**Last Updated:** December 5, 2025  
**Status:** Production ready

