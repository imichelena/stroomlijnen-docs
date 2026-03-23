---
sidebar_position: 7
title: Passenger Cars — Plug & Charge
description: How Plug & Charge works for passenger EVs at Stroomlijnen charging stations — BMW, Mercedes, Porsche, Audi, VW, and more.
keywords: [passenger cars, Plug and Charge, BMW, Mercedes, Porsche, Audi, VW, CCS, electric car]
---

# Passenger Cars — Plug & Charge

While Stroomlijnen's charging stations are designed for commercial vehicles, passenger EVs with CCS connectors can charge at our stations too. Many modern EVs already support Plug & Charge.

## How It Works for Cars

Plug & Charge for passenger cars works the same way as for trucks — the vehicle presents a digital contract certificate via ISO 15118, and the charger authenticates automatically.

The difference is in **how the certificate gets into the car**:
- Cars typically get PnC certificates through the manufacturer's own charging service (BMW Charging, Mercedes me Charge, etc.)
- The car's PnC certificate may be linked to the manufacturer's eMSP, not directly to Stroomlijnen
- Roaming via Hubject enables cross-network PnC — the car's certificate works at Stroomlijnen through roaming

## Supported Brands

| Brand | PnC Method | Works at Stroomlijnen |
|-------|-----------|:---------------------:|
| **BMW** | BMW Charging / Hubject | ✅ Via roaming |
| **Mercedes-Benz** | Mercedes me Charge / Hubject | ✅ Via roaming |
| **Porsche** | Porsche Charging Service / Hubject | ✅ Via roaming |
| **Audi** | myAudi / Hubject | ✅ Via roaming |
| **VW** | Volkswagen We Charge | ⚠️ Rollout ongoing |
| **Hyundai** | Hyundai Bluelink | ⚠️ Market dependent |
| **Kia** | Kia Connect | ⚠️ Market dependent |
| **Tesla** | Proprietary Supercharger PnC | ❌ Not via ISO 15118 |
| **Stellantis** | — | ❌ Not yet supported |

### How Roaming PnC Works

1. You activate PnC in your car manufacturer's app (e.g., BMW Charging in the My BMW app)
2. The manufacturer installs a contract certificate in your car
3. When you plug into a Stroomlijnen charger, the car presents its certificate
4. Our charger validates it through Hubject's certificate pool
5. The session is authorized and billed through your manufacturer's charging service
6. You see the session in your manufacturer's app (and we see it in our backend)

**Pricing note:** When charging via roaming PnC, the price is set by your eMSP (e.g., BMW Charging rates), not Stroomlijnen's fleet rates. For the best pricing at Stroomlijnen stations, consider a direct fleet account.

## Direct PnC for Cars

If you manage a fleet of passenger EVs (company cars, for example), you can set up direct Stroomlijnen PnC:

1. Register the vehicles in My Fleet (same process as trucks)
2. Enable PnC for each vehicle
3. For supported brands (BMW, Mercedes, Audi), our CPS pushes certificates through the OEM backend
4. You get Stroomlijnen's direct fleet pricing instead of roaming rates

This is especially valuable for company car fleets where cost control matters.

## Practical Notes

### Physical Compatibility
Stroomlijnen stations are designed for trucks. When charging a passenger car:
- Park in a designated car bay if available
- The CCS cable may be higher or heavier than at typical car chargers (designed for truck connectors)
- Cable reach should be sufficient — our cables are 5m+

### Charging Speed
Our chargers output up to 400 kW, but your car will only draw what it can handle. A typical passenger EV will charge at 50–250 kW depending on the model and battery state.

### Finding Car-Friendly Sites
In the Stroomlijnen app or map, look for locations marked with both truck and car icons. Some sites have dedicated car bays with lower cable holsters.
