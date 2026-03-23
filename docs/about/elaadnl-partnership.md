---
sidebar_position: 1
title: ElaadNL Partnership
description: How Stroomlijnen aligns with ElaadNL's research and standards work to advance electric truck charging in the Netherlands.
keywords: [ElaadNL, research, charging standards, Netherlands, interoperability, V2G, ISO 15118, OCPP]
---

# Our Alignment with ElaadNL

[ElaadNL](https://elaad.nl) is the Netherlands' knowledge and innovation center for smart charging infrastructure. Founded by the Dutch grid operators, ElaadNL drives the development of standards, protocols, and interoperability testing that the entire EV charging industry relies on.

Stroomlijnen actively aligns with ElaadNL's research and contributes to the advancement of electric truck charging in the Netherlands.

## What ElaadNL Does

ElaadNL operates at the intersection of research, standards, and practical testing:

- **Interoperability testing** — The ElaadNL test lab verifies that chargers, vehicles, and backend systems work together correctly
- **Protocol development** — Contributing to OCPP, OSCP, ISO 15118, and OCPI standards
- **Grid impact research** — Studying how mass EV charging affects the electricity grid and developing smart solutions
- **Knowledge sharing** — Publishing research, hosting events, and educating the industry

## How We Align

### ISO 15118 & Plug & Charge
ElaadNL has been instrumental in advancing ISO 15118 adoption in the Netherlands. Their test facility was among the first to validate PnC interoperability between different charger and vehicle combinations.

Stroomlijnen's PnC implementation follows ElaadNL's best practices and interoperability guidelines. Our chargers undergo testing against ElaadNL's ISO 15118 conformance test suite before deployment.

### OCPP 2.0.1
ElaadNL is a founding contributor to OCPP through the Open Charge Alliance (OCA). They helped develop OCPP 2.0.1, which Stroomlijnen uses as our standard charger management protocol.

We implement OCPP 2.0.1 features as recommended by ElaadNL's deployment guidelines, including:
- ISO 15118 certificate management via OCPP
- Smart charging profiles
- Secure firmware updates
- Signed meter values for billing accuracy

### Smart Charging & Grid Integration
ElaadNL's research on grid impact and smart charging directly informs our load management strategy:

- **OSCP (Open Smart Charging Protocol)** — We use OSCP-compatible signaling to receive grid capacity forecasts from Distribution System Operators (DSOs)
- **Dynamic load balancing** — Our algorithms follow ElaadNL's recommendations for fair power allocation
- **Grid congestion management** — At sites in grid-constrained areas, we implement ElaadNL's proposed congestion management profiles

### Vehicle-to-Grid (V2G)
ElaadNL runs one of Europe's most advanced V2G research programs. Their findings on bidirectional charging technology, grid services, and market models guide our V2G readiness:

- Our charger hardware supports bidirectional power flow
- We're preparing for ISO 15118-20 (which adds V2G signaling)
- Our business model includes future V2G revenue for fleet operators — a concept validated by ElaadNL's research

### Electric Truck Charging Research
ElaadNL has published specific research on the unique challenges of electric truck charging:

- **High-power charging** — Grid impact of 150–400 kW chargers and the need for local storage or demand management
- **Megawatt Charging System (MCS)** — Standards development for the next generation of ultra-fast truck charging
- **Overnight depot charging** — Optimization strategies for fleet depots (directly relevant to our theater charging model)
- **En-route opportunity charging** — Network planning for highway charging stations

Stroomlijnen incorporates these findings into our site design, grid connection planning, and charging management.

## Shared Vision

Both ElaadNL and Stroomlijnen believe in:

1. **Open standards** — OCPP, OCPI, ISO 15118 over proprietary protocols
2. **Interoperability** — Any vehicle should work at any charger
3. **Grid-friendly charging** — Smart charging that helps rather than strains the grid
4. **Knowledge sharing** — Publishing learnings for the benefit of the industry
5. **Dutch leadership** — The Netherlands as a global leader in EV charging infrastructure

## Publications & Resources

Relevant ElaadNL publications:

- [ElaadNL EV Related Protocol Study](https://elaad.nl/research/) — Comprehensive overview of all EV charging protocols
- [Dutch EV Charging Outlook](https://elaad.nl/research/) — Annual forecast of charging infrastructure needs
- [ISO 15118 Implementation Guide](https://elaad.nl/research/) — Practical guidance for PnC deployment
- [OCPP 2.0.1 Application Guide](https://elaad.nl/research/) — Best practices for CSMS implementation

## Get Involved

If you're interested in the research and standards behind EV charging:

- Visit [elaad.nl](https://elaad.nl) for publications and events
- Follow ElaadNL on [LinkedIn](https://www.linkedin.com/company/elaadnl/) for updates
- Attend ElaadNL's annual Knowledge Day (typically in November)
- For collaboration inquiries with Stroomlijnen, contact [partnerships@stroomlijnen.nu](mailto:partnerships@stroomlijnen.nu)
