---
sidebar_position: 10
title: CPO, eMSP et itinérance expliqués
description: Qu'est-ce que les CPO et les eMSP, comment fonctionne l'itinérance entre les réseaux de charge, et quels protocoles sont utilisés ?
keywords: [CPO, eMSP, itinérance, OCPI, OCPP, réseau de charge, interopérabilité, passe-charge]
---

# CPO, eMSP et itinérance expliqués

Le monde de la charge électrique a son propre jargon. Cette page explique les concepts et rôles clés.

## Les deux rôles dans l'écosystème de charge

### CPO — Exploitant de points de charge

Un **CPO** gère l'infrastructure physique de charge. Le CPO est responsable de :

- L'installation et la maintenance des bornes de charge
- La communication entre la borne de charge et le back-office (via OCPP)
- L'autorisation des sessions de charge
- La mesure et la facturation de l'énergie fournie
- Le service de dépannage et la surveillance

Un CPO exploite des points de charge sur un ou plusieurs sites. En tant que propriétaire d'un immeuble, vous avez un contrat avec un CPO.

---

### eMSP — Fournisseur de services de mobilité électrique

Un **eMSP** fournit des services aux utilisateurs finaux (conducteurs/gestionnaires de flotte) :

- La délivrance de passes-charge (RFID) ou d'applications
- L'accès itinérant aux points de charge de différents CPO
- La facturation mensuelle de toutes les sessions de charge
- Le service client

Un gestionnaire de flotte a un contrat avec un eMSP. Ses conducteurs peuvent alors charger leur véhicule à tous les points de charge connectés via l'itinérance.

:::note Une entreprise peut avoir les deux rôles
Certaines entreprises sont à la fois CPO et eMSP. Cela signifie qu'elles gèrent à la fois des points de charge et délivrent des passes-charge. Exemples : Vattenfall, Shell Recharge, Allego, Eneco.
:::

---

## OCPP — le protocole entre la borne de charge et le back-office

**OCPP (Open Charge Point Protocol)** est la norme internationale ouverte pour la communication entre une borne de charge et le système de gestion (back-office) du CPO.

| Version | Statut | Caractéristiques |
|---|---|---|
| OCPP 1.6 | Répandu, installations plus anciennes | Fonctionnalités de base |
| OCPP 2.0.1 | Norme actuelle | Charge intelligente, V2G, sécurité améliorée |
| OCPP 2.1 | En développement | MCS, V2G étendu |

**Pourquoi l'OCPP est important pour les propriétaires d'immeubles :** Une borne de charge qui prend en charge l'OCPP n'est pas liée à un seul CPO. Vous pouvez changer de CPO sans remplacer le matériel.

---

## OCPI — le protocole pour l'itinérance

**OCPI (Open Charge Point Interface)** est le protocole utilisé par les CPO et les eMSP pour communiquer entre eux. Il permet l'itinérance : un conducteur avec un passe-charge d'un eMSP A peut charger son véhicule à une borne de charge d'un CPO B, et les deux parties règlent automatiquement la session.

```
Conducteur (passe-charge eMSP A)
        ↓
Borne de charge (CPO B)
        ↓ Liaison OCPI
Back-office CPO B → Back-office eMSP A
        ↓
Facture au gestionnaire de flotte
```

Plus il y a de CPO et d'eMSP connectés via l'OCPI, plus grand est le réseau auquel un conducteur a accès.

---

## Itinérance dans la pratique

Aux Pays-Bas, la plupart des grands CPO sont connectés via des hubs d'itinérance. Les principaux hubs sont :

| Hub | Rôle |
|---|---|
| **Gireve** | Hub d'itinérance européen, de nombreux réseaux importants |
| **Hubject** | Itinérance Plug & Charge (ISO 15118) |
| **e-Laad** | Gestionnaires de réseau néerlandais (Nuon, Stedin, etc.) |

Un passe-charge d'un eMSP néerlandais fonctionne généralement sur plus de 300 000 points de charge en Europe via ces hubs.

---

## Qu'est-ce que cela signifie pour vous en tant que propriétaire d'immeuble ?

Si vous faites installer une borne de charge par un CPO connecté à des réseaux d'itinérance, **tous les conducteurs avec un passe-charge valide** peuvent charger leur véhicule à votre borne — et non seulement les clients de ce CPO.

**Questions à poser lors de la sélection d'un CPO :**
- "Via quels réseaux d'itinérance vos points de charge sont-ils accessibles ?"
- "Les passes-charge de Vattenfall, Shell Recharge et Allego fonctionnent-ils avec vos bornes ?"

---

## Ressources pertinentes

| Organisation | Lien |
|---|---|
| Open Charge Alliance (OCPP/OCPI) | [openchargealliance.org](https://openchargealliance.org) |
| ElaadNL (normes techniques NL) | [elaadnl.nl](https://elaadnl.nl) |
| Gireve (hub d'itinérance) | [gireve.com](https://gireve.com) |
| Hubject (Plug & Charge) | [hubject.com](https://hubject.com) |
| NAL (Agenda national pour l'infrastructure de charge) | [agendalaadinfrastructuur.nl](https://agendalaadinfrastructuur.nl) |