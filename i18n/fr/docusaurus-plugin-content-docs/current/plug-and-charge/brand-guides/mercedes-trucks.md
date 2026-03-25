---
sidebar_position: 3
title: Mercedes-Benz Trucks — Configuration de Plug & Charge
description: Guide étape par étape pour activer Plug & Charge sur les camions Mercedes-Benz eActros et eEconic via Fleetboard.
keywords: [Mercedes-Benz, eActros, eEconic, Fleetboard, Plug and Charge, ISO 15118, Daimler Truck]
---

# Mercedes-Benz Trucks — Configuration de Plug & Charge

Mercedes-Benz (Daimler Truck) prend en charge l'ISO 15118-2 Plug & Charge sur les eActros 600 et eActros 300. L'eEconic devrait recevoir le support PnC via une mise à jour OTA au deuxième trimestre 2026. La configuration est gérée via la plate-forme Fleetboard.

## Modèles pris en charge

| Modèle | Options de batterie | Charge DC maximale | Prêt pour PnC |
|-------|-----------|---------------|:---------:|
| eActros 600 | Jusqu'à 621 kWh | 400 kW (MCS/CCS) | ✅ |
| eActros 300 | Jusqu'à 336 kWh | 160 kW (CCS) | ✅ |
| eEconic | Jusqu'à 336 kWh | 160 kW (CCS) | ⚠️ Q2 2026 |

## Exigences

- Compte Fleetboard avec accès administrateur pour la gestion de flotte
- Firmware eActros avec module eMobility (fourni par défaut depuis le quatrième trimestre 2025)
- Compte Stroomlijnen Flotte avec PnC activé ([Guide d'installation](../setup-guide))

## Étape par étape : Fleetboard

### 1. Accès aux paramètres eMobility

1. Connectez-vous à [Fleetboard](https://fleetboard.com)
2. Naviguez vers **eMobility** → **Gestion de charge**
3. Si vous utilisez le nouveau portail **Daimler Truck Digital**, allez dans **Services** → **Gestion de charge**

### 2. Ajouter Stroomlijnen en tant que fournisseur

1. Cliquez sur **Fournisseurs de charge** dans la gestion de charge
2. Cliquez sur **Ajouter un fournisseur**
3. Recherchez **"Stroomlijnen B.V."** (ou utilisez l'ID eMSP `NL-STM`)
4. Cliquez sur **Se connecter**
5. Acceptez les conditions de partage de données (ID de véhicule et échange de certificats)

### 3. Enregistrer les véhicules pour PnC

1. Allez dans **Gestion de charge** → **Paramètres PnC du véhicule**
2. Faites ce qui suit pour chaque eActros que vous souhaitez activer :
   - Cliquez sur la ligne du véhicule
   - Définissez **Plug & Charge** sur ACTIVÉ
   - Sélectionnez **Stroomlijnen** comme fournisseur de charge préféré (ou l'un des plusieurs)
3. Cliquez sur **Enregistrer les modifications**

### 4. Déploiement du certificat

Après enregistrement :
1. Fleetboard initie la demande de certificat à Stroomlijnen
2. Le certificat de contrat est généré par notre backend
3. Il est envoyé au camion via l'unité de télémétrie de Daimler Truck
4. **Temps de déploiement typique : 2-6 heures**
5. Le camion doit être en ligne (contact allumé ou connecté à un chargeur)

### 5. Vérifiez dans les deux portails

- **Fleetboard** → eMobility → Véhicule → État PnC : doit afficher "Certificat actif"
- **Stroomlijnen Mon Flotte** → Véhicule → Plug & Charge : doit afficher "✅ Actif"

### 6. Première session

Connectez l'eActros à un chargeur Stroomlijnen. Le tableau de bord de l'eActros affiche le statut d'authentification "Plug & Charge". La charge devrait démarrer automatiquement dans les 5-10 secondes.

## Plusieurs fournisseurs de charge

Mercedes-Benz prend en charge plusieurs fournisseurs PnC simultanément. Vous pouvez avoir des certificats Stroomlijnen avec des certificats d'autres fournisseurs sur le même véhicule. Le camion utilise le certificat approprié en fonction du réseau du chargeur.

## Fleetboard versus Daimler Truck Digital

Daimler Truck passe de Fleetboard au nouveau portail **Daimler Truck Digital**. Les deux portails prennent actuellement en charge la gestion PnC :

- **Fleetboard (héritage) :** Prise en charge complète de PnC, bien documentée
- **Daimler Truck Digital (nouveau) :** PnC disponible sous Services → Gestion de charge

Si vous migrez entre les plateformes, les paramètres PnC sont transférés automatiquement.

## Dépannage

### Section "eMobility" non disponible dans Fleetboard
- Assurez-vous que votre abonnement Fleetboard inclut le module eMobility
- Le module eMobility est inclus dans Fleetboard Premium pour les véhicules électriques
- Contactez votre concessionnaire Mercedes-Benz pour vérification

### Certificat affichant "En traitement" pendant une période prolongée
1. Assurez-vous que le camion a été en ligne au moins 2 heures
2. Vérifiez les notifications Fleetboard sur les approbations en attente
3. Vérifiez que l'unité de télémétrie de Daimler Truck a une connexion réseau mobile (vérifiez l'antenne dans le camion)
4. Contactez le support Stroomlijnen pour la vérification du backend

### eActros 600 avec connecteur MCS
L'eActros 600 prend en charge à la fois CCS et MCS (Megawatt Charging System). PnC fonctionne sur les deux types de connecteurs sur les sites Stroomlijnen. Les chargeurs MCS seront déployés sur des sites sélectionnés en 2026.

---

**Suivant :** [Autres camions →](./other-trucks)