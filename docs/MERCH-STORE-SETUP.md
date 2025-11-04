# AESOP Merch Store Setup Guide

## Overview

This guide will help you set up an online merchandise store for AESOP using **Bonfire**, a platform specifically designed for non-profits and fundraising campaigns.

## Why Bonfire?

✅ **No upfront costs** - Only pay when items sell
✅ **No inventory management** - Print-on-demand
✅ **Built for fundraising** - Transparent profit tracking
✅ **Professional quality** - High-quality products
✅ **Easy embedding** - Simple integration with your website
✅ **No minimum orders** - Sell one item or thousands

---

## Step-by-Step Setup

### 1. Create a Bonfire Account

1. Go to [bonfire.com](https://www.bonfire.com)
2. Click "Sign Up" in the top right
3. Choose "Sell & Fundraise" option
4. Enter your details:
   - Organization name: **AESOP Afghanistan, Inc.**
   - Email: Your organization email
   - Password: Create a secure password

### 2. Set Up Your Fundraiser

1. Click "Start a Campaign"
2. Choose "Ongoing Fundraiser" (not limited-time)
3. Campaign Name: **AESOP Afghanistan Official Merch**
4. Campaign Goal: Set to "No Goal" or a specific fundraising target

### 3. Design Your Products

#### Recommended Products:
- **T-Shirts** ($20-25 retail, ~$10 profit)
- **Hoodies** ($35-40 retail, ~$15 profit)
- **Tote Bags** ($18-22 retail, ~$8 profit)
- **Stickers** ($5-8 retail, ~$2 profit)
- **Mugs** ($15-18 retail, ~$6 profit)

#### Design Tips:
1. Use your AESOP logo prominently
2. Keep designs simple and clean
3. Use your brand colors (green hues)
4. Include inspiring messages:
   - "Education is Freedom"
   - "Supporting Afghan Girls' Education"
   - "If you have English and the internet, there's nothing you can't learn"

#### Upload Process:
1. Click "Add Product"
2. Select product type (T-Shirt, Hoodie, etc.)
3. Choose colors (recommend green to match branding)
4. Upload your design (PNG or SVG, 300 DPI minimum)
5. Position design on product
6. Preview and save

### 4. Set Your Pricing

Bonfire shows base cost and lets you set profit margin:

**Example Pricing:**
- T-Shirt: Base $15 + Your $10 profit = **$25 retail**
- Hoodie: Base $25 + Your $15 profit = **$40 retail**
- Tote Bag: Base $12 + Your $8 profit = **$20 retail**

**Recommendation:** Set competitive prices while maximizing profit for students.

### 5. Write Your Store Description

**Suggested Text:**
```
Welcome to the AESOP Afghanistan Official Merch Store!

Every purchase directly supports Afghan girls' education. 100% of profits provide internet access, course materials, and educational resources to students in our free online programs.

When you buy AESOP merchandise, you're not just getting quality products – you're investing in education, hope, and opportunity for girls who are fighting for their right to learn.

Thank you for your support!
```

### 6. Set Up Payment & Shipping

1. Enter your bank details for profit payouts
2. Bonfire handles all payment processing
3. Shipping is automatic - they ship worldwide
4. You can enable/disable international shipping

### 7. Get Your Store Link

After publishing, you'll get:
- **Direct Link:** `https://www.bonfire.com/store/aesop-afghanistan`
- **Embed Code:** For adding to your website

### 8. Embed on Your Website

#### Option 1: Direct Link
Replace the placeholder section in `merch.html` with a button:
```html
<a href="https://www.bonfire.com/store/aesop-afghanistan" target="_blank" class="btn btn-primary">
    Shop Now
</a>
```

#### Option 2: Embedded Store
Replace the `.store-embed` section with Bonfire's embed code:
```html
<iframe
    src="https://www.bonfire.com/store/aesop-afghanistan"
    width="100%"
    height="1200px"
    frameborder="0"
    style="border-radius: 15px;">
</iframe>
```

---

## Alternative Platforms

### Printful + Shopify
**Pros:** More control, professional, integrates with Shopify
**Cons:** Requires $29/month Shopify subscription
**Best for:** Organizations wanting full e-commerce features

**Setup:**
1. Create Shopify store ($29/month)
2. Install Printful app
3. Connect products to Printful
4. Set up payment processing
5. Launch store

### Teespring (Spring)
**Pros:** Similar to Bonfire, free, easy
**Cons:** Less nonprofit-focused
**Best for:** Quick setup with minimal effort

**Setup:**
1. Go to spring.com
2. Create launcher account
3. Design products
4. Set prices
5. Get storefront link

### CustomCat + WooCommerce
**Pros:** Full control, WordPress integration
**Cons:** Requires WordPress hosting, more technical
**Best for:** Organizations with existing WordPress site

---

## Managing Your Store

### Adding New Products
1. Log into Bonfire dashboard
2. Go to "Products"
3. Click "Add New Product"
4. Design and publish

### Tracking Sales
1. Dashboard shows real-time sales
2. Track profits separately
3. Download sales reports
4. Monitor popular products

### Updating Designs
1. Go to product editor
2. Upload new design
3. Save changes
4. Updates appear instantly

### Withdrawing Profits
1. Profits are held until you request payout
2. Minimum payout: $20
3. Transfer to your bank account
4. Usually processes in 3-5 business days

---

## Marketing Your Merch

### On Your Website
- Add prominent "Shop" button in navigation
- Feature in newsletter
- Highlight on social media
- Show impact ($ raised = X students supported)

### Social Media Posts
**Sample Posts:**
```
🌟 NEW! AESOP Official Merch is here!

Every t-shirt, hoodie, or tote bag you buy provides internet access
for Afghan girls fighting for their education.

Shop now: [link]
100% of profits support students 💚

#AESOPAfghanistan #EducationForAll
```

### Email Newsletter
Include merch section showing:
- New products
- Impact of sales
- Limited editions or seasonal items

---

## Best Practices

### Design Quality
- Use high-resolution images (300 DPI minimum)
- Test designs on different product colors
- Keep text readable at small sizes
- Use vector files (SVG) when possible

### Pricing Strategy
- Research similar nonprofit merch
- Price competitively but maximize profit
- Offer variety of price points ($5 stickers to $40 hoodies)
- Show impact: "$25 t-shirt = 5 students' internet for a month"

### Product Variety
- Start with 3-5 core products
- Add seasonal items
- Feature student artwork (with permission)
- Create limited editions for special events

### Customer Service
- Bonfire handles all fulfillment and customer service
- You can add custom FAQs to your store page
- Respond to questions via your store's contact form

---

## Measuring Success

### Key Metrics to Track
- Total sales revenue
- Total profit for AESOP
- Number of items sold
- Most popular products
- Customer acquisition source

### Monthly Report Template
```
AESOP Merch Store - [Month] Report

Sales: $XXX
Profit: $XXX (goes to students)
Items Sold: XX
Impact: Provided internet for XX students

Top Products:
1. [Product name] - XX sold
2. [Product name] - XX sold
3. [Product name] - XX sold

Next Month Goals:
- Add [new product]
- Reach [sales goal]
- Feature on [platform]
```

---

## Troubleshooting

### Design Issues
**Problem:** Design looks blurry
**Solution:** Use higher resolution (300+ DPI), upload PNG or SVG

**Problem:** Colors don't match
**Solution:** Use CMYK color mode, order sample before launching

### Store Setup
**Problem:** Can't embed store
**Solution:** Use direct link instead, or contact Bonfire support

**Problem:** Payment not received
**Solution:** Check bank details, ensure minimum payout reached

### Technical Issues
**Problem:** Store not loading
**Solution:** Check embed code, ensure iframe dimensions are correct

---

## Support Resources

- **Bonfire Help Center:** help.bonfire.com
- **Bonfire Support Email:** support@bonfire.com
- **AESOP Technical Help:** See main documentation

---

## Quick Checklist

Before launching your store:

- [ ] Account created and verified
- [ ] At least 3 products designed and uploaded
- [ ] Pricing set with good profit margins
- [ ] Store description written
- [ ] Bank details added for payouts
- [ ] Store embedded on website
- [ ] Test purchase completed
- [ ] Marketing materials prepared
- [ ] Social media posts scheduled
- [ ] Newsletter announcement ready

---

## Success Tips

1. **Start Simple:** Launch with 3-5 products, add more based on demand
2. **Show Impact:** Always connect purchases to student support
3. **Quality Over Quantity:** Better to have few great designs than many mediocre ones
4. **Promote Regularly:** Monthly reminders about merch store
5. **Seasonal Offerings:** Back-to-school, holidays, special events
6. **Student Involvement:** Feature student artwork when possible
7. **Thank Supporters:** Send appreciation messages to buyers

---

## Contact for Help

If you need assistance with store setup:
- Email AESOP technical team
- Join Bonfire's seller community
- Check this documentation first

**Last Updated:** November 2024
