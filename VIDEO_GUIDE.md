# Video Integration Guide for Undaunted Spirits

## 🎥 Two Approaches for Adding Videos

### Option 1: YouTube/Vimeo Hosting (⭐ RECOMMENDED)

**Pros:**
- ✅ Free hosting
- ✅ Automatic compression and optimization
- ✅ Built-in subtitle support
- ✅ Fast loading (CDN)
- ✅ Mobile-friendly
- ✅ No bandwidth costs
- ✅ Better for SEO
- ✅ Shareable links

**Cons:**
- ⚠️ Requires YouTube/Vimeo account
- ⚠️ Videos are public (unless unlisted)

### Option 2: Self-Hosted Videos

**Pros:**
- ✅ Complete control
- ✅ No external dependencies
- ✅ Keeps users on your site

**Cons:**
- ❌ Large file sizes
- ❌ Hosting/bandwidth costs
- ❌ Slower page loads
- ❌ Must optimize manually
- ❌ GitHub has 100MB file limit

---

## 🌟 RECOMMENDED: YouTube Approach

### Step 1: Upload Videos to YouTube

1. **Create YouTube Account** (if you don't have one)
   - Consider: "Undaunted Spirits Official" channel
   - Use your organization email

2. **Upload Your Videos**
   - Go to https://studio.youtube.com
   - Click "Create" → "Upload videos"
   - Add titles in both English and Ukrainian
   - Write descriptions with donation links

3. **Add Subtitles**
   - In YouTube Studio, select your video
   - Click "Subtitles" in left menu
   - Upload your English subtitle file (.SRT or .VTT)
   - Add Ukrainian subtitles too if available

4. **Set Video Settings**
   - **Public:** Everyone can find it
   - **Unlisted:** Only people with link can watch (good for website-only)
   - **Private:** Only you can see it

5. **Get Embed Code**
   - Click "Share" → "Embed"
   - Copy the embed code
   - We'll use this on your website

### Step 2: Add Videos to Website

Here's how to embed YouTube videos:

#### A. Hero Video (Homepage)

Add this to your hero section in `index.html`:

```html
<!-- Replace the mission-image div with: -->
<div class="mission-video">
    <div class="video-container">
        <iframe 
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID" 
            title="Undaunted Spirits - Our Story"
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
        </iframe>
    </div>
</div>
```

Add this CSS to `css/styles.css`:

```css
.mission-video {
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 4px 20px rgba(0,0,0,0.1);
}

.video-container {
    position: relative;
    padding-bottom: 56.25%; /* 16:9 aspect ratio */
    height: 0;
    overflow: hidden;
}

.video-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
```

#### B. Video Gallery Section

Create a new section on your homepage:

```html
<!-- Add before the community-stories section -->
<section class="video-gallery">
    <div class="section-header">
        <h2 class="en-only">See Our Impact in Action</h2>
        <h2 class="ua-only">Подивіться наш вплив у дії</h2>
        
        <p class="en-only">Watch stories from our community and see how your support makes a difference</p>
        <p class="ua-only">Дивіться історії нашої спільноти та бачте, як ваша підтримка робить різницю</p>
    </div>
    
    <div class="videos-grid">
        <!-- Video 1 -->
        <div class="video-card">
            <div class="video-container">
                <iframe 
                    src="https://www.youtube.com/embed/VIDEO_ID_1" 
                    title="Community Support"
                    frameborder="0" 
                    allowfullscreen>
                </iframe>
            </div>
            <div class="video-info">
                <h3 class="en-only">Supporting Our Community</h3>
                <h3 class="ua-only">Підтримка нашої громади</h3>
                <p class="en-only">See how we deliver essential supplies to families in need.</p>
                <p class="ua-only">Подивіться, як ми доставляємо необхідні матеріали сім'ям, які потребують допомоги.</p>
            </div>
        </div>
        
        <!-- Video 2 -->
        <div class="video-card">
            <div class="video-container">
                <iframe 
                    src="https://www.youtube.com/embed/VIDEO_ID_2" 
                    title="Volunteer Activities"
                    frameborder="0" 
                    allowfullscreen>
                </iframe>
            </div>
            <div class="video-info">
                <h3 class="en-only">Volunteer Stories</h3>
                <h3 class="ua-only">Історії волонтерів</h3>
                <p class="en-only">Meet our dedicated volunteers making a difference every day.</p>
                <p class="ua-only">Познайомтеся з нашими відданими волонтерами, які роблять різницю щодня.</p>
            </div>
        </div>
        
        <!-- Video 3 -->
        <div class="video-card">
            <div class="video-container">
                <iframe 
                    src="https://www.youtube.com/embed/VIDEO_ID_3" 
                    title="Impact Stories"
                    frameborder="0" 
                    allowfullscreen>
                </iframe>
            </div>
            <div class="video-info">
                <h3 class="en-only">Real Impact Stories</h3>
                <h3 class="ua-only">Справжні історії впливу</h3>
                <p class="en-only">Hear directly from those we've helped about their journey.</p>
                <p class="ua-only">Послухайте безпосередньо від тих, кому ми допомогли, про їхню подорож.</p>
            </div>
        </div>
    </div>
</section>
```

Add this CSS:

```css
.video-gallery {
    padding: 5rem 2rem;
    background: white;
}

.videos-grid {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 3rem;
}

.video-card {
    background: white;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 4px 20px rgba(0,0,0,0.1);
    transition: transform 0.3s;
}

.video-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 30px rgba(0,0,0,0.15);
}

.video-info {
    padding: 1.5rem;
}

.video-info h3 {
    font-size: 1.3rem;
    color: #0057B7;
    margin-bottom: 0.75rem;
}

.video-info p {
    color: #666;
    line-height: 1.6;
}

@media (max-width: 768px) {
    .videos-grid {
        grid-template-columns: 1fr;
    }
}
```

---

## 🎬 Alternative: Self-Hosted Videos (If You Must)

### File Preparation

If you must self-host, you need to optimize your videos first:

#### 1. Compress Your Videos

Use **HandBrake** (free) or **FFmpeg**:

```bash
# Install FFmpeg (Mac)
brew install ffmpeg

# Compress video for web
ffmpeg -i input.mp4 -c:v libx264 -crf 23 -preset medium -c:a aac -b:a 128k output.mp4

# Create multiple sizes for responsive video
ffmpeg -i input.mp4 -s 1920x1080 -c:v libx264 -crf 23 video-1080p.mp4
ffmpeg -i input.mp4 -s 1280x720 -c:v libx264 -crf 23 video-720p.mp4
ffmpeg -i input.mp4 -s 854x480 -c:v libx264 -crf 23 video-480p.mp4
```

#### 2. Convert Subtitles to WebVTT

If your subtitles are in .SRT format, convert to .VTT:

```bash
# Manual conversion or use online tool
# Just change .srt to .vtt and add:
WEBVTT

00:00:00.000 --> 00:00:05.000
Your subtitle text here
```

#### 3. File Structure

```
videos/
├── raw/                    # Original files (don't upload)
├── optimized/              # Compressed versions for web
│   ├── intro-1080p.mp4
│   ├── intro-720p.mp4
│   └── intro-480p.mp4
└── poster/                 # Thumbnail images
    └── intro-poster.jpg

subtitles/
├── intro-en.vtt           # English subtitles
└── intro-ua.vtt           # Ukrainian subtitles
```

#### 4. HTML5 Video Player

```html
<div class="video-player">
    <video controls preload="metadata" poster="videos/poster/intro-poster.jpg">
        <!-- Multiple sources for compatibility -->
        <source src="videos/optimized/intro-720p.mp4" type="video/mp4">
        
        <!-- Subtitles -->
        <track 
            label="English" 
            kind="subtitles" 
            srclang="en" 
            src="subtitles/intro-en.vtt" 
            default>
        <track 
            label="Українська" 
            kind="subtitles" 
            srclang="uk" 
            src="subtitles/intro-ua.vtt">
        
        <!-- Fallback text -->
        <p class="en-only">Your browser doesn't support HTML5 video. 
           <a href="videos/optimized/intro-720p.mp4">Download the video</a>.</p>
        <p class="ua-only">Ваш браузер не підтримує HTML5 відео. 
           <a href="videos/optimized/intro-720p.mp4">Завантажте відео</a>.</p>
    </video>
</div>
```

CSS for video player:

```css
.video-player {
    max-width: 1200px;
    margin: 2rem auto;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 4px 20px rgba(0,0,0,0.1);
}

.video-player video {
    width: 100%;
    height: auto;
    display: block;
}
```

### ⚠️ Important Considerations for Self-Hosting

1. **File Size Limits:**
   - GitHub: 100MB max per file
   - GitHub Pages: 1GB total repository size
   - Solution: Use Git LFS (Large File Storage) or external hosting

2. **Hosting Alternatives for Large Videos:**
   - **Vimeo** (better privacy options than YouTube)
   - **Cloudflare Stream** ($1 per 1,000 minutes viewed)
   - **Bunny.net** (affordable video CDN)
   - **AWS S3 + CloudFront** (pay per bandwidth)

---

## 🎯 My Recommendation

**For Undaunted Spirits, I strongly recommend:**

### Phase 1: YouTube (Now)
- Free, reliable, and professional
- Upload your videos with subtitles
- Embed on your website
- Start building your YouTube presence
- SEO benefits from YouTube search

### Phase 2: Dedicated Video Platform (Future)
- As you grow, consider Vimeo Pro ($20/month)
- Better privacy controls
- No ads
- Custom branding
- Better analytics

---

## 📝 Subtitle File Format (.VTT)

Your English subtitles should be in WebVTT format:

```vtt
WEBVTT

00:00:00.000 --> 00:00:05.000
Welcome to Undaunted Spirits.
Ласкаво просимо до Нескорених духом.

00:00:05.500 --> 00:00:10.000
Since 2018, we've been supporting our community.
З 2018 року ми підтримуємо нашу громаду.

00:00:10.500 --> 00:00:15.000
Together, we remain undaunted.
Разом ми залишаємося нескореними.
```

---

## 🚀 Quick Start Steps

### If Using YouTube (Recommended):

1. **Today:**
   - [ ] Create YouTube channel "Undaunted Spirits Official"
   - [ ] Upload first video with English subtitles
   - [ ] Get embed code

2. **This Week:**
   - [ ] Add video section to homepage (code above)
   - [ ] Test on mobile and desktop
   - [ ] Add Ukrainian subtitles

3. **Ongoing:**
   - [ ] Upload more videos regularly
   - [ ] Build YouTube subscriber base
   - [ ] Share videos on social media

### If Self-Hosting:

1. **Video Preparation:**
   ```bash
   # Compress your video
   ffmpeg -i your-video.mp4 -c:v libx264 -crf 23 -preset medium optimized.mp4
   ```

2. **Check file size:**
   ```bash
   ls -lh optimized.mp4
   # If over 50MB, use YouTube or video hosting service
   ```

3. **Upload to alternative hosting:**
   - Create free Vimeo account
   - Upload video
   - Get embed code
   - Use same embedding method as YouTube

---

## 💡 Content Ideas for Videos

Based on your homepage, consider these videos:

1. **Organization Introduction** (2-3 min)
   - Your mission and story
   - Chairperson Svetlana speaking
   - B-roll of activities

2. **Project Spotlights** (1-2 min each)
   - Medical equipment distribution
   - Frontline supply deliveries
   - Veteran rehabilitation
   - Family support programs

3. **Member Testimonials** (1-2 min)
   - Like Mariya's story
   - Show her making the socks
   - Impact on soldiers

4. **Volunteer Experiences** (1-2 min)
   - Day in the life
   - Why they volunteer
   - Call to action

5. **Impact Reports** (2-3 min quarterly)
   - Statistics and achievements
   - Thank donors
   - Show tangible results

6. **Donation Appeals** (30-60 sec)
   - Urgent needs
   - Specific campaigns
   - Strong call-to-action

---

## 📊 Video Best Practices

### Technical:
- **Resolution:** 1080p (1920x1080) or 720p minimum
- **Format:** MP4 (H.264 codec)
- **Aspect Ratio:** 16:9 for web
- **Length:** 1-3 minutes ideal (attention span)
- **File Size:** Under 100MB for self-hosting

### Content:
- ✅ Start with strong hook (first 5 seconds)
- ✅ Show faces and emotions
- ✅ Include call-to-action
- ✅ Add contact/donation info at end
- ✅ Keep it authentic and heartfelt
- ✅ Use both languages when possible

### Accessibility:
- ✅ Always include subtitles (English + Ukrainian)
- ✅ Add audio descriptions if possible
- ✅ Good lighting and clear audio
- ✅ High contrast text in video

---

## 📞 Need Help?

**Free Video Tools:**
- **Editing:** DaVinci Resolve (free)
- **Compression:** HandBrake (free)
- **Subtitles:** Subtitle Edit (free)
- **Screen recording:** OBS Studio (free)

**Paid but Worth It:**
- **Adobe Premiere Pro:** $20/month (professional)
- **Descript:** $12/month (auto-transcription)
- **Vimeo Pro:** $20/month (hosting)

---

## 🎬 Let's Get Your Videos Live!

Tell me:
1. **How many videos do you have?**
2. **What's the total file size?**
3. **Are subtitles in .SRT or .VTT format?**
4. **Do you prefer YouTube or need privacy?**

I'll help you get them online! 🚀

