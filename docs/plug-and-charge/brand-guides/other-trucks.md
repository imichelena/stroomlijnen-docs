---
sidebar_position: 6
title: Other Truck Brands — Plug & Charge
description: Plug & Charge status and setup information for Scania, MAN, Renault Trucks, Ford Trucks, IVECO, and VW Commercial Vehicles.
keywords: [Scania, MAN, Renault Trucks, IVECO, Plug and Charge, ISO 15118, electric truck]
---

# Other Truck Brands — Plug & Charge

This page covers PnC setup for truck brands that don't yet have their own dedicated guide. As adoption grows, we'll split these into separate guides.

## Scania BEV

**Models:** R-series BEV, P-series BEV
**PnC Status:** ✅ Supported (firmware 2025.3+)
**Fleet Portal:** Scania Fleet Management

### Setup Steps

1. Log in to [Scania Fleet Management](https://my.scania.com)
2. Go to **Electrification** → **Charging Services**
3. Click **Add Charging Partner** → search for "Stroomlijnen"
4. Authorize and select vehicles
5. Scania pushes certificates via their telematics gateway
6. **Typical installation time: 4–12 hours**

### Notes
- Scania requires firmware version 2025.3 or later for full PnC support
- Older firmware supports ISO 15118 communication but not contract certificate handling
- Contact your Scania dealer for firmware updates — OTA updates for PnC are rolling out gradually
- Scania's telematics system uses a separate mobile connection from the vehicle's infotainment — ensure the telematics SIM is active

## MAN Electric

**Models:** eTGX, eTGS, eTGL, eTGM
**PnC Status:** ✅ Supported on eTGX/eTGS | ⚠️ Rolling out on eTGL/eTGM
**Fleet Portal:** RIO Platform

### Setup Steps

1. Log in to [RIO](https://rio.cloud)
2. Navigate to **Services** → **Charge Management**
3. Under **External Charging Partners**, click **Connect Partner**
4. Find **"Stroomlijnen B.V."** and click **Authorize**
5. Select vehicles and confirm
6. **Typical installation time: 6–24 hours**

### Notes
- The RIO platform is shared across MAN and some other TRATON brands
- eTGX and eTGS have full PnC support since late 2025
- eTGL and eTGM are receiving PnC support in staged firmware updates through 2026
- MAN certificates use a hardware security module (HSM) in the vehicle — this provides excellent security but means certificates can only be installed when the truck's security module is in "provisioning mode" (first 30 minutes after ignition on)

## Renault Trucks E-Tech

**Models:** E-Tech T, E-Tech D, E-Tech Master (van)
**PnC Status:** ⚠️ Coming H1 2026
**Fleet Portal:** Renault Trucks Fleet Management

### Current Status
- ISO 15118-2 hardware is present in E-Tech T and E-Tech D
- PnC software activation is expected via OTA update in the first half of 2026
- Renault Trucks has been conducting PnC interoperability tests with Hubject since Q3 2025
- The E-Tech Master van does not have ISO 15118 support

### What to Do Now
1. Ensure your fleet portal account is set up with admin access
2. Register your vehicles in the Stroomlijnen My Fleet portal
3. Use RFID cards for charging in the meantime
4. We'll notify you when PnC becomes available for Renault Trucks

## Ford Trucks

**Models:** F-MAX Electric
**PnC Status:** ❌ Not yet supported

### Current Status
- The Ford F-MAX Electric (produced at Ford Otosan in Turkey) does not currently support ISO 15118
- Ford Otosan has announced ISO 15118 support in their 2027 model year roadmap
- Use RFID cards or the Stroomlijnen app for charging

## IVECO

**Models:** S-eWay
**PnC Status:** ⚠️ Announced for 2026 models

### Current Status
- IVECO has announced ISO 15118-2 PnC support for 2026 model year S-eWay trucks
- Pre-2026 models do not have the necessary ISO 15118 hardware
- Retrofitting is not available — PnC requires factory-installed communication modules
- Use RFID cards for current S-eWay trucks

## VW Commercial Vehicles

**Models:** ID. Buzz Cargo
**PnC Status:** ⚠️ Limited support

### Current Status
- The ID. Buzz Cargo supports ISO 15118-2 but PnC is managed through the VW We Charge ecosystem
- Cross-provider PnC (using Stroomlijnen certificates with VW vehicles) is technically possible but requires additional setup
- Contact Stroomlijnen support for VW-specific PnC configuration

---

:::info Don't see your brand?
Contact us at [info@stroomlijnen.nu](mailto:info@stroomlijnen.nu). We're actively expanding PnC support as more OEMs enable ISO 15118.
:::

**Next:** [Troubleshooting →](../troubleshooting)
