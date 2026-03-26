---
---
sidebar_position: 7
title: Passenger Cars — Plug & Charge
description: How Plug & Charge works for passenger cars at Stroomlijnen charging stations — BMW, Mercedes, Porsche, Audi, VW, and more.
keywords: [passenger cars, Plug and Charge, BMW, Mercedes, Porsche, Audi, VW, CCS, electric car]
---

# Passenger Cars — Plug & Charge

Although Stroomlijnen's charging stations are designed for commercial vehicles, passenger cars with CCS connectors can also charge at our stations. Many modern EVs already support Plug & Charge.

## How It Works for Passenger Cars

Plug & Charge for passenger cars works in the same way as for trucks — the vehicle presents a digital contract certificate via ISO 15118, and the charger authenticates automatically.

The difference lies in **how the certificate gets into the car**:
- Cars typically receive PnC certificates through the manufacturer's own charging service (BMW Charging, Mercedes me Charge, etc.)
- The car's PnC certificate may be linked to the manufacturer's eMSP, not directly to Stroomlijnen
- Roaming via Hubject enables cross-network PnC — the car's certificate works at Stroomlijnen via roaming

## Supported Brands

| Brand | PnC Method | Works at Stroomlijnen |
|------|-------------|:----------------------:|
| **BMW** | BMW Charging / Hubject | ✅ Via roaming |
| **Mercedes-Benz** | Mercedes me Charge / Hubject | ✅ Via roaming |
| **Porsche** | Porsche Charging Service / Hubject | ✅ Via roaming |
| **Audi** | myAudi / Hubject | ✅ Via roaming |
| **VW** | Volkswagen We Charge | ⚠️ Rollout in progress |
| **Hyundai** | Hyundai Bluelink | ⚠️ Market-dependent |
| **Kia** | Kia Connect | ⚠️ Market-dependent |
| **Tesla** | Proprietary Supercharger PnC | ❌ Not via ISO 15118 |
| **Stellantis** | — | ❌ Not yet supported |

### How Roaming PnC Works

1. You activate PnC in the app of your car manufacturer (e.g., BMW Charging in the My BMW app)
2. The manufacturer installs a contract certificate in your car
3. When you plug in at a Stroomlijnen charger, the car presents its certificate
4. Our charger validates it via Hubject's certificate pool
5. The session is authorized and billed through the manufacturer's charging service
6. You see the session in the manufacturer's app (and we see it in our backend)

**Note on rates:** When charging via roaming PnC, the price of your eMSP (e.g., BMW Charging rates) applies, not Stroomlijnen's ad-hoc rates. For the best prices at Stroomlijnen locations, consider requesting a direct fleet account.

## Direct PnC for Passenger Cars

If you manage a fleet of passenger cars (company cars, for example), you can set up direct Stroomlijnen PnC:

1. Register the vehicles in My Fleet (same procedure as for trucks)
2. Enable PnC for each vehicle
3. For supported brands (BMW, Mercedes, Audi), our CPS pushes certificates via the OEM backend
4. You receive direct fleet prices from Stroomlijnen instead of roaming rates

This is particularly valuable for company car fleets where cost management is important.

## Practical Notes

### Physical Compatibility
Stroomlijnen stations are designed for trucks. When charging a passenger car:
- Park in a designated car parking space if available
- The CCS cable may be heavier than at standard car charging stations (designed for truck connections)
- The cable reach is sufficient — our cables are 5 m or longer

### Charging Speed
Our chargers deliver up to 400 kW, but your car only takes what it can handle. An average passenger car charges at 50–250 kW depending on the model and battery status.

### Finding Car-Friendly Locations
Search in the Stroomlijnen app or on the map for locations marked with both a truck and a car icon. Some locations have special car parking spaces with lower cable holders.

---