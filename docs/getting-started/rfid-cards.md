---
sidebar_position: 3
title: RFID Cards
description: How to order, activate, and manage RFID charging cards for your electric fleet with Stroomlijnen.
keywords: [RFID card, charging card, NL*STM, fleet charging, activate card]
---

# RFID Cards

RFID (Radio Frequency Identification) cards are the traditional way to authenticate at a charging station. Tap your card, start charging — simple and reliable.

## How RFID Charging Cards Work

Each card contains a unique identifier (called a **token** or **UID**) that's linked to your fleet account. When you tap the card on a charger's reader:

1. The charger reads the card's UID
2. Sends it to the Stroomlijnen backend via OCPP
3. Our system checks: is this card valid? Which fleet does it belong to?
4. If valid → charging starts. The session is billed to the fleet account.

This works at any Stroomlijnen location and at **roaming partner chargers** across Europe — the card carries your NL\*STM eMSP identity.

## Ordering Cards

### New Fleet Setup
When you register your fleet, you can order cards directly through the portal:

1. Go to **My Fleet → RFID Cards**
2. Click **Order Cards**
3. Specify the number of cards needed
4. Enter the shipping address
5. Cards arrive within 3–5 business days

### Additional Cards
Need more? Same process. You can order additional cards at any time.

### Pricing
- Cards are provided at no extra charge with your fleet subscription
- Lost card replacement: free (first two per year), €5 per card after that

## Activating a Card

Cards arrive **pre-activated** and linked to your fleet. However, you should:

1. Go to **My Fleet → RFID Cards** in the portal
2. Verify the new cards appear in your list
3. **Assign each card to a driver** (optional but recommended — helps with session tracking)
4. Test the card at a charger

:::tip
Assign cards to specific drivers. This way, your charging reports show which driver used which card, making fleet cost allocation much easier.
:::

## Managing Cards

### Deactivating a Card
If a card is lost or a driver leaves the company:
1. Go to **My Fleet → RFID Cards**
2. Find the card (by number or driver name)
3. Click **Deactivate**
4. The card stops working immediately at all chargers

### Reactivating a Card
Found that "lost" card? You can reactivate it the same way.

### Card Groups
For larger fleets, organize cards into groups:
- **By vehicle** — one card per truck
- **By driver** — personal cards that work with any vehicle
- **By department** — separate billing per business unit

## Lost or Stolen Cards

1. **Deactivate immediately** in the portal (or call us)
2. The card becomes invalid within 60 seconds at all connected chargers
3. Order a replacement
4. Any charges made before deactivation appear on your normal invoice

:::caution
Deactivate lost cards promptly. Until deactivated, anyone with the card can charge on your account. We process deactivation within 60 seconds — but you need to trigger it.
:::

## RFID vs. Plug & Charge

| Feature | RFID Card | Plug & Charge |
|---------|-----------|---------------|
| Setup effort | Order cards, assign to drivers | Register vehicle VIN, install certificate |
| Driver action | Tap card before/after charging | Just plug in |
| Works across fleets | Card follows the driver | Certificate follows the vehicle |
| Loss risk | Card can be lost/stolen | Nothing physical to lose |
| Roaming | Works everywhere | Growing but not universal yet |
| Fallback | Always works | RFID needed as fallback |

**Our recommendation:** Set up Plug & Charge for convenience, keep RFID cards as a backup. Belt and suspenders.

## Technical Details

- **Card technology:** MIFARE DESFire EV2 (encrypted, secure)
- **Frequency:** 13.56 MHz (NFC)
- **Standard:** ISO 14443
- **UID format:** 14 hex characters
- **Branding:** Stroomlijnen logo with NL\*STM identifier

## Next Steps

- [Set up Plug & Charge](/docs/plug-and-charge/setup-guide) alongside your RFID cards
- [Manage your drivers](/docs/fleet-management/driver-management)
- [Understanding your invoices](/docs/fleet-management/invoicing)
