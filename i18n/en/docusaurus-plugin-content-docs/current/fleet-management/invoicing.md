---
---
sidebar_position: 4
title: Invoicing
description: How Stroomlijnen fleet charging invoicing works — monthly invoices, cost specifications, payment methods, and tax documentation.
keywords: [invoicing, billing, fleet charging costs, monthly invoice, VAT, kWh pricing, fleet account]
---

# Invoicing

Stroomlijnen offers transparent, detailed invoicing for all your fleet's charging activities. Invoices are generated monthly and contain session-by-session breakdowns.

## Pricing Model

Fleet customers are invoiced based on consumed energy:

- **Energy costs** — €/kWh rate according to your fleet contract
- **No session fees** — Unlike public charging, we don't charge start fees per session
- **No time-based fees** — You pay for energy, not parking time
- **Volume discounts** — Available for fleets exceeding monthly energy thresholds (see your contract)

Your contract rate is visible in **My Fleet** → **Settings** → **Invoicing** → **Rate Card**.

## Monthly Invoice

Invoices are generated on the **1st of each month** for the previous month's charging activities.

### Invoice Content

Each invoice contains:

- **Summary** — Total energy (kWh), total costs (€), number of sessions, number of vehicles
- **Breakdown per vehicle** — Energy and costs per vehicle
- **Detail per session** — Date, time, location, EVSE-ID, kWh, costs, authentication method
- **Tax details** — VAT (21%) calculated and displayed separately
- **Payment terms** — 14 days net

### Invoice Formats

- **PDF** — Formatted invoice document for your administration
- **CSV** — Machine-readable detail for import into accounting/ERP systems
- **UBL** — Universal Business Language XML for automated invoice processing (Dutch standard)

All formats are available via **My Fleet** → **Invoicing** → **Download**.

## Payment Methods

### Direct Debit (SEPA)
The preferred payment method for fleet customers:
1. Go to **Settings** → **Invoicing** → **Payment Method**
2. Click on **Set up direct debit**
3. Enter your IBAN and authorize the SEPA mandate
4. Invoices are automatically collected 14 days after issuance

### Bank Transfer
For customers paying manually:
- Payment details are listed on each invoice
- Reference: Invoice number (format: `STM-2026-XXXXX`)
- Bank: ING Bank, NL
- Due date: 14 days after invoice date

## Cost Allocation

### Per Cost Center
If your vehicles are assigned to cost centers in the Vehicles section, invoices can contain cost center breakdowns. This directly aligns with your internal accounting.

### Per Department/Group
Vehicle groups are reflected in the invoice detail, making it easy to distribute costs across departments.

### Custom Allocation
Do you need a specific allocation logic? We can configure custom invoice groupings for your organization. Contact your account manager.

## Tax and Compliance

### VAT
- All prices are listed **excluding VAT**
- VAT of 21% is added to all invoices
- The VAT number is listed on each invoice (Stroomlijnen B.V., KVK 93264526)

### Energy Tax
- Energy tax is included in the kWh rate where applicable
- The rate depends on the grid connection category of the location
- This is transparent — see your contract for specification

### CSRD / ESG Reporting
For companies with sustainability reporting obligations:
- We provide **annual energy certificates** showing total renewable energy consumption
- Calculations of avoided CO₂ are included in the annual fleet report
- Data format compatible with common ESG reporting frameworks

## Disputes and Corrections

If you believe an invoice contains an error:

1. Go to **Invoicing** → select the invoice → **Dispute**
2. Select the relevant session(s)
3. Describe the issue
4. Our invoicing team investigates and responds within 5 working days
5. Corrections are processed as a credit on the next invoice

## Historical Invoices

All invoices are **retained for 7 years** (Dutch legal requirement) and are accessible in the My Fleet portal. You can also set up automatic invoice sending to additional email addresses via **Settings** → **Invoicing** → **Invoice Recipients**.

---