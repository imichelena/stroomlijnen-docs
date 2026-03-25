---
sidebar_position: 1
title: Volvo Trucks — Configuration de Plug & Charge
description: Guide étape par étape pour activer Plug & Charge sur les camions électriques Volvo FH, FM, FE et FL via Volvo Connect.
keywords: [Volvo, FH Electric, FM Electric, Volvo Connect, Plug and Charge, ISO 15118, charge de flotte]
---

# Volvo Trucks — Configuration de Plug & Charge

Volvo était l'un des premiers fabricants de camions à soutenir entièrement la norme ISO 15118-2 Plug & Charge. Tous les modèles électriques Volvo actuels (FH, FM, FE, FL) prennent en charge PnC avec le firmware v3.2 ou supérieur.

## Modèles pris en charge

| Modèle | Options de batterie | Charge DC maximale | Prêt pour PnC |
|-------|-----------|---------------|:---------:|
| FH Electric | 540 kWh | 250 kW (CCS) | ✅ |
| FM Electric | 540 kWh | 250 kW (CCS) | ✅ |
| FE Electric | 265 kWh | 150 kW (CCS) | ✅ |
| FL Electric | 265 kWh | 150 kW (CCS) | ✅ |

## Exigences

- Compte de gestion de flotte Volvo Connect avec accès administrateur
- Firmware du camion v3.2 ou supérieur (vérifiez dans Volvo Connect → Véhicule → Logiciel)
- Compte de flotte Stroomlijnen avec PnC activé ([Guide d'installation](../setup-guide))

## Étape par étape : Volvo Connect

### 1. Vérification de la version du firmware

1. Connectez-vous à [Volvo Connect](https://connect.volvotrucks.com)
2. Sélectionnez votre véhicule dans la liste de flotte
3. Allez à **Détails du véhicule** → **Logiciel**
4. Vérifiez que la version du firmware est **3.2 ou supérieure**
5. Si ce n'est pas le cas, contactez votre concessionnaire Volvo pour une mise à jour

### 2. Activation des services de charge

1. Allez dans Volvo Connect à **Services** → **Services de charge**
2. Si cette section n'est pas visible, demandez à votre administrateur Volvo Connect d'activer le **module eMobility** pour votre compte
3. Cliquez sur **Gérer les partenaires de charge**

### 3. Autorisation de Stroomlijnen

1. Recherchez dans la liste des partenaires de charge **"Stroomlijnen B.V."**
   - Si cela n'est pas répertorié, cliquez sur **Ajouter un partenaire** et recherchez "Stroomlijnen" ou utilisez le code de partenaire `NL-STM`
2. Cliquez sur **Autoriser**
3. Examinez les autorisations :
   - ✅ Installation du certificat — Requis pour PnC
   - ✅ Identification du véhicule — Requise pour l'association de certificat
   - ❌ Données de localisation — Non requises, vous pouvez refuser cela
4. Cliquez sur **Confirmer l'autorisation**

### 4. Sélection des véhicules

1. Après autorisation, vous verrez un écran pour la sélection du véhicule
2. Cochez les cases pour tous les camions qui doivent utiliser Stroomlijnen PnC
3. Cliquez sur **Appliquer**

### 5. Installation du certificat

Après l'autorisation, le backend de Stroomlijnen envoie une demande d'installation de certificat :

1. La demande apparaît dans Volvo Connect → **Notifications** (généralement dans les 30 minutes)
2. Le système Volvo pousse le certificat de contrat vers le camion
3. Le camion doit être **en ligne** pour le recevoir (contact allumé ou connecté à un chargeur AC)
4. L'installation est généralement terminée dans **1-2 heures**

Vous pouvez suivre la progression dans :
- **Volvo Connect** → Véhicule → Services de charge → Statut du certificat
- **Stroomlijnen Mon Flotte** → Véhicule → Onglet Plug & Charge

### 6. Vérification de l'installation

Dès que le statut "Actif" s'affiche dans les deux portails :

1. Roulez jusqu'à un chargeur Stroomlijnen
2. Branchez le câble CCS
3. Le chargeur devrait afficher "Plug & Charge — Authentifié" dans 5-10 secondes
4. La charge démarre automatiquement

## Procédure de mise à jour du firmware

Si votre camion a un firmware inférieur à v3.2 :

1. **Contactez votre concessionnaire Volvo** pour une mise à jour du firmware
2. Les mises à jour peuvent être effectuées par le concessionnaire (~2 heures)
3. Certaines mises à jour sont disponibles en tant que **OTA (Over-The-Air)** — vérifiez Volvo Connect → Véhicule → Mises à jour de logiciel
4. Revenez à l'étape 2 après la mise à jour

:::caution
N'essayez pas de mettre à jour le firmware du camion vous-même. Les mises à jour du firmware doivent être effectuées par un concessionnaire Volvo agréé ou via le canal officiel OTA.
:::

## Dépannage

### "Services de charge" non visibles dans Volvo Connect
Votre abonnement Volvo Connect ne contient peut-être pas le module eMobility. Contactez votre concessionnaire Volvo ou le support Volvo Connect pour l'activation.

### Certificat affichant plus de 24 heures "En traitement"
1. Vérifiez que le camion a été en ligne (contact allumé) pendant au moins 30 minutes après la demande
2. Vérifiez Volvo Connect pour toute demande d'autorisation en attente
3. Contactez le support Stroomlijnen — nous pouvons réactiver la demande de certificat

### PnC échoue mais le certificat affiche "Actif"
1. Vérifiez l'affichage du chargeur pour les codes d'erreur spécifiques
2. Essayez un autre câble CCS (si plusieurs sont disponibles)
3. Éteignez le contact du camion, attendez 30 secondes, allumez-le et reconnectez
4. Consultez le [Guide de dépannage général](../troubleshooting)

### Plusieurs comptes Volvo
Si votre flotte est gérée via plusieurs comptes Volvo Connect (par exemple, différentes filiales), chaque compte doit autoriser Stroomlijnen séparément. Contactez votre gestionnaire de compte Stroomlijnen pour la configuration multi-compte.

---

**Suivant :** [DAF Configuration →](./daf)