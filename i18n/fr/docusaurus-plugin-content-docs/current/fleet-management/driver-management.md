---
sidebar_position: 5
title: Gestion des conducteurs
description: Gérez les conducteurs de votre flotte électrique — attribuez des véhicules, fournissez des passes RFID, définissez des limites de charge et suivez l'activité des conducteurs.
keywords: [gestion des conducteurs, conducteurs de flotte, attribution RFID, limites de charge, application conducteur]
---

# Gestion des conducteurs

La section Gestion des conducteurs permet aux gestionnaires de flotte de déterminer qui peut charger, sur quels véhicules et avec quelles limites.

## Ajouter des conducteurs

1. Allez dans **Conducteurs** → **Ajouter un conducteur**
2. Remplissez les informations du conducteur :
   - **Nom** — Prénom et nom de famille
   - **E-mail** — Pour accéder au compte et recevoir des notifications
   - **Téléphone** — Pour l'authentification de l'application (optionnel)
   - **Numéro de personnel** — Pour référence interne
   - **Département/Groupe** — Pour filtrer par organisation
3. Cliquez sur **Enregistrer**

Le conducteur recevra un e-mail d'invitation pour configurer son compte Stroomlijnen et télécharger l'application mobile.

## Attribuer des véhicules

Les conducteurs peuvent être attribués à un ou plusieurs véhicules :

1. Allez dans **Conducteurs** → sélectionnez un conducteur → **Véhicules**
2. Cliquez sur **Attribuer un véhicule** et sélectionnez parmi votre flotte
3. Un conducteur ne peut démarrer des sessions que sur les véhicules attribués (si l'association véhicule-conducteur est activée dans vos paramètres de flotte)

### Attribution flexible
Pour les flottes où les conducteurs partagent des véhicules :
- Définissez **Association véhicule-conducteur** sur "Flexible" dans les paramètres de la flotte
- Chaque conducteur enregistré peut charger n'importe quel véhicule de la flotte
- Les sessions sont toujours suivies par conducteur (via passe RFID ou application)

## Passes RFID pour les conducteurs

Chaque conducteur peut recevoir une passe RFID personnelle :

1. Allez dans **Conducteurs** → sélectionnez un conducteur → **Passes RFID**
2. Cliquez sur **Attribuer une passe** et entrez l'UID de la passe (imprimé sur la passe)
3. La passe est maintenant associée à ce conducteur et à ses véhicules attribués

Lorsqu'un conducteur utilise sa passe personnelle à un chargeur, la session lui est spécifiquement attribuée — pratique pour les rapports et l'attribution des coûts par conducteur.

Voir aussi : [Passes RFID](../getting-started/rfid-cards) pour passer commande et activer.

## Limites de charge

Définissez des limites par conducteur pour contrôler les coûts :

### Limite d'énergie mensuelle
Quantité maximale de kWh qu'un conducteur peut charger par mois. Lorsque la limite est atteinte :
- Le conducteur est informé par e-mail/application
- Tout chargement supplémentaire nécessite l'approbation du gestionnaire de flotte (ou la limite est réinitialisée le mois suivant)

### Limite par session
Quantité maximale de kWh par session individuelle. Utile pour éviter les charges nocturnes non intentionnelles.

### Restrictions de localisation
Restreignez les emplacements où un conducteur peut charger. Par exemple, uniquement les emplacements Stroomlijnen sur l'itinéraire attribué.

## Application conducteur

Les conducteurs peuvent télécharger l'application Stroomlijnen pour :

- **Trouver des chargeurs** — Carte de tous les emplacements Stroomlijnen avec disponibilité en temps réel
- **Démarrer des sessions** — Scanner un code QR ou utiliser le Bluetooth pour démarrer le chargement (alternative à la passe RFID)
- **Surveiller les sessions** — Puissance de charge actuelle, énergie fournie, temps estimé jusqu'à l'état de charge souhaité
- **Consulter l'historique** — Sessions passées avec détails d'énergie et de coûts
- **Recevoir des notifications** — Session terminée, chargeur disponible, événements PnC

L'application est disponible pour iOS et Android. Les conducteurs se connectent avec l'adresse e-mail enregistrée dans Mijn Vloot.

## Rapports

### Rapports par conducteur
- Total kWh par conducteur par mois
- Nombre de sessions
- Durée moyenne de session
- Emplacements les plus utilisés
- Attribution des coûts

### Comparaison des conducteurs
Comparez les modèles de charge des conducteurs pour identifier :
- Un comportement de charge efficace versus inefficace
- Des opportunités d'optimisation des itinéraires
- Des coûts anormaux

Les rapports sont disponibles via **Rapports** → **Analyse des conducteurs** et peuvent être exportés au format CSV ou PDF.