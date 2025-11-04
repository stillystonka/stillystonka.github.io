# AESOP Afghanistan Website

A comprehensive website for the Afghan Education Student Outreach Project (AESOP), featuring easy content management, student work showcase, video gallery, news & events, and merch store.

## 🌟 About AESOP

AESOP provides free, volunteer-taught, online courses to Afghan girls and young women deprived of education in Afghanistan and across the diaspora. This website serves as the central hub for:

- **Donors**: Learn about our impact and contribute financially
- **Students**: Discover courses and apply to join our programs
- **Volunteers**: Find teaching and administrative opportunities
- **Community**: View student work, videos, news, and support through merch

## 📁 Project Structure

```
AESOP-web/
├── index.html              # Home page with mission, problem, and solution
├── donors.html             # Donation information and impact metrics
├── students.html           # Course catalog and student applications
├── volunteers.html         # Volunteer opportunities and applications
├── student-work.html       # Student poetry and artwork showcase
├── videos.html             # YouTube video gallery
├── news-events.html        # News articles and upcoming events
├── merch.html              # Merchandise store (Bonfire integration)
├── admin.html              # Content management interface
├── styles.css              # Main stylesheet
├── script.js               # JavaScript for interactivity
├── data/                   # JSON data files for easy content updates
│   ├── stats.json          # Site statistics
│   ├── student-work.json   # Poetry and artwork data
│   ├── videos.json         # YouTube videos data
│   └── news-events.json    # News and events data
├── docs/                   # Documentation
│   ├── CONTENT-MANAGEMENT.md   # How to update website content
│   └── MERCH-STORE-SETUP.md    # How to set up Bonfire merch store
└── README.md               # This file
```

## ✨ New Features

### 🎯 Easy Content Management System
- **Admin Interface** (`admin.html`): User-friendly forms to update content
- **JSON-Based Data**: Simple data files that anyone can edit
- **No Database Required**: All content stored in JSON files
- **Real-Time Updates**: Changes appear immediately on refresh

### 🎨 Student Work Showcase
- Poetry gallery with author attribution
- Visual artwork display
- Featured content highlighting
- Student submission form integration

### 📹 Video Gallery
- YouTube video integration
- Filterable by category
- Featured video section
- Direct channel subscription links

### 📰 News & Events
- Latest news articles with images
- Upcoming events calendar
- Newsletter signup
- Automated date formatting

### 🛍️ Merch Store
- Bonfire platform integration ready
- Impact messaging ($ = students supported)
- Product preview designs
- Complete setup documentation

## 🎨 Design Features

- **Green Color Scheme**: Professional green hues representing growth and education
- **White Navigation**: Clean, prominent logo display
- **Responsive Design**: Works beautifully on desktop, tablet, and mobile devices
- **Accessible**: Clear typography, good contrast, and semantic HTML
- **Interactive**: Smooth scrolling, fade-in animations, and engaging hover effects
- **Modern**: Clean, professional design with gradient accents and card-based layouts

## 🚀 Quick Start

### Option 1: Simple Local Testing

1. Clone this repository
2. Open `index.html` in your web browser
3. Navigate between pages using the navigation menu

### Option 2: Local Server (Recommended)

Using Python:
```bash
# Python 3
python -m http.server 8000

# Then visit http://localhost:8000
```

Using Node.js:
```bash
# Install http-server globally
npm install -g http-server

# Run server
http-server

# Visit http://localhost:8080
```

### Option 3: Deploy to Web

#### GitHub Pages (Free)
1. Push this repository to GitHub
2. Go to Settings > Pages
3. Select branch and root folder
4. Your site will be live at `https://[username].github.io/[repo-name]`

#### Netlify (Free)
1. Create account at netlify.com
2. Drag and drop the entire folder
3. Your site will be live instantly with a custom URL

#### Vercel (Free)
1. Create account at vercel.com
2. Import your GitHub repository
3. Deploy with one click

## 📝 Google Forms Integration

The website is designed to integrate with Google Forms for applications and donations. Follow these steps to set up:

### 1. Create Google Forms

You need to create **three** Google Forms:

#### A. Student Application Form

Create a Google Form with these fields:

**Personal Information:**
- Full Name (Short answer, required)
- Age (Short answer, required)
- Email Address (Short answer, required, email validation)
- Phone Number (Short answer, optional)
- Location - City/Country (Short answer, required)

**Educational Background:**
- Current/Last Grade Level Completed (Multiple choice or short answer)
- Previous English Learning Experience (Multiple choice: None, Basic, Intermediate, Advanced)
- Other languages you speak (Short answer)

**Course Interest:**
- Which term are you applying for? (Multiple choice: Fall, Spring, Summer)
- Which courses interest you? (Checkboxes: All course options)
- What are your educational goals? (Paragraph)

**Safety & Access:**
- Do you have safe access to internet for classes? (Multiple choice: Yes, No)
- Do you need financial assistance for internet access? (Multiple choice: Yes, No)
- Can you participate safely from your home? (Multiple choice: Yes, No)

**Additional Information:**
- Tell us about yourself and why you want to join AESOP (Paragraph, required)
- How did you hear about AESOP? (Multiple choice with "Other" option)

#### B. Volunteer Application Form

Create a Google Form with these fields:

**Personal Information:**
- Full Name (Short answer, required)
- Email Address (Short answer, required, email validation)
- Phone Number (Short answer, optional)
- Location - City/Country (Short answer, required)
- Time Zone (Dropdown with major time zones)

**Background:**
- Educational Background (Short answer: degree, field of study)
- Current Occupation/Status (Multiple choice: Student, Professional, Retired, Other)
- Languages Spoken (Checkboxes: English, Dari, Pashto, Other)
- Relevant Experience (Paragraph: teaching, tutoring, administration, etc.)

**Volunteer Interest:**
- Which role(s) interest you? (Checkboxes: Lead Teacher, Co-Teacher, Teaching Assistant, various admin roles)
- If teaching, which subject(s)? (Checkboxes: English, Math, Science, Arts, etc.)
- Which term are you applying for? (Multiple choice: Fall, Spring, Summer, Ongoing)
- How many hours per week can you commit? (Dropdown: 2-3, 3-5, 5-8, 8+ hours)

**Skills & Expertise:**
- What expertise/skills do you bring to AESOP? (Paragraph, required)
- Do you have teaching or tutoring experience? (Multiple choice: Yes/No, with conditional follow-up for details)
- Technical skills (Paragraph, for admin roles)

**Motivation:**
- Why do you want to volunteer with AESOP? (Paragraph, required)
- What do you hope to gain from this experience? (Paragraph)
- How did you hear about AESOP? (Multiple choice with "Other" option)

**Availability:**
- What days/times are you generally available? (Checkboxes with day/time options)
- Any scheduling constraints we should know about? (Paragraph, optional)

#### C. Donation Interest Form

Create a Google Form with these fields:

**Donor Information:**
- Full Name (Short answer, required)
- Email Address (Short answer, required, email validation)
- Phone Number (Short answer, optional)

**Donation Details:**
- Donation Amount (Multiple choice: $60, $180, $500, Custom)
- If Custom, specify amount (Short answer, conditional on "Custom" selection)
- Would you like to make this a monthly donation? (Multiple choice: Yes, No)

**Communication:**
- Comments or Message (Paragraph, optional)
- How did you hear about AESOP? (Multiple choice with "Other" option)
- May we send you updates about AESOP's impact? (Multiple choice: Yes, No)

### 2. Link Forms to Google Sheets

For each form:
1. Click on "Responses" tab in Google Forms
2. Click the green Sheets icon to "Create Spreadsheet"
3. This creates an organized, easily digestible spreadsheet of responses
4. Name the sheets clearly:
   - "AESOP Student Applications"
   - "AESOP Volunteer Applications"
   - "AESOP Donor Inquiries"

### 3. Embed Forms in Website

For each form:
1. Click "Send" button in Google Forms
2. Click the "<>" (Embed HTML) icon
3. Copy the iframe code
4. Replace the placeholder iframes in the HTML files:

**In students.html:**
Find this line:
```html
src="https://docs.google.com/forms/d/e/1FAIpQLSdSTUDENT_APPLICATION_FORM_ID/viewform?embedded=true"
```
Replace with your actual Student Application Form embed code.

**In volunteers.html:**
Find this line:
```html
src="https://docs.google.com/forms/d/e/1FAIpQLSdVOLUNTEER_APPLICATION_FORM_ID/viewform?embedded=true"
```
Replace with your actual Volunteer Application Form embed code.

**In donors.html:**
Find this line:
```html
src="https://docs.google.com/forms/d/e/1FAIpQLSdDONATION_FORM_ID/viewform?embedded=true"
```
Replace with your actual Donation Interest Form embed code.

### 4. Organize Google Sheets

Enhance your Google Sheets with:

**Tabs/Sheets for Organization:**
- Create separate sheets within each workbook for:
  - "Raw Responses" (form submissions)
  - "Active Applicants" (filtered/sorted)
  - "Accepted" (moved after acceptance)
  - "Statistics" (summary data)

**Useful Columns to Add:**
- Status (Pending, Reviewed, Accepted, Rejected)
- Review Date
- Assigned Reviewer
- Notes
- Follow-up Required (Yes/No)

**Conditional Formatting:**
- Highlight urgent applications
- Color-code by status
- Flag incomplete applications

**Data Validation:**
- Create dropdown menus for Status column
- Add checkboxes for follow-up tracking

### 5. Set Up Notifications

For each Google Form:
1. Click on "Responses" tab
2. Click the three-dot menu
3. Select "Get email notifications for new responses"
4. Share the Google Sheet with your team members

## 📊 Google Sheets Templates

### Student Applications Sheet - Suggested Columns:
- Timestamp
- Name
- Email
- Age
- Location
- Term Applying
- English Level
- Courses Interested
- Needs Financial Aid
- Status (dropdown)
- Assigned Reviewer
- Notes

### Volunteer Applications Sheet - Suggested Columns:
- Timestamp
- Name
- Email
- Location
- Role Interest
- Subject (if teaching)
- Hours Available
- Experience
- Status (dropdown)
- Interview Date
- Notes

### Donor Inquiries Sheet - Suggested Columns:
- Timestamp
- Name
- Email
- Donation Amount
- Monthly (Yes/No)
- Status (dropdown: Contacted, Donated, Follow-up)
- Donation Link Sent
- Notes

## 🖼️ Adding Real Images

Currently, the website uses placeholder images from Unsplash. To use real images:

1. **Create an `images` folder** in your project:
   ```
   AESOP-web/
   ├── images/
   │   ├── hero/
   │   ├── students/
   │   └── impact/
   ```

2. **Add your images** to appropriate folders

3. **Update image paths** in HTML files:
   ```html
   <!-- Change from: -->
   <img src="https://images.unsplash.com/photo-..." alt="...">

   <!-- To: -->
   <img src="images/students/photo1.jpg" alt="...">
   ```

4. **Optimize images** for web:
   - Resize to appropriate dimensions (max 1920px width)
   - Compress for faster loading
   - Use WebP format for better compression (with JPG/PNG fallback)

## 🎨 Customization

### Colors

Edit color variables in `styles.css`:
```css
:root {
    --primary-blue: #2563eb;
    --primary-teal: #0d9488;
    --accent-orange: #f97316;
    /* ... and more */
}
```

### Typography

The website uses Google Fonts (Inter and Poppins). To change fonts, edit the `<link>` tag in HTML files and update:
```css
:root {
    --font-primary: 'Your Font', sans-serif;
    --font-heading: 'Your Heading Font', sans-serif;
}
```

### Content

All content is in the HTML files. Simply edit the text directly in:
- `index.html` - Mission, problem, solution
- `donors.html` - Impact metrics, donation info
- `students.html` - Course descriptions
- `volunteers.html` - Role descriptions

## 📱 Mobile Responsiveness

The website is fully responsive with breakpoints at:
- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: < 768px

Test on different devices or use browser developer tools (F12) to check responsive design.

## ♿ Accessibility

The website follows accessibility best practices:
- Semantic HTML5 elements
- Proper heading hierarchy
- Alt text for images (add your own for real images)
- Good color contrast ratios
- Keyboard navigation support
- Screen reader-friendly structure

## 📈 Analytics (Optional)

To track website visitors, add Google Analytics:

1. Create a Google Analytics account
2. Get your tracking ID
3. Add this code before `</head>` in all HTML files:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🔒 Security Notes

- Never commit sensitive API keys or credentials to this repository
- Google Forms handle data securely
- Ensure Google Sheets permissions are set correctly (not public)
- Use HTTPS when deployed (GitHub Pages, Netlify, Vercel all provide this)

## 🤝 Contributing

This website is built for AESOP Afghanistan. To contribute:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📝 License

This website is created for AESOP Afghanistan, Inc.

## 🆘 Support

For questions about:
- **Website technical issues**: Check browser console for errors
- **AESOP programs**: Visit AESOPAfghanistan.org
- **Form integration**: See Google Forms documentation

## 🎯 Next Steps

1. ✅ Create three Google Forms (Student, Volunteer, Donor)
2. ✅ Link forms to Google Sheets
3. ✅ Embed forms in HTML files
4. ✅ Add real images to replace placeholders
5. ✅ Customize content to match current AESOP information
6. ✅ Test all pages and forms
7. ✅ Deploy to web hosting
8. ✅ Share with AESOP team and stakeholders
9. ✅ Set up Google Analytics (optional)
10. ✅ Monitor form submissions and respond to inquiries

## 📞 Contact

For more information about AESOP:
- **Website**: AESOPAfghanistan.org
- **Mission**: Empowering Afghan girls through education

---

**Built with ❤️ for AESOP Afghanistan**

*"If you have English and you have the internet, there's nothing you can't learn."*
— Zahra Yazdani, AESOP co-founder
