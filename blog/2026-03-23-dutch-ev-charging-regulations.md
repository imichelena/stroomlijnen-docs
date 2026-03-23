---
slug: dutch-ev-charging-regulations
title: "What Every Dutch Fleet Manager Needs to Know About EV Charging Regulations in 2026"
authors: [stroomlijnen]
tags: [regulations, netherlands, sprila, hbe, ocpp, zez, fleet-management]
description: "SPRILA subsidy, ERE/HBE certificates, OCPP 2.0.1 requirements, and ZEZ zones — a practical guide to the Dutch EV charging regulatory landscape in 2026."
image: /img/stroomlijnen-social-card.png
---

# What Every Dutch Fleet Manager Needs to Know About EV Charging Regulations in 2026

The Dutch government is serious about electrifying road transport. If you're managing a fleet, this means opportunities (subsidies, tax breaks) and obligations (zero-emission zones, protocol requirements). Here's the practical guide — no legal jargon, just what you need to do.

<!-- truncate -->

## SPRILA: Subsidy for Logistics Charging Infrastructure

**What it is:** SPRILA (*Subsidieregeling Publiek toegankelijke Realisatie van Interoperabele Laadinfrastructuur voor zeroemissie Apparatuur*) — yes, the Dutch love their acronyms — subsidizes the installation of public charging infrastructure at logistics locations.

**Who qualifies:**
- Companies installing charging points at locations where logistics vehicles park
- This includes: distribution centers, loading docks, parking areas near freight routes
- Theater parking sites also qualify when used for commercial vehicle charging

**What you get:**
- Up to **40-60% subsidy** on the hardware and installation costs
- Covers chargers, grid connection upgrades, and installation labor
- Exact percentage depends on the application round and project specifics

**Requirements:**
- Chargers must be **publicly accessible** (not behind a gate with private access only)
- Must use **OCPP 2.0.1** (more on this below)
- Must support **RFID and/or Plug & Charge** — no proprietary authentication
- Must be connected to a **registered CPO** with OCPI roaming capabilities

**How to apply:**
- Applications go through RVO (Rijksdienst voor Ondernemend Nederland)
- Application rounds open periodically — check [rvo.nl](https://www.rvo.nl)
- We handle the application for charging infrastructure at our partner sites

:::info For Fleet Operators
If you're a fleet operator (not a site owner), you can't apply for SPRILA directly. But you can **benefit** by negotiating with site owners or CPOs who use SPRILA funding to install chargers at locations you use. At Stroomlijnen, SPRILA-funded chargers translate to lower site costs, which we pass through in fleet rates.
:::

## ERE/HBE Certificates: Revenue from Renewable Charging

**What it is:** When you supply renewable electricity for transport, you generate Hernieuwbare Brandstofeenheden (HBE) certificates. These have real market value — they're traded and bought by fuel suppliers to meet their renewable energy obligations under the RED (Renewable Energy Directive).

**How it works:**
1. Charging energy is metered at each session
2. If the energy source qualifies as renewable, HBE certificates are generated
3. Certificates are registered with the NEa (Nederlandse Emissieautoriteit)
4. Certificates are sold on the market

**What it's worth:**
- HBE certificate value fluctuates: typically **€0.01–0.03 per kWh** on the trading market
- For a fleet consuming 500,000 kWh/year: **€5,000–15,000/year** in HBE revenue
- This revenue can be passed through to fleet operators as a tariff reduction

**Requirements for HBE generation:**
- Energy must be traceable to renewable sources (Guarantees of Origin)
- Metering must be certified (MID-compliant meters)
- Administration must be registered with NEa
- CPO must be registered as a participant

**At Stroomlijnen:** We generate HBE certificates for all qualifying energy delivered at our chargers. The revenue is factored into our fleet tariffs, effectively reducing the per-kWh cost.

## OCPP 2.0.1: Now Required for New Installations

**What changed:** Dutch regulation now requires OCPP 2.0.1 for **new publicly accessible charging infrastructure.** OCPP 1.6 chargers can remain in operation but are no longer eligible for subsidies (including SPRILA).

**Why this matters for fleet managers:**
- Chargers with OCPP 2.0.1 support **ISO 15118 (Plug & Charge)** — you want this
- Security is mandatory (TLS encryption, certificate-based authentication)
- Smart charging capabilities are more advanced — better for grid-integrated fleet charging
- Future-proof: V2G (vehicle-to-grid) will require OCPP 2.0.1 or newer

**What to check:**
- If you're installing chargers at your own depot: specify OCPP 2.0.1 in your purchase requirements
- If you're using a CPO (like Stroomlijnen): verify they run OCPP 2.0.1 (we do)
- If you see an OCPP 1.6 charger at a public location: it's legacy and won't support Plug & Charge

## ZEZ Zones: Zero-Emission Zones in Cities

**What it is:** Starting January 2025, Dutch municipalities can designate **Zero-Emission Zones (ZEZ)** — city center areas where only zero-emission vehicles are allowed for logistics deliveries.

**Current status (2026):**
- ~30 municipalities have active or announced ZEZ zones
- Most zones cover the inner city / historical center
- Enforcement is typically via camera systems (ANPR)

**Who's affected:**
- Trucks and vans making deliveries in ZEZ zones
- Exemptions exist for some vehicle categories (but they're shrinking)
- By 2030, virtually all urban logistics must be zero-emission

**What this means for fleet operators:**
1. If you deliver in Dutch cities, you need electric trucks (or hydrogen, but practically: electric)
2. Those electric trucks need to charge somewhere — preferably near the delivery area
3. Urban charging infrastructure is critical — and often scarce

**Where Stroomlijnen fits:** Many theaters are in or near city centers — exactly where ZEZ zones are. Our charging locations give fleet operators a place to charge before or after urban deliveries, within reach of ZEZ zones.

## MIA/VAMIL: Tax Incentives for Clean Assets

**What it is:**
- **MIA** (Milieu-investeringsaftrek): Tax deduction of 27–45% on qualifying environmental investments
- **VAMIL** (Willekeurige afschrijving milieu-investeringen): Accelerated depreciation on qualifying assets

**What qualifies:**
- Electric vehicles (trucks, vans)
- Charging infrastructure
- Battery storage systems
- Smart charging management systems

**The practical impact:**
- A €100,000 electric truck with 36% MIA: **€36,000 additional tax deduction**
- Applied on top of normal depreciation
- Reduces the effective cost gap between electric and diesel

**How to claim:**
1. Check the "Milieulijst" (environmental list) for qualifying asset codes
2. Apply within 3 months of the purchase commitment
3. Apply via eLoket at RVO.nl

## Putting It All Together

Here's a simplified decision tree for a Dutch fleet manager in 2026:

```
Do you deliver in Dutch cities?
├── Yes → You need electric trucks (ZEZ zones)
│   ├── Buying trucks? → Apply for MIA/VAMIL
│   ├── Need charging? → Check SPRILA eligibility
│   ├── Using a CPO? → Verify OCPP 2.0.1, P&C support
│   └── Tracking costs? → Check HBE certificate pass-through
└── No (rural/highway only) → Electrification timeline is longer but subsidies still apply
```

## Our Role

At Stroomlijnen, we navigate this regulatory landscape on behalf of our fleet partners:
- We apply for SPRILA funding for our charging sites
- We generate and manage HBE certificates
- We run OCPP 2.0.1 with full Plug & Charge support
- We locate chargers near ZEZ zones at theater and logistics sites
- We can provide documentation for your MIA/VAMIL applications

You focus on running your fleet. We handle the charging infrastructure and regulatory compliance.

## Stay Updated

Regulations change. Subscribe to our [RSS feed](/blog/rss.xml) or check back regularly — we publish updates when rules change and what they mean for fleet operations.

---

*Stroomlijnen B.V. operates electric truck charging infrastructure across the Netherlands. This article is for informational purposes — always verify current regulations with RVO.nl or your tax advisor for your specific situation.*
