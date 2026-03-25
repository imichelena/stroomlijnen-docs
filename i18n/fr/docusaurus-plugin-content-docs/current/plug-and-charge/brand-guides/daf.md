---
sidebar_position: 2
title: Camions DAF — Configuration de Plug & Charge
description: Guide étape par étape pour activer Plug & Charge sur les camions électriques DAF XF, XD et XB via DAF Connect.
keywords: [DAF, XF Electric, XD Electric, XB Electric, DAF Connect, Plug and Charge, ISO 15118]
---

# Camions DAF — Configuration de Plug & Charge

La gamme de camions électriques de DAF — membre du groupe PACCAR — prend en charge l'ISO 15118-2 Plug & Charge sur tous les modèles BEV actuels. La configuration est gérée via DAF Connect, la plateforme de gestion de flotte.

## Modèles pris en charge

| Modèle | Options de batterie | Chargement DC max. | Prêt pour PnC |
|-------|-----------|---------------|:---------:|
| XF Electric | Jusqu'à 525 kWh | 350 kW (CCS) | ✅ |
| XD Electric | Jusqu'à 350 kWh | 250 kW (CCS) | ✅ |
| XB Electric | Jusqu'à 210 kWh | 175 kW (CCS) | ✅ |

## Exigences

- Compte de gestion de flotte DAF Connect avec accès administrateur
- Logiciel de véhicule le plus récent (vérifiez dans DAF Connect → Véhicule → Diagnostics)
- Compte de flotte Stroomlijnen avec PnC activé ([Guide d'installation](../setup-guide))

## Étape par étape : DAF Connect

### 1. Accès aux paramètres de charge

1. Connectez-vous à [DAF Connect](https://dafconnect.paccar.com)
2. Naviguez vers **Gestion de flotte** → **Mobilité électrique**
3. Si vous ne voyez pas la section Mobilité électrique, contactez le support DAF Connect pour activer cette fonctionnalité pour votre compte

### 2. Configuration des partenaires de charge

1. Allez à **Mobilité électrique** → **Partenaires de charge**
2. Cliquez sur **Ajouter un partenaire de charge**
3. Recherchez **"Stroomlijnen"** ou entrez l'ID de partenaire `NL-STM`
4. Cliquez sur **Ajouter et autoriser**

### 3. Affectation des véhicules

1. Après avoir ajouté Stroomlijnen, allez à **Partenaires de charge** → **Stroomlijnen B.V.**
2. Cliquez sur **Gérer les véhicules**
3. Sélectionnez les camions qui doivent utiliser PnC
4. Cliquez sur **Enregistrer**

### 4. Approbation de l'installation du certificat

1. DAF Connect affiche une notification pour approuver l'installation du certificat
2. Examinez les détails de la demande (véhicules, autorisations)
3. Cliquez sur **Approuver**
4. Les certificats de contrat sont envoyés aux camions sélectionnés

### 5. Attendez l'installation

- La livraison du certificat prend généralement **4–8 heures**
- Le camion doit être en ligne (contact allumé ou connecté à l'alimentation)
- Suivez le statut dans DAF Connect → **Mobilité électrique** → **Statut du certificat**

### 6. Vérifiez et testez

1. Vérifiez le statut à la fois dans DAF Connect et Stroomlijnen Mijn Vloot
2. Branchez-vous à un chargeur Stroomlijnen pour vérifier l'authentification automatique
3. La première session PnC confirme que tout fonctionne

## Remarque sur l'activation par le gestionnaire de flotte

DAF exige que le **gestionnaire de flotte** (et non les conducteurs individuels) active PnC pour chaque véhicule. Il s'agit d'une fonctionnalité de sécurité — seuls les gestionnaires de flotte autorisés peuvent activer la facturation automatique sur les véhicules de l'entreprise.

Si votre organisation compte plusieurs gestionnaires de flotte :
- Chacun peut activer PnC pour les véhicules sous leur responsabilité
- Un super-gestionnaire peut déléguer les droits de mobilité électrique

## Dépannage

### Section "Mobilité électrique" non visible
Cette fonctionnalité nécessite un abonnement DAF Connect Premium. Contactez votre concessionnaire DAF pour vérifier votre niveau d'abonnement.

### Installation du certificat prend plus de 24 heures
1. Vérifiez que le camion a été en ligne pendant au moins 1 heure après l'approbation
2. Vérifiez dans DAF Connect les messages d'erreur sous Mobilité électrique → Notifications
3. Contactez le support Stroomlijnen pour vérifier si la demande a été reçue de notre côté

### Échec de l'authentification au chargeur
1. Vérifiez dans DAF Connect que le statut du certificat est "Actif"
2. Vérifiez si le logiciel du véhicule est à jour
3. Redémarrez le véhicule (cycle de contact complet)
4. Consultez le guide de dépannage général [Guide de dépannage](../troubleshooting)

---

**Suivant :** [Configuration de Mercedes-Benz →](./mercedes-trucks)