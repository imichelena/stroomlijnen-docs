---
sidebar_position: 3
title: Passe RFID
description: Comment commander, activer et gérer des passe RFID pour votre flotte électrique chez Stroomlijnen.
keywords: [carte RFID, carte de charge, NL*STM, charge de flotte, activer la carte]
---

# Passe RFID

Les passe RFID (Radio Frequency Identification) sont le moyen traditionnel d'authentifier un point de charge. Il suffit de taper votre passe, puis de commencer à charger — simple et fiable.

## Fonctionnement des passe RFID

Chaque passe contient un code d'identification unique (un **token** ou **UID**) lié à votre compte de flotte. Lorsque vous tapez la passe sur le lecteur d'un chargeur :

1. Le chargeur lit l'UID de la passe
2. L'envoie via OCPP au backend Stroomlijnen
3. Notre système vérifie : cette passe est-elle valide ? À quelle flotte appartient-elle ?
4. Si elle est valide → le chargement démarre. La session est facturée au compte de la flotte.

Cela fonctionne sur tous les emplacements Stroomlijnen et chez les **partenaires de roaming** à travers l'Europe — la passe porte votre identité NL\*STM eMSP.

## Commander des passe

### Nouvelle inscription de flotte
Lorsque vous inscrivez votre flotte, vous pouvez commander des passe directement via le portail :

1. Allez dans **Ma flotte → Passe RFID**
2. Cliquez sur **Commander des passe**
3. Indiquez le nombre de passe nécessaires
4. Entrez l'adresse de livraison
5. Les passe arrivent dans les 3-5 jours ouvrables

### Passe supplémentaires
En avez-vous besoin ? Même procédure. Vous pouvez commander des passe supplémentaires à tout moment.

### Tarif
- Les passe sont fournies gratuitement avec votre abonnement de flotte
- Remplacement en cas de perte : gratuit (les deux premiers par an), 5 € par passe ensuite

## Activer une passe

Les passe sont **préactivées** et déjà liées à votre flotte. Vous devez cependant :

1. Aller dans **Ma flotte → Passe RFID** sur le portail
2. Vérifier si les nouvelles passe apparaissent dans votre liste
3. **Attribuer chaque passe à un conducteur** (optionnel mais recommandé — aide à suivre les sessions)
4. Tester la passe sur un chargeur

:::tip
Attribuez des passe à des conducteurs spécifiques. Cela permettra à vos rapports de charge de montrer quel conducteur a utilisé quelle passe, ce qui facilite l'attribution des coûts par flotte.
:::

## Gérer les passe

### Désactiver une passe
Si une passe est perdue ou si un conducteur quitte l'entreprise :
1. Allez dans **Ma flotte → Passe RFID**
2. Recherchez la passe (par numéro ou nom de conducteur)
3. Cliquez sur **Désactiver**
4. La passe cesse immédiatement de fonctionner sur tous les chargeurs

### Réactiver une passe
Si vous retrouvez une passe « perdue » ? Vous pouvez la réactiver de la même manière.

### Groupes de passe
Pour les flottes plus importantes, vous pouvez organiser des passe en groupes :
- **Par véhicule** — une passe par camion
- **Par conducteur** — des passe personnelles qui fonctionnent sur n'importe quel véhicule
- **Par département** — facturation séparée par unité commerciale

## Passe perdues ou volées

1. **Désactivez immédiatement** dans le portail (ou appelez-nous)
2. La passe est rendue invalide sur tous les chargeurs connectés dans les 60 secondes
3. Commandez un remplacement
4. Les coûts éventuels avant la désactivation apparaîtront sur votre facture habituelle

:::caution
Désactivez les passe perdues le plus rapidement possible. Jusqu'à ce moment, n'importe qui peut charger avec la passe sur votre compte. Nous traitons les désactivations dans les 60 secondes — mais vous devez prendre l'initiative.
:::

## RFID versus Plug & Charge

| Fonction | Passe RFID | Plug & Charge |
|---------|-----------|---------------|
| Temps de configuration | Commander des passe, les attribuer aux conducteurs | Enregistrer le VIN, installer le certificat |
| Action du conducteur | Taper la passe avant/après le chargement | Brancher simplement |
| Fonctionne avec plusieurs flottes | La passe suit le conducteur | Le certificat suit le véhicule |
| Risque de perte | La passe peut être perdue ou volée | Rien à perdre physiquement |
| Roaming | Fonctionne partout | En développement, mais pas encore universel |
| Option de secours | Fonctionne toujours | RFID nécessaire comme option de secours |

**Notre recommandation :** Configurez Plug & Charge pour la commodité, conservez les passe RFID comme option de secours. Ceinture et bretelles.

## Détails techniques

- **Technologie de passe :** MIFARE DESFire EV2 (chiffré, sécurisé)
- **Fréquence :** 13,56 MHz (NFC)
- **Norme :** ISO 14443
- **Format d'UID :** 14 caractères hexadécimaux
- **Marque :** Logo Stroomlijnen avec identification NL\*STM

## Étapes suivantes

- [Configurez Plug & Charge](/docs/plug-and-charge/setup-guide) en plus de vos passe RFID
- [Gérez vos conducteurs](/docs/fleet-management/driver-management)
- [Comprenez vos factures](/docs/fleet-management/invoicing)