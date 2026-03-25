---
sidebar_position: 7
title: Véhicules particuliers — Plug & Charge
description: Comment fonctionne Plug & Charge pour les véhicules particuliers sur les stations de charge Stroomlijnen — BMW, Mercedes, Porsche, Audi, VW et plus.
keywords: [véhicules particuliers, Plug and Charge, BMW, Mercedes, Porsche, Audi, VW, CCS, voiture électrique]
---

# Véhicules particuliers — Plug & Charge

Bien que les stations de charge Stroomlijnen soient conçues pour les véhicules utilitaires, les véhicules particuliers équipés de connecteurs CCS peuvent également charger à nos stations. De nombreux véhicules électriques modernes prennent déjà en charge Plug & Charge.

## Comment ça marche pour les véhicules particuliers

Plug & Charge pour les véhicules particuliers fonctionne de la même manière que pour les camions — le véhicule présente un certificat de contrat numérique via **ISO 15118**, et le chargeur authentifie automatiquement.

La différence réside dans **la façon dont le certificat se retrouve dans la voiture** :
- Les voitures reçoivent généralement des certificats PnC via leur propre service de charge (BMW Charging, Mercedes me Charge, etc.)
- Le certificat PnC de la voiture peut être lié à l'eMSP du fabricant, et non directement à Stroomlijnen
- Le roaming via Hubject permet un Plug & Charge inter-réseaux — le certificat de la voiture fonctionne chez Stroomlijnen via le roaming

## Marques prises en charge

| Marque | Méthode PnC | Fonctionne chez Stroomlijnen |
|------|-------------|:----------------------:|
| **BMW** | BMW Charging / Hubject | ✅ Via roaming |
| **Mercedes-Benz** | Mercedes me Charge / Hubject | ✅ Via roaming |
| **Porsche** | Porsche Charging Service / Hubject | ✅ Via roaming |
| **Audi** | myAudi / Hubject | ✅ Via roaming |
| **VW** | Volkswagen We Charge | ⚠️ Déploiement en cours |
| **Hyundai** | Hyundai Bluelink | ⚠️ Dépend du marché |
| **Kia** | Kia Connect | ⚠️ Dépend du marché |
| **Tesla** | Supercharger PnC propre | ❌ Non via **ISO 15118** |
| **Stellantis** | — | ❌ Non pris en charge |

### Comment fonctionne le roaming PnC

1. Vous activez PnC dans l'application de votre fabricant de voiture (par exemple, BMW Charging dans l'application My BMW)
2. Le fabricant installe un certificat de contrat dans votre voiture
3. Lorsque vous branchez à une station de charge Stroomlijnen, la voiture présente son certificat
4. Notre chargeur valide le certificat via la piscine de certificats Hubject
5. La session est autorisée et facturée via le service de charge de votre fabricant
6. Vous voyez la session dans l'application de votre fabricant (et nous la voyons dans notre backend)

**Attention aux tarifs :** Lors du chargement via le roaming PnC, le prix de votre eMSP (par exemple, les tarifs BMW Charging) s'applique, et non les tarifs de Stroomlijnen. Pour obtenir les meilleurs prix sur les emplacements Stroomlijnen, vous pouvez envisager de demander un compte de flotte direct.

## Plug & Charge direct pour les véhicules particuliers

Si vous gérez une flotte de voitures particulières (voitures de société, par exemple), vous pouvez configurer un Plug & Charge direct Stroomlijnen :

1. Enregistrez les véhicules dans Mijn Vloot (même procédure que pour les camions)
2. Activez PnC pour chaque véhicule
3. Pour les marques prises en charge (BMW, Mercedes, Audi), notre CPS pousse des certificats via le backend OEM
4. Vous recevez les tarifs de flotte directs de Stroomlijnen au lieu des tarifs de roaming

Ceci est particulièrement précieux pour les parcs de voitures d'entreprise où la gestion des coûts est importante.

## Remarques pratiques

### Compatibilité physique
Les stations Stroomlijnen sont conçues pour les camions. Lors du chargement d'une voiture :
- Garez dans un emplacement de parking désigné si disponible
- Le câble CCS peut être plus lourd que celui des stations de charge standard (conçues pour les connexions de camion)
- La portée du câble est suffisante — nos câbles mesurent 5 m ou plus

### Vitesse de chargement
Nos chargeurs livrent jusqu'à 400 kW, mais votre voiture ne prend que ce dont elle a besoin. Une voiture particulière moyenne se charge à 50–250 kW en fonction du modèle et de l'état de la batterie.

### Recherche de lieux adaptés aux voitures
Recherchez dans l'application Stroomlijnen ou sur la carte des emplacements qui sont indiqués avec un pictogramme de camion et de voiture. Certains emplacements ont des places de parking pour voitures avec des supports de câble plus bas.