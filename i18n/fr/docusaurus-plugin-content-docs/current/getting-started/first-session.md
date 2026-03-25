---
sidebar_position: 2
title: Votre Première Session de Chargement
description: Guide étape par étape pour votre première session de chargement de camions électriques sur un site Stroomlijnen.
keywords: [première session de chargement, comment charger, camion électrique, RFID, Plug and Charge]
---

# Votre Première Session de Chargement

Que vous soyez un gestionnaire de flotte qui configure tout ou un conducteur qui se trouve pour la première fois devant le chargeur — ici, vous trouverez exactement ce qui se passe.

## Avant d'Arriver

### En tant que Gestionnaire de Flotte

1. **Inscrivez-vous** sur le portail Stroomlijnen à [portal.stroomlijnen.nl](https://portal.stroomlijnen.nl)
2. **Ajoutez vos véhicules** — numéros de chassis et plaques d'immatriculation
3. **Choisissez votre méthode d'authentification :**
   - **Passe RFID** — nous vous les envoyons (voir [Passe RFID](/docs/getting-started/rfid-cards))
   - **Plug & Charge** — configuration via le portail (voir [Guide d'installation](/docs/plug-and-charge/setup-guide))
4. **Informez vos conducteurs** — partagez l'adresse du site et les codes d'accès éventuels

### En tant que Conducteur

- Assurez-vous d'avoir votre **passe RFID** avec vous (ou que votre camion prend en charge Plug & Charge)
- Connaître l'**adresse du site** et les codes d'accès pour les barrières
- Vérifiez le **niveau de charge actuel** de votre camion — planifiez le temps de charge nécessaire

## Au Chargeur

### Étape 1 : Stationner et Brancher

1. Roulez jusqu'à un chargeur disponible
2. Éteignez le véhicule (certains camions l'exigent ; d'autres non — consultez le manuel du fabricant)
3. Ouvrez la porte de chargement
4. Branchez le câble de chargement :
   - **CCS2** (Combined Charging System) — la norme européenne pour la charge rapide DC
   - La fiche ne peut être insérée que d'une seule façon. Ne forcez pas.

### Étape 2 : S'authentifier

**Avec un passe RFID :**
1. Tenez votre passe devant le lecteur de cartes du chargeur
2. Attendez la LED verte et/ou la confirmation sur l'écran
3. Le chargement démarre automatiquement

**Avec Plug & Charge :**
1. Branchez le câble. C'est tout.
2. Le camion et le chargeur échangent des certificats via ISO 15118
3. Le chargement démarre dans les 5-10 secondes

**Avec l'application de chargement (roaming) :**
1. Ouvrez l'application de votre eMSP
2. Scannez le code QR sur le chargeur ou saisissez l'ID du chargeur
3. Démarrez la session dans l'application

### Étape 3 : Surveiller

- L'écran du chargeur affiche la puissance en temps réel (kW) et l'énergie fournie (kWh)
- Vous pouvez également surveiller via le portail Stroomlijnen ou votre application de gestion de flotte
- La plupart des camions électriques se chargent de 20 % à 80 % en 60-90 minutes sur nos chargeurs DC

### Étape 4 : Débrancher

1. Arrêtez la session :
   - **RFID :** touchez à nouveau le passe
   - **Plug & Charge :** débranchez simplement (la session se termine automatiquement)
   - **Application :** arrêtez dans l'application, puis débranchez
2. Remettez le câble en place
3. Fermez la porte de chargement
4. Roulez !

## Que Se Passe-t-il si Quelque Chose Ne Va Pas ?

| Problème | Que faire |
|-------|-----------|
| Passe non reconnu | Vérifiez si le passe est activé sur le portail. Essayez de placer le passe plus près / plus longtemps devant le lecteur. |
| Plug & Charge ne démarre pas | Vérifiez l'état du PnC de votre camion dans le portail OEM. Voir [Dépannage](/docs/plug-and-charge/troubleshooting). |
| Chargeur affiche un message d'erreur | Notez le code d'erreur et contactez-nous. Voir [FAQ](/docs/faq). |
| Chargement plus lent que prévu | La température de la batterie, le niveau de charge (SoC) et la capacité du réseau affectent tous la vitesse de chargement. Au-delà de 80 % SoC, le chargement ralentit considérablement. |
| Câble impossible à débrancher | Le câble se verrouille pendant le chargement. Assurez-vous que la session est complètement arrêtée avant de tirer. |

## Vitesses de Chargement Attendues

Les camions électriques ont différentes capacités de charge :

| Niveau de puissance | Utilisation typique | Temps pour 200 kWh |
|-------------|------------|-------------------|
| 50 kW DC | Chargement de nuit / dépôt | ~4 heures |
| 150 kW DC | Chargement occasionnel | ~1,5 heure |
| 350 kW DC | Temps de cycle rapide | ~40 minutes |

:::note
La vitesse de chargement réelle dépend du chargeur embarqué du véhicule, de la température de la batterie, du niveau de charge et de la puissance disponible du chargeur. Le chargeur fournit la puissance maximale demandée par le véhicule, jusqu'à la puissance nominale du chargeur.
:::

## Étapes Suivantes

- [Configurez Plug & Charge](/docs/plug-and-charge/setup-guide) pour des sessions futures sans problème
- [Comprenez vos factures](/docs/fleet-management/invoicing)
- [Ajoutez plus de conducteurs](/docs/fleet-management/driver-management)