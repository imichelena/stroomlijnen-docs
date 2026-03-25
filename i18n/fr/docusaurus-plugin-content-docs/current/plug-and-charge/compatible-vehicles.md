---
sidebar_position: 3
title: Véhicules Compatibles
description: Quels camions électriques, fourgons et voitures particulières prennent en charge Plug & Charge sur les stations de chargement Stroomlijnen.
keywords: [véhicules compatibles, Plug and Charge, camions électriques, ISO 15118, Volvo, DAF, Mercedes, Scania, MAN]
---

# Véhicules Compatibles

La compatibilité Plug & Charge dépend de la prise en charge par le véhicule de la norme **ISO 15118-2** avec traitement des certificats de contrat. Ci-dessous se trouve le statut actuel pour les véhicules souvent vus sur les sites Stroomlijnen.

:::info Mis à jour mars 2026
La compatibilité évolue rapidement. Nous mettons cette page à jour au fur et à mesure que les constructeurs publient de nouveaux micrologiciels et modèles. Si votre véhicule n'est pas répertorié, [contactez-nous](mailto:info@stroomlijnen.nl).
:::

## Camions Électriques

| Fabricant | Modèle | Prise en charge PnC | Remarques |
|-------------|-------|:-----------:|-------|
| **Volvo** | FH Electric | ✅ | Via Volvo Connect. Prise en charge complète PnC à partir de la version de micrologiciel v3.2+ |
| **Volvo** | FM Electric | ✅ | Via Volvo Connect. Même plateforme que le FH Electric |
| **Volvo** | FE Electric | ✅ | Via Volvo Connect |
| **Volvo** | FL Electric | ✅ | Via Volvo Connect |
| **DAF** | XF Electric | ✅ | Via DAF Connect. Exige l'activation par le gestionnaire de flotte |
| **DAF** | XD Electric | ✅ | Via DAF Connect |
| **DAF** | XB Electric | ✅ | Via DAF Connect |
| **Mercedes-Benz** | eActros 600 | ✅ | Via Fleetboard. PnC disponible à partir du T4 2025 |
| **Mercedes-Benz** | eActros 300 | ✅ | Via Fleetboard |
| **Mercedes-Benz** | eEconic | ⚠️ | PnC via mise à jour OTA attendue pour le T2 2026 |
| **Scania** | BEV R-serie | ✅ | Via Scania Fleet Management. Version de micrologiciel 2025.3+ |
| **Scania** | BEV P-serie | ✅ | Via Scania Fleet Management |
| **MAN** | eTGX | ✅ | Via plateforme RIO. Prise en charge complète PnC à partir de la fin 2025 |
| **MAN** | eTGS | ✅ | Via plateforme RIO |
| **MAN** | eTGL/eTGM | ⚠️ | Déploiement PnC en cours, consultez le concessionnaire |
| **Renault Trucks** | E-Tech T | ⚠️ | Matériel ISO 15118-2 présent, activation PnC via OTA attendue pour le S1 2026 |
| **Renault Trucks** | E-Tech D | ⚠️ | Même statut que l'E-Tech T |
| **Ford Trucks** | F-MAX Electric | ❌ | ISO 15118 non pris en charge. Seulement RFID/application |
| **IVECO** | S-eWay | ⚠️ | PnC annoncé pour les modèles de 2026 |

### Légende

- ✅ **Pris en charge** — PnC fonctionne aujourd'hui sur les chargeurs Stroomlijnen
- ⚠️ **Bientôt** — Matériel adapté, mise à jour logicielle en attente
- ❌ **Non pris en charge** — Utilisez un badge RFID ou l'application

## Fourgons Électriques

| Fabricant | Modèle | Prise en charge PnC | Remarques |
|-------------|-------|:-----------:|-------|
| **Mercedes-Benz** | eSprinter | ✅ | ISO 15118-2 à partir de l'année de modèle 2025 |
| **Mercedes-Benz** | eVito | ✅ | ISO 15118-2 à partir de l'année de modèle 2025 |
| **Volvo** | EM90 | ✅ | Via Volvo Connect |
| **Ford** | E-Transit | ⚠️ | Matériel adapté, activation PnC varie selon le marché |
| **MAN** | eTGE | ⚠️ | Prise en charge PnC limitée, consultez le concessionnaire |
| **Renault** | Master E-Tech | ❌ | Seulement RFID/application |
| **VW** | ID. Buzz Cargo | ⚠️ | PnC via le backend VW, exige un contrat Volkswagen We Charge |
| **Fiat** | E-Ducato | ❌ | Aucune prise en charge ISO 15118 |
| **Maxus** | eDeliver 7 | ❌ | Aucune prise en charge ISO 15118 |

## Voitures Particulières (CCS DC)

Bien que les chargeurs Stroomlijnen soient conçus pour les véhicules d'entreprise, les voitures particulières avec des prises CCS peuvent également se charger à nos stations. Prise en charge PnC :

| Fabricant | Prise en charge PnC | Remarques |
|-------------|:-----------:|-------|
| **BMW** | ✅ | i4, iX, i5, i7 — via BMW Charging |
| **Mercedes-Benz** | ✅ | EQS, EQE, EQA, EQB — via Mercedes me Charge |
| **Porsche** | ✅ | Taycan, Macan Electric — via Porsche Charging Service |
| **Audi** | ✅ | e-tron GT, Q6 e-tron, Q8 e-tron — via myAudi |
| **VW** | ⚠️ | ID.-série — via Volkswagen We Charge, déploiement en cours |
| **Hyundai/Kia** | ⚠️ | Ioniq 5/6, EV6/9 — PnC varie selon le marché et la version du micrologiciel |
| **Tesla** | ❌ | Utilise son propre système Supercharger PnC, CCS PnC non pris en charge |
| **Marques Stellantis** | ❌ | Aucune prise en charge ISO 15118 PnC sur les modèles actuels |

:::tip
Même sans PnC, tous les véhicules avec une prise **CCS Combo 2** peuvent se charger à nos stations via un badge RFID ou l'application Stroomlijnen. Le PnC supprime simplement la nécessité d'une authentification manuelle.
:::

## Vérifier Votre Véhicule

1. **Vérifiez votre portail constructeur** — Volvo Connect, DAF Connect, Fleetboard, RIO ou Scania Fleet Management affiche les paramètres "Plug & Charge" ou "ISO 15118"
2. **Vérifiez la version du micrologiciel** — Assurez-vous que votre véhicule a la dernière version du micrologiciel (voir [guides spécifiques aux marques](./brand-guides/volvo-trucks))
3. **Contactez votre concessionnaire** — Ils peuvent confirmer la possibilité ISO 15118 et installer les certificats si nécessaire
4. **Contactez Stroomlijnen** — Nous pouvons vérifier la compatibilité lorsque vous vous inscrivez sur notre portail

## Votre Véhicule n'est pas Répertorié ?

Si votre camion ou fourgon n'est pas répertorié, il peut néanmoins fonctionner. De nouveaux modèles et mises à jour de micrologiciel sont régulièrement publiés. Contactez-nous via [info@stroomlijnen.nl](mailto:info@stroomlijnen.nl) avec la marque, le modèle et le numéro d'identification du véhicule (VIN), nous allons alors l'examiner.

---

**Suivant :** [Guide d'installation →](./setup-guide)