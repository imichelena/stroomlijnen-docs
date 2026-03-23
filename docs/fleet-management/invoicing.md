---
sidebar_position: 4
title: Invoicing & Billing
description: How Stroomlijnen fleet charging invoicing works — monthly invoices, cost breakdowns, payment methods, and tax documentation.
keywords: [invoicing, billing, fleet charging costs, monthly invoice, BTW, kWh pricing, fleet account]
---

# Invoicing & Billing

Stroomlijnen provides transparent, detailed invoicing for all fleet charging activity. Invoices are generated monthly and include per-session breakdowns.

## Pricing Model

Fleet customers are billed based on energy consumed:

- **Energy charge** — €/kWh rate as per your fleet contract
- **No session fees** — Unlike public charging, we don't charge per-session start fees
- **No time-based charges** — You're billed for energy, not parking time
- **Volume discounts** — Available for fleets exceeding monthly energy thresholds (see your contract)

Your contracted rate is visible in **My Fleet** → **Settings** → **Billing** → **Rate Card**.

## Monthly Invoice

Invoices are generated on the **1st of each month** for the previous month's charging activity.

### Invoice Contents

Each invoice includes:

- **Summary** — Total energy (kWh), total cost (€), number of sessions, number of vehicles
- **Per-vehicle breakdown** — Energy and cost per vehicle
- **Per-session detail** — Date, time, location, EVSE ID, kWh, cost, authentication method
- **Tax details** — BTW (21%) calculated and shown separately
- **Payment terms** — 14 days net

### Invoice Formats

- **PDF** — Formatted invoice for your records
- **CSV** — Machine-readable detail for import into accounting/ERP systems
- **UBL** — Universal Business Language XML for automated invoice processing (Dutch standard)

All formats are available in **My Fleet** → **Invoicing** → **Download**.

## Payment Methods

### Direct Debit (SEPA)
The preferred payment method for fleet customers:
1. Go to **Settings** → **Billing** → **Payment Method**
2. Click **Set Up Direct Debit**
3. Enter your IBAN and authorize the SEPA mandate
4. Invoices are automatically debited 14 days after issue

### Bank Transfer
For customers who prefer manual payment:
- Payment details are included on each invoice
- Reference: Invoice number (format: `STM-2026-XXXXX`)
- Bank: ING Bank, NL
- Due: 14 days from invoice date

## Cost Allocation

### By Cost Center
If your vehicles are assigned to cost centers in the Vehicles section, invoices can include cost center breakdowns. This maps directly to your internal accounting.

### By Department/Group
Vehicle groups are reflected in the invoice detail, making it easy to split costs across departments.

### Custom Allocation
Need a specific allocation logic? We can configure custom invoice groupings for your organization. Contact your account manager.

## Tax & Compliance

### BTW (VAT)
- All prices are quoted **excluding BTW**
- BTW at 21% is added to all invoices
- BTW number is shown on each invoice (Stroomlijnen B.V., KVK 93264526)

### Energy Tax (Energiebelasting)
- Energy tax is included in the kWh rate where applicable
- The rate depends on the location's grid connection category
- This is transparent — see your contract for the breakdown

### CSRD / ESG Reporting
For companies with sustainability reporting obligations:
- We provide **annual energy certificates** showing total renewable energy used
- CO₂ avoided calculations are included in the annual fleet report
- Data format compatible with common ESG reporting frameworks

## Disputes & Corrections

If you believe an invoice contains an error:

1. Go to **Invoicing** → select the invoice → **Dispute**
2. Select the session(s) in question
3. Describe the issue
4. Our billing team will investigate and respond within 5 business days
5. Corrections are applied as credits on the next invoice

## Historical Invoices

All invoices are retained for **7 years** (Dutch legal requirement) and accessible in the My Fleet portal. You can also set up automated invoice delivery to additional email addresses in **Settings** → **Billing** → **Invoice Recipients**.
