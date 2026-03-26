---
---
sidebar_position: 6
title: Power Management and Grid Connection
description: Explanation of connection power, contracted power, peak shaving, and smart charging for property owners.
keywords: [connection power, contracted power, peak shaving, smart charging, grid connection, load management]
---

# Power Management and Grid Connection

Before installing charging points, it's essential to understand how your electricity connection works and how charging infrastructure interacts with it.

## Two Concepts You Should Know

### Connection Power

The **connection power** is the physical maximum that your grid connection can handle — determined by the cables and transformer station of your grid operator. This is the absolute upper limit.

**Typical for a theater:** 400–2000 kVA (= 400–2000 kW per phase, depending on size)

### Contracted Power

The **contracted power** is the maximum power for which you have a contract with your grid operator. You pay a fixed fee based on this power. If you structurally consume more, you may face penalties or need to adjust your contract.

The contracted power is usually **lower** than the connection power.

**Typical for a theater:** 150–500 kW

---

:::tip Rule of Thumb
- **Connection power** = what the cables can handle (ceiling)
- **Contracted power** = what you've paid for (contract)
- **Current consumption** = what you actually use (varies per hour)

During the day, you typically have a lot of room between your current consumption and your contracted power. You can use this space for charging.
:::

---

## How a DC Charger Relates to Your Connection

A DC charger draws its power directly and quickly from your connection. A 60 kW DC charger draws 60 kW as long as it's active. That is:

| Charger Type | Power | % of 270 kW contract |
|---|---|---|
| AC charger (single-phase) | 3.7–7.4 kW | 1–3% |
| AC charger (three-phase) | 11–22 kW | 4–8% |
| DC charger | 50–150 kW | 18–55% |
| DC fast charger (truck) | 100–350 kW | 37–130% |

A single 150 kW DC charger on a 270 kW contract takes up more than half of your contract space. That's fine during the day when the theater consumes little — but in the evening during a performance, it can cause problems.

**The solution: peak shaving / load management**

---

## Peak Shaving and Smart Charging

**Peak shaving** (also known as load management or smart charging) is a system that automatically adjusts the charging power based on the available power at that moment.

### How it Works

1. The system continuously measures the actual power consumption of the building
2. It calculates how much space is left under your contracted power
3. The charging point receives exactly as much power as is available — no more
4. If the hall fills and consumption increases, the charging power is automatically reduced
5. If consumption decreases (e.g., after a performance), the charging power goes back up

### Result

- **Never** exceeding your contracted power
- **Maximum charging speed** when possible
- **No manual action** required

```
Contracted power:     270 kW
Theater consumption evening:       220 kW
Available for charging:       50 kW → charging point charges at 50 kW

Theater consumption daytime:      40 kW
Available for charging:      230 kW → charging point charges at 150 kW (max charger)
```

---

## When is Grid Expansion Necessary?

In most theaters, grid expansion is **not** necessary for a first charging point of 60–150 kW, as long as peak shaving is installed.

Grid expansion becomes relevant only when you:
- Want to operate multiple charging points simultaneously (>3 fast chargers)
- Want to reserve fixed power capacity for charging (e.g., for contract guarantees to carriers)
- Want to add battery storage (BSS) for extra buffer capacity

:::note Grid Operator
Waiting times for grid expansion in the Netherlands are currently 5–10 years in many regions. Battery storage (BSS) can be an alternative to bridge the waiting time. See the [ElaadNL Outlook Logistiek](https://elaadnl.nl) for current figures on grid congestion and charging infrastructure.
:::

---

## Battery Storage as a Buffer

A Battery Storage System (BSS) charges when your power consumption is low and supplies that energy back to the charging points during peak moments. This allows for higher charging powers without exceeding your grid connection.

| Scenario | Without BSS | With BSS |
|---|---|---|
| Available daytime | 230 kW | 230 kW + buffer |
| Available evening | 50 kW | 50 kW + buffer from BSS |
| Max. charging power evening | 50 kW | 150 kW (from BSS) |

---