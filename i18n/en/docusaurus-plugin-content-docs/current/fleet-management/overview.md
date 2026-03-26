---
---
sidebar_position: 1
title: Fleet Management Overview
description: Manage the charging of your electric fleet with Stroomlijnen's My Fleet portal — vehicles, sessions, billing, and driver management.
keywords: [fleet management, My Fleet portal, electric fleet, charging management, fleet dashboard]
---

# Fleet Management Overview

The **My Fleet** portal from Stroomlijnen provides fleet managers with complete insight and control over their electric vehicle charging activities. From one dashboard, you can manage vehicles, monitor charging sessions in real-time, control costs, and generate reports.

## Access to My Fleet

Go to **my.stroomlijnen.nl** and log in with your fleet manager credentials. New users must register with their company's KVK number and be approved by a Stroomlijnen account manager.

## Dashboard

The main dashboard displays:

- **Fleet Status** — The number of vehicles currently charging, idle, or on the road
- **Today's Energy** — Total kWh delivered to your fleet today
- **Active Sessions** — Real-time overview of all ongoing charging sessions with power curves
- **Notifications** — Expired certificates, failed sessions, or unusual charging patterns
- **Monthly Overview** — Running cost total and comparison with the previous month

## Key Features

### Vehicle Management
Register, configure, and monitor all your electric vehicles in one place. Activate Plug & Charge, assign RFID passes, and set charging policies per vehicle or group.

→ [Vehicle Management Details](./vehicles)

### Session Monitoring
Follow each charging session — past and present. View delivered energy, duration, costs, authentication method, and charger location. Export to CSV or integrate via API.

→ [Session Details](./sessions)

### Billing
Monthly invoices with detailed breakdowns per vehicle, location, and date. Download invoices as PDF, receive cost-per-km analysis, and set up automatic billing.

→ [Billing Details](./invoicing)

### Driver Management
Assign drivers to vehicles, provide personal RFID passes, and set charging limits per driver. Drivers can use the Stroomlijnen app to find chargers and start sessions.

→ [Driver Management Details](./driver-management)

## User Roles

| Role | Permissions |
|------|-------------|
| **Fleet Manager** | Full access: vehicles, billing, PnC, users, API keys |
| **Fleet Administrator** | Vehicle management, session monitoring, reports |
| **Billing Administrator** | Access to invoices, payment methods, cost reports |
| **Driver** | View own sessions, find chargers, start/stop sessions |

## API Access

For companies that want to integrate charging data into their own fleet management or ERP systems, we offer a REST API:

- Real-time session webhooks
- Historical session data
- Vehicle and driver management
- Invoice query

API documentation is available in the My Fleet portal under **Settings** → **API**.

## Getting Started

1. [Register your fleet](https://stroomlijnen.nl/fleet-signup) or contact your account manager
2. [Add your vehicles](./vehicles)
3. [Activate Plug & Charge](../plug-and-charge/setup-guide) or [provide RFID passes](../getting-started/rfid-cards)
4. Start charging — all sessions will be automatically tracked and billed

---