---
---
sidebar_position: 2
title: Your First Charging Session
description: Step-by-step guide for your first electric truck charging session at a Stroomlijnen location.
keywords: [first charging session, how to charge, electric truck, RFID, Plug and Charge]
---

# Your First Charging Session

Whether you're a fleet manager setting everything up or a driver standing in front of the charger for the first time — here's exactly what happens.

## Before You Arrive

### As Fleet Manager

1. **Register** on the Stroomlijnen portal at [portal.stroomlijnen.nl](https://portal.stroomlijnen.nl)
2. **Add your vehicles** — VIN numbers and license plates
3. **Choose your authentication method:**
   - **RFID passes** — we'll send them to you (see [RFID passes](/docs/getting-started/rfid-cards))
   - **Plug & Charge** — set up via the portal (see [Setup Guide](/docs/plug-and-charge/setup-guide))
4. **Inform your drivers** — share the location address and any access codes

### As Driver

- Make sure you have your **RFID pass** with you (or that your truck supports Plug & Charge)
- Know the **location address** and any access codes for gates
- Check your truck's **current battery level** — plan the required charging time accordingly

## At the Charger

### Step 1: Parking and Connecting

1. Drive to an available charger
2. Turn off the vehicle (some trucks require this; others don't — consult the manufacturer's manual)
3. Open the charge port
4. Connect the charging cable:
   - **CCS2** (Combined Charging System) — the European standard for DC fast charging
   - The plug fits only one way. Do not force it.

### Step 2: Authenticate

**With RFID pass:**
1. Hold your pass in front of the card reader on the charger
2. Wait for the green LED and/or confirmation on the display
3. Charging starts automatically

**With Plug & Charge:**
1. Connect the cable. That's it.
2. The truck and charger exchange certificates via ISO 15118
3. Charging starts within 5–10 seconds

**With charging app (roaming):**
1. Open your eMSP's app
2. Scan the QR code on the charger or enter the charger ID
3. Start the session in the app

### Step 3: Monitor

- The charger display shows real-time power (kW) and delivered energy (kWh)
- You can also monitor via the Stroomlijnen portal or your fleet management app
- Most electric trucks charge from 20% to 80% in 60–90 minutes on our DC chargers

### Step 4: Disconnect

1. Stop the session:
   - **RFID:** tap the pass again
   - **Plug & Charge:** simply disconnect (session ends automatically)
   - **App:** stop in the app, then disconnect
2. Hang the cable back in its holder
3. Close your charge port
4. Drive away

## What If Something Goes Wrong?

| Problem | What to do |
|-------|-----------|
| Pass not recognized | Check if the pass is activated in the portal. Try holding the pass closer to / longer in front of the reader. |
| Plug & Charge doesn't start | Check your truck's PnC status in the OEM portal. See [Troubleshooting](/docs/plug-and-charge/troubleshooting). |
| Charger displays error message | Note the error code and contact us. See [FAQ](/docs/faq). |
| Charging slower than expected | Battery temperature, charge level (SoC), and grid capacity all affect charging speed. Above 80% SoC, charging slows down significantly. |
| Cable not detachable | The cable locks during charging. Ensure the session is fully stopped before pulling. |

## Expected Charging Speeds

Electric trucks have different charging capacities:

| Power Level | Typical Use | Time for 200 kWh |
|-------------|------------|-------------------|
| 50 kW DC | Night / depot charging | ~4 hours |
| 150 kW DC | Opportunity charging | ~1.5 hours |
| 350 kW DC | Fast turnaround | ~40 minutes |

:::note
The actual charging speed depends on the vehicle's onboard charger, battery temperature, charge level, and the charger's available power. The charger delivers the maximum power requested by the vehicle, up to the charger's nominal power.
:::

## Next Steps

- [Set up Plug & Charge](/docs/plug-and-charge/setup-guide) for effortless future sessions
- [Understand your invoices](/docs/fleet-management/invoicing)
- [Add more drivers](/docs/fleet-management/driver-management)

---