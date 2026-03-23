---
slug: why-plug-and-charge-matters-for-fleets
title: "Why Plug & Charge Is a Game Changer for Electric Truck Fleets"
authors: [stroomlijnen]
tags: [plug-and-charge, fleet-management, electric-trucks, iso-15118]
description: "How Plug & Charge eliminates driver friction, reduces operational costs, and simplifies fleet electrification — with real numbers."
image: /img/stroomlijnen-social-card.png
---

# Why Plug & Charge Is a Game Changer for Electric Truck Fleets

If you manage an electric truck fleet — or you're planning to electrify — the single biggest operational headache isn't range, isn't charging speed, and isn't even cost. It's **driver friction at the charger.**

<!-- truncate -->

## The Invisible Cost of "Tap Your Card"

Here's a scenario every fleet manager recognizes: your driver arrives at a charging station, pulls out an RFID card, taps it on the reader, and... nothing. Wrong card. Try another. Wait. Error message. Call dispatch. Five minutes later, they're still not charging.

Now multiply that by 20 trucks, 2 sessions per day, 250 working days per year. The numbers add up fast.

### The Math Nobody Does

Let's be honest about the real cost of card-based charging authentication:

**Per session:**
- Finding the right card: 30 seconds
- Tapping and waiting for auth: 30 seconds
- Dealing with errors (1 in 10 sessions): 3 minutes average
- **Average time per session: 2.5 minutes**

**Per fleet (20 trucks, 2 sessions/day):**
- 100 minutes per day on authentication
- 8.3 hours per week
- **433 hours per year** — that's 54 full working days

At €35/hour fully loaded driver cost, that's **€15,155/year** spent on tapping cards. For a fleet of 50 trucks, you're looking at nearly €40,000.

And that's just the time cost. Factor in:
- Lost cards (€5–15 replacement, plus the day without it)
- Wrong-account charges (roaming card used at home depot — higher rate)
- Support calls ("my card doesn't work")
- New driver onboarding ("here's how you use three different cards")
- Multi-shift complications ("who has the card?")

## How Plug & Charge Eliminates All of This

With Plug & Charge, the driver plugs in the cable. That's the entire interaction. No card, no app, no QR code, no PIN. The truck and charger handle everything else through ISO 15118 certificates.

**Per session with Plug & Charge:**
- Plug in cable: 15 seconds
- Wait for authentication: 5 seconds (cryptographic handshake)
- **Total: 20 seconds**

That's a 7x reduction in per-session time. More importantly, the **error rate drops to near zero** because there's no human step that can go wrong. You can't forget a certificate — it's built into the truck.

## What Fleet Managers Actually Gain

### 1. Zero Driver Training
New driver on day one? "See that cable? Plug it in." That's the training. Compare that with: "Here's your RFID card, here's how to activate it, here's the backup app, here's what to do if the card doesn't work, here are the chargers where it works differently..."

### 2. Multi-Shift Simplicity
Three drivers sharing one truck across shifts? With RFID, they either share a card (security risk, no per-driver tracking) or each need their own card assigned to that vehicle (management overhead). With Plug & Charge, the certificate lives in the truck. All three drivers just plug in.

### 3. Accurate Cost Attribution
Every Plug & Charge session is automatically linked to the correct vehicle and fleet contract. No wrong-card charges, no "who used the roaming card at Shell Recharge" mysteries on the invoice.

### 4. Security You Don't Think About
An RFID card is a physical object that can be lost, stolen, or theoretically cloned. A Plug & Charge certificate is a cryptographic identity stored in the vehicle's secure hardware module. You can't lose it, you can't clone it, and if the vehicle is sold, the certificate is revoked remotely in seconds.

## The Practical Reality (Honest Assessment)

Plug & Charge isn't perfect — yet. Here's what you should know:

**It works well when:**
- Your trucks are from major OEMs (Volvo, DAF, Mercedes-Benz, Scania, MAN) model year 2024+
- You're charging at CPOs that support ISO 15118 (growing fast, not yet universal)
- Certificate provisioning is set up through your fleet portal

**It's not there yet when:**
- You're running older electric vans (Ford E-Transit, VW eCrafter — no ISO 15118)
- You rely heavily on ad-hoc public charging at smaller operators
- Your OEM hasn't rolled out the software update for P&C yet

**Our recommendation:** Set up Plug & Charge as the primary method for compatible trucks, and keep RFID cards as the fallback. Belt and suspenders. Over the next 2–3 years, as more CPOs adopt ISO 15118 and vehicle compatibility grows, the RFID cards will get used less and less.

## Getting Started

If you're ready to eliminate the card-tapping tax from your fleet:

1. **Check compatibility:** [Which trucks support Plug & Charge?](/docs/plug-and-charge/compatible-vehicles)
2. **Understand the tech:** [How Plug & Charge works under the hood](/docs/plug-and-charge/how-it-works)
3. **Set it up:** [Step-by-step setup guide](/docs/plug-and-charge/setup-guide)

The setup takes about 15 minutes per vehicle. After that, every future session is zero-effort. The ROI speaks for itself.

---

*Stroomlijnen B.V. operates Plug & Charge enabled charging infrastructure at theaters and logistics sites across the Netherlands. Our knowledge base at [docs.stroomlijnen.nl](https://docs.stroomlijnen.nl) covers everything fleet managers need to know about electric charging.*
