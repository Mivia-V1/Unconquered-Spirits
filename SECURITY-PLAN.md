# Security Analysis & Protection Plan
## Undaunted Spirits Website Security

---

## 📊 Current Security Assessment

### Site Overview
- **Type:** Static HTML/CSS/JS website
- **Hosting:** Cloudflare Pages
- **Backend:** None (static site)
- **Database:** None
- **User Auth:** None
- **Payments:** Not yet implemented
- **Forms:** Not yet implemented

### Current Risk Level: **LOW-MEDIUM**

Static sites have a smaller attack surface than dynamic sites, but there are still important security measures to implement.

---

## 🔍 Vulnerability Analysis

### 1. HTTPS/SSL ✅ SECURE
**Status:** Cloudflare provides automatic SSL
**Risk:** Low
**Action:** None needed - already secured

### 2. DNS Security ✅ MOSTLY SECURE
**Current Status:** Configured December 5, 2025
**Completed:**
- [x] WWW CNAME record added
- [x] CAA records added (digicert.com, letsencrypt.org)

**Still Needed:**
- [ ] Enable DNSSEC on domain (requires registrar action)
- [ ] Lock domain at registrar level

### 3. Email Security ✅ CONFIGURED
**Current Status:** Fully configured December 5, 2025
**Completed:**
- [x] SPF record (was already present)
- [x] DKIM record added (pending Google Workspace verification)
- [x] DMARC record added (p=quarantine)

**DNS Records Now In Place:**
```
SPF:   v=spf1 include:_spf.google.com ~all
DKIM:  google._domainkey → v=DKIM1; k=rsa; p=...
DMARC: _dmarc → v=DMARC1; p=quarantine; rua=mailto:admin@undauntedspirits.org
```

**Action Required:**
- [ ] Verify DKIM is active in Google Workspace Admin (check status)
- [ ] Test email security at https://mxtoolbox.com/emailhealth/undauntedspirits.org

### 4. Content Security ⚠️ NEEDS IMPLEMENTATION
**Current Status:** No Content Security Policy
**Risks:**
- Cross-site scripting (XSS) if forms added later
- Clickjacking
- Data injection

**Recommendations:**
Add to HTML `<head>` or via Cloudflare headers:
```html
<meta http-equiv="Content-Security-Policy" content="
  default-src 'self';
  script-src 'self' 'unsafe-inline' https://www.googletagmanager.com;
  style-src 'self' 'unsafe-inline';
  img-src 'self' data: https:;
  font-src 'self';
  connect-src 'self' https://www.google-analytics.com;
  frame-ancestors 'none';
">
```

### 5. Clickjacking Protection ⚠️ NEEDS IMPLEMENTATION
**Current Status:** Not configured
**Risk:** Medium - attackers could embed your site in an iframe

**Solution:** Add header via Cloudflare:
```
X-Frame-Options: DENY
```

### 6. Repository Security ⚠️ NEEDS REVIEW
**Current Status:** Public GitHub repository
**Risks:**
- Accidental commit of sensitive data
- Unauthorized changes if credentials compromised

**Recommendations:**
- [ ] Enable 2FA on all GitHub accounts
- [ ] Set up branch protection rules
- [ ] Review repository for any sensitive data
- [ ] Add `.gitignore` for local config files
- [ ] Enable GitHub security alerts

### 7. Third-Party Dependencies ✅ LOW RISK
**Current Status:** Minimal dependencies (vanilla HTML/CSS/JS)
**Risk:** Low - no npm packages or external libraries
**Note:** If you add libraries later, audit them for vulnerabilities

### 8. Privacy & Data Collection ⚠️ NEEDS POLICY
**Current Status:** ✅ Google Analytics 4 installed (G-P9EL61JMC3)
**Risks:**
- Privacy Policy page added (EN/UA) explaining data collection
- No privacy policy visible

**Recommendations:**
- [ ] Create Privacy Policy page
- [x] Privacy Policy page created (December 13, 2025)
- [ ] Add cookie consent banner (optional enhancement)
- [ ] Document what data is collected
- [ ] Provide contact for data requests

### 9. Contact Information Exposure ⚠️ MODERATE RISK
**Current Status:** Email and phone displayed publicly
**Risks:**
- Spam harvesting
- Social engineering attacks
- Phishing targeting staff

**Mitigations:**
- [ ] Use contact form instead of direct email display
- [ ] Consider email obfuscation (JavaScript reveal)
- [ ] Train staff on phishing awareness
- [ ] Set up email filtering

### 10. Image/Media Security ✅ LOW RISK
**Current Status:** Local images, no external embeds
**Risk:** Low
**Note:** Ensure no EXIF data with sensitive location info in photos

---

## 🛡️ Cloudflare Security Configuration

### Recommended Settings (Cloudflare Dashboard)

#### SSL/TLS Settings
```
Encryption Mode: Full (Strict)
Always Use HTTPS: ON
Automatic HTTPS Rewrites: ON
Minimum TLS Version: TLS 1.2
```

#### Security Settings
```
Security Level: Medium (or High for extra protection)
Challenge Passage: 30 minutes
Browser Integrity Check: ON
```

#### Firewall Rules (Recommended)
```
Rule 1: Block Known Bad Bots
- Expression: (cf.client.bot) and not (cf.bot_management.verified_bot)
- Action: Block

Rule 2: Block Suspicious Countries (Optional)
- If you only expect traffic from certain regions
- Action: Challenge or Block

Rule 3: Rate Limiting (When forms added)
- Limit: 10 requests per minute to /contact
- Action: Challenge
```

#### DDoS Protection
```
DDoS Protection: Enabled (automatic on Cloudflare)
Under Attack Mode: Available if needed (manually enable during attack)
```

#### Bot Management
```
Bot Fight Mode: ON (free tier)
```

---

## 📋 Security Implementation Checklist

### Immediate Actions (Do This Week)

#### Domain & DNS Security
- [ ] **Enable DNSSEC** on your domain registrar
- [x] **Add CAA records** to limit certificate issuance ✅ Done Dec 5, 2025
  ```
  CAA: 0 issue "digicert.com"
  CAA: 0 issue "letsencrypt.org"
  ```
- [x] **Add WWW record** ✅ Done Dec 5, 2025
- [ ] **Lock domain** at registrar (prevent unauthorized transfers)

#### Email Security
- [x] **Verify SPF record** exists and is correct ✅ Confirmed Dec 5, 2025
- [x] **Set up DKIM** in Google Workspace ✅ Done Dec 5, 2025 (pending verification)
- [x] **Add DMARC record** (p=quarantine) ✅ Done Dec 5, 2025
- [ ] **Test email security:** https://mxtoolbox.com/ (do after DKIM activates)

#### Repository Security
- [ ] **Enable 2FA** on all GitHub accounts with access
- [ ] **Add branch protection** for `production` branch
- [ ] **Review commits** for any accidentally committed secrets
- [ ] **Enable Dependabot** alerts (Settings → Security)

#### Cloudflare Security
- [ ] **Set SSL to Full (Strict)**
- [ ] **Enable Always Use HTTPS**
- [ ] **Enable Bot Fight Mode**
- [ ] **Set Security Level to Medium**

### Short-Term Actions (This Month)

#### Content Security
- [ ] **Add security headers** via Cloudflare Transform Rules:
  - Content-Security-Policy
  - X-Frame-Options: DENY
  - X-Content-Type-Options: nosniff
  - Referrer-Policy: strict-origin-when-cross-origin
  - Permissions-Policy: geolocation=(), microphone=(), camera=()

#### Privacy Compliance
- [ ] **Create Privacy Policy page** (required for GDPR)
- [ ] **Create Terms of Service page**
- [ ] **Document data handling procedures**

#### Access Control
- [ ] **Audit who has GitHub access**
- [ ] **Audit who has Cloudflare access**
- [ ] **Audit who has domain registrar access**
- [ ] **Set up access logging**

### Before Adding Donations/Forms

#### Payment Security (Critical)
- [ ] **Use established payment processor** (Stripe, PayPal)
- [ ] **Never handle card data directly**
- [ ] **Ensure PCI compliance** (handled by processor)
- [ ] **Use HTTPS everywhere** (already done)
- [ ] **Add fraud detection** (Stripe Radar, etc.)

#### Form Security
- [ ] **Add CAPTCHA** (reCAPTCHA, hCaptcha, or Turnstile)
- [ ] **Implement rate limiting**
- [ ] **Validate all inputs** server-side
- [ ] **Use CSRF tokens** if using backend
- [ ] **Sanitize all user input**

---

## 🔐 Security Headers Configuration

### Add via Cloudflare Transform Rules

Go to: **Rules → Transform Rules → Modify Response Header**

Create rule with these headers:

```
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: accelerometer=(), camera=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=()
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self'; frame-ancestors 'none';
```

---

## 👥 Organizational Security

### Staff Training
- [ ] **Phishing awareness training** for all staff
- [ ] **Password best practices** (use password manager)
- [ ] **2FA on all accounts** (email, social media, banking)
- [ ] **Incident reporting procedure**

### Account Security
- [ ] **Use unique passwords** for each service
- [ ] **Enable 2FA everywhere:**
  - GitHub ✓
  - Cloudflare ✓
  - Google Workspace ✓
  - Domain registrar ✓
  - Social media accounts ✓
  - Banking/payment accounts ✓

### Access Management
- [ ] **Document who has access to what**
- [ ] **Regular access reviews** (quarterly)
- [ ] **Remove access promptly** when people leave
- [ ] **Use principle of least privilege**

### Backup & Recovery
- [ ] **GitHub is your code backup** ✓
- [ ] **Document recovery procedures**
- [ ] **Test recovery process** annually
- [ ] **Keep offline backup** of critical documents

---

## 🚨 Incident Response Plan

### If Website is Compromised:

1. **Immediate:**
   - Enable Cloudflare "Under Attack Mode"
   - Switch production to `production` branch (Coming Soon)
   - Revoke all access tokens

2. **Investigate:**
   - Check Cloudflare logs
   - Check GitHub commit history
   - Identify attack vector

3. **Remediate:**
   - Fix vulnerability
   - Deploy clean code
   - Change all passwords
   - Notify affected parties if data breach

4. **Post-Incident:**
   - Document what happened
   - Update security measures
   - Train staff on lessons learned

### If Email is Compromised:

1. **Immediate:**
   - Change Google Workspace passwords
   - Revoke app passwords
   - Check for forwarding rules

2. **Notify:**
   - Alert team members
   - Warn contacts about potential phishing

3. **Secure:**
   - Enable 2FA if not already
   - Review account activity
   - Update DMARC policy

### If Domain is Hijacked:

1. **Contact registrar immediately**
2. **File complaint with ICANN** if needed
3. **Contact Cloudflare support**
4. **Document everything** for legal purposes

---

## 📊 Security Monitoring

### Regular Checks (Weekly)
- [ ] Review Cloudflare analytics for unusual traffic
- [ ] Check email for security alerts
- [ ] Verify website is displaying correctly

### Monthly Audits
- [ ] Review GitHub access and commits
- [ ] Check Cloudflare security settings
- [ ] Test email deliverability
- [ ] Review any form submissions for spam patterns

### Quarterly Reviews
- [ ] Full access audit (who has access to what)
- [ ] Update passwords for shared accounts
- [ ] Review and update security policies
- [ ] Test incident response procedures

### Annual Tasks
- [ ] Renew domain (set auto-renew!)
- [ ] Review SSL certificate status
- [ ] Full security assessment
- [ ] Update privacy policy if needed
- [ ] Staff security training refresh

---

## 🔧 Tools & Resources

### Security Testing
- **SSL Test:** https://www.ssllabs.com/ssltest/
- **Security Headers:** https://securityheaders.com/
- **Email Security:** https://mxtoolbox.com/
- **DNS Check:** https://dnschecker.org/
- **Website Security:** https://observatory.mozilla.org/

### Cloudflare Resources
- **Security Center:** Available in Cloudflare dashboard
- **Analytics:** Monitor traffic patterns
- **Firewall Events:** Review blocked requests

### Learning Resources
- **OWASP:** https://owasp.org/ (web security best practices)
- **Have I Been Pwned:** https://haveibeenpwned.com/ (check if emails compromised)
- **Google Safety Center:** https://safety.google/

---

## 📈 Security Maturity Roadmap

### Level 1: Basic (Current Target)
- [x] HTTPS enabled
- [x] Email security (SPF, DKIM, DMARC) ✅ Done Dec 5, 2025
- [x] CAA records configured ✅ Done Dec 5, 2025
- [x] WWW record configured ✅ Done Dec 5, 2025
- [ ] 2FA on all accounts
- [ ] Branch protection on GitHub
- [ ] Basic Cloudflare security settings
- [ ] DNSSEC enabled

### Level 2: Standard (Before Donations)
- [ ] Security headers implemented
- [ ] Privacy policy published
- [ ] Staff security training
- [ ] Incident response plan documented
- [ ] Regular security monitoring

### Level 3: Enhanced (For Growth)
- [ ] Web Application Firewall rules
- [ ] Advanced bot protection
- [ ] Security audit by professional
- [ ] Penetration testing
- [ ] Compliance certification (if needed)

---

## ✅ Priority Actions Summary

### This Week (Critical)
1. Enable 2FA on GitHub, Cloudflare, Google Workspace
2. ~~Verify/add email security records (SPF, DKIM, DMARC)~~ ✅ Done Dec 5, 2025
3. Enable DNSSEC on domain (requires registrar action)
4. Set Cloudflare SSL to Full (Strict)
5. Add branch protection on `production`
6. ~~Add CAA records~~ ✅ Done Dec 5, 2025
7. Verify DKIM is active in Google Workspace

### This Month (Important)
1. Add security headers via Cloudflare
2. Create Privacy Policy page
3. Audit all account access
4. Document incident response procedures
5. Test email security with MXToolbox

### Before Launch (Required)
1. Full security header implementation
2. Privacy policy live on site
3. All staff trained on phishing
4. Backup procedures documented
5. All critical accounts have 2FA

---

## 📞 Security Contacts

**For Security Issues:**
- **Cloudflare Support:** https://support.cloudflare.com/
- **GitHub Security:** security@github.com
- **Google Workspace:** Admin console → Support

**For Domain Issues:**
- **Your Registrar:** (document contact info)
- **ICANN:** For domain disputes

---

**Document Version:** 1.1
**Created:** December 5, 2025
**Last Updated:** December 5, 2025
**Next Review:** January 5, 2026
**Owner:** Undaunted Spirits Technical Team

---

## 📝 Change Log

### v1.1 - December 5, 2025
- ✅ Added WWW CNAME record
- ✅ Added CAA records (digicert.com, letsencrypt.org)
- ✅ Verified SPF record present
- ✅ Added DKIM record (pending Google verification)
- ✅ Added DMARC record (p=quarantine)
- Updated checklists to reflect completed items

### v1.0 - December 5, 2025
- Initial security analysis and plan created

