---
sidebar_position: 5
title: MAN Électrique — Configuration de Plug & Charge
description: Guide étape par étape pour activer Plug & Charge sur les camions électriques MAN eTGX et eTGS via la plateforme RIO.
keywords: [MAN, eTGX, eTGS, RIO, Plug and Charge, ISO 15118, TRATON]
---

# MAN Électrique — Configuration de Plug & Charge

La gamme de camions électriques de MAN (appartenant au groupe TRATON avec Scania) prend en charge l'ISO 15118-2 Plug & Charge sur les modèles eTGX et eTGS. Les eTGL et eTGM recevront le support PnC via une mise à jour du firmware étalée tout au long de 2026. La configuration est gérée via la plateforme RIO.

## Modèles pris en charge

| Modèle | Options de batterie | Charge DC maximale | Prêt pour PnC |
|-------|-----------|---------------|:---------:|
| eTGX | Jusqu'à 480 kWh | 375 kW (CCS) | ✅ |
| eTGS | Jusqu'à 400 kWh | 250 kW (CCS) | ✅ |
| eTGL | Jusqu'à 265 kWh | 150 kW (CCS) | ⚠️ Déploiement en cours |
| eTGM | Jusqu'à 265 kWh | 150 kW (CCS) | ⚠️ Déploiement en cours |

## Exigences

- Compte RIO-platform avec accès gestionnaire de flotte
- eTGX/eTGS avec le dernier firmware (fin 2025+)
- Compte Stroomlijnen-flotte avec PnC activé ([Guide d'installation](../setup-guide))

## Étape par étape : plateforme RIO

### 1. Accès à la gestion de charge

1. Connectez-vous à [RIO](https://rio.cloud)
2. Naviguez vers **Services** → **Gestion de charge**
3. Si la gestion de charge n'est pas visible, elle doit être activée — allez dans **Marketplace** → recherchez "Gestion de charge" → **Activer**

### 2. Connexion à Stroomlijnen

1. Allez dans la gestion de charge à **Partenaires de charge**
2. Cliquez sur **Connecter un nouveau partenaire**
3. Recherchez **"Stroomlijnen B.V."** (ou utilisez l'ID eMSP `NL-STM`)
4. Cliquez sur **Se connecter et autoriser**
5. Acceptez les conditions

### 3. Sélection des véhicules

1. Après la connexion, la page du partenaire affiche vos véhicules éligibles
2. Cochez les cases pour les camions dont vous souhaitez activer PnC
3. Cliquez sur **Enregistrer la sélection**

### 4. Attendez l'installation du certificat

- RIO active la provision de certificats via le système de télémétrie de MAN
- Le camion doit être en ligne avec contact allumé
- **Important :** MAN utilise un module de sécurité matériel (HSM) pour le stockage des certificats. L'HSM passe en mode de provisionnement pendant les 30 premières minutes après l'allumage du contact. Si le camion est stationné avec contact allumé pendant plus de 30 minutes sans recevoir le certificat, éteignez et rallumez le contact pour réactiver le mode de provisionnement.
- **Temps d'installation typique : 6–24 heures**

### 5. Vérifiez

Vérifiez le statut du certificat à la fois dans RIO et Stroomlijnen Mijn Vloot. Testez sur un chargeur Stroomlijnen.

## Mode de provisionnement HSM — Important

L'architecture de sécurité de MAN utilise un module de sécurité matériel avec une fenêtre de provisionnement spécifique :

1. Lorsque le contact du camion est allumé, l'HSM passe en mode de provisionnement pendant 30 minutes
2. Pendant cette fenêtre, de nouveaux certificats peuvent être installés
3. Après 30 minutes, l'HSM se verrouille pour empêcher les modifications non autorisées des certificats
4. Pour rouvrir la fenêtre : éteignez le contact, attendez 10 secondes, puis rallumez

**Ce que cela signifie dans la pratique :** Si vous activez PnC sur le portail RIO pendant que le camion est en route, le certificat est mis en file d'attente et installé lors du prochain démarrage (dans les 30 premières minutes).

## Intégration du groupe TRATON

MAN et Scania font tous deux partie du groupe TRATON et partagent certaines infrastructures backend. Cependant :

- Chaque marque a son propre portail de flotte (RIO pour MAN, My Scania pour Scania)
- PnC doit être configuré séparément dans chaque portail
- Les certificats sont spécifiques à la marque et ne peuvent pas être transférés

## Dépannage

| Problème | Solution |
|---------|----------|
| "Gestion de charge" non visible dans RIO | Activez-le depuis le Marketplace RIO |
| Certificat en traitement > 24 heures | Effectuez un cycle de contact pour réactiver le mode de provisionnement HSM |
| eTGL/eTGM affiche "PnC non disponible" | Mise à jour du firmware peut être en cours — vérifiez auprès d'un concessionnaire MAN |
| PnC fonctionne une fois puis échoue | L'HSM peut avoir un problème de connexion — diagnostic par le concessionnaire requis |

---

**Suivant :** [Autres camions →](./other-trucks)