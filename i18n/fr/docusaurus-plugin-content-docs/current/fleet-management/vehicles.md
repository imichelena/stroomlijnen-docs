---
sidebar_position: 2
title: Gestion de véhicules
description: Comment enregistrer, configurer et gérer les véhicules électriques dans le portail Stroomlijnen Mijn Vloot.
keywords: [gestion de véhicules, inscription de flotte, camion électrique, VIN, affectation RFID, politique de charge]
---

# Gestion de véhicules

La section Véhicules de Mijn Vloot est l'endroit où vous enregistrez les camions et les fourgons, configurez leurs paramètres de charge et surveillez leur état.

## Ajout de véhicules

### Véhicule unique

1. Allez à **Véhicules** → **Ajouter un véhicule**
2. Remplissez les champs obligatoires :
   - **VIN** — Numéro d'identification du véhicule (17 caractères)
   - **Immatriculation** — Format néerlandais ou européen
   - **Marque & Modèle** — Sélectionnez dans le menu déroulant
   - **Année de construction** — Année de modèle
   - **Capacité de la batterie** — En kWh (rempli automatiquement pour les modèles connus)
3. Champs optionnels :
   - **Surnom** — Pour une identification facile (par exemple, "Amsterdam 014")
   - **Département/Groupe** — Pour un filtrage organisationnel
   - **Lieu de facturation** — Pour l'attribution des coûts
4. Cliquez sur **Enregistrer**

### Importation en masse

Pour les flottes avec de nombreux véhicules :

1. Allez à **Véhicules** → **Importer**
2. Téléchargez le modèle CSV
3. Remplissez vos données de véhicule
4. Téléchargez le fichier CSV rempli
5. Vérifiez le résumé de l'importation — corrigez les erreurs de validation si nécessaire
6. Cliquez sur **Confirmer l'importation**

## Détails du véhicule

La page de détails de chaque véhicule affiche :

### État
- **État actuel** — En charge / Inactif / Hors ligne
- **Dernière connexion** — Date et heure de la dernière communication avec une borne de charge
- **Niveau de batterie** — Si rapporté par le véhicule lors de la dernière session

### Configuration de charge
- **Méthode d'authentification** — PnC, RFID ou les deux
- **État de la charge Plug & Charge** — Activé/Désactivé, état du certificat
- **Passeports RFID attribués** — Quels passeports sont associés à ce véhicule
- **Politique de charge** — Vitesse de charge maximale, objectif SoC souhaité, fenêtres de charge planifiées

### Historique des sessions
- Liste de toutes les sessions de charge passées pour ce véhicule
- Filtrez par plage de dates, emplacement ou méthode d'authentification
- Énergie totale, coûts totaux et durée moyenne de session

### Documents
- Certificat d'immatriculation (téléchargement facultatif)
- Certificat d'assurance (téléchargement facultatif)
- Données de maintenance

## Politique de charge

Vous pouvez configurer la politique de charge par véhicule ou par groupe :

### Limite de puissance
Définissez une puissance de charge maximale. Utile pour :
- La durée de vie de la batterie (limitez à 80 % de la puissance maximale)
- La gestion des coûts (puissance inférieure = coûts de capacité inférieurs sur certains emplacements)

### Objectif SoC
Définissez un niveau de charge souhaité (State of Charge). Lorsqu'il est atteint, la borne de charge réduit la puissance ou s'arrête. Cela prolonge la durée de vie de la batterie et libère les bornes de charge pour d'autres véhicules.

### Charge planifiée
Définissez des fenêtres de temps pendant lesquelles la charge est autorisée. Utile pour :
- Les prix de l'électricité en heures creuses
- La gestion de la charge du réseau
- L'optimisation du moment de départ (charge jusqu'à 90 % avant 06h00)

### Priorité
Lorsque plusieurs véhicules de flotte sont sur le même emplacement et que la puissance est limitée, les paramètres de priorité déterminent quels véhicules reçoivent en premier la pleine puissance.

## Groupes de véhicules

Organisez les véhicules en groupes pour une gestion plus facile :

- **Par route** — Routes d'Amsterdam, routes de Rotterdam
- **Par type** — Longue distance, livraison régionale, dernier kilomètre
- **Par département** — Opérations, service client

Les groupes peuvent avoir des paramètres de politique de charge et de facturation partagés.

## Retirer un véhicule

Lorsqu'un véhicule quitte votre flotte :

1. Allez à **Véhicules** → sélectionnez le véhicule → **Paramètres**
2. Cliquez sur **Retirer le véhicule**
3. Cela :
   - Révoquera tous les certificats PnC actifs
   - Désassociera tous les passeports RFID
   - Archivera l'historique des sessions du véhicule (toujours accessible pour la création de rapports)
   - Arrêtera la facturation pour ce véhicule

Le véhicule peut être réactivé s'il rejoint à nouveau la flotte.

## Exportation de données

Exportez les données de véhicule pour les intégrer dans vos propres systèmes :

- **Liste des véhicules** — CSV avec tous les détails des véhicules
- **Historique des sessions** — CSV par véhicule ou pour tous les véhicules
- **API** — Accès programmatique aux données de véhicule (voir Vue d'ensemble de la gestion de flotte → API)