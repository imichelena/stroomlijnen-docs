---
---
sidebar_position: 6
title: Other Truck Brands — Plug & Charge
description: Plug & Charge status and installation information for Scania, MAN, Renault Trucks, Ford Trucks, IVECO, and VW Commercial Vehicles.
keywords: [Scania, MAN, Renault Trucks, IVECO, Plug and Charge, ISO 15118, electric truck]
---

# Other Truck Brands — Plug & Charge

This page covers PnC installation for truck brands that do not yet have their own comprehensive guide. As adoption grows, we will split these out into separate guides.

## Scania BEV

**Models:** R-series BEV, P-series BEV
**PnC status:** ✅ Supported (firmware 2025.3+)
**Fleet portal:** Scania Fleet Management

### Installation Steps

1. Log in to [Scania Fleet Management](https://my.scania.com)
2. Go to **Electrification** → **Charging services**
3. Click on **Add charging partner** → search for "Stroomlijnen"
4. Authorize and select vehicles
5. Scania pushes certificates via their telematics gateway
6. **Typical installation time: 4–12 hours**

### Notes
- Scania requires firmware version 2025.3 or higher for full PnC support
- Older firmware supports ISO 15118 communication but not contract certificate processing
- Contact your Scania dealer for firmware updates — OTA updates for PnC are being rolled out gradually
- Scania's telematics system uses a separate mobile connection from the vehicle's infotainment — ensure the telematics SIM is active

## MAN Electric

**Models:** eTGX, eTGS, eTGL, eTGM
**PnC status:** ✅ Supported on eTGX/eTGS | ⚠️ Being rolled out on eTGL/eTGM
**Fleet portal:** RIO platform

### Installation Steps

1. Log in to [RIO](https://rio.cloud)
2. Navigate to **Services** → **Charging management**
3. Click under **External Charging Partners** on **Connect partner**
4. Search for **"Stroomlijnen B.V."** and click on **Authorize**
5. Select vehicles and confirm
6. **Typical installation time: 6–24 hours**

### Notes
- The RIO platform is shared by MAN and some other TRATON brands
- eTGX and eTGS have full PnC support since late 2025
- eTGL and eTGM are receiving PnC support via phased firmware updates throughout 2026
- MAN certificates use a hardware security module (HSM) in the vehicle — this provides excellent security but means certificates can only be installed when the truck's security module is in "provisioning mode" (first 30 minutes after contact)

## Renault Trucks E-Tech

**Models:** E-Tech T, E-Tech D, E-Tech Master (van)
**PnC status:** ⚠️ Coming H1 2026
**Fleet portal:** Renault Trucks Fleet Management

### Current Status
- ISO 15118-2 hardware is present in E-Tech T and E-Tech D
- PnC software activation is expected via OTA update in the first half of 2026
- Renault Trucks is conducting PnC interoperability tests with Hubject since Q3 2025
- The E-Tech Master van does not have ISO 15118 support

### What to Do Now
1. Ensure your fleet portal account is set up with administrator access
2. Register your vehicles in the Stroomlijnen Fleet Portal
3. Use RFID passes for charging in the meantime
4. We will inform you when PnC becomes available for Renault Trucks

## Ford Trucks

**Models:** F-MAX Electric
**PnC status:** ❌ Not supported yet

### Current Status
- The Ford F-MAX Electric (produced by Ford Otosan in Turkey) currently does not support ISO 15118
- Ford Otosan has announced ISO 15118 support in their roadmap for model year 2027
- Use RFID passes or the Stroomlijnen app for charging

## IVECO

**Models:** S-eWay
**PnC status:** ⚠️ Announced for 2026 models

### Current Status
- IVECO has announced ISO 15118-2 PnC support for S-eWay trucks from model year 2026
- Pre-2026 models do not have the required ISO 15118 hardware
- Retrofitting is not available — PnC requires factory-installed communication modules
- Use RFID passes for current S-eWay trucks

## VW Commercial Vehicles

**Models:** ID. Buzz Cargo
**PnC status:** ⚠️ Limited support

### Current Status
- The ID. Buzz Cargo supports ISO 15118-2, but PnC is managed via the VW We Charge ecosystem
- Cross-provider PnC (using Stroomlijnen certificates with VW vehicles) is technically possible but requires additional configuration
- Contact Stroomlijnen support for VW-specific PnC configuration

---

:::info Your brand not found?
Contact us at [info@stroomlijnen.nl](mailto:info@stroomlijnen.nl). We are actively expanding PnC support as more OEMs enable ISO 15118.
:::

**Next:** [Troubleshooting →](../troubleshooting)

---