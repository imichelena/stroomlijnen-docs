---
sidebar_position: 1
title: What is Plug & Charge?
description: "When a Plug & Charge compatible truck connects to our charger, billing starts automatically — no card, no app, no driver action needed."
keywords: [Plug and Charge, ISO 15118, automatic charging, electric truck, fleet charging, PnC]
---

# What is Plug & Charge?

**When a Plug & Charge compatible truck connects to our charger, billing starts automatically — no card, no app, no driver action needed.**

That's it. Plug in, walk away, come back to a charged truck. The charger and truck handle authentication, authorization, and billing between themselves.

## The Problem Plug & Charge Solves

Today, most charging sessions require the driver to:
1. Have the right card or app
2. Know which network operates this charger
3. Tap a card, scan a QR code, or start a session in an app
4. Wait for authorization
5. Then plug in

For a passenger car driver charging once a week, this is mild friction. For a fleet running 20 trucks with multiple drivers across shifts, it's an operational headache:

- Drivers forget cards
- Cards get lost or damaged
- New drivers need onboarding
- Different charger networks need different apps
- Shared vehicles need shared cards (security risk)
- Every failed authentication is lost charging time

### The Real Cost of Friction

For a fleet of 20 electric trucks:
- Average **3 minutes** per session on authentication fiddling
- Average **2 charging sessions** per truck per day
- That's **120 minutes per day** — two hours of driver time wasted on tapping cards
- At €35/hour fully loaded driver cost: **€1,225/month** in lost productivity
- Plus failed sessions, support calls, and frustrated drivers

## How Plug & Charge Fixes This

With Plug & Charge:
1. Driver plugs in the cable
2. **Done.**

The truck's onboard certificate handles everything. The charger knows who you are, which fleet you belong to, and where to send the bill — all exchanged cryptographically in under 5 seconds.

No cards to lose. No apps to install. No training needed. No difference between a day-one driver and a 10-year veteran.

## Who Can Use It?

Plug & Charge requires:

1. **A compatible vehicle** — the truck or van must support ISO 15118-2 or later. See our [Compatible Vehicles](/docs/plug-and-charge/compatible-vehicles) list.
2. **A compatible charger** — must support ISO 15118 and be connected to a Plug & Charge ecosystem. All Stroomlijnen chargers support this.
3. **Certificate provisioning** — your vehicle needs a contract certificate installed. We handle this through our portal.

## Is It Secure?

Yes. Plug & Charge uses the same type of cryptography that secures online banking:

- **X.509 certificates** — each vehicle has a unique digital certificate
- **PKI (Public Key Infrastructure)** — a chain of trust from the vehicle to the eMSP
- **TLS encryption** — all communication between vehicle and charger is encrypted
- **No sensitive data exposed** — the cable carries encrypted certificate data, not account numbers

A stolen vehicle can be disabled remotely by revoking its certificate. An RFID card, by contrast, works until someone notices it's gone.

:::info
Plug & Charge is **more secure** than RFID cards. Cards can be cloned (though modern cards make this difficult). Certificates cannot be — they use asymmetric cryptography with 256-bit keys.
:::

## The Business Case

For fleet managers, Plug & Charge is not just convenient — it's a cost reduction:

| Factor | RFID | Plug & Charge |
|--------|------|---------------|
| Driver time per session | 2–5 minutes | 0 minutes |
| Card management overhead | High | None |
| Lost/stolen card risk | Real | N/A |
| New driver onboarding | Issue card, explain process | "Just plug in" |
| Multi-shift vehicles | Share cards (risky) | Automatic per vehicle |
| Monthly admin time | Hours | Minutes |

## Getting Started

Ready to set up Plug & Charge for your fleet?

1. **[Check vehicle compatibility](/docs/plug-and-charge/compatible-vehicles)** — does your truck support it?
2. **[Understand how it works](/docs/plug-and-charge/how-it-works)** — the technology behind it
3. **[Set it up](/docs/plug-and-charge/setup-guide)** — step by step in our portal
4. **[Brand-specific guides](/docs/plug-and-charge/brand-guides/volvo-trucks)** — detailed instructions per manufacturer
