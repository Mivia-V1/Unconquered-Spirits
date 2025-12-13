# 📱 Community Feed & Stats Ticker Update Guide

This guide explains how to update the "This week in our community" section on the website.

The system has **two components**:
1. **Stats Ticker** - Scrolling weekly numbers (meals, wheelchairs, etc.)
2. **Story Cards** - Expandable Facebook story cards

---

## 📁 File Locations

### Stats Ticker (the scrolling numbers)
```
/data/ticker-stats.json
```
**To update weekly stats:** Just edit this one file!

### Facebook Stories
```
/data/community-updates.json
```

---

## 🎯 Quick Start: Update Weekly Stats

**To update the scrolling stats ticker, edit `/data/ticker-stats.json`:**

```json
{
  "lastUpdated": "2025-12-14",
  "title": {
    "en": "This week in our community",
    "ua": "Цього тижня у нашій громаді"
  },
  "stats": [
    { "emoji": "🍽️", "value": 52, "label": { "en": "Meals", "ua": "Їжа" } },
    { "emoji": "🏠", "value": 4, "label": { "en": "Accommodation", "ua": "Житло" } },
    { "emoji": "💊", "value": 10, "label": { "en": "Medical", "ua": "Медичне" } },
    { "emoji": "🦽", "value": 3, "label": { "en": "Wheelchairs", "ua": "Візки" } },
    { "emoji": "🧴", "value": 18, "label": { "en": "Sanitary", "ua": "Гігієна" } },
    { "emoji": "👕", "value": 30, "label": { "en": "Clothing", "ua": "Одяг" } }
  ]
}
```

Just change the `value` numbers each week! Commit & push.

---

## 🖼️ How It Looks

The community feed displays:
1. **Quick stats** - Key numbers at a glance (📦 47 food packages, 🦽 2 wheelchairs)
2. **Story cards** - Expandable cards with thumbnail, title, preview text
3. **Follow CTA** - Button to follow on Facebook

---

## ✏️ Adding a New Story from Facebook

### Step 1: Choose a Post
Pick a compelling Facebook post with:
- ✅ A good photo
- ✅ A heartwarming story
- ✅ Specific numbers/impact

### Step 2: Add the Image
1. Save the photo from Facebook
2. Add it to `images/community/` folder
3. Use a descriptive filename: `maria-walker-dec2025.jpg`

### Step 3: Edit the JSON

Open `data/community-updates.json` and add a new post to the `"posts"` array:

```json
{
  "id": 4,
  "image": "images/community/your-image.jpg",
  "title": {
    "en": "English Title",
    "ua": "Український заголовок"
  },
  "preview": {
    "en": "Short 1-2 sentence preview in English.",
    "ua": "Короткий попередній перегляд українською."
  },
  "fullText": {
    "en": "The full Facebook post text in English. Include all the details, emotions, and thank yous! 💙💛",
    "ua": "Повний текст публікації українською. Включіть усі деталі, емоції та подяки! 💙💛"
  },
  "date": "2025-12-14",
  "fbPostUrl": "https://facebook.com/your-post-url",
  "stats": {
    "emoji": "📦",
    "count": 12,
    "label": {
      "en": "families helped",
      "ua": "родинам допомогли"
    }
  }
}
```

### Step 4: Update Quick Stats (Optional)

Edit the `"quickStats"` array at the bottom:

```json
"quickStats": [
  {
    "emoji": "📦",
    "count": 47,
    "text": {
      "en": "food packages this week",
      "ua": "продуктових наборів цього тижня"
    }
  }
]
```

### Step 5: Update Metadata

Change the date at the top:
```json
{
  "lastUpdated": "2025-12-14",
  "weekOf": "December 9-14, 2025",
  ...
}
```

---

## 📋 JSON Fields Reference

### Post Fields

| Field | Required | Description |
|-------|----------|-------------|
| `id` | Yes | Unique number (increment from last) |
| `image` | Yes | Path to image file |
| `title.en` | Yes | English title (keep short) |
| `title.ua` | Yes | Ukrainian title |
| `preview.en` | Yes | 1-2 sentence teaser in English |
| `preview.ua` | Yes | 1-2 sentence teaser in Ukrainian |
| `fullText.en` | Yes | Full post in English (can include emojis) |
| `fullText.ua` | Yes | Full post in Ukrainian |
| `date` | Yes | YYYY-MM-DD format |
| `fbPostUrl` | No | Link to original FB post (or `null`) |
| `stats.emoji` | No | Stat badge emoji |
| `stats.count` | No | Stat badge number |
| `stats.label.en` | No | Stat badge text (English) |
| `stats.label.ua` | No | Stat badge text (Ukrainian) |

---

## 📋 Emoji Quick Reference

| Activity | Emoji |
|----------|-------|
| Food packages | 📦 |
| Medicine/Medical | 💊 or 🏥 |
| Wheelchair | 🦽 |
| Walker/Mobility | 🚶 |
| Clothing | 🧥 or 👕 |
| Blankets | 🛏️ |
| Children's items | 🧸 |
| Families helped | 👨‍👩‍👧 |
| People helped | 👥 |
| Home visit | 🏠 |
| Volunteer hours | ⏱️ |

---

## ⚡ Weekly Workflow

### Every Week:

1. **Review Facebook** - Pick 3-4 best posts
2. **Save photos** - Download to `images/community/`
3. **Translate** - Write EN + UA versions
4. **Edit JSON** - Update `data/community-updates.json`
5. **Test locally** - `python3 -m http.server 8080`
6. **Commit & push** - Git push to update live site

### Commit Message:
```
content: update community feed for Dec 9-14
```

---

## 📝 Template for Copy-Paste

```json
{
  "id": NEW_ID,
  "image": "images/community/FILENAME.jpg",
  "title": {
    "en": "ENGLISH TITLE",
    "ua": "УКРАЇНСЬКИЙ ЗАГОЛОВОК"
  },
  "preview": {
    "en": "SHORT ENGLISH PREVIEW",
    "ua": "КОРОТКИЙ УКРАЇНСЬКИЙ ПОПЕРЕДНІЙ ПЕРЕГЛЯД"
  },
  "fullText": {
    "en": "FULL ENGLISH POST TEXT",
    "ua": "ПОВНИЙ ТЕКСТ ПУБЛІКАЦІЇ УКРАЇНСЬКОЮ"
  },
  "date": "YYYY-MM-DD",
  "fbPostUrl": null,
  "stats": {
    "emoji": "📦",
    "count": NUMBER,
    "label": {
      "en": "STAT LABEL",
      "ua": "МІТКА СТАТИСТИКИ"
    }
  }
}
```

---

## ✅ Pre-Push Checklist

- [ ] JSON is valid (test at [jsonlint.com](https://jsonlint.com))
- [ ] All posts have both EN and UA text
- [ ] Images exist in `images/community/`
- [ ] Dates are YYYY-MM-DD format
- [ ] `lastUpdated` is current
- [ ] IDs are unique
- [ ] Tested locally on both EN and UA pages

---

## 🧪 Testing Locally

```bash
cd /Users/gavinwerner/NGO
python3 -m http.server 8080
```

Then visit:
- English: `http://localhost:8080`
- Ukrainian: `http://localhost:8080/ua/`

---

## 💡 Writing Tips

### Titles
- Keep under 50 characters
- Be specific: "Maria's new walker" not "We helped someone"
- Use names when permitted

### Preview Text
- 1-2 sentences max
- Hook the reader
- Leave them wanting more

### Full Text
- Include the emotional story
- Use emojis like the original FB post
- Thank donors/volunteers
- Keep it authentic

---

## 🆘 Troubleshooting

### Stories not showing?
- Check browser console (F12) for errors
- Verify JSON syntax
- Ensure image paths are correct

### Wrong language showing?
- Check you're on the right URL (/ua/ for Ukrainian)
- Clear browser cache

### Images not loading?
- Check file exists in `images/community/`
- Verify path in JSON matches exactly
- Check file extension (.jpg vs .jpeg)

---

**Last updated:** December 13, 2025
