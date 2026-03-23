---
sidebar_position: 100
title: FAQ
description: Frequently asked questions about Stroomlijnen electric truck charging — Plug & Charge, pricing, RFID, fleet management, and more.
keywords: [FAQ, frequently asked questions, EV charging, Plug and Charge, fleet charging, RFID, pricing]
---

# Frequently Asked Questions

## General

### 1. What is Stroomlijnen?
Stroomlijnen is a Dutch Charge Point Operator (CPO) and e-Mobility Service Provider (eMSP) specializing in high-power DC charging for electric trucks. We deploy charging infrastructure at theaters, logistics hubs, and strategic locations across the Netherlands.

### 2. Why theaters?
Theaters have large electrical grid connections (for lighting, sound, and stage equipment), truck-accessible parking (for stage equipment deliveries), and overnight availability when trucks typically charge. It's a natural match — we use existing infrastructure that would otherwise sit idle at night.

### 3. What types of vehicles can charge at Stroomlijnen?
Any vehicle with a **CCS Combo 2** connector can charge at our DC stations. This includes electric trucks, vans, buses, and passenger cars. Our chargers output up to 400 kW, but adapt to whatever power the vehicle can accept.

### 4. Where are Stroomlijnen chargers located?
Primarily in the Netherlands, with expansion planned into Belgium and Germany. Check our [charger map](./locations/finding-charger) for all current locations.

### 5. Can passenger cars use your chargers?
Yes. While our chargers are designed and positioned for commercial vehicles, any CCS-equipped car can charge. Note that truck bays may have higher curbs or different layouts than typical car charging stations.

## Plug & Charge

### 6. What is Plug & Charge?
Plug & Charge means your truck authenticates and starts charging automatically when you connect the cable — no card, no app, no driver action. It uses ISO 15118 digital certificates embedded in the vehicle. See [What is Plug & Charge?](./plug-and-charge/what-is-pnc) for details.

### 7. Is Plug & Charge secure?
Yes — more secure than RFID cards. PnC uses TLS mutual authentication and digital certificates (the same technology as online banking). Certificates are bound to the vehicle's VIN and stored in a hardware security module, making cloning extremely difficult.

### 8. Which trucks support Plug & Charge?
Most major electric truck brands now support PnC: Volvo, DAF, Mercedes-Benz, Scania, and MAN. See our [compatible vehicles list](./plug-and-charge/compatible-vehicles) for full details.

### 9. How long does Plug & Charge setup take?
About 15 minutes of portal configuration, then 1–24 hours for the certificate to be installed in the vehicle (depending on the OEM). See the [setup guide](./plug-and-charge/setup-guide).

### 10. Can I use Plug & Charge AND RFID?
Yes. PnC and RFID can coexist. If PnC fails for any reason, the driver can always fall back to tapping their RFID card. The charger tries PnC first, then prompts for RFID if PnC doesn't authenticate within 15 seconds.

## Pricing & Billing

### 11. How much does charging cost?
Fleet customers receive a contracted €/kWh rate. There are no session fees or time-based charges — you pay only for energy consumed. Contact us for a fleet pricing proposal.

### 12. How does invoicing work?
Monthly invoices with per-session breakdowns, available as PDF, CSV, or UBL XML. Invoices are generated on the 1st of each month. See [Invoicing](./fleet-management/invoicing) for details.

### 13. Do you offer volume discounts?
Yes. Fleets exceeding monthly energy thresholds qualify for tiered pricing. Contact your account manager or email [sales@stroomlijnen.nl](mailto:sales@stroomlijnen.nl) for details.

### 14. Can roaming users charge at Stroomlijnen?
Yes, through our Hubject and OCPI roaming connections. Users with charging cards from other providers can tap and charge. Roaming rates may differ from direct fleet rates.

## RFID Cards

### 15. How do I get RFID cards?
Order through the [My Fleet portal](./getting-started/rfid-cards) or contact your account manager. Cards are mailed within 3 business days and require activation.

### 16. What if an RFID card is lost or stolen?
Deactivate it immediately in My Fleet → RFID Cards → select card → Deactivate. The card is blocked within seconds across all Stroomlijnen chargers. Order a replacement through the portal.

### 17. Can one RFID card work on multiple vehicles?
Yes. RFID cards are linked to your fleet account, not a specific vehicle. Any card assigned to your fleet can start a session on any charger for any of your vehicles.

## Technical

### 18. What OCPP version do your chargers use?
All new chargers use **OCPP 2.0.1**. Some older installations run OCPP 1.6-J. Both are fully supported by our CSMS. See [OCPP Overview](./technical/ocpp-overview).

### 19. Do you support smart charging / load balancing?
Yes. Our CSMS dynamically allocates power across chargers at each site based on grid capacity, vehicle priority, and time-of-use optimization. See [OCPP Overview → Smart Charging](./technical/ocpp-overview#smart-charging).

### 20. Can I integrate charging data with my fleet management system?
Yes. We offer a REST API with real-time webhooks for session data, vehicle management, and invoicing. SDKs available for Python, JavaScript, and C#. See [API & Integration](./technical/integration).

## Support

### How do I report a broken charger?
- **App:** Help → Report Issue → select the charger
- **Phone:** Support number printed on each charger
- **Email:** [support@stroomlijnen.nl](mailto:support@stroomlijnen.nl)
- **Include:** Charger ID (format: `NL*STM*E...`), time, and description of the issue

### How do I contact Stroomlijnen?
- **General inquiries:** [info@stroomlijnen.nl](mailto:info@stroomlijnen.nl)
- **Fleet sales:** [sales@stroomlijnen.nl](mailto:sales@stroomlijnen.nl)
- **Technical support:** [support@stroomlijnen.nl](mailto:support@stroomlijnen.nl)
- **Technical integration:** [technical@stroomlijnen.nl](mailto:technical@stroomlijnen.nl)
