---
sidebar_position: 8
title: Explication des chargeurs AC et DC
description: Différence entre le courant alternatif (AC) et le courant continu (DC) pour la charge — technique, puissance, coûts et applications.
keywords: [chargeur AC, chargeur DC, courant alternatif, courant continu, puissance de charge, CCS2, Type 2, types de bornes de recharge]
---

# Explication des chargeurs AC et DC

Il existe deux méthodes fondamentalement différentes pour charger un véhicule électrique : via le courant alternatif (AC) ou via le courant continu (DC). La différence réside dans l'endroit où se produit la conversion.

## Le principe

L'électricité dans le réseau est toujours du courant alternatif (AC). Les batteries stockent du courant continu (DC). Il doit donc y avoir une conversion quelque part.

- **Chargeur AC :** la conversion d'AC en DC a lieu **dans le véhicule** (via le chargeur de bord)
- **Chargeur DC :** la conversion a lieu **dans la borne de recharge** — le véhicule reçoit directement du courant continu

## Comparaison

| Caractéristique | Chargeur AC | Chargeur DC |
|---|---|---|
| Conversion | Dans le véhicule (chargeur de bord) | Dans la borne de recharge |
| Puissance | 3,7–22 kW | 22–350+ kW |
| Temps de charge (camion 300 kWh) | 14–80 heures | 1–6 heures |
| Prix d'achat de la borne | €500–€3.000 | €15.000–€80.000 |
| Coûts d'installation | Faible | Élevé |
| Connecteur (camion) | Type 2 (AC) | CCS2 (DC) |
| Adapté pour la charge nocturne | ✅ Oui | ✅ Oui |
| Adapté pour la charge rapide de jour | ❌ Non | ✅ Oui |

## Chargeurs AC

Les chargeurs AC fournissent du courant alternatif au véhicule. Le chargeur de bord intégré du véhicule détermine la vitesse de charge maximale — et non la borne. Une borne de 22 kW charge un véhicule avec un chargeur de bord de 11 kW à une vitesse maximale de 11 kW.

**Applications dans les théâtres :**
- Voitures particulières des employés
- Fourgons qui restent stationnés toute la nuit
- Comme complément aux chargeurs DC pour des séjours plus longs

**Avantage :** Bon marché, facile à installer, profil de puissance faible (moins d'impact sur la connexion au réseau)

**Inconvénient :** Trop lent pour les camions avec un temps de stationnement limité

## Chargeurs DC

Les chargeurs DC fournissent du courant continu directement à la batterie, la conversion ayant lieu dans la borne de recharge. La puissance de charge maximale est déterminée par le minimum de la puissance de la borne et de la capacité du véhicule.

**Applications dans les théâtres :**
- Camions électriques au dock de chargement
- Bus
- Charge rapide de fourgons

**Avantage :** Rapide, adapté aux camions, fiabilité professionnelle

**Inconvénient :** Coûts d'achat et d'installation plus élevés, profil de puissance plus élevé (exigeant une gestion de charge)

## Puissance recommandée par type de véhicule

| Type de véhicule | Durée de stationnement | Type de chargeur recommandé | Puissance |
|---|---|---|---|
| Voiture particulière | 2–8 heures | AC | 11–22 kW |
| Fourgon | 8–12 heures | AC ou DC léger | 22–50 kW |
| Camion léger (7,5T) | 8–12 heures | DC | 50–100 kW |
| Camion lourd (40T) | 8–12 heures | DC | 100–150 kW |
| Charge rapide (pause) | 30–90 minutes | Chargeur DC rapide | 150–350 kW |

:::note Durée de stationnement dans les théâtres
Les camions dans les théâtres restent généralement **8–12 heures** pendant la construction, la représentation et le démontage. Un chargeur DC de 60–100 kW est dans la plupart des cas suffisant pour un cycle de charge complet.
:::

## Norme future : MCS

Pour les camions les plus lourds (40T+), le **Megawatt Charging System (MCS)** deviendra la nouvelle norme. Cela fournira des puissances allant jusqu'à 3,75 MW, permettant un temps de charge de 30–45 minutes pour les plus grands packs de batteries. Le MCS est prévu pour être déployé entre 2025 et 2028 le long des corridors principaux européens.

Source : [Spécification CharIN MCS](https://www.charin.global)