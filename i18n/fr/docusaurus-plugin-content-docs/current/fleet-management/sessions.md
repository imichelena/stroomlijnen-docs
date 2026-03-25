---
sidebar_position: 3
title: Sessions de charge
description: Surveillez et analysez les sessions de charge pour votre flotte électrique sur le portail Stroomlijnen Mijn Vloot.
keywords: [sessions de charge, surveillance des sessions, consommation d'énergie, historique de charge, analyses de flotte]
---

# Sessions de charge

Chaque fois qu'un de vos véhicules se charge dans un emplacement Stroomlijnen, un enregistrement de session est créé avec des données complètes — énergie, coûts, durée, courbe de puissance et méthode d'authentification.

## Sessions actives

L'affichage **Sessions actives** montre tous les véhicules qui se chargent actuellement :

- **Véhicule** — Identifié par son numéro d'immatriculation, surnom ou VIN
- **Emplacement** — Nom de l'emplacement de charge et ID EVSE spécifique
- **Démarrage** — Date et heure de début de la session
- **Durée** — Minuteur en cours
- **Énergie** — kWh livrés jusqu'à présent (mis à jour toutes les 60 secondes)
- **Puissance** — Puissance de charge actuelle en kW
- **SoC** — Niveau de charge de la batterie (si rapporté par le véhicule)
- **Méthode d'authentification** — Charge et décharge, RFID ou application

Vous pouvez cliquer sur chaque session active pour afficher une **courbe de puissance en temps réel** qui montre le profil de charge en temps réel.

## Historique des sessions

L'affichage historique montre toutes les sessions terminées avec des options de filtrage :

### Filtres
- **Plage de dates** — Dates personnalisées ou préréglages (aujourd'hui, cette semaine, ce mois, 30 derniers jours)
- **Véhicule** — Un véhicule ou un groupe de véhicules
- **Emplacement** — Emplacement spécifique ou tous les emplacements
- **Méthode d'authentification** — PnC, RFID, application ou tout
- **Énergie minimale** — Filtre les sessions très courtes

### Détails de la session

Cliquez sur une session pour voir :

- **Courbe de puissance complète** — Graphique de kW dans le temps, avec démarrage, plateau et diminution
- **Décomposition de l'énergie** — kWh total, puissance de pointe, puissance moyenne
- **Décomposition des coûts** — Coûts d'énergie (€/kWh), éventuelles majorations, coûts totaux
- **Données du véhicule** — SoC au début et à la fin (si rapporté), VIN, numéro d'immatriculation
- **Données de la charge** — ID EVSE, type de connecteur, version du firmware
- **CDR** — Enregistrement de détail de charge conforme à OCPI (téléchargeable)

## Analyses

Le tableau de bord d'analyse offre des informations sur l'ensemble de la flotte :

### Consommation d'énergie
- kWh total par jour/semaine/mois
- Décomposition par véhicule ou groupe de véhicules
- Comparaison sur les périodes
- Tendances des coûts par kWh

### Indicateurs d'efficacité
- Énergie moyenne par session
- Coûts moyens par kWh
- Taux d'occupation (temps de charge versus temps d'arrêt par véhicule)
- Modèles de demande de pointe

### Analyse des emplacements
- Quels emplacements votre flotte utilise le plus
- Temps d'attente moyen pour un chargeur libre
- Prix de l'énergie par emplacement

## Notifications

Configurez les notifications pour :

- **Sessions échouées** — Une session qui a démarré mais s'est terminée de manière anormale
- **Sessions longues** — Un véhicule se charge plus longtemps qu'une durée définie
- **Coûts élevés** — Une session dépasse un seuil de coût
- **Seuil SoC** — Le niveau de charge d'un véhicule est inférieur à un minimum avant d'arriver à un chargeur

Les notifications sont envoyées par e-mail et/ou affichées dans le tableau de bord Mijn Vloot.

## Exportation et intégration

### Exportation CSV
Téléchargez chaque vue filtrée sous forme de fichier CSV. Les colonnes contiennent tous les détails de la session ainsi que des champs calculés tels que les coûts par kWh et la durée.

### API
Récupérez les données de session de manière programmatique :

```
GET /api/v1/sessions?start_date=2026-03-01&end_date=2026-03-31
GET /api/v1/sessions/{session_id}
GET /api/v1/sessions/active
```

### Webhooks
Recevez des notifications en temps réel lorsque les sessions commencent, sont mises à jour ou se terminent :

```json
{
  "event": "session.completed",
  "session_id": "ses_abc123",
  "vehicle_vin": "YV2RT60A1PB123456",
  "energy_kwh": 287.4,
  "cost_eur": 34.49,
  "duration_minutes": 142,
  "location": "Theater De Flint, Amersfoort"
}
```

Configurez les webhooks via **Paramètres** → **API** → **Webhooks**.

## Comprendre la courbe de puissance

Une session de charge DC typique pour un camion électrique présente le modèle suivant :

1. **Démarrage** (0–3 min) — La puissance augmente pendant que le chargeur et le véhicule négocient et que la batterie est préchauffée
2. **Plateau** (3 min – 60%+ SoC) — Puissance de charge maximale, souvent 150–350 kW en fonction du modèle de camion
3. **Diminution** (60%+ SoC – SoC cible) — La puissance diminue progressivement à mesure que la batterie se remplit, pour protéger la santé des cellules
4. **Terminaison** — La session se termine au SoC cible ou lorsqu'elle est arrêtée manuellement

Comprendre cette courbe aide à planifier : si vous n'avez besoin de charger qu'à 20 % – 80 % SoC, vous recevez la majeure partie de l'énergie pendant la phase de plateau rapide. Charger de 80–100 % prend beaucoup plus de temps.