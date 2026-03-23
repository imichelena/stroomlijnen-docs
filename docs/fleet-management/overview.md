---
sidebar_position: 1
title: Fleet Management Overview
description: Manage your electric fleet charging with Stroomlijnen's My Fleet portal — vehicles, sessions, billing, and driver management.
keywords: [fleet management, My Fleet portal, electric fleet, charging management, fleet dashboard]
---

# Fleet Management Overview

Stroomlijnen's **My Fleet** portal gives fleet managers full visibility and control over their electric vehicle charging operations. From a single dashboard, you can manage vehicles, monitor charging sessions in real time, control costs, and generate reports.

## Accessing My Fleet

Navigate to **my.stroomlijnen.nu** and log in with your fleet manager credentials. First-time users need to register with their company's KVK number and be approved by a Stroomlijnen account manager.

## Dashboard

The main dashboard shows:

- **Fleet status** — How many vehicles are currently charging, idle, or en route
- **Today's energy** — Total kWh delivered across your fleet today
- **Active sessions** — Real-time view of all ongoing charging sessions with power curves
- **Alerts** — Certificate expirations, failed sessions, or unusual charging patterns
- **Monthly summary** — Running cost total and comparison with previous month

## Key Features

### Vehicle Management
Register, configure, and monitor all your electric vehicles in one place. Enable Plug & Charge, assign RFID cards, set charging policies per vehicle or group.

→ [Vehicle Management details](./vehicles)

### Session Monitoring
Track every charging session — past and present. See energy delivered, duration, cost, authentication method, and charger location. Export to CSV or integrate via API.

→ [Session details](./sessions)

### Invoicing & Billing
Monthly invoices with detailed breakdowns by vehicle, location, and date. Download invoices as PDF, get cost-per-km analysis, and set up automated billing.

→ [Invoicing details](./invoicing)

### Driver Management
Assign drivers to vehicles, issue personal RFID cards, and set per-driver charging limits. Drivers can use the Stroomlijnen app to find chargers and start sessions.

→ [Driver Management details](./driver-management)

## User Roles

| Role | Capabilities |
|------|-------------|
| **Fleet Admin** | Full access: vehicles, billing, PnC, users, API keys |
| **Fleet Manager** | Vehicle management, session monitoring, reports |
| **Billing Manager** | Invoice access, payment methods, cost reports |
| **Driver** | View own sessions, find chargers, start/stop sessions |

## API Access

For enterprises that want to integrate charging data into their own fleet management or ERP systems, we offer a REST API:

- Real-time session webhooks
- Historical session data
- Vehicle and driver management
- Invoice retrieval

API documentation is available in the My Fleet portal under **Settings** → **API**.

## Getting Started

1. [Register your fleet](https://stroomlijnen.nu/fleet-signup) or contact your account manager
2. [Add your vehicles](./vehicles)
3. [Enable Plug & Charge](../plug-and-charge/setup-guide) or [distribute RFID cards](../getting-started/rfid-cards)
4. Start charging — all sessions are automatically tracked and billed
