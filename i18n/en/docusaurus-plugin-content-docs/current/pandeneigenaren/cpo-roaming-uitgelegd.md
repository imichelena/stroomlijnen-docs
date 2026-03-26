---
---
sidebar_position: 10
title: CPO, eMSP, and Roaming Explained
description: What are CPOs and eMSPs, how does roaming between charging networks work, and which protocols are used?
keywords: [CPO, eMSP, roaming, OCPI, OCPP, charging network, interoperability, charging pass]
---

# CPO, eMSP, and Roaming Explained

The world of electric vehicle charging has its own jargon. This page explains the key concepts and roles.

## The Two Roles in the Charging Ecosystem

### CPO — Charge Point Operator

A **CPO** manages the physical charging infrastructure. The CPO is responsible for:

- Installation and maintenance of charging stations
- Communication between charging station and backoffice (via OCPP)
- Authorization of charging sessions
- Measurement and billing of delivered energy
- Breakdown service and monitoring

A CPO operates charging points at one or more locations. As a property owner, you have a contract with a CPO.

---

### eMSP — e-Mobility Service Provider

An **eMSP** provides services to the end-user (driver/fleet manager):

- Issuance of charging passes (RFID) or apps
- Roaming access to charging points from different CPOs
- Monthly billing for all charging sessions
- Customer service

A fleet manager has a contract with an eMSP. Their drivers can then charge at all charging points connected via roaming.

:::note A company can have both roles
Some providers are both CPO and eMSP. This means they manage charging points and issue charging passes. Examples: Vattenfall, Shell Recharge, Allego, Eneco.
:::

---

## OCPP — the Protocol between Charging Station and Backoffice

**OCPP (Open Charge Point Protocol)** is the international open standard for communication between a charging station and the CPO's backoffice system.

| Version | Status | Features |
|---|---|---|
| OCPP 1.6 | Widely used, older installations | Basic functionality |
| OCPP 2.0.1 | Current standard | Smart charging, V2G, improved security |
| OCPP 2.1 | In development | MCS, extended V2G |

**Why OCPP is important for property owners:** A charging station that supports OCPP is not tied to a single CPO. You can switch CPOs without replacing the hardware.

---

## OCPI — the Protocol for Roaming

**OCPI (Open Charge Point Interface)** is the protocol used for communication between CPOs and eMSPs. It enables roaming: a driver with an eMSP A pass can charge at a CPO B charging point, and both parties automatically settle the session.

```
Driver (eMSP A pass)
        ↓
Charging station (CPO B)
        ↓ OCPI connection
Backoffice CPO B → Backoffice eMSP A
        ↓
Invoice to fleet manager
```

The more CPOs and eMSPs connected via OCPI, the larger the network a driver has access to.

---

## Roaming in Practice

In the Netherlands, most major CPOs are connected via roaming hubs. The largest hubs are:

| Hub | Role |
|---|---|
| **Gireve** | European roaming hub, many large networks |
| **Hubject** | Plug & Charge roaming (ISO 15118) |
| **e-Laad** | Dutch grid operators (Nuon, Stedin etc.) |

A charging pass from a Dutch eMSP usually works on 300,000+ charging points in Europe via these hubs.

---

## What Does This Mean for You as a Property Owner?

If you have a charging point installed by a CPO connected to roaming networks, **all drivers with a valid charging pass** can charge at your station — not just customers of that one CPO.

**Ask when selecting a CPO:**
- "Which roaming networks are your charging points accessible through?"
- "Do Vattenfall, Shell Recharge, and Allego charging passes work at your stations?"

---

## Relevant Resources

| Organization | Link |
|---|---|
| Open Charge Alliance (OCPP/OCPI) | [openchargealliance.org](https://openchargealliance.org) |
| ElaadNL (technical standards NL) | [elaadnl.nl](https://elaadnl.nl) |
| Gireve (roaming hub) | [gireve.com](https://gireve.com) |
| Hubject (Plug & Charge) | [hubject.com](https://hubject.com) |
| NAL (National Agenda Charging Infrastructure) | [agendalaadinfrastructuur.nl](https://agendalaadinfrastructuur.nl) |

---