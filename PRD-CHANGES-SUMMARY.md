# PRD Updates Summary
## About Us Page - Undaunted Spirits

**Date:** December 12, 2025  
**Document:** PRD-ABOUT-US-PAGE.md

---

## ✅ Changes Made

### 1. **Leadership Section - Simplified to Chairperson Only**

**Before:**
- Three leadership profiles (Chairperson, Deputy Head, Board Member)
- Photos and bios for all three
- Individual quotes from each

**After:**
- **Focus on Chairperson only** (Svetlana Bychkovska)
- **Video message feature** (2-3 minutes)
- **Video already available:** https://youtu.be/xZOCrM6lrKA ✅
- Single professional headshot to accompany video
- Other board members mentioned in governing structure only
- No individual bios for Deputy Head or Board Member

**Video Details:**
- **YouTube Link:** https://youtu.be/xZOCrM6lrKA
- **Video ID:** xZOCrM6lrKA
- **Status:** ✅ Already produced and hosted
- **Hosting:** YouTube (free CDN, automatic optimization)
- **Subtitles:** Available via YouTube captions
- **Quality:** Professional, ready to embed

---

### 2. **Testimonials Section - Removed**

**Before:**
- Section 8 included space for 2-3 beneficiary testimonials

**After:**
- Testimonials section completely removed
- Note: "Testimonials will be included elsewhere" (likely homepage or dedicated testimonials page)
- Impact section focuses on statistics and media recognition only

---

### 3. **Content Requirements Updated**

**Removed:**
- ❌ Multiple leadership photos (3)
- ❌ Multiple leadership quotes
- ❌ Multiple detailed biographies
- ❌ Testimonials from beneficiaries

**Added:**
- ✅ Chairperson video message (2-3 min)
- ✅ Video subtitles requirement
- ✅ Video production guidelines
- ✅ YouTube hosting recommendation

**Still Needed:**
- ✅ Chairperson photo (1 headshot)
- ✅ Program photos (5-8 images)
- ✅ Annual report (if available)
- ✅ Media coverage links

---

### 4. **Technical Specifications Updated**

**File Structure:**
```
Added:
/videos/about/
  ├── chairperson-message-en.mp4
  ├── chairperson-message-ua.mp4
  └── chairperson-poster.jpg

Removed:
/images/about/leadership/
  ├── olga-pavlyshyn.jpg      [REMOVED]
  └── oksana-sobkiv.jpg       [REMOVED]
```

**JavaScript Requirements:**
- Added: Video player initialization
- Added: Video analytics tracking
- Added: Subtitle toggling functionality
- Kept: Timeline animation, stats counter, smooth scrolling

---

### 5. **Design Requirements Updated**

**Leadership Component:**

**Before:**
- Grid of 3 leadership cards
- Expandable bio sections
- Hover effects on cards

**After:**
- Single prominent video message section
- Photo + video player layout
- Two-column desktop layout (photo left, video right)
- Mobile: Stacked layout
- Governing structure summary below video

**Layout:**
```
Desktop:
┌────────────┬──────────────────┐
│  Photo     │  Video Player    │
│  300x300px │  16:9 ratio      │
│            │  2-3 min message │
└────────────┴──────────────────┘

Mobile:
┌──────────────────┐
│     Photo        │
├──────────────────┤
│  Video Player    │
└──────────────────┘
```

---

### 6. **Budget & Resources Updated**

**Budget Estimate:**
- **Before:** $0-500
- **After:** $0-400

**Reduced Costs:**
- Leadership photography: ~~$0-300~~ → $0-100 (only 1 photo)
- Translation: ~~$0-200~~ → $0-150 (less text content)

**New Costs:**
- Video editing/subtitles: $0-50
- Video production (if needed): $0-200

**Team Hours:**
- Content Writer: 20h → **15h** (less bio content)
- Translator: 10h → **8h** (less text)
- Designer: 15h → **12h** (simpler layout)
- Added: Video Editor: **5h** (optional)

---

### 7. **Timeline Updated**

**Phase 1 Changes:**
- Day 1-2: Request video message instead of multiple photos
- Day 3-4: Write video description/context
- Day 5-7: Create video subtitles if needed

**Phase 2 Changes:**
- Video integration work
- Test video playback across devices
- Optimize video loading performance

---

### 8. **Risk Management Updated**

**New Risk:**
- Poor quality chairperson video
  - Mitigation: Provide detailed video guidelines
  - Contingency: Professional video production budget

**New Risk:**
- Video hosting/bandwidth issues
  - Mitigation: Use YouTube (free CDN)
  - Contingency: Multiple resolution options

**Removed Risk:**
- ~~Poor quality leadership photos~~ (now just 1 photo)

---

## 📊 Impact of Changes

### Scope Reduction:
- **Content complexity:** Reduced by ~30%
- **Assets needed:** 3 photos → 1 photo + 1 video
- **Development time:** ~15% faster (less components)

### Scope Addition:
- **Video integration:** New technical requirement
- **Video optimization:** Performance considerations
- **Subtitle management:** Translation/accessibility work

### Net Result:
- **Simpler overall** but with one sophisticated component (video)
- **More personal** - video creates stronger connection than text bios
- **Better user experience** - single compelling video vs. multiple cards to read
- **Slightly lower budget** - fewer assets to produce

---

## ✨ Benefits of Video Approach

1. **Stronger Emotional Connection**
   - Hearing Svetlana's voice and seeing her passion
   - More authentic than written bios
   - Builds immediate trust

2. **Better Engagement**
   - Video keeps users on page longer
   - Higher conversion potential
   - More shareable content

3. **Efficient Communication**
   - 2-3 minutes can convey more than paragraphs of text
   - Shows personality and leadership style
   - Demonstrates transparency

4. **Professional Appearance**
   - Modern, forward-thinking organization
   - Shows investment in communication
   - Appeals to international donors

5. **Flexibility**
   - Can update video message periodically
   - Can add more videos in future (testimonials, programs, etc.)
   - Sets precedent for video content strategy

---

## 🎬 Video Production Guidelines (Added to PRD)

**Technical Requirements:**
- Resolution: 1080p minimum (1920x1080)
- Format: MP4 (H.264 codec)
- Frame rate: 24fps or 30fps
- Audio: Clear, professional quality
- File size: Optimized for web (<100MB)

**Content Guidelines:**
- Duration: 2-3 minutes (optimal for attention span)
- Language: Ukrainian (with English subtitles) or English (with Ukrainian subtitles)
- Tone: Warm, authentic, professional
- Setting: Well-lit, quiet location
- Background: Clean, professional (office or organization setting)
- Clothing: Professional but approachable

**Message Structure:**
1. Introduction (15 seconds)
   - Who she is, role in organization
2. Our Story (45 seconds)
   - Journey from 2018 to today
   - Why the mission matters
3. Our Impact (60 seconds)
   - Specific examples of people helped
   - What makes organization unique
4. Call to Action (30 seconds)
   - How viewers can help
   - Gratitude and invitation to join

**Hosting Recommendation:**
- **Primary:** YouTube (free, reliable, SEO benefits)
- **Alternative:** Direct embed with Cloudflare video
- **Fallback:** Vimeo (better privacy controls)

---

## 📝 Updated Content Checklist

### ✅ What We Have (from documents):
- [x] Legal registration information
- [x] Organizational structure
- [x] Mission and values
- [x] Program descriptions
- [x] Impact statistics
- [x] Contact information

### 🎥 What We Need from Organization:
- [ ] **Chairperson video message** (2-3 min, 1080p)
- [ ] **Chairperson photo** (high-res headshot)
- [ ] **Video subtitles** (if video is single-language)
- [ ] **Program photos** (5-8 recent activity photos)
- [ ] **Annual report** (optional, for transparency)
- [ ] **Media coverage links** (optional)

### ❌ What We No Longer Need:
- [x] ~~Deputy Head photo and bio~~
- [x] ~~Board Member photo and bio~~
- [x] ~~Multiple leadership quotes~~
- [x] ~~Beneficiary testimonials~~

---

## 🚀 Next Steps

1. **Request Video from Svetlana:**
   - Send video production guidelines
   - Suggest talking points
   - Request 1-2 takes for options
   - Timeline: Week 1, Days 1-3

2. **Request Single Photo:**
   - Professional headshot
   - High resolution (800x800px minimum)
   - Clean background

3. **Proceed with Development:**
   - Begin with written content
   - Create video player component
   - Design layout around video-first approach

4. **Plan for Future:**
   - Consider quarterly video updates
   - Potential video testimonials section (separate page)
   - Building a video library over time

---

## Summary

The PRD has been successfully updated to:
- ✅ Feature chairperson video message prominently
- ✅ Remove other leadership bios (simplified scope)
- ✅ Remove testimonials section (moved elsewhere)
- ✅ Add video production and integration specifications
- ✅ Update budget, timeline, and resources accordingly

The result is a more focused, personal, and modern About Us page that will create stronger emotional connection with visitors while being more efficient to produce.

---

**Document Status:** ✅ Updated and Ready for Review  
**Next Action:** Get stakeholder approval and begin content collection
