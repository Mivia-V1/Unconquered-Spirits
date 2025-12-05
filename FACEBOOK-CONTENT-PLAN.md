# Facebook to Website Content Plan
## Voices from Our Community - Content Strategy

---

## 🎯 Objective

Populate the "Voices from Our Community" carousel with authentic stories from the Undaunted Spirits Facebook page, creating a dynamic, trustworthy showcase of real impact.

---

## 📋 Current Carousel Structure

The website currently has **3 story slots**:

1. **Story 1 (Active):** Mariya Gomzyak story - handmade socks for soldiers
2. **Story 2 (Preview):** Volunteer Team - Medical Supply Drive  
3. **Story 3 (Preview):** Member story - Olena P.

### Current Story Template Structure:
```html
<div class="story-card">
    <div class="story-header">
        <div class="story-author">
            <div class="author-initial">S</div>
            <div class="author-name">Name</div>
            <div class="author-role">Role/Context</div>
        </div>
    </div>
    <div class="story-image">
        <img src="path" alt="description">
    </div>
    <div class="story-content">
        <!-- Story text with paragraphs -->
    </div>
    <div class="story-footer">
        <div class="story-meta">💙 Category • Date</div>
    </div>
</div>
```

---

## 📱 Step 1: Identify Facebook Content Sources

### Facebook Page URL
**Primary:** https://www.facebook.com/undauntedspirits (or your actual page URL)

### Content Types to Look For:

#### Priority 1: Impact Stories
- ✅ **Beneficiary testimonials** (people helped)
- ✅ **Volunteer spotlights** (like Mariya Gomzyak)
- ✅ **Delivery/distribution posts** (showing direct help)
- ✅ **Thank you messages** from recipients or partners

#### Priority 2: Community Updates
- ⭐ **Project completion announcements**
- ⭐ **Partnership acknowledgments**
- ⭐ **Event recaps** with photos

#### Priority 3: Member Stories
- 💙 **Personal journeys** of members
- 💙 **Community gatherings**
- 💙 **Milestone celebrations**

### Story Selection Criteria:
1. **Has compelling photo(s)** - Essential for carousel
2. **Shows direct impact** - Aligns with Brand TOV
3. **Includes specific details** - Names, numbers, locations
4. **Emotionally resonant** - Builds connection
5. **Demonstrates volunteer action** - Reinforces 100% volunteer message

---

## 🔍 Step 2: Manual Content Extraction Process

### A. Identify Stories
1. **Review last 6-12 months** of Facebook posts
2. **Look for posts with:**
   - 20+ reactions/likes (shows engagement)
   - Photos showing people/impact
   - Detailed captions with names and context
   - Stories that align with current projects

### B. Document Each Story
Create a tracking spreadsheet:

| Post Date | Post URL | Story Type | Key Person | Photo Available | Priority |
|-----------|----------|------------|------------|-----------------|----------|
| Feb 2025 | fb.com/... | Volunteer | Mariya G. | ✅ | High |
| Jan 2025 | fb.com/... | Delivery | Team | ✅ | Medium |

### C. Extract Content for Website
For each selected story:
1. **Download photo(s)** from Facebook (high quality)
2. **Copy caption text** (translate if needed)
3. **Note key details:**
   - Names (get permission to use)
   - Dates
   - Locations (if relevant)
   - Impact numbers

---

## 📝 Step 3: Content Adaptation Guidelines

### Transform Facebook Post → Website Story

#### Facebook Post Format:
```
[Photo]
Today we delivered 50 wheelchairs to veterans in Ternopil region! 
Thanks to our amazing volunteer Iryna for coordinating this.
💙💛 #UndauntedSpirits #Ukraine
```

#### Website Story Format:
```html
<div class="story-header">
    <div class="author-name">Iryna Kovalenko</div>
    <div class="author-role">Volunteer Coordinator</div>
</div>

<div class="story-content">
    <p>In one week, our volunteer team delivered 50 wheelchairs 
    to veterans across the Ternopil region.</p>
    
    <p>"Every delivery is personal. We meet each veteran, hear 
    their story, and make sure the equipment fits perfectly," 
    Iryna shares.</p>
    
    <p>This is direct help in action. No paperwork. No delays. 
    Just volunteers getting mobility aids to those who need them.</p>
</div>

<div class="story-meta">
    💙 Community impact • January 2025
</div>
```

### Writing Guidelines (Brand TOV Aligned):
- ✅ **Short sentences.** Punchy style.
- ✅ **Use names** - Makes it personal
- ✅ **Include numbers** - "50 wheelchairs" not "many wheelchairs"
- ✅ **Emphasize direct help** - "delivered directly," "no delays"
- ✅ **Quote volunteers** - Adds authenticity
- ✅ **End with impact** - What changed because of this?

---

## 🖼️ Step 4: Photo Preparation

### Download from Facebook
**Method 1: Direct Download**
1. Open Facebook post
2. Click photo to enlarge
3. Right-click → "Save image as..."
4. Save to `/images/community/` folder

**Method 2: Higher Quality**
1. Find photo URL in Facebook
2. Replace size parameters in URL for higher resolution
3. Download larger version

### Photo Guidelines:
- **Min dimensions:** 800x600px (portrait preferred)
- **Format:** JPG or PNG
- **File naming:** `[story-type]-[person-name]-[date].jpg`
  - Example: `volunteer-iryna-delivery-jan2025.jpg`
- **Optimization:** Compress to < 500KB using TinyPNG.com

### Photo Requirements for Carousel:
- **Portrait orientation works best** (due to top-third focus CSS)
- **Faces visible** in top third of image
- **Clear, well-lit** photos
- **Shows action/impact** not just posed shots

---

## 🔄 Step 5: Implementation Workflow

### Option A: Manual Update (Recommended to Start)

**Frequency:** Monthly or bi-monthly

**Process:**
1. **Collect Stories** (1 hour)
   - Review Facebook posts from last month
   - Select 2-3 best stories
   - Download photos

2. **Prepare Content** (2 hours)
   - Adapt Facebook captions to website format
   - Translate if needed (EN ↔ UA)
   - Optimize photos
   - Get permissions if using names

3. **Update Website** (30 minutes)
   - Edit `index.html` and `ua/index.html`
   - Add new story card(s)
   - Upload photos to `/images/community/`
   - Test carousel functionality

4. **Deploy** (5 minutes)
   - Git commit and push
   - Verify on live site

**Total time per update:** ~3.5 hours

---

### Option B: Semi-Automated (Future Enhancement)

**Tools to Consider:**
1. **Facebook Graph API** - Pull posts automatically
2. **Custom CMS** - Admin panel to add stories
3. **Static Site Generator** - Markdown files for stories

**Pros:**
- Faster updates
- No HTML editing required
- Can pull latest posts automatically

**Cons:**
- Requires development setup
- Facebook API approval needed
- More complex maintenance

**Recommendation:** Start with **Option A** (manual), move to **Option B** after 3-6 months if update frequency increases.

---

## 📊 Step 6: Content Calendar

### Quarterly Story Refresh

| Quarter | Theme Focus | Story Types | Goal |
|---------|-------------|-------------|------|
| Q1 2025 | Winter Support | Food/heating deliveries, winter gear | Show emergency response |
| Q2 2025 | Medical Support | Mobility equipment, medical supplies | Highlight equipment impact |
| Q3 2025 | Community Building | Volunteer spotlights, gatherings | Emphasize 100% volunteer |
| Q4 2025 | Year in Review | Impact numbers, major milestones | Build year-end donations |

### Story Rotation Strategy:
- **Keep:** Mariya Gomzyak story (strong example, evergreen)
- **Rotate:** 2 other stories every 1-2 months
- **Total:** Maintain 3-5 stories in carousel
- **Archive:** Keep old stories in a "Past Stories" section (future page)

---

## ✅ Action Plan: Next Steps

### Immediate (This Week):
1. [ ] **Review Undaunted Spirits Facebook page**
2. [ ] **Identify 5-10 potential stories** from recent posts
3. [ ] **Download photos** from selected posts
4. [ ] **Get permissions** (if using specific names/photos)

### Short Term (Next 2 Weeks):
5. [ ] **Adapt 2 Facebook stories** to website format
6. [ ] **Translate stories** (EN + UA)
7. [ ] **Optimize photos** for web
8. [ ] **Update carousel** with new stories
9. [ ] **Test on mobile** and desktop

### Ongoing (Monthly):
10. [ ] **Review last month's posts** on Facebook
11. [ ] **Select best story** for carousel rotation
12. [ ] **Update website** with new content
13. [ ] **Track engagement** (Google Analytics on story section)

---

## 📌 Story Template Checklist

When creating each story, ensure:
- [ ] **Author name and role** are clear
- [ ] **Photo shows faces** (in top third if portrait)
- [ ] **Story length:** 2-4 short paragraphs
- [ ] **Includes quote** from volunteer/beneficiary (if possible)
- [ ] **Emphasizes direct help** (Brand TOV)
- [ ] **Date is accurate** (Month + Year)
- [ ] **Category emoji** is appropriate (💙 Community, ⭐ Project, 👥 Member)
- [ ] **Both EN and UA versions** match in tone and content

---

## 🔗 Resources & Tools

### Photo Optimization:
- **TinyPNG:** https://tinypng.com/ (compress images)
- **Squoosh:** https://squoosh.app/ (advanced compression)

### Translation:
- **DeepL:** https://www.deepl.com/translator (better than Google for Ukrainian)
- **Community review** for accuracy and cultural nuance

### Content Guidelines:
- **Brand TOV document** (reference for tone)
- **Current Mariya story** (as template)

### Facebook Tools:
- **Facebook Page Insights** - See which posts got most engagement
- **Post scheduling** - Plan ahead for content collection

---

## 💡 Pro Tips

### Getting Great Stories:
1. **Ask volunteers to share** their experiences on Facebook
2. **Encourage photo documentation** during distributions
3. **Get consent forms** for using photos with identifiable people
4. **Save photos in high resolution** for future use

### Making Stories Compelling:
1. **Lead with impact** - Numbers and specifics
2. **Include challenges** - What made it difficult? How was it overcome?
3. **End with hope** - What changed for the person helped?
4. **Keep it real** - Authentic > Perfect

### Maintaining Consistency:
1. **Create a story bank** - Google Doc with adapted stories ready to use
2. **Batch process** - Adapt 5-6 stories at once, deploy over time
3. **Set reminders** - Monthly calendar reminder to update carousel
4. **Track performance** - Which stories get most engagement?

---

## 📈 Success Metrics

### Track These:
- **Time spent on carousel section** (Google Analytics)
- **Scroll depth** - Do people read full stories?
- **Social shares** from story section
- **Donation conversion** - Do stories lead to donations?

### Target Goals:
- 3-5 compelling stories always available
- Monthly carousel refresh
- Stories showcase all project types
- Mix of volunteer and beneficiary perspectives

---

## 🎯 Summary

**Immediate Action:**
1. Go to Undaunted Spirits Facebook page
2. Find 2 new stories with great photos
3. Download photos and adapt captions
4. Update website carousel

**Long-term Vision:**
- Build a library of 20+ adapted stories
- Rotate stories monthly
- Create dedicated "Stories" page for archive
- Potentially automate with CMS in future

**Key Principle:**
Every story should demonstrate **direct help, volunteer-driven action, and real impact** - aligned with Brand TOV guidelines.

---

**Created:** December 5, 2025  
**Purpose:** Guide for populating community stories from Facebook  
**Next Review:** After first 3 story updates

