# AESOP Website Content Management Guide

## Overview

This guide explains how to easily update content on the AESOP website without needing technical knowledge. All content is stored in simple JSON files that you can edit through our admin interface or directly.

---

## Quick Start

### Method 1: Using the Admin Interface (Easiest)

1. Open `admin.html` in your web browser
2. Select the tab for what you want to update
3. Fill in the form with your new information
4. Click "Generate Updated JSON"
5. Copy the generated JSON code
6. Save it to the corresponding file in the `data/` folder

### Method 2: Direct File Editing

1. Open the JSON file in the `data/` folder
2. Edit the values (keep the structure intact)
3. Save the file
4. Refresh your website to see changes

---

## Updating Statistics

### Location
- **File:** `data/stats.json`
- **Admin Tab:** Statistics
- **Appears on:** Home page, multiple sections

### What You Can Update

```json
{
  "totalStudents": "~900",           ← Total students served
  "totalVolunteers": "~110",         ← Total volunteers
  "costPerStudent": "$5",            ← Cost per student per year
  "scholarshipsAbroad": "15",        ← Students who got scholarships
  "studentsToTeachers": "25+",       ← Students who became teachers
  "financialAid": "$9,000",          ← Total financial aid given
  "advancedEnglish": "~400",         ← Students in advanced English
  "completedOneCourse": "~900"       ← Students who completed a course
}
```

### How to Update

**Using Admin Interface:**
1. Go to admin.html
2. Click "Statistics" tab
3. Update the numbers
4. Click "Generate Updated JSON"
5. Copy the output
6. Open `data/stats.json` and replace everything with the new JSON
7. Save

**Direct Editing:**
1. Open `data/stats.json`
2. Change only the values (keep quotes and commas)
3. Save

**Example:**
If you now have 950 students instead of 900:
```json
"totalStudents": "~950"
```

---

## Managing Student Work

### Location
- **File:** `data/student-work.json`
- **Admin Tab:** Student Work
- **Appears on:** student-work.html

### Adding Poetry

**Using Admin Interface:**
1. Go to admin.html → Student Work tab
2. Fill in:
   - Title: Name of the poem
   - Author: Student's name (or pen name)
   - Date: When it was written
   - Content: The full poem text
   - Featured: Check if you want it highlighted
3. Click "Add to JSON"
4. Copy the poetry section and add to `data/student-work.json`

**Example JSON:**
```json
{
  "id": 1,
  "title": "Hope in the Darkness",
  "author": "Fatima A.",
  "date": "2024-10-15",
  "content": "In the shadows of my room I dream,\nOf books and learning, a distant gleam.",
  "featured": true
}
```

### Adding Artwork

**Using Admin Interface:**
1. Fill in:
   - Title: Artwork name
   - Artist: Student's name
   - Date: Creation date
   - Image URL: Link to the image (see Image Upload Guide below)
   - Description: What the artwork represents
   - Medium: Digital Art, Watercolor, etc.
   - Featured: Check for highlight
2. Click "Add to JSON"
3. Add to `data/student-work.json`

**Example JSON:**
```json
{
  "id": 2,
  "title": "Freedom to Learn",
  "artist": "Mariam K.",
  "date": "2024-10-20",
  "imageUrl": "images/artwork/freedom-to-learn.jpg",
  "description": "Digital illustration representing online education",
  "medium": "Digital Art",
  "featured": true
}
```

---

## Managing Videos

### Location
- **File:** `data/videos.json`
- **Admin Tab:** Videos
- **Appears on:** videos.html

### Adding a Video

**Step 1: Get YouTube Video ID**

From this URL: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`
The ID is: `dQw4w9WgXcQ` (the part after `v=`)

**Step 2: Add to Website**

**Using Admin Interface:**
1. Go to admin.html → Videos tab
2. Fill in:
   - Video Title
   - YouTube Video ID (from step 1)
   - Description
   - Category (Student Stories, Classes, Volunteers)
   - Date
   - Featured (check for main video)
3. Click "Add Video to JSON"
4. Copy and add to `data/videos.json`

**Example JSON:**
```json
{
  "id": 1,
  "title": "Student Testimonials 2024",
  "youtubeId": "dQw4w9WgXcQ",
  "description": "Hear from our students about their journey",
  "category": "Student Stories",
  "date": "2024-10-01",
  "featured": true
}
```

### Updating YouTube Channel Link

In `data/videos.json`, update:
```json
"youtubeChannelUrl": "https://www.youtube.com/@YourChannelName"
```

---

## Managing News & Events

### Location
- **File:** `data/news-events.json`
- **Admin Tab:** News & Events
- **Appears on:** news-events.html

### Adding News Article

**Using Admin Interface:**
1. Go to admin.html → News & Events tab
2. Under "Add News Article":
   - Title: Headline
   - Date: Publication date
   - Category: Achievement, Programs, Partnership, etc.
   - Content: Full article text
   - Image URL: Link to article image
   - Featured: Check for top story
3. Click "Add to JSON"
4. Copy news section to `data/news-events.json`

**Example:**
```json
{
  "id": 1,
  "title": "15 Students Receive Scholarships Abroad",
  "date": "2024-10-25",
  "category": "Achievement",
  "content": "We're thrilled to announce...",
  "imageUrl": "images/news/scholarships-2024.jpg",
  "featured": true
}
```

### Adding Events

**Using Admin Interface:**
1. Under "Add Upcoming Event":
   - Event Title
   - Start Date
   - End Date
   - Type: Registration, Training, Celebration, etc.
   - Description
   - Registration Link: Where to sign up
2. Click "Add to JSON"
3. Add to events section in `data/news-events.json`

**Example:**
```json
{
  "id": 1,
  "title": "Spring 2025 Term Registration Opens",
  "date": "2024-12-15",
  "endDate": "2025-01-05",
  "type": "Registration",
  "description": "Applications for Spring 2025 term",
  "registrationLink": "students.html#application"
}
```

---

## Image Upload Guide

### Where to Store Images

**Option 1: In Project Folder**
1. Create folders in your project:
   ```
   AESOP-web/
   ├── images/
   │   ├── news/
   │   ├── artwork/
   │   └── events/
   ```
2. Add images to appropriate folder
3. Reference as: `images/news/filename.jpg`

**Option 2: External Hosting**
1. Use image hosting service (Imgur, Google Drive, Cloudinary)
2. Get public link
3. Use full URL: `https://example.com/image.jpg`

**Option 3: Unsplash (Placeholder)**
1. Find suitable image on unsplash.com
2. Get photo URL
3. Use in JSON (temporary solution)

### Image Requirements

- **Format:** JPG or PNG
- **Size:** Maximum 2MB
- **Dimensions:**
  - News/Events: 800x600px
  - Artwork: 1200x900px
  - Thumbnails: 400x300px
- **Quality:** Good resolution, clear, well-lit

---

## Common Tasks

### Task: Update Student Count

1. Open `data/stats.json`
2. Find `"totalStudents"`
3. Change value: `"totalStudents": "~1000"`
4. Save
5. Website automatically updates

### Task: Add New Scholarship Recipient Story

1. Open `data/news-events.json`
2. In the `news` array, add:
```json
{
  "id": 3,
  "title": "Student Name Accepted to University Name",
  "date": "2024-11-10",
  "category": "Achievement",
  "content": "We're proud to announce that [student] has been accepted to [university]...",
  "imageUrl": "images/news/student-scholarship.jpg",
  "featured": false
}
```
3. Save

### Task: Feature Different Video

1. Open `data/videos.json`
2. Find current featured video (has `"featured": true`)
3. Change to `"featured": false`
4. Find new video to feature
5. Change to `"featured": true`
6. Save

### Task: Add Student Poetry

1. Go to admin.html
2. Student Work tab
3. Fill in poetry form
4. Generate JSON
5. Add to `data/student-work.json` in the poetry array

---

## File Structure Reference

```
AESOP-web/
├── data/                      ← All editable content here
│   ├── stats.json            ← Statistics
│   ├── student-work.json     ← Poetry and artwork
│   ├── videos.json           ← YouTube videos
│   └── news-events.json      ← News articles and events
├── docs/                      ← Documentation
├── images/                    ← Image files
├── admin.html                 ← Admin interface
└── [other HTML pages]
```

---

## JSON Editing Tips

### DO:
✅ Keep the same structure
✅ Use double quotes `"` for strings
✅ Separate items with commas
✅ Save file after editing
✅ Check for errors (missing commas, quotes)

### DON'T:
❌ Remove curly braces `{}`
❌ Remove square brackets `[]`
❌ Forget commas between items
❌ Use single quotes `'`
❌ Leave trailing commas (last item shouldn't have comma)

### Example of Correct JSON:
```json
{
  "news": [
    {
      "id": 1,
      "title": "First Article",
      "date": "2024-01-01"
    },
    {
      "id": 2,
      "title": "Second Article",
      "date": "2024-01-02"
    }
  ]
}
```

---

## Troubleshooting

### Problem: Website not showing updates

**Solutions:**
1. Hard refresh browser (Ctrl+F5 or Cmd+Shift+R)
2. Clear browser cache
3. Check JSON file saved correctly
4. Validate JSON syntax at jsonlint.com

### Problem: JSON syntax error

**Solutions:**
1. Copy entire file to jsonlint.com
2. Look for error message
3. Common issues:
   - Missing comma
   - Extra comma at end
   - Missing quote
   - Wrong quote type (use `"` not `'`)

### Problem: Image not showing

**Solutions:**
1. Check image path is correct
2. Ensure image file exists
3. Try full URL instead
4. Check image file isn't too large
5. Verify image format (JPG/PNG)

---

## Best Practices

### Regular Updates
- Update statistics monthly
- Add news when significant events happen
- Feature recent student work
- Keep upcoming events current (remove past events)

### Content Quality
- Use clear, professional writing
- Verify all facts and numbers
- Optimize images before uploading
- Get student permission for work/photos
- Proofread before publishing

### Backup
- Keep backup copies of JSON files
- Save before making major changes
- Test updates on one section first

### Organization
- Name image files clearly: `student-art-2024-11.jpg`
- Remove old/outdated content monthly
- Archive past news in separate file if needed

---

## Getting Help

### Resources
1. This documentation
2. Admin interface (`admin.html`)
3. JSON validator: jsonlint.com
4. Image optimization: tinypng.com

### Support
- Check documentation first
- Try admin interface for easier editing
- Verify JSON syntax if errors occur
- Keep backup before major changes

---

## Quick Reference Card

| Task | File | Method |
|------|------|--------|
| Update student count | `stats.json` | Admin or direct edit |
| Add poetry | `student-work.json` | Admin interface |
| Add video | `videos.json` | Admin + YouTube ID |
| Add news | `news-events.json` | Admin interface |
| Add event | `news-events.json` | Admin interface |

---

**Last Updated:** November 2024
**Version:** 1.0
