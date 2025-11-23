# Subtitle Files for Videos

## 📝 Place Your Subtitle Files Here

### File Naming Convention

Use this format: `video-name-language.vtt`

Examples:
- `intro-en.vtt` (English subtitles for intro video)
- `intro-ua.vtt` (Ukrainian subtitles for intro video)
- `mariya-story-en.vtt` (English subtitles for Mariya's story)
- `mariya-story-ua.vtt` (Ukrainian subtitles for Mariya's story)

---

## 🔄 Converting .SRT to .VTT

If your subtitles are in .SRT format, you need to convert them to WebVTT (.VTT) format.

### Online Converters (Easiest):
- https://subtitletools.com/convert-to-vtt-online
- https://gotranscript.com/subtitle-converter

### Manual Conversion:

**Original .SRT file:**
```
1
00:00:00,000 --> 00:00:05,000
Welcome to Undaunted Spirits

2
00:00:05,500 --> 00:00:10,000
Since 2018, we've been supporting our community
```

**Converted .VTT file:**
```
WEBVTT

00:00:00.000 --> 00:00:05.000
Welcome to Undaunted Spirits

00:00:05.500 --> 00:00:10.000
Since 2018, we've been supporting our community
```

**Changes needed:**
1. Add `WEBVTT` as first line
2. Change commas (`,`) to periods (`.`) in timestamps
3. Remove subtitle numbers (optional, but cleaner)
4. Save with `.vtt` extension

---

## 📋 Example Structure

```
subtitles/
├── README.md (this file)
├── intro-video-en.vtt
├── intro-video-ua.vtt
├── mariya-story-en.vtt
├── mariya-story-ua.vtt
├── volunteer-day-en.vtt
└── volunteer-day-ua.vtt
```

---

## ✅ Testing Your Subtitles

After uploading to YouTube:
1. Go to YouTube Studio
2. Select your video
3. Click "Subtitles" in left menu
4. Click "Add" → "Upload file"
5. Select "With timing" 
6. Upload your .VTT file
7. Preview and publish

---

## 💡 Tips for Good Subtitles

- **Keep lines short:** Max 42 characters per line
- **Timing:** Leave 0.5 seconds between subtitles
- **Reading speed:** About 15-20 characters per second
- **Sync carefully:** Match spoken words precisely
- **Use line breaks** for better readability

---

## 🌍 Adding Ukrainian Subtitles

To add Ukrainian translations:
1. Duplicate your English .vtt file
2. Rename it with `-ua.vtt` suffix
3. Translate the text (keep timing the same)
4. Upload to YouTube as separate subtitle track

YouTube will let viewers choose which language to display!

---

Place your subtitle files in this folder and reference them in your video HTML code.

