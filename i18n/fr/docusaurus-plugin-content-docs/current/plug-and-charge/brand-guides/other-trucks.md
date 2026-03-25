---
sidebar_position: 6
title: Autres marques de camions — Plug & Charge
description: État et informations d'installation de Plug & Charge pour Scania, MAN, Renault Trucks, Ford Trucks, IVECO et VW Utilitaires.
keywords: [Scania, MAN, Renault Trucks, IVECO, Plug and Charge, ISO 15118, camion électrique]
---

# Autres marques de camions — Plug & Charge

Cette page traite de l'installation PnC pour les marques de camions qui n'ont pas encore leur propre guide détaillé. Au fur et à mesure que l'adoption augmente, nous allons diviser cela en guides séparés.

## Scania BEV

**Modèles:** R-serie BEV, P-serie BEV
**État PnC:** ✅ Pris en charge (micrologiciel 2025.3+)
**Portail de flotte:** Scania Fleet Management

### Étapes d'installation

1. Connectez-vous à [Scania Fleet Management](https://my.scania.com)
2. Allez à **Électrification** → **Services de charge**
3. Cliquez sur **Ajouter un partenaire de charge** → recherchez "Stroomlijnen"
4. Autorisez et sélectionnez les véhicules
5. Scania pousse les certificats via leur passerelle de télémétrie
6. **Temps d'installation typique: 4–12 heures**

### Remarques
- Scania nécessite la version de micrologiciel 2025.3 ou supérieure pour une prise en charge complète de PnC
- Les anciennes versions du micrologiciel prennent en charge la communication ISO 15118 mais pas le traitement des certificats de contrat
- Contactez votre concessionnaire Scania pour les mises à jour du micrologiciel — les mises à jour OTA pour PnC sont déployées progressivement
- Le système de télémétrie de Scania utilise une connexion mobile distincte de l'infodivertissement du véhicule — assurez-vous que la SIM de télémétrie est active

## MAN Electric

**Modèles:** eTGX, eTGS, eTGL, eTGM
**État PnC:** ✅ Pris en charge sur eTGX/eTGS | ⚠️ En cours de déploiement sur eTGL/eTGM
**Portail de flotte:** Plateforme RIO

### Étapes d'installation

1. Connectez-vous à [RIO](https://rio.cloud)
2. Naviguez vers **Services** → **Gestion de charge**
3. Cliquez sous **Partenaires de charge externes** sur **Se connecter au partenaire**
4. Recherchez **"Stroomlijnen B.V."** et cliquez sur **Autoriser**
5. Sélectionnez les véhicules et confirmez
6. **Temps d'installation typique: 6–24 heures**

### Remarques
- La plateforme RIO est partagée par MAN et certaines autres marques TRATON
- eTGX et eTGS ont une prise en charge complète de PnC depuis la fin 2025
- eTGL et eTGM recevront une prise en charge de PnC via des mises à jour de micrologiciel progressives au cours de 2026
- Les certificats MAN utilisent un module de sécurité matériel (HSM) dans le véhicule — cela offre une excellente sécurité mais signifie que les certificats ne peuvent être installés que lorsque le module de sécurité du camion est en mode "provisioning" (premières 30 minutes après contact)

## Renault Trucks E-Tech

**Modèles:** E-Tech T, E-Tech D, E-Tech Master (fourgon)
**État PnC:** ⚠️ Prévu pour le premier semestre 2026
**Portail de flotte:** Gestion de flotte Renault Trucks

### État actuel
- Le matériel ISO 15118-2 est présent dans E-Tech T et E-Tech D
- L'activation du logiciel PnC est prévue via une mise à jour OTA au premier semestre 2026
- Renault Trucks effectue des tests d'interopérabilité PnC avec Hubject depuis le troisième trimestre 2025
- Le fourgon E-Tech Master n'a pas de prise en charge ISO 15118

### Que faire maintenant
1. Assurez-vous que votre compte de portail de flotte est configuré avec un accès administrateur
2. Enregistrez vos véhicules dans le portail Mijn Vloot de Stroomlijnen
3. Utilisez des passes RFID pour charger dans l'intervalle
4. Nous vous informerons lorsque PnC sera disponible pour Renault Trucks

## Ford Trucks

**Modèles:** F-MAX Electric
**État PnC:** ❌ Non pris en charge

### État actuel
- Le Ford F-MAX Electric (produit par Ford Otosan en Turquie) ne prend pas en charge ISO 15118 pour le moment
- Ford Otosan a annoncé une prise en charge de ISO 15118 dans leur feuille de route pour l'année modèle 2027
- Utilisez des passes RFID ou l'application Stroomlijnen pour charger

## IVECO

**Modèles:** S-eWay
**État PnC:** ⚠️ Annoncé pour les modèles 2026

### État actuel
- IVECO a annoncé une prise en charge de ISO 15118-2 PnC pour les camions S-eWay de l'année modèle 2026
- Les modèles antérieurs à 2026 ne disposent pas du matériel ISO 15118 nécessaire
- La conversion n'est pas disponible — PnC nécessite des modules de communication installés d'usine
- Utilisez des passes RFID pour les camions S-eWay actuels

## VW Utilitaires

**Modèles:** ID. Buzz Cargo
**État PnC:** ⚠️ Prise en charge limitée

### État actuel
- L'ID. Buzz Cargo prend en charge ISO 15118-2, mais PnC est géré via l'écosystème VW We Charge
- Un PnC inter-operators (utilisation de certificats Stroomlijnen avec des véhicules VW) est techniquement possible mais nécessite une configuration supplémentaire
- Contactez le support Stroomlijnen pour la configuration PnC spécifique à VW

---

:::info Votre marque non trouvée ?
Contactez-nous via [info@stroomlijnen.nl](mailto:info@stroomlijnen.nl). Nous étendons activement la prise en charge de PnC à mesure que davantage de constructeurs activent ISO 15118.
:::

**Suivant:** [Dépannage →](../troubleshooting)