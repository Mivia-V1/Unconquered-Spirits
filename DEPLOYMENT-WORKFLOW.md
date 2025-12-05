# Safe Deployment Workflow
## Preventing Unapproved Changes from Going Live

---

## ⚠️ Current Risk

**Problem:** Cloudflare Pages auto-deploys from GitHub branches
- Any push to `production` branch → Instantly live on undauntedspirits.org
- No review step = accidental changes can go public

**Solution:** Implement a review workflow with branch protection

---

## 🛡️ Recommended Safe Workflow

### Branch Strategy:

```
development     → Daily work (can break, experiment freely)
    ↓ (via Pull Request + Review)
coming-soon     → Staging/Review (test here before production)
    ↓ (via Pull Request + Approval)
production      → Live site (protected, requires approval)
```

### Cloudflare Deployment Setup:

| Branch | Cloudflare Setting | Purpose |
|--------|-------------------|---------|
| `production` | **Production** deployment | Public site (protected) |
| `coming-soon` | **Preview** deployment | Review/staging site |
| `development` | **Preview** deployment | Daily work, experiments |

---

## 📋 Step-by-Step: Setting Up Safe Deployments

### Step 1: Protect Production Branch on GitHub

1. **Go to GitHub Repository:**
   - https://github.com/Mivia-V1/Unconquered-Spirits

2. **Settings → Branches:**
   - Click **"Add branch protection rule"**

3. **Branch name pattern:** `production`

4. **Enable these protections:**
   - ✅ **Require a pull request before merging**
   - ✅ **Require approvals** (set to 1 minimum)
   - ✅ **Dismiss stale pull request approvals when new commits are pushed**
   - ✅ **Require status checks to pass before merging** (if you set up CI/CD)
   - ✅ **Require conversation resolution before merging**
   - ✅ **Do not allow bypassing the above settings**
   - ✅ **Restrict who can push to matching branches** (optional: add specific GitHub users)

5. **Click "Create" or "Save changes"**

### Step 2: Protect Coming-Soon Branch (Optional but Recommended)

Repeat Step 1 for `coming-soon` branch with slightly looser rules:
- ✅ Require a pull request before merging
- ✅ Require 1 approval (for major changes)
- Allow self-review if you're working solo

### Step 3: Create Development Branch

```bash
git checkout coming-soon
git checkout -b development
git push origin development
```

Now you have:
- `development` = Your daily workspace (unrestricted)
- `coming-soon` = Staging for review
- `production` = Public site (protected)

---

## 🔄 Daily Workflow (Safe)

### When Making Changes:

#### 1. Always Start on `development`:
```bash
git checkout development
git pull origin development
# Make your changes
```

#### 2. Commit and Push to Development:
```bash
git add .
git commit -m "Descriptive message about changes"
git push origin development
```

#### 3. Review on Cloudflare Preview URL:
- Go to Cloudflare Pages → Deployments
- Find `development` branch preview URL
- Example: `https://development.undaunted-spirits.pages.dev`
- **Test thoroughly** before proceeding

#### 4. Create Pull Request to `coming-soon`:
```bash
# On GitHub:
# 1. Go to repository
# 2. Click "Pull requests" → "New pull request"
# 3. Base: coming-soon ← Compare: development
# 4. Add description of changes
# 5. Create pull request
```

#### 5. Review and Merge to Coming-Soon:
- Review changes in PR
- Test on `coming-soon` preview URL after merge
- Verify everything works as expected

#### 6. Create Pull Request to `production` (When Ready for Public):
```bash
# On GitHub:
# 1. New pull request
# 2. Base: production ← Compare: coming-soon
# 3. Title: "Deploy [feature] to production"
# 4. Detailed description
# 5. Assign reviewer (if team)
# 6. Create pull request
```

#### 7. Final Review and Approval:
- **Review all changes carefully**
- Test on `coming-soon` preview one more time
- Get approval from team member (or self-approve if solo)
- **Merge to production**
- **Site goes live automatically**

---

## 🚨 Emergency Rollback Process

If something goes wrong on production:

### Option 1: Quick Revert (GitHub)
```bash
# Find last good commit
git log production

# Revert to that commit
git checkout production
git reset --hard [commit-hash-of-last-good-version]
git push origin production --force
```
⚠️ **Requires force push permission** (only use in emergencies)

### Option 2: Revert via Pull Request (Safer)
```bash
git checkout production
git revert [bad-commit-hash]
git push origin production
```

### Option 3: Cloudflare Rollback
1. Go to Cloudflare Pages → Deployments
2. Find previous working deployment
3. Click "..." → **"Rollback to this deployment"**
4. Instant rollback (doesn't fix GitHub, but site is safe)

---

## 🔐 Additional Safety Measures

### 1. Add `.github/CODEOWNERS` File

Create `.github/CODEOWNERS`:
```
# Require review from specific people for certain files
* @your-github-username
index.html @your-github-username @trusted-developer
/css/ @your-github-username
```

### 2. Enable GitHub Actions for Automated Checks

Create `.github/workflows/check.yml`:
```yaml
name: Site Checks
on:
  pull_request:
    branches: [production, coming-soon]

jobs:
  validate:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Check HTML validity
        run: |
          # Install HTML validator
          npm install -g html-validate
          
          # Check all HTML files
          html-validate index.html ua/index.html
      
      - name: Check for broken links (optional)
        run: |
          # Add link checker if needed
          echo "Link check would run here"
```

This runs automatically on every PR and blocks merge if checks fail.

### 3. Cloudflare Deployment Controls

In Cloudflare Pages → Settings:

**Enable:**
- ✅ **Preview deployments** (always on for all branches)
- ✅ **Production branch protection** (in GitHub)

**Optional:**
- Set up **Deploy Hooks** for manual triggers
- Enable **Build notifications** (email/Slack when deployments happen)

### 4. Local Pre-commit Hooks

Create `.git/hooks/pre-commit`:
```bash
#!/bin/bash
# Prevent accidental commits to production

branch=$(git symbolic-ref HEAD | sed -e 's,.*/\(.*\),\1,')

if [ "$branch" = "production" ]; then
    echo "❌ Direct commits to production are not allowed!"
    echo "Please commit to development branch and use Pull Requests."
    exit 1
fi
```

Make it executable:
```bash
chmod +x .git/hooks/pre-commit
```

---

## 📝 Checklist: Before Every Production Deployment

Use this checklist before merging to `production`:

### Pre-Deployment Checklist:

- [ ] All changes tested on `development` preview URL
- [ ] Changes reviewed on `coming-soon` branch
- [ ] No console errors in browser
- [ ] Mobile responsive (test on phone)
- [ ] Both EN and UA versions updated
- [ ] Images optimized and loading correctly
- [ ] All links working
- [ ] Forms tested (when applicable)
- [ ] SEO meta tags correct
- [ ] No sensitive data exposed
- [ ] Backup of current production available
- [ ] Team notified of deployment
- [ ] Monitoring ready (check site after deploy)

### Post-Deployment Checklist:

- [ ] Visit undauntedspirits.org (hard refresh: Cmd+Shift+R)
- [ ] Check EN version works
- [ ] Check UA version works
- [ ] Test on mobile device
- [ ] Verify analytics tracking (if set up)
- [ ] Check Cloudflare Pages deployment status (no errors)
- [ ] Monitor for 15-30 minutes after deploy

---

## 🎯 Quick Reference Commands

### Safe Daily Workflow:
```bash
# 1. Start work
git checkout development
git pull origin development

# 2. Make changes, commit
git add .
git commit -m "Your changes"
git push origin development

# 3. Test on preview URL, then create PR on GitHub
# Base: coming-soon ← Compare: development

# 4. After review, merge PR

# 5. Test on coming-soon preview URL

# 6. Create PR to production (only when ready!)
# Base: production ← Compare: coming-soon

# 7. Final review, merge → Goes live!
```

### Check Current Branch:
```bash
git branch
# * indicates current branch
```

### Never Do This (Unsafe):
```bash
# ❌ Don't directly push to production
git checkout production
git push origin production

# ❌ Don't merge without review
git checkout production
git merge coming-soon  # No review step!
git push
```

---

## 👥 Team Workflow (If Multiple People)

### Roles:

**Developer:**
- Works on `development` branch
- Creates PRs to `coming-soon`
- Tests on preview URLs

**Reviewer/Approver:**
- Reviews PRs before merge
- Tests changes on preview URLs
- Approves merges to `production`

**Deployment Lead (You):**
- Final approval for production deployments
- Monitors site after deployments
- Handles rollbacks if needed

### Communication:

Before every production deployment:
1. **Announce in team chat:** "Deploying [feature] to production in 10 minutes"
2. **Share preview URL** for last-minute checks
3. **Deploy during low-traffic hours** (if possible)
4. **Post-deploy update:** "Production deployment complete, all good ✅"

---

## 🔧 Setting Up Right Now

### Immediate Actions (Do This Now):

1. **Set up branch protection on `production`:**
   - Go to GitHub → Settings → Branches → Add rule
   - Require PR + approval for `production`

2. **Create `development` branch:**
   ```bash
   git checkout coming-soon
   git checkout -b development
   git push origin development
   ```

3. **Update local workflow:**
   - From now on: Work on `development`
   - Use PRs to move changes up the chain
   - Only merge to `production` after review

4. **Test the workflow:**
   - Make a small change on `development`
   - Create PR to `coming-soon`
   - Review and merge
   - Verify on `coming-soon` preview
   - Create PR to `production`
   - Review and approve
   - Verify on live site

---

## 📊 Workflow Diagram

```
┌──────────────┐
│ development  │ ← Daily work, experiments, break things safely
└──────┬───────┘
       │ Pull Request (self-review okay)
       ↓
┌──────────────┐
│ coming-soon  │ ← Staging, test thoroughly, preview URL
└──────┬───────┘
       │ Pull Request (MUST review + approve)
       ↓
┌──────────────┐
│  production  │ ← LIVE SITE - Protected, requires approval
└──────────────┘
       ↓
┌──────────────┐
│ Cloudflare   │ ← Auto-deploys production branch
│ Pages (LIVE) │
└──────────────┘
```

---

## 💡 Pro Tips

### 1. Use Descriptive PR Titles
- ✅ Good: "Add Facebook content integration guide and update TOV messaging"
- ❌ Bad: "Update files"

### 2. Small, Frequent PRs
- Better: 5 small PRs with focused changes
- Worse: 1 giant PR with everything

### 3. Keep Branches Up to Date
```bash
# Regularly sync development with coming-soon
git checkout development
git merge coming-soon
git push origin development
```

### 4. Tag Production Releases
```bash
# After merging to production
git checkout production
git tag -a v2.1.0 -m "Launch full site with TOV messaging"
git push origin v2.1.0
```

### 5. Document Major Changes
Keep a `CHANGELOG.md`:
```markdown
## [2.1.0] - 2025-12-05
### Added
- Brand TOV-aligned messaging
- Real community photos
- Mobile alignment improvements

### Changed
- Hero section to emphasize direct help
- Stats to show 100% volunteer-run

### Fixed
- Mobile carousel stacking
- Image aspect ratios
```

---

## 🆘 Emergency Contacts

If site goes down or has critical issues:

1. **Immediate:** Rollback in Cloudflare Pages (instant)
2. **Short-term:** Revert commit on GitHub (5 minutes)
3. **Contact:** Team lead / technical support
4. **Last resort:** Switch Cloudflare back to `production` (coming-soon page)

---

## ✅ Summary

**Current Status:**
- ❌ Direct pushes to `production` are risky (auto-deploy)
- ✅ Need branch protection + PR workflow

**New Workflow:**
1. Work on `development` (safe to break)
2. PR to `coming-soon` (review + test)
3. PR to `production` (final approval)
4. Auto-deploys to live site

**Benefits:**
- ✅ Review step before going live
- ✅ Test on preview URLs first
- ✅ Easy rollback if needed
- ✅ Clear history of changes
- ✅ Team collaboration ready

**Next Step:**
Set up GitHub branch protection for `production` **today**.

---

**Created:** December 5, 2025  
**Purpose:** Safe deployment workflow to prevent unapproved changes  
**Priority:** Implement immediately

