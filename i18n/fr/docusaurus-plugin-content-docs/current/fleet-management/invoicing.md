---
sidebar_position: 4
title: Facturation
description: Comment fonctionne la facturation de Stroomlijnen pour les charges de flotte — factures mensuelles, détails de coûts, méthodes de paiement et documentation fiscale.
keywords: [facturation, billing, coûts de charge de flotte, facture mensuelle, TVA, prix au kWh, compte de flotte]
---

# Facturation

Stroomlijnen offre une facturation transparente et détaillée pour toutes les activités de charge de votre flotte. Les factures sont établies mensuellement et contiennent des détails par session.

## Modèle tarifaire

Les clients de flotte sont facturés en fonction de la consommation d'énergie :

- **Coûts d'énergie** — Tarif €/kWh conformément à votre contrat de flotte
- **Pas de coûts de session** — Contrairement au chargement public, nous ne facturons pas de frais de démarrage par session
- **Pas de coûts liés au temps** — Vous payez pour l'énergie, et non pour le temps de stationnement
- **Réductions de volume** — Disponibles pour les flottes qui dépassent les seuils d'énergie mensuels (voir votre contrat)

Votre tarif contractuel est visible dans **Mon Compte de flotte** → **Paramètres** → **Facturation** → **Tarif**.

## Facture mensuelle

Les factures sont générées le **1er de chaque mois** pour les activités de charge du mois précédent.

### Contenu de la facture

Chaque facture contient :

- **Résumé** — Énergie totale (kWh), coûts totaux (€), nombre de sessions, nombre de véhicules
- **Décomposition par véhicule** — Énergie et coûts par véhicule
- **Détail par session** — Date, heure, lieu, ID EVSE, kWh, coûts, méthode d'authentification
- **Détails de la taxe** — TVA (21%) calculée et affichée séparément
- **Conditions de paiement** — 14 jours nets

### Formats de facture

- **PDF** — Document de facture formaté pour votre administration
- **CSV** — Détail lisible par machine pour l'importation dans les systèmes de comptabilité/ERP
- **UBL** — Langage commercial universel XML pour le traitement automatisé des factures (norme néerlandaise)

Tous les formats sont disponibles via **Mon Compte de flotte** → **Facturation** → **Téléchargement**.

## Méthodes de paiement

### Prélèvement automatique (SEPA)
La méthode de paiement préférée pour les clients de flotte :
1. Allez à **Paramètres** → **Facturation** → **Méthode de paiement**
2. Cliquez sur **Configurer le prélèvement automatique**
3. Entrez votre IBAN et autorisez le mandat SEPA
4. Les factures seront prélevées automatiquement 14 jours après leur émission

### Virement bancaire
Pour les clients qui paient manuellement :
- Les informations de paiement figurent sur chaque facture
- Référence : Numéro de facture (format : `STM-2026-XXXXX`)
- Banque : ING Bank, NL
- Date d'échéance : 14 jours après la date de facture

## Attribution des coûts

### Par centre de coût
Si vos véhicules sont affectés à des centres de coût dans la section Véhicules, les factures peuvent contenir des détails sur les centres de coût. Cela correspond directement à votre comptabilité interne.

### Par département/groupe
Les groupes de véhicules sont reflétés dans le détail de la facture, ce qui facilite la répartition des coûts entre les départements.

### Attribution personnalisée
Avez-vous besoin d'une logique d'attribution spécifique ? Nous pouvons configurer des regroupements de factures personnalisés pour votre organisation. Contactez votre gestionnaire de compte.

## Taxe et conformité

### TVA
- Tous les prix sont indiqués **hors taxe**
- La TVA de 21% est ajoutée à toutes les factures
- Le numéro de TVA figure sur chaque facture (Stroomlijnen B.V., KVK 93264526)

### Taxe sur l'énergie
- La taxe sur l'énergie est incluse dans le tarif au kWh lorsque cela s'applique
- Le tarif dépend de la catégorie de raccordement au réseau de la localisation
- Cela est transparent — voir votre contrat pour les spécifications

### CSRD / Rapport ESG
Pour les entreprises ayant des obligations de rapport sur la durabilité :
- Nous fournissons des **certificats d'énergie annuels** qui montrent la consommation totale d'énergie renouvelable
- Les calculs de CO₂ évités sont inclus dans le rapport annuel de flotte
- Le format des données est compatible avec les cadres de rapport ESG courants

## Litiges et corrections

Si vous pensez qu'une facture contient une erreur :

1. Allez à **Facturation** → sélectionnez la facture → **Contester**
2. Sélectionnez la ou les sessions concernées
3. Décrivez le problème
4. Notre équipe de facturation examine et répond dans les 5 jours ouvrables
5. Les corrections sont traitées comme un avoir sur la prochaine facture

## Factures historiques

Toutes les factures sont **conservées pendant 7 ans** (obligation légale néerlandaise) et sont accessibles via le portail Mon Compte de flotte. Vous pouvez également configurer l'envoi automatique de factures à des adresses e-mail supplémentaires via **Paramètres** → **Facturation** → **Destinataires de facture**.