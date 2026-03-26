---
---
sidebar_position: 100
title: FAQ
description: Frequently asked questions about Stroomlijnen electric truck charging — Plug & Charge, rates, RFID, fleet management, and more.
keywords: [FAQ, frequently asked questions, EV charging, Plug and Charge, fleet charging, RFID, pricing]
---

# Frequently Asked Questions

## General

### 1. What is Stroomlijnen?
Stroomlijnen is a Dutch Charge Point Operator (CPO) and e-Mobility Service Provider (eMSP) specializing in high-power DC charging for electric trucks. We install charging infrastructure at theaters, logistics hubs, and strategic locations throughout the Netherlands.

### 2. Why theaters?
Theaters have large electrical connections (for lighting, sound, and stage installations), parking spaces accessible to trucks (for deliveries of stage sets), and are available at night when trucks typically charge. A logical combination — we utilize existing infrastructure that would otherwise remain unused at night.

### 3. Which vehicles can charge at Stroomlijnen?
Any vehicle with a **CCS Combo 2** plug can charge at our DC stations. This includes electric trucks, vans, buses, and passenger cars. Our chargers deliver up to 400 kW, but adapt to the maximum power the vehicle can handle.

### 4. Where are Stroomlijnen chargers located?
Primarily in the Netherlands, with expansion planned to Belgium and Germany. View our [charger map](./locations/finding-charger) for all current locations.

### 5. Can passenger cars use your chargers?
Yes. Although our chargers are designed and positioned for commercial vehicles, any CCS-equipped car can also charge. Note that truck bays may have higher curbs or a different layout than a regular charging station for passenger cars.

## Plug & Charge

### 6. What is Plug & Charge?
Plug & Charge means your truck automatically authenticates and starts charging as soon as you plug in — no card, no app, no action from the driver. It uses ISO 15118 digital certificates built into the vehicle. See [What is Plug & Charge?](./plug-and-charge/what-is-pnc) for more details.

### 7. Is Plug & Charge secure?
Yes — even safer than RFID cards. PnC uses TLS mutual authentication and digital certificates (the same technology as online banking). Certificates are linked to the vehicle's VIN and stored in a hardware security module, making cloning extremely difficult.

### 8. Which trucks support Plug & Charge?
Most major electric truck manufacturers now support PnC: Volvo, DAF, Mercedes-Benz, Scania, and MAN. See our [list of compatible vehicles](./plug-and-charge/compatible-vehicles) for full details.

### 9. How long does it take to set up Plug & Charge?
About 15 minutes of portal configuration, then 1–24 hours for certificate installation in the vehicle (depending on the manufacturer). See the [setup guide](./plug-and-charge/setup-guide).

### 10. Can I use Plug & Charge AND RFID at the same time?
Yes. PnC and RFID can coexist. If PnC fails for any reason, the driver can always fall back to tapping the RFID card. The charger first attempts PnC; if PnC does not authenticate within 15 seconds, it requests an RFID card.

## Rates and Billing

### 11. What does charging cost?
Fleet customers receive a contractual €/kWh rate. There are no session fees or time-based costs — you only pay for consumed energy. Contact us for a fleet price quote.

### 12. How does billing work?
Monthly invoices with detailed session data, available as PDF, CSV, or UBL XML. Invoices are generated on the 1st of each month. See [Billing](./fleet-management/invoicing) for details.

### 13. Do you offer volume discounts?
Yes. Fleets that exceed monthly energy thresholds qualify for tiered rates. Contact your account manager or email [sales@stroomlijnen.nl](mailto:sales@stroomlijnen.nl) for details.

### 14. Can roaming users charge at Stroomlijnen?
Yes, via our Hubject and OCPI roaming connections. Users with charging cards from other providers can tap and charge. Roaming rates may differ from direct fleet rates.

## RFID Cards

### 15. How do I get RFID cards?
Order through the [My Fleet portal](./getting-started/rfid-cards) or contact your account manager. Cards are shipped within 3 working days and require activation.

### 16. What if an RFID card is lost or stolen?
Deactivate the card immediately via My Fleet → RFID Cards → select the card → Deactivate. The card is blocked on all Stroomlijnen chargers within seconds. Order a replacement through the portal.

### 17. Can one RFID card work on multiple vehicles?
Yes. RFID cards are linked to your fleet account, not a specific vehicle. Each card assigned to your fleet can start a charging session on any charger for any of your vehicles.

## Technical

### 18. Which OCPP version do your chargers use?
All new chargers use **OCPP 2.0.1**. Some older installations use OCPP 1.6-J. Both are fully supported by our CSMS. See [OCPP Overview](./technical/ocpp-overview).

### 19. Do you support smart charging / load balancing?
Yes. Our CSMS dynamically distributes power across chargers at each location based on grid capacity, vehicle priority, and time-of-day optimization. See [OCPP Overview → Smart Charging](./technical/ocpp-overview#smart-charging).

### 20. Can I integrate charging data with my fleet management system?
Yes. We offer a REST API with real-time webhooks for session data, vehicle management, and billing. SDKs available for Python, JavaScript, and C#. See [API & Integration](./technical/integration).

## Support

### How do I report a faulty charger?
- **App:** Help → Report Issue → select the charger
- **Phone:** Support number is on each charger
- **Email:** [support@stroomlijnen.nl](mailto:support@stroomlijnen.nl)
- **Include:** Charger ID (format: `NL*STM*E...`), time, and description of the issue

### How do I contact Stroomlijnen?
- **General questions:** [info@stroomlijnen.nl](mailto:info@stroomlijnen.nl)
- **Fleet sales:** [sales@stroomlijnen.nl](mailto:sales@stroomlijnen.nl)
- **Technical support:** [support@stroomlijnen.nl](mailto:support@stroomlijnen.nl)
- **Technical integration:** [technical@stroomlijnen.nl](mailto:technical@stroomlijnen.nl)

---