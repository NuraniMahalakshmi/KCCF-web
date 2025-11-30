# KCCF Outbound Email Configuration Guide

## Overview

This document describes how to configure outbound email addresses for all KCCF website forms and services. All outbound emails should use `info@thekccf.org` for consistent organizational identity.

**Important Note:** This configuration is managed in external third-party platforms (Monday.com, Mailchimp, Zeffy, GiveLively), not in this repository. The website only embeds forms via iframes.

---

## Table of Contents

1. [Form and Service Summary](#form-and-service-summary)
2. [Monday.com Forms Configuration](#mondaycom-forms-configuration)
3. [Mailchimp Newsletter Configuration](#mailchimp-newsletter-configuration)
4. [Zeffy Donation Platform Configuration](#zeffy-donation-platform-configuration)
5. [GiveLively Donation Platform Configuration](#givelively-donation-platform-configuration)
6. [Email Authentication (DNS)](#email-authentication-dns)
7. [Testing Checklist](#testing-checklist)
8. [Troubleshooting](#troubleshooting)

---

## Form and Service Summary

### Third-Party Services Used

| Service | Purpose | URL Pattern | Forms/Features |
|---------|---------|-------------|----------------|
| **Monday.com** | Data collection forms | `forms.monday.com` | 7 forms |
| **Mailchimp** | Newsletter subscriptions | `list-manage.com` | 1 form |
| **Zeffy** | Donations & Fundraising | `zeffy.com` | Donation modal, P2P fundraisers, Leaderboard |
| **GiveLively** | Alternative donations | `givelively.org` | Donation widget |

### Form Types in Repository

Form configurations are defined in `/src/contexts/FormModalContext.tsx`:

| Form Type | Service | Embed ID |
|-----------|---------|----------|
| `camp-camper` | Monday.com | `41086441b740b6e179cbde8b574bd794` |
| `camp-counselor` | Monday.com | `87920448930e50b7a0554e414662d32b` |
| `crazy-socks-sponsor` | Monday.com | `78b71c024990383d274ad455e744923a` |
| `book-elana` | Monday.com | `0caf48b3cfeede4c889e59ac52ce5fb1` |
| `volunteer` | Monday.com | `650d6c93433108a85097471c822b4cbf` |
| `contact` | Monday.com | `7d2a1baf81662443852a38886ac80dd4` |
| `aid-application` | Monday.com | `972de98e599d383218e348dd923eec38` |
| `newsletter-signup` | Mailchimp | `u=041a777be61cc7e1bc20e3517&id=8696f27783` |

### Donation Components

Defined in `/src/components/DonationModal.tsx` and `/src/app/fundraisers/page.tsx`:

| Component | Service | Embed URL |
|-----------|---------|-----------|
| Donation Modal (Primary) | Zeffy | `zeffy.com/embed/donation-form/donate-to-make-a-difference-18649` |
| Donation Modal (Alt) | GiveLively | `secure.givelively.org/widgets/simple_donation/koenig-childhood-cancer-foundation.js` |
| Fundraisers Page | Zeffy | `zeffy.com/en-US/peer-to-peer/peer-to-peer-fundraisers` |
| Fundraiser Leaderboard | Zeffy | `zeffy.com/embed/leaderboard/peer-to-peer-fundraisers` |

---

## Monday.com Forms Configuration

### Step 1: Access Monday.com Workspace

1. Log in to your Monday.com account at https://monday.com
2. Navigate to the workspace containing KCCF forms
3. Each form listed above has email automations that need updating

### Step 2: Verify Sender Email

Before updating forms, ensure `info@thekccf.org` is verified:

1. Go to **Admin** → **Account Settings**
2. Navigate to **Email & Notifications**
3. Check if `info@thekccf.org` is listed as a verified sender
4. If not verified:
   - Click **Add email address**
   - Enter `info@thekccf.org`
   - Check the inbox for verification email
   - Click the verification link
   - Wait for confirmation

### Step 3: Update Each Form's Email Settings

For each of the 7 Monday.com forms:

1. Navigate to the board containing the form
2. Click on the form to open settings
3. Go to **Automations** or **Integrations**
4. Find all email-related automations:
   - Submission confirmations (to form submitters)
   - Internal notifications (to staff)
   - Any custom email integrations
5. Update the **"From" email address** from `olivia@thekccf.org` to `info@thekccf.org`
6. Save changes

### Forms Checklist

- [ ] **Camp Camper Registration** (`41086441b740b6e179cbde8b574bd794`)
- [ ] **Camp Counselor Application** (`87920448930e50b7a0554e414662d32b`)
- [ ] **Crazy Socks Sponsor** (`78b71c024990383d274ad455e744923a`)
- [ ] **Book Elana** (`0caf48b3cfeede4c889e59ac52ce5fb1`)
- [ ] **Volunteer Application** (`650d6c93433108a85097471c822b4cbf`)
- [ ] **Contact Form** (`7d2a1baf81662443852a38886ac80dd4`)
- [ ] **Aid Application** (`972de98e599d383218e348dd923eec38`)

---

## Mailchimp Newsletter Configuration

The newsletter signup form uses Mailchimp (not Monday.com).

### Step 1: Access Mailchimp

1. Log in to Mailchimp at https://mailchimp.com
2. Navigate to your KCCF audience

### Step 2: Update Default Sender Email

1. Go to **Audience** → **Settings** → **Audience name and defaults**
2. Find **Default From email address**
3. Change from current address to `info@thekccf.org`
4. If not already verified, click **Verify** and complete verification

### Step 3: Update Campaign Settings

1. Go to **Campaigns**
2. For any active or draft campaigns, update the "From" email
3. For automated emails (welcome series, etc.):
   - Go to **Automations**
   - Edit each automation
   - Update the sender email to `info@thekccf.org`

### Step 4: Verify Domain Authentication

1. Go to **Account** → **Settings** → **Domains**
2. Ensure `thekccf.org` domain is authenticated
3. If needed, add DNS records for email authentication

---

## Zeffy Donation Platform Configuration

Zeffy handles donation forms and peer-to-peer fundraising.

### Step 1: Access Zeffy Dashboard

1. Log in to Zeffy at https://www.zeffy.com
2. Navigate to organization settings

### Step 2: Update Organization Email

1. Go to **Settings** → **Organization Profile**
2. Update the contact/reply-to email to `info@thekccf.org`
3. Save changes

### Step 3: Update Email Notifications

1. Go to **Settings** → **Notifications** or **Email Settings**
2. Update sender email for:
   - Donation receipts
   - Fundraiser notifications
   - Peer-to-peer campaign emails
3. Verify the email address if required

### Step 4: Review Campaign Settings

1. Navigate to **Campaigns** or **Donation Forms**
2. Check each active form:
   - Main donation form (`donate-to-make-a-difference-18649`)
   - Peer-to-peer fundraising campaigns
3. Update any campaign-specific email settings

---

## GiveLively Donation Platform Configuration

GiveLively is an alternative donation option in the donation modal.

### Step 1: Access GiveLively Dashboard

1. Log in to GiveLively at https://www.givelively.org
2. Navigate to your organization settings

### Step 2: Update Organization Settings

1. Go to **Settings** → **Organization Profile**
2. Update the primary contact email to `info@thekccf.org`
3. Update the donation receipt reply-to address

### Step 3: Update Notification Settings

1. Go to **Settings** → **Notifications**
2. Update sender email for:
   - Donation confirmations
   - Tax receipts
   - Recurring donation notifications
3. Save changes

---

## Email Authentication (DNS)

For emails to be delivered reliably, ensure proper DNS authentication for `thekccf.org`:

### SPF Record

Add sending servers to your SPF record. Example (verify actual include domains with each service):

```
v=spf1 include:_spf.google.com include:servers.mcsv.net include:spf.monday.com ~all
```

**Note:** Check with each platform for their current SPF requirements:
- **Mailchimp**: `servers.mcsv.net` (verify in Mailchimp settings)
- **Monday.com**: `spf.monday.com` (verify in Monday.com documentation)
- **Zeffy/GiveLively**: These platforms typically handle email sending internally; check their support documentation for any required DNS records

### DKIM Records

Configure DKIM for each service that requires it:
- **Google Workspace**: Follow [Google's DKIM setup guide](https://support.google.com/a/answer/174124)
- **Mailchimp**: Add the DKIM record from Mailchimp **Account** → **Settings** → **Domains** → **Verify Domain**
- **Monday.com**: Check Monday.com documentation for DKIM requirements
- **Zeffy/GiveLively**: These platforms typically manage DKIM internally

**Note:** Some donation platforms (like Zeffy and GiveLively) handle email authentication automatically. Contact their support if you experience deliverability issues.

### DMARC Record

Consider adding a DMARC record for monitoring:

```
_dmarc.thekccf.org TXT "v=DMARC1; p=none; rua=mailto:info@thekccf.org"
```

---

## Testing Checklist

After updating all configurations, test each form:

### Monday.com Forms
- [ ] Submit test to Camp Camper Registration → Verify email from `info@thekccf.org`
- [ ] Submit test to Camp Counselor Application → Verify email from `info@thekccf.org`
- [ ] Submit test to Crazy Socks Sponsor → Verify email from `info@thekccf.org`
- [ ] Submit test to Book Elana → Verify email from `info@thekccf.org`
- [ ] Submit test to Volunteer Application → Verify email from `info@thekccf.org`
- [ ] Submit test to Contact Form → Verify email from `info@thekccf.org`
- [ ] Submit test to Aid Application → Verify email from `info@thekccf.org`

### Mailchimp Newsletter
- [ ] Sign up for newsletter → Verify welcome email from `info@thekccf.org`
- [ ] Send test campaign → Verify from address

### Zeffy Donations
- [ ] Make test donation → Verify receipt from `info@thekccf.org`
- [ ] Create test fundraiser → Verify notifications

### GiveLively Donations
- [ ] Make test donation → Verify receipt email

### Email Deliverability
- [ ] Check that emails don't land in spam
- [ ] Verify DKIM signatures are valid
- [ ] Check SPF passes

---

## Troubleshooting

### Emails Not Sending

1. **Verify sender email**: Ensure `info@thekccf.org` is verified in each platform
2. **Check automation status**: Make sure automations are active/enabled
3. **Review email limits**: Some platforms have sending limits
4. **Check bounce reports**: Look for delivery failures in each platform

### Emails Going to Spam

1. **Check authentication**: Verify SPF, DKIM, and DMARC records
2. **Review content**: Avoid spam trigger words
3. **Check reputation**: Use tools like mail-tester.com
4. **Warm up gradually**: If using a new email, increase volume slowly

### Form Not Found or Not Loading

1. **Verify embed IDs**: Check that form IDs in `FormModalContext.tsx` match the platform
2. **Check form status**: Ensure forms are published/active in each platform
3. **Test embed URLs**: Try loading the iframe URL directly in a browser
4. **Cookie consent**: Ensure user has accepted necessary cookies

### Platform-Specific Issues

**Monday.com:**
- Support: https://support.monday.com/
- Forms docs: https://support.monday.com/hc/en-us/articles/360007186319

**Mailchimp:**
- Support: https://mailchimp.com/help/
- Email authentication: https://mailchimp.com/help/set-up-email-domain-authentication/

**Zeffy:**
- Support: https://support.zeffy.com/
- Contact: support@zeffy.com

**GiveLively:**
- Support: https://www.givelively.org/support
- Contact: support@givelively.org

---

## Support

For website issues related to form embedding:
- Create an issue: https://github.com/koenig-childhood-cancer-foundation/KCCF-web/issues

For email configuration issues:
- Contact the respective platform support (links above)
- Email: info@thekccf.org

---

## Quick Reference

### Files That Reference Forms

| File | Purpose |
|------|---------|
| `src/contexts/FormModalContext.tsx` | Form type definitions and embed URLs |
| `src/components/FormModal.tsx` | Modal component for displaying forms |
| `src/components/FormButton.tsx` | Button component to trigger forms |
| `src/components/DonationModal.tsx` | Donation modal with Zeffy/GiveLively |
| `src/app/newsletter-signup/page.tsx` | Newsletter signup page |
| `src/app/fundraisers/page.tsx` | Peer-to-peer fundraisers page |

### Standard Outbound Email

All platforms should be configured to send from:

```
info@thekccf.org
```

This ensures consistent branding and improves email deliverability through unified authentication.
