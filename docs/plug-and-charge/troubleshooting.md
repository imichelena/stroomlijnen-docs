---
sidebar_position: 10
title: Plug & Charge Troubleshooting
description: Common Plug & Charge issues and solutions — from certificate errors to communication failures at the charger.
keywords: [Plug and Charge troubleshooting, PnC errors, ISO 15118 problems, charging fails, certificate error]
---

# Plug & Charge Troubleshooting

When Plug & Charge doesn't work as expected, the issue usually falls into one of a few categories: certificate problems, communication failures, or configuration gaps. This guide walks through the most common issues.

## Quick Diagnostic Checklist

Before diving into specifics, run through this checklist:

- [ ] Is the vehicle [PnC compatible](./compatible-vehicles)?
- [ ] Is the vehicle firmware up to date?
- [ ] Is PnC enabled in the Stroomlijnen My Fleet portal?
- [ ] Does the certificate status show "Active" in both portals (OEM + Stroomlijnen)?
- [ ] Is the vehicle's ignition on or accessory mode active?
- [ ] Is the CCS cable fully seated in the vehicle's inlet?

## Common Issues

### 1. Charger shows "Authentication Failed"

**Symptoms:** Cable connected, charger attempts PnC but displays an authentication error.

**Causes & Solutions:**

| Cause | Solution |
|-------|----------|
| Certificate expired | Check expiry in My Fleet → Vehicle → PnC tab. Renew if expired. |
| Certificate not yet installed | Status may show "Pending". Ensure truck is online. Wait up to 24 hours. |
| Certificate revoked | If intentionally revoked, re-enable PnC in the portal. |
| EMAID not synchronized | Contact Stroomlijnen support — our backend may need to sync with Hubject. |
| Wrong certificate presented | If multiple eMSP certificates are installed, the truck may present the wrong one. Check OEM portal. |

### 2. Charger Falls Back to RFID

**Symptoms:** Instead of PnC, the charger prompts "Please tap your RFID card."

**Causes & Solutions:**

- **Vehicle doesn't initiate ISO 15118-2:** The truck's communication module may not be offering PnC. Restart the vehicle and try again.
- **PLC communication failed:** Power Line Communication between cable and vehicle isn't establishing. Try a different cable or connector (if available). Clean the CCS connector contacts.
- **Charger PnC temporarily disabled:** Rarely, a charger may have PnC disabled for maintenance. Try another charger at the same site.

### 3. Certificate Status Stuck on "Pending"

**Symptoms:** You enabled PnC days ago but the certificate hasn't been installed.

**Solutions:**
1. **Ensure the truck has been online** — The truck needs to be turned on (ignition or accessory mode) with cellular connectivity for the certificate to be delivered
2. **Check OEM portal** — There may be a pending authorization request you need to approve
3. **Check fleet portal permissions** — Ensure your account has admin-level access for PnC management
4. **Re-trigger installation** — In My Fleet → Vehicle → PnC tab, click **Re-send Certificate Request**
5. **Contact support** — If stuck for more than 48 hours, contact both Stroomlijnen and your OEM dealer

### 4. PnC Works Intermittently

**Symptoms:** PnC works at some chargers or some times, but fails randomly.

**Possible causes:**

- **Weak PLC signal:** The Power Line Communication signal can be affected by cable condition, connector wear, or electromagnetic interference. Try fully unplugging and reconnecting.
- **Vehicle software glitch:** Restart the truck (full ignition cycle: off → wait 30 seconds → on).
- **Backend timeout:** If our backend is slow to respond, the charger may time out. Usually resolves on retry.
- **Certificate nearing expiry:** Some systems have stricter validation when certificates are close to expiry. Check remaining validity.

### 5. "Contract Certificate Invalid" Error

**Symptoms:** The charger specifically reports the contract certificate as invalid.

**Solutions:**
1. **Check certificate chain:** In My Fleet, verify the certificate details. If the chain is broken (e.g., intermediate CA expired), contact Stroomlijnen support.
2. **Time synchronization:** If the vehicle's clock is significantly wrong, certificate validation can fail. This is rare on modern trucks but possible after long storage periods.
3. **Root CA update needed:** The charger may need an updated root certificate. Stroomlijnen manages this automatically, but during rollouts there can be temporary gaps. Report the specific charger ID to support.

### 6. Session Starts But Stops Immediately

**Symptoms:** PnC authenticates successfully, charging starts, then stops within seconds.

**This is usually not a PnC problem.** The authentication worked — the issue is in the charging session itself:

- **Battery management system (BMS) intervention:** The truck's BMS may be limiting charge acceptance (temperature, SoC, cell balancing)
- **Power negotiation failure:** The charger and vehicle couldn't agree on charging parameters. Try again — dynamic power allocation can vary.
- **Ground fault detection:** Safety system detected an issue. Unplug, inspect cable and connector for moisture or debris, try again.

## Error Codes

If the charger displays a specific error code, note it and contact support. Common codes:

| Code | Meaning | Action |
|------|---------|--------|
| AUTH-001 | No valid contract certificate found | Check certificate installation |
| AUTH-002 | Certificate chain validation failed | Contact support |
| AUTH-003 | EMAID not authorized | Check My Fleet PnC status |
| AUTH-004 | Backend communication timeout | Wait 2 minutes, retry |
| COMM-001 | PLC link failed | Reconnect cable, clean contacts |
| COMM-002 | ISO 15118 protocol version mismatch | Update vehicle firmware |
| COMM-003 | TLS handshake failed | Contact support |

## Collecting Diagnostic Information

When contacting support, please provide:

1. **Vehicle details:** Make, model, VIN, firmware version
2. **Charger details:** Location name, charger ID (printed on the unit, format: `NL*STM*E...`)
3. **Date and time** of the failed attempt
4. **Error message** or code shown on the charger
5. **Screenshots** from the charger display and/or vehicle dashboard (if safe to capture)

## Contact Support

- **Email:** [support@stroomlijnen.nu](mailto:support@stroomlijnen.nu)
- **Phone:** Available to fleet customers (see your contract for the support number)
- **My Fleet portal:** Submit a support ticket via the Help section

---

**Still stuck?** Check the [FAQ](../faq) for more common questions, or reach out to your Stroomlijnen account manager.
