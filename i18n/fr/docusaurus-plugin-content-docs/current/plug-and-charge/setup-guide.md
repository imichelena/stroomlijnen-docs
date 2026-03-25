---
sidebar_position: 4
title: Guide d'installation Plug & Charge
description: Comment configurer Plug & Charge pour votre flotte via le portail Stroomlijnen — de l'enregistrement à la première session automatisée.
keywords: [Configurer Plug and Charge, enregistrement de flotte, certificat de contrat, Portail Mijn Vloot, activation PnC]
---

# Guide d'installation Plug & Charge

La configuration de Plug & Charge pour votre flotte prend environ 15 minutes de travail sur le portail. Une fois configuré, chaque camion enregistré s'authentifie automatiquement et se charge sur chaque emplacement Stroomlijnen — sans passerelles, sans applications.

## Exigences

Avant de commencer :

- [ ] Un **compte de flotte Stroomlijnen** (enregistrez-vous via [stroomlijnen.nl](https://stroomlijnen.nl) ou contactez votre gestionnaire de compte)
- [ ] Les **numéros de VIN** de vos camions (Vehicle Identification Numbers)
- [ ] Accès à votre portail de flotte OEM (Volvo Connect, DAF Connect, Fleetboard, etc.)
- [ ] Un **véhicule compatible** (voir [Véhicules compatibles](./compatible-vehicles))

## Étape 1 : Connexion au Portail Mijn Vloot

Accédez à **my.stroomlijnen.nl** et connectez-vous avec vos informations de gestionnaire de flotte.

Si vous n'avez pas encore de compte :
1. Cliquez sur **S'inscrire** et remplissez vos informations d'entreprise (numéro KVK, adresse de facturation)
2. Vous recevrez un e-mail de vérification — cliquez sur le lien
3. Votre compte sera examiné et activé dans les 24 heures

## Étape 2 : Ajout de vos véhicules

Dans le tableau de bord Mijn Vloot :

1. Allez à **Véhicules** → **Ajouter un véhicule**
2. Entrez les informations du véhicule :
   - **VIN** — Numéro d'identification du véhicule (17 caractères, sur le montant de la porte du conducteur ou sur le certificat d'immatriculation)
   - **Immatriculation** — Pour l'identification et la rapports
   - **Marque/Modèle** — Sélectionnez dans le menu déroulant (par exemple Volvo FH Electric)
   - **Surnom** — Facultatif, pour une identification facile (par exemple "Camion 014 — Route Amsterdam")
3. Cliquez sur **Enregistrer & Continuer**

Répétez cela pour chaque camion de votre flotte. Vous pouvez également **importer en masse** via le téléchargement CSV.

### Format CSV

```csv
vin,immatriculation,marque,modele,surnom
YV2RT60A1PB123456,AB-123-C,Volvo,FH Electric,Camion 014
XLRAE75PC0H987654,DE-456-F,DAF,XF Electric,Camion 022
```

## Étape 3 : Activation de Plug & Charge

Pour chaque véhicule :

1. Allez à **Véhicules** → sélectionnez un véhicule → onglet **Plug & Charge**
2. Activez **Activer Plug & Charge**
3. Le système :
   - Générera un **certificat de contrat** pour ce véhicule
   - Demarrera l'installation via le service de provisionnement de certificats de l'OEM
   - Affichera le statut : `En attente → Installation → Actif`

:::note Délai d'installation du certificat
L'installation du certificat prend généralement **1–24 heures**, selon l'OEM :
- **Volvo** : Généralement dans les 2 heures via Volvo Connect
- **DAF** : 4–8 heures via DAF Connect
- **Mercedes-Benz** : 2–6 heures via Fleetboard
- **Scania** : 4–12 heures via Scania Fleet Management
- **MAN** : 6–24 heures via la plateforme RIO

Le camion doit être **en ligne** (contact allumé ou connecté à la charge) pour que le certificat soit livré.
:::

## Étape 4 : Autorisation via le portail OEM

Certains OEM exigent que vous approuviez les services tiers pour PnC dans leur portail de flotte :

### Volvo Connect
1. Connectez-vous à Volvo Connect → **Services** → **Services de charge**
2. Recherchez "Stroomlijnen B.V." dans la liste des partenaires et cliquez sur **Autoriser**
3. Confirmez les véhicules à inclure
4. Voir le [guide de marque Volvo](./brand-guides/volvo-trucks) pour les étapes détaillées

### DAF Connect
1. Connectez-vous à DAF Connect → **Paramètres** → **Partenaires de charge**
2. Activez Stroomlijnen et sélectionnez les véhicules
3. Voir le [guide de marque DAF](./brand-guides/daf) pour les étapes détaillées

### Mercedes-Benz Fleetboard
1. Connectez-vous à Fleetboard → **eMobility** → **Gestion de charge**
2. Ajoutez Stroomlijnen en tant que fournisseur de charge
3. Voir le [guide de marque Mercedes](./brand-guides/mercedes-trucks) pour les étapes détaillées

## Étape 5 : Vérification de l'activation

Dès que le certificat est installé :

1. Dans Mijn Vloot → **Véhicules** → sélectionnez un véhicule → onglet **Plug & Charge**
2. Le statut doit afficher : **✅ Actif**
3. Les détails du certificat sont affichés :
   - EMAID (identifiant de compte de mobilité électrique)
   - Date d'expiration du certificat
   - Dernière session PnC réussie (si disponible)

## Étape 6 : Test

Conduisez à un emplacement Stroomlijnen et branchez le câble. La session de charge doit démarrer dans les 5–10 secondes sans action manuelle.

**À surveiller :**
- L'affichage du chargeur indique "Plug & Charge — Vérifié" (ou similaire)
- La session apparaît dans Mijn Vloot → **Sessions** dans la minute
- Aucune action RFID ou d'application n'a été nécessaire

## Dépannage de l'installation

| Problème | Solution |
|---------|----------|
| Statut du certificat reste sur "En attente" | Assurez-vous que le camion est en ligne (contact allumé). Vérifiez le portail OEM pour les autorisations en attente. |
| Portail OEM ne montre pas Stroomlijnen | Contactez-nous — il est possible que nous devions établir la connexion backend pour votre compte OEM spécifique. |
| Certificat installé mais PnC échoue | Voir le [guide de dépannage](./troubleshooting) pour une diagnostic détaillée. |
| Erreur "EMAID non trouvé" sur le chargeur | Le certificat n'a peut-être pas encore été transmis à notre backend. Attendez 1 heure et réessayez. |
| Erreurs d'importation en masse | Vérifiez le format VIN (17 caractères, sans O/I/Q), vérifiez que la codage CSV est UTF-8. |

## Gestion des certificats

### Renouvellement
Les certificats de contrat expirent après **2 ans**. Le portail Mijn Vloot envoie des notifications par e-mail 60, 30 et 7 jours avant l'expiration. Le renouvellement est automatique si votre abonnement de flotte est actif.

### Révocation
Si un camion est vendu, volé ou mis hors service :
1. Allez à **Véhicules** → sélectionnez un véhicule → onglet **Plug & Charge**
2. Cliquez sur **Révoquer le certificat**
3. Le certificat sera immédiatement invalidé sur tous les réseaux de charge connectés

### Transfert
Lorsqu'un camion est transféré à une autre entité de facturation au sein de votre organisation :
1. Révoquez le certificat actuel
2. Enregistrez le véhicule à nouveau sous la nouvelle entité de facturation
3. Un nouveau certificat sera délivré

---

**Suivant :** [Guides de marque →](./brand-guides/volvo-trucks)