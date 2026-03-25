---
sidebar_position: 1
title: Présentation de la gestion de flotte
description: Gérez la charge de votre flotte électrique avec le portail Mon Flotte de Stroomlijnen — véhicules, sessions, facturation et gestion des conducteurs.
keywords: [gestion de flotte, portail Mon Flotte, flotte électrique, gestion de charge, tableau de bord de flotte]
---

# Présentation de la gestion de flotte

Le portail **Mon Flotte** de Stroomlijnen offre aux gestionnaires de flotte une visibilité et un contrôle complets sur leurs activités de charge de véhicules électriques. À partir d'un seul tableau de bord, vous pouvez gérer les véhicules, surveiller les sessions de charge en temps réel, contrôler les coûts et générer des rapports.

## Accès à Mon Flotte

Allez sur **my.stroomlijnen.nl** et connectez-vous avec vos informations de gestionnaire de flotte. Les nouveaux utilisateurs doivent s'inscrire avec le numéro KVK de leur entreprise et être approuvés par un gestionnaire de compte Stroomlijnen.

## Tableau de bord

Le tableau de bord principal affiche :

- **État de la flotte** — Le nombre de véhicules qui chargent actuellement, sont en pause ou en déplacement
- **Énergie d'aujourd'hui** — La quantité totale de kWh livrée à votre flotte aujourd'hui
- **Sessions actives** — Une vue en temps réel de toutes les sessions de charge en cours avec des courbes de puissance
- **Notifications** — Les certificats expirés, les sessions échouées ou les modèles de charge inhabituels
- **Résumé mensuel** — Le coût total en cours et la comparaison avec le mois précédent

## Fonctionnalités principales

### Gestion des véhicules
Enregistrez, configurez et surveillez tous vos véhicules électriques en un seul endroit. Activez Plug & Charge, attribuez des passes RFID et définissez les politiques de charge par véhicule ou groupe.

→ [Détails de la gestion des véhicules](./vehicles)

### Surveillance des sessions
Suivez chaque session de charge — passée et présente. Affichez l'énergie livrée, la durée, les coûts, la méthode d'authentification et l'emplacement du chargeur. Exportez vers CSV ou intégrez via API.

→ [Détails des sessions](./sessions)

### Facturation
Factures mensuelles avec des détails par véhicule, emplacement et date. Téléchargez les factures au format PDF, recevez une analyse des coûts par kilomètre et configurez la facturation automatique.

→ [Détails de la facturation](./invoicing)

### Gestion des conducteurs
Attribuez des conducteurs aux véhicules, fournissez des passes RFID personnelles et définissez les limites de charge par conducteur. Les conducteurs peuvent utiliser l'application Stroomlijnen pour trouver des chargeurs et démarrer des sessions.

→ [Détails de la gestion des conducteurs](./driver-management)

## Rôles des utilisateurs

| Rôle | Autorisations |
|------|-------------|
| **Gestionnaire de flotte** | Accès complet : véhicules, facturation, PnC, utilisateurs, clés API |
| **Manager de flotte** | Gestion des véhicules, surveillance des sessions, rapports |
| **Gestionnaire de factures** | Accès aux factures, méthodes de paiement, rapports de coûts |
| **Conducteur** | Affichage des sessions personnelles, recherche de chargeurs, démarrage/arrêt des sessions |

## Accès à l'API

Pour les entreprises qui souhaitent intégrer les données de charge dans leurs propres systèmes de gestion de flotte ou ERP, nous offrons une API REST :

- Webhooks de session en temps réel
- Données de session historiques
- Gestion des véhicules et des conducteurs
- Demande de facture

La documentation de l'API est disponible dans le portail Mon Flotte sous **Paramètres** → **API**.

## Démarrage

1. [Inscrivez votre flotte](https://stroomlijnen.nl/fleet-signup) ou contactez votre gestionnaire de compte
2. [Ajoutez vos véhicules](./vehicles)
3. [Activez Plug & Charge](../plug-and-charge/setup-guide) ou [fournissez des passes RFID](../getting-started/rfid-cards)
4. Commencez à charger — toutes les sessions seront automatiquement suivies et facturées