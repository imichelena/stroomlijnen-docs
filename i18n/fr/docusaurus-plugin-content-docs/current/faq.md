---
sidebar_position: 100
title: Foire aux questions
description: Questions fréquentes sur Stroomlijnen électrique de camion — Plug & Charge, tarifs, RFID, gestion de flotte et plus.
keywords: [FAQ, foire aux questions, charge de véhicule électrique, Plug and Charge, charge de flotte, RFID, tarification]
---

# Foire aux questions

## Généralités

### 1. Qu'est-ce que Stroomlijnen ?
Stroomlijnen est un opérateur de points de charge (CPO) et un fournisseur de services de mobilité électrique (eMSP) néerlandais spécialisé dans la charge haute puissance DC pour les camions électriques. Nous installons des infrastructures de charge dans les théâtres, les hubs logistiques et les emplacements stratégiques à travers les Pays-Bas.

### 2. Pourquoi les théâtres ?
Les théâtres disposent de grosses connexions électriques (pour l'éclairage, le son et les installations de scène), des parkings accessibles aux camions (pour les livraisons de décors) et sont disponibles la nuit lorsque les camions se chargent généralement. Un choix logique — nous utilisons les infrastructures existantes qui sinon resteraient inutilisées la nuit.

### 3. Quels véhicules peuvent se charger chez Stroomlijnen ?
Tout véhicule équipé d'une prise **CCS Combo 2** peut se charger à nos stations DC. Cela inclut les camions électriques, les fourgons, les bus et les voitures particulières. Nos chargeurs livrent jusqu'à 400 kW, mais s'adaptent au pouvoir maximal que le véhicule peut gérer.

### 4. Où se trouvent les chargeurs Stroomlijnen ?
Principalement aux Pays-Bas, avec une expansion prévue en Belgique et en Allemagne. Consultez notre [carte de chargeurs](./locations/finding-charger) pour tous les emplacements actuels.

### 5. Les voitures particulières peuvent-elles utiliser vos chargeurs ?
Oui. Même si nos chargeurs sont conçus et positionnés pour les véhicules d'entreprise, toute voiture équipée de CCS peut également se charger. Notez que les emplacements de camion peuvent avoir des bordures plus hautes ou une disposition différente de celle d'une station de charge standard pour voitures particulières.

## Plug & Charge

### 6. Qu'est-ce que le Plug & Charge ?
Le Plug & Charge signifie que votre camion s'authentifie automatiquement et commence à se charger dès que vous branchez le câble — pas de carte, pas d'application, pas d'action du conducteur. Il utilise des certificats numériques ISO 15118 intégrés dans le véhicule. Voir [Qu'est-ce que le Plug & Charge ?](./plug-and-charge/what-is-pnc) pour plus de détails.

### 7. Le Plug & Charge est-il sécurisé ?
Oui — même plus sécurisé que les passes RFID. PnC utilise l'authentification mutuelle TLS et des certificats numériques (même technologie que la banque en ligne). Les certificats sont liés au numéro d'identification du véhicule (VIN) et stockés dans un module de sécurité matériel, ce qui rend difficile leur clonage.

### 8. Quels camions prennent en charge le Plug & Charge ?
La plupart des grands fabricants de camions électriques prennent maintenant en charge PnC : Volvo, DAF, Mercedes-Benz, Scania et MAN. Voir notre [liste de véhicules compatibles](./plug-and-charge/compatible-vehicles) pour les détails complets.

### 9. Combien de temps faut-il pour configurer le Plug & Charge ?
Environ 15 minutes de configuration du portail, puis 1 à 24 heures pour l'installation du certificat dans le véhicule (selon le fabricant). Voir le [guide d'installation](./plug-and-charge/setup-guide).

### 10. Puis-je utiliser le Plug & Charge ET les passes RFID en même temps ?
Oui. PnC et RFID peuvent coexister. Si PnC échoue pour quelque raison que ce soit, le conducteur peut toujours revenir à la carte RFID. Le chargeur tente d'abord PnC ; si PnC n'authentifie pas dans les 15 secondes, il demande une carte RFID.

## Tarifs et facturation

### 11. Combien coûte la charge ?
Les clients de flotte reçoivent un tarif contractuel €/kWh. Il n'y a pas de frais de session ou de frais basés sur le temps — vous payez uniquement pour l'énergie consommée. Contactez-nous pour une offre de prix de flotte.

### 12. Comment fonctionne la facturation ?
Factures mensuelles avec des détails de session, disponibles au format PDF, CSV ou UBL XML. Les factures sont générées le 1er de chaque mois. Voir [Facturation](./fleet-management/invoicing) pour les détails.

### 13. Offrez-vous des réductions de volume ?
Oui. Les flottes qui dépassent les seuils d'énergie mensuels sont éligibles à des tarifs échelonnés. Contactez votre gestionnaire de compte ou envoyez un e-mail à [sales@stroomlijnen.nl](mailto:sales@stroomlijnen.nl) pour les détails.

### 14. Les utilisateurs itinérants peuvent-ils se charger chez Stroomlijnen ?
Oui, via nos connexions Hubject et OCPI. Les utilisateurs avec des passes de charge d'autres fournisseurs peuvent taper et se charger. Les tarifs d'itinérance peuvent différer des tarifs de flotte directs.

## Passes RFID

### 15. Comment obtenir des passes RFID ?
Commandez via le [portail Mijn Vloot](./getting-started/rfid-cards) ou contactez votre gestionnaire de compte. Les passes sont expédiées dans les 3 jours ouvrables et nécessitent une activation.

### 16. Que se passe-t-il si une carte RFID est perdue ou volée ?
Désactivez-la immédiatement via Mijn Vloot → Cartes RFID → sélectionnez la carte → Désactiver. La carte est bloquée dans les secondes sur tous les chargeurs Stroomlijnen. Commandez un remplacement via le portail.

### 17. Une seule carte RFID peut-elle fonctionner sur plusieurs véhicules ?
Oui. Les passes RFID sont liées à votre compte de flotte, et non à un véhicule spécifique. Chaque passe attribuée à votre flotte peut démarrer une session de charge sur n'importe quel chargeur pour l'un de vos véhicules.

## Technique

### 18. Quelle version OCPP utilisez-vous ?
Tous les nouveaux chargeurs utilisent **OCPP 2.0.1**. Certaines installations plus anciennes utilisent OCPP 1.6-J. Les deux sont entièrement pris en charge par notre CSMS. Voir [Aperçu OCPP](./technical/ocpp-overview).

### 19. Prenez-vous en charge la charge intelligente / la répartition de tâches ?
Oui. Notre CSMS répartit dynamiquement la puissance sur les chargeurs à chaque emplacement en fonction de la capacité du réseau, de la priorité des véhicules et de l'optimisation basée sur le moment de la journée. Voir [Aperçu OCPP → Charge intelligente](./technical/ocpp-overview#smart-charging).

### 20. Puis-je intégrer les données de charge avec mon système de gestion de flotte ?
Oui. Nous proposons une API REST avec des webhooks en temps réel pour les données de session, la gestion des véhicules et la facturation. Les SDK sont disponibles pour Python, JavaScript et C#. Voir [API & Intégration](./technical/integration).

## Support

### Comment signalez-vous un chargeur défectueux ?
- **Application :** Aide → Signaler un problème → sélectionnez le chargeur
- **Téléphone :** Numéro de support indiqué sur chaque chargeur
- **E-mail :** [support@stroomlijnen.nl](mailto:support@stroomlijnen.nl)
- **Spécifiez :** ID du chargeur (format : `NL*STM*E...`), heure et description du problème

### Comment contacter Stroomlijnen ?
- **Questions générales :** [info@stroomlijnen.nl](mailto:info@stroomlijnen.nl)
- **Ventes de flotte :** [sales@stroomlijnen.nl](mailto:sales@stroomlijnen.nl)
- **Support technique :** [support@stroomlijnen.nl](mailto:support@stroomlijnen.nl)
- **Intégration technique :** [technical@stroomlijnen.nl](mailto:technical@stroomlijnen.nl)