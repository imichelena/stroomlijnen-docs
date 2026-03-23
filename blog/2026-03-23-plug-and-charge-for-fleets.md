---
slug: plug-and-charge-for-fleets
title: "Why Plug & Charge Is a Game Changer for Electric Truck Fleets"
authors: [ignacio]
tags: [plug-and-charge, fleet-management, iso-15118, electric-trucks]
description: "Plug & Charge eliminates the biggest operational friction in fleet electrification. Here's why it matters and how it works."
image: /img/stroomlijnen-social-card.png
---

# Why Plug & Charge Is a Game Changer for Electric Truck Fleets

When fleet managers evaluate the switch from diesel to electric, the conversation usually starts with range and charging speed. Those are important — but they're not what keeps operations managers up at night. What keeps them up is **process**.

A diesel truck pulls into a fuel station, the driver swipes a fuel card, fills up, and leaves. It takes 8 minutes. The driver has done it 10,000 times. It's muscle memory.

Now consider the electric equivalent without Plug & Charge: the driver parks at the charger, gets out, opens an app (if they remember which one), scans a QR code (if the camera works, if there's enough light, if the app doesn't time out), waits for authorization, plugs in, and hopes it starts. Each step is a potential failure point, a potential support call, a potential 20-minute delay on a schedule that has no margin.

**Plug & Charge eliminates all of that.** The driver plugs in the cable. Charging starts. That's it.

<!-- truncate -->

## What Plug & Charge Actually Does

Plug & Charge (PnC) uses digital certificates embedded in the truck to authenticate automatically when the charging cable is connected. The technology is ISO 15118, the same protocol standard used across the European EV industry.

Here's the sequence:
1. Driver connects the CCS cable
2. The truck and charger establish a data link over the cable itself (no WiFi, no Bluetooth)
3. The truck presents its digital certificate
4. The charger validates the certificate against the trust chain
5. The backend confirms the associated fleet account is active
6. Charging starts — typically within 5 to 8 seconds

No app. No card. No QR code. No driver action beyond connecting the cable.

## Why This Matters More for Trucks Than Cars

For a private car owner, tapping an RFID card or using an app is mildly annoying. For a fleet operation running 50 trucks across 12 routes with tight delivery windows, it's an operational liability.

**Driver training.** Every fleet has turnover. New drivers need to learn which app, which card, which process for which charger network. PnC reduces the training to: "Plug in the cable."

**Error rate.** Our data from early fleet deployments shows that RFID and app-based sessions have a ~4% failure rate (expired cards, app authentication errors, wrong network selection). PnC sessions fail at less than 0.5% — and those failures are almost always hardware-related (cable issue, connector wear).

**Time.** The average RFID/app authentication takes 45–90 seconds including fumbling with cards and apps. PnC takes 5–8 seconds. Across 50 trucks charging daily, that's 30–60 minutes of recovered operational time per day. Over a year, that's 180–360 hours.

**Night charging.** Many of our fleet customers charge overnight at theater locations. With PnC, the night-shift driver connects the cable before parking the truck. No apps to open at 11 PM with cold fingers and a dying phone. Connect. Walk away. Done.

## The Security Argument

Fleet managers sometimes worry: "If anyone can just plug in and charge on our account, that's a security risk."

The opposite is true. PnC is **more secure** than RFID:

- RFID cards can be cloned with €30 of equipment from Amazon
- PnC uses TLS mutual authentication — the same technology that secures online banking
- The certificate is bound to the vehicle's VIN, stored in a hardware security module
- If a truck is stolen, the certificate can be revoked remotely in seconds

You can't clone a PnC certificate. You can't use it in a different vehicle. And you can revoke it without physically collecting a card.

## What It Takes to Set Up

From our experience deploying PnC across Dutch fleets, the setup process takes:

1. **15 minutes** of portal configuration (register vehicles, enable PnC)
2. **1–24 hours** for the certificate to be delivered to the truck (varies by OEM — Volvo is fastest, MAN takes longest)
3. **Zero ongoing maintenance** — certificates auto-renew, billing is automatic

The fleet manager does the setup once. After that, it's invisible.

## The Fleet Manager's Real Question

The question isn't whether PnC works — it does, reliably, at scale. The question fleet managers should be asking their CPO is: **"Why isn't this the default?"**

At Stroomlijnen, it is. Every fleet account comes with PnC enabled. Every charger supports it. Every compatible truck can use it on day one.

The future of fleet charging isn't apps and cards. It's invisible. Connect the cable. Charging starts. The driver's job is driving — not being an IT support technician in a parking lot at midnight.

---

*Want to enable Plug & Charge for your fleet? [Get started here](/docs/plug-and-charge/setup-guide) or contact us at [sales@stroomlijnen.nu](mailto:sales@stroomlijnen.nu).*
