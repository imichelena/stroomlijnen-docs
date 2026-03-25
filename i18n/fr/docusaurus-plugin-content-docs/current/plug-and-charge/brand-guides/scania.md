---
sidebar_position: 4
title: Scania BEV — Configuration de Plug & Charge
description: Guide étape par étape pour activer Plug & Charge sur les camions électriques Scania R-serie et P-serie via Scania Fleet Management.
keywords: [Scania, BEV, R-series, P-series, Scania Fleet Management, Plug and Charge, ISO 15118]
---

# Scania BEV — Configuration de Plug & Charge

Les camions électriques Scania (R-serie et P-serie BEV) prennent en charge l'ISO 15118-2 Plug & Charge avec la version de firmware 2025.3 ou supérieure. La gestion de PnC est effectuée via le portail Scania Fleet Management.

## Modèles pris en charge

| Modèle | Options de batterie | Charge DC maximale | Prêt pour PnC |
|-------|-----------|---------------|:---------:|
| R-serie BEV | Jusqu'à 624 kWh | 375 kW (CCS) | ✅ (fw 2025.3+) |
| P-serie BEV | Jusqu'à 416 kWh | 250 kW (CCS) | ✅ (fw 2025.3+) |

## Exigences

- Compte Scania Fleet Management avec accès administrateur
- Version du firmware du camion 2025.3 ou supérieure
- Compte de flotte Stroomlijnen avec PnC activé ([Guide d'installation](../setup-guide))

## Étape par étape : Scania Fleet Management

### 1. Vérification de la version du firmware

1. Connectez-vous à [My Scania](https://my.scania.com) (Scania Fleet Management)
2. Sélectionnez votre véhicule → **Informations sur le véhicule** → **Version du logiciel**
3. Confirmez la version 2025.3 ou supérieure
4. Si inférieure, planifiez une visite chez un concessionnaire ou vérifiez les mises à jour OTA disponibles sous **Entretien** → **Mises à jour de logiciel**

### 2. Activation des services d'électrification

1. Accédez à **Services** → **Électrification** dans Scania Fleet Management
2. Si cette section n'est pas visible, votre abonnement peut nécessiter la mise à niveau de l'add-on Électrification — contactez votre concessionnaire Scania
3. Cliquez sur **Gestion des partenaires de charge**

### 3. Ajout de Stroomlijnen

1. Cliquez sur **Ajouter un partenaire**
2. Recherchez **"Stroomlijnen B.V."** ou entrez l'ID eMSP `NL-STM`
3. Cliquez sur **Se connecter**
4. Examinez et acceptez l'accord de partage de données (identification du véhicule pour l'association de certificat)
5. Cliquez sur **Confirmer**

### 4. Affectation des véhicules

1. Après avoir connecté Stroomlijnen, cliquez sur **Gérer les véhicules**
2. Sélectionnez les camions pour lesquels PnC doit être activé
3. Cliquez sur **Appliquer**

### 5. Installation du certificat

- La passerelle de télémétrie Scania pousse le certificat de contrat vers le véhicule
- Le camion doit être en ligne (contact allumé ou connecté à un chargeur)
- **Temps d'installation typique : 4–12 heures**
- Suivez la progression dans Scania Fleet Management → Électrification → Statut du certificat

### 6. Vérification

1. Vérifiez le statut à la fois dans Scania Fleet Management et Stroomlijnen Mijn Vloot
2. Branchez-vous à un chargeur Stroomlijnen pour tester
3. L'authentification automatique devrait être terminée dans les 5–10 secondes

## Remarques importantes

### SIM de télémétrie
Les camions Scania disposent d'un module de télémétrie distinct avec une connexion mobile propre (indépendante du système d'information). Assurez-vous que l'abonnement SIM de télémétrie est actif — la livraison de certificat dépend de cette connexion, et non de la WiFi du camion.

### Mises à jour de firmware
Scania déploie des mises à jour de firmware liées à PnC par région. Si votre camion dispose d'une version de firmware 2025.2 ou antérieure, la mise à jour PnC peut ne pas être disponible via OTA. Votre concessionnaire peut l'installer manuellement.

### Flottes multiples
Si vos camions sont enregistrés auprès de plusieurs comptes Scania Fleet Management (par exemple, après des acquisitions), chaque compte doit autoriser Stroomlijnen séparément.

## Dépannage

| Problème | Solution |
|---------|----------|
| "Électrification" non visible dans le menu | L'abonnement peut nécessiter une mise à niveau — contactez votre concessionnaire Scania |
| Certificat bloqué sur "En traitement" | Vérifiez que le camion est en ligne, que la SIM de télémétrie est active, que la version du firmware est ≥ 2025.3 |
| Échec de PnC au chargeur | Redémarrez le camion (cycle de contact complet), réessayez. Vérifiez le statut du certificat. |
| "Partenaire non trouvé" lors de la recherche | Assurez-vous de rechercher avec le nom ou le code correct (NL-STM) |

---

**Suivant :** [MAN Configuration →](./man)