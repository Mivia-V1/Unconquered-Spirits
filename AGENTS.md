# AI Agent Guidelines
## Instructions for AI Assistants Working on Undaunted Spirits

---

## 🎯 Core Principles

### 1. Brand First
**All content must align with our Brand Tone of Voice.**

Before writing any copy, read `BRAND-TOV.md` and apply:
- The **Three-Yes Test** (Can you visualize it? Can it be proven? Is it unique to us?)
- **Concrete over abstract** language
- **Facts before feelings**
- **Show, don't claim**

### 2. User First Philosophy
Every decision should prioritize the **user's experience**:
- Fast load times over fancy features
- Clear navigation over clever design
- Mobile-first always
- Accessibility matters

### 3. Direct Help Messaging
Our brand promise: **"Every donation becomes direct help."**

Key phrases to reinforce:
- "100% volunteer-run"
- "0% admin costs"
- "No bureaucracy. No salaries. No delays."
- "Local volunteers delivering immediate support"

---

## 📚 Required Reading

**Before making any changes, agents must review:**

| Priority | Document | Purpose |
|----------|----------|---------|
| 1 | `BRAND-TOV.md` | **Mandatory** - Tone of voice, copywriting rules |
| 2 | `README.md` | Project structure, tech stack |
| 3 | `WEBSITE_PLAN.md` | Development roadmap, design system |
| 4 | `DEPLOYMENT-GUIDE.md` | How to deploy safely |
| 5 | `SECURITY-PLAN.md` | Security requirements |

**Supplementary docs:**
- `NEXT_STEPS.md` - Current priorities
- `FACEBOOK-CONTENT-PLAN.md` - Community story guidelines
- `VIDEO_GUIDE.md` - Video integration

---

## ⚖️ Decision Hierarchy

When requirements conflict, follow this priority:

```
1. Brand TOV Guidelines     (highest)
2. User Experience
3. Mobile Optimization
4. Security Requirements
5. Code Simplicity
6. Feature Completeness     (lowest)
```

**Example:** If a feature would be cool but hurts mobile performance → skip it.

---

## 🔧 Technical Requirements

### Tech Stack
- **Frontend:** HTML5, CSS3, Vanilla JavaScript
- **No frameworks required** - keep it simple
- **No npm dependencies** unless absolutely necessary
- **Static site** - no backend

### Mobile Optimization (Mandatory)
All code must be mobile-optimized:
- Test at 375px width minimum (iPhone SE)
- Use responsive CSS (flexbox, grid, media queries)
- Touch-friendly tap targets (min 44x44px)
- No horizontal scrolling
- Images must be responsive

### Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile Safari & Chrome

---

## 📝 File Editing Rules

### Bilingual Updates (Critical)
**Always update BOTH language versions together:**

| English File | Ukrainian File |
|--------------|----------------|
| `/index.html` | `/ua/index.html` |
| `/about.html` | `/ua/about.html` |
| `/contact.html` | `/ua/contact.html` |
| (any new page) | `/ua/(same page)` |

**Shared files (single source):**
- `/css/styles.css` - One file for both languages
- `/js/main.js` - One file for both languages
- `/images/` - Shared image directory

### Adding New Pages
1. Create English version first
2. Create Ukrainian version in `/ua/`
3. Add `hreflang` tags to both
4. Update navigation in both homepages
5. Test both versions on mobile

---

## ✅ Approval Workflow

### Changes That Need User Approval
- **Structural changes** (new pages, navigation changes, layout restructuring)
- Major feature additions
- Third-party integrations
- Changes to deployment configuration

### Changes Agents Can Make Independently
- Content updates (following Brand TOV)
- Bug fixes
- CSS improvements
- Accessibility improvements
- Documentation updates
- Image optimization

### When in Doubt
Ask before implementing. Present options with pros/cons.

---

## 💬 Commit Message Format

Use **Conventional Commits**:

```
<type>: <description>

[optional body]
```

### Types:
- `feat:` - New feature
- `fix:` - Bug fix
- `style:` - CSS/formatting (no logic change)
- `content:` - Content/copy updates
- `docs:` - Documentation only
- `refactor:` - Code restructuring
- `perf:` - Performance improvement
- `a11y:` - Accessibility improvement

### Examples:
```
feat: add volunteer signup form to contact page
fix: correct mobile alignment on story carousel
content: update hero section copy per Brand TOV
style: improve button hover states
docs: update AGENTS.md with new guidelines
```

### Rules:
- Use lowercase
- No period at end
- Keep under 72 characters
- Be specific

---

## 🎨 Copywriting Checklist

Before finalizing any text:

- [ ] **Three-Yes Test passed?**
  - Can you visualize it?
  - Can it be proven true/false?
  - Could only Undaunted Spirits say this?

- [ ] **Concrete language?**
  - Numbers instead of "many" or "some"
  - Specific actions instead of vague impact
  - Real names/places when appropriate

- [ ] **Brand voice applied?**
  - Human, warm, compassionate
  - Real, grounded in truth
  - Hopeful, focused on resilience
  - Transparent and clear
  - Brave and steady

- [ ] **Avoided forbidden phrases?**
  - ❌ "Making a difference"
  - ❌ "Changing lives"
  - ❌ "Supporting communities"
  - ❌ Sensationalism or guilt-based appeals

- [ ] **2-Second Rule?**
  - Message understood immediately
  - No jargon
  - Simple sentences

---

## 📱 Mobile Optimization Checklist

Before any deployment:

- [ ] Tested at 375px width
- [ ] No horizontal scrolling
- [ ] Text readable without zooming
- [ ] Buttons/links easily tappable
- [ ] Images scale properly
- [ ] Forms are usable on mobile
- [ ] Navigation works on touch
- [ ] Page loads under 3 seconds on 3G

---

## 🖼️ Image Guidelines

### Adding New Images
1. Place in appropriate folder:
   - `/images/community/` - Community photos
   - `/images/projects/` - Project images
   - `/images/team/` - Team photos
2. Optimize before adding (use TinyPNG or similar)
3. Use descriptive filenames: `volunteer-maria-food-delivery-jan2025.jpg`
4. Add meaningful `alt` text for accessibility
5. Prefer portrait orientation for people (faces in top third)

### CSS for Images
```css
/* Standard image styling */
.image-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center top; /* Faces visible */
}
```

---

## 🚀 Deployment

### Branch Structure
| Branch | Purpose |
|--------|---------|
| `production` | Live site (Coming Soon page) |
| `coming-soon` | Full development site |

### Safe Workflow
1. Work on `coming-soon` branch
2. Test on preview URL
3. Create PR for production when ready
4. Get approval for structural changes
5. Merge → Auto-deploys

### Commands
```bash
# Check current branch
git branch

# Switch to development
git checkout coming-soon

# Commit changes
git add .
git commit -m "type: description"
git push origin coming-soon
```

---

## 🔐 Security Awareness

- Never commit API keys or secrets
- Use environment variables for sensitive data
- Follow CSP guidelines when adding scripts
- Report security concerns immediately
- Reference `SECURITY-PLAN.md` for full details

---

## ❌ What NOT To Do

1. **Don't add features without approval** for structural changes
2. **Don't skip the Ukrainian version** when updating English
3. **Don't use abstract marketing language** - be concrete
4. **Don't break mobile** - always test responsive
5. **Don't push directly to production** without review
6. **Don't add heavy dependencies** - keep it simple
7. **Don't ignore Brand TOV** - it's mandatory
8. **Don't use sensationalism** - respect dignity

---

## ✨ Examples of Good vs Bad

### Copy Examples

**❌ Bad (abstract):**
> "We're making a difference in communities across Ukraine."

**✅ Good (concrete):**
> "Last month, volunteers delivered 52 food packages to displaced families in Ternopil."

---

**❌ Bad (promotional):**
> "Join our amazing journey of transformation!"

**✅ Good (factual):**
> "100% volunteer-run. Every donation goes directly to aid."

---

### Code Examples

**❌ Bad (not mobile-friendly):**
```css
.container {
    width: 1200px;
    padding: 50px;
}
```

**✅ Good (responsive):**
```css
.container {
    max-width: 1200px;
    width: 100%;
    padding: 2rem;
}

@media (max-width: 768px) {
    .container {
        padding: 1rem;
    }
}
```

---

## 📞 Questions?

If unclear on any guideline:
1. Check `BRAND-TOV.md` first
2. Review relevant documentation
3. Ask the user for clarification
4. When in doubt, prioritize user experience

---

## 📋 Quick Reference Card

```
┌─────────────────────────────────────────────────┐
│           UNDAUNTED SPIRITS - AGENT RULES        │
├─────────────────────────────────────────────────┤
│ ✓ Brand TOV first, always                       │
│ ✓ User experience is priority                   │
│ ✓ Mobile-optimized, no exceptions               │
│ ✓ Update EN + UA together                       │
│ ✓ Conventional commits                          │
│ ✓ Ask before structural changes                 │
│ ✓ Keep it simple - vanilla HTML/CSS/JS          │
│ ✓ Test on mobile before deploying               │
├─────────────────────────────────────────────────┤
│ Key Message: "Every donation becomes direct help"│
│ Key Values:  100% volunteer | 0% admin | Direct │
└─────────────────────────────────────────────────┘
```

---

**Document Version:** 1.0  
**Created:** December 12, 2025  
**Owner:** Undaunted Spirits Development Team

