---
sidebar_position: 6
title: Gestion de puissance et raccordement au réseau
description: Explication sur la puissance de raccordement, la puissance contractuelle, le peak shaving et la charge intelligente pour les propriétaires d'immeubles.
keywords: [puissance de raccordement, puissance contractuelle, peak shaving, charge intelligente, raccordement au réseau, gestion de charge]
---

# Gestion de puissance et raccordement au réseau

Avant de placer des points de charge, il est important de comprendre comment fonctionne votre raccordement électrique et comment l'infrastructure de charge s'y adapte.

## Deux concepts à connaître

### Puissance de raccordement

La **puissance de raccordement** est la limite physique maximale que votre raccordement au réseau peut supporter — déterminée par les câbles et la station de transformation de votre gestionnaire de réseau. Il s'agit de la limite absolue.

**Typique pour un théâtre :** 400–2000 kVA (= 400–2000 kW par phase, en fonction de la taille)

### Puissance contractuelle

La **puissance contractuelle** est la puissance maximale pour laquelle vous avez un contrat avec votre gestionnaire de réseau. Vous payez une redevance fixe sur la base de cette puissance. Si vous consommez régulièrement plus, vous pouvez recevoir des pénalités ou devoir ajuster votre contrat.

La puissance contractuelle est généralement **inférieure** à la puissance de raccordement.

**Typique pour un théâtre :** 150–500 kW

---

:::tip Règle empirique
- **Puissance de raccordement** = ce que les câbles peuvent supporter (plafond)
- **Puissance contractuelle** = ce que vous avez payé pour (contrat)
- **Consommation actuelle** = ce que vous utilisez réellement (varie par heure)

En journée, vous avez généralement beaucoup d'espace entre votre consommation actuelle et votre puissance contractuelle. Cet espace peut être utilisé pour la charge.
:::

---

## Comment un chargeur DC se rapporte à votre raccordement

Un chargeur DC tire sa puissance directement et rapidement de votre raccordement. Un chargeur DC de 60 kW tire 60 kW tant qu'il est actif. C'est :

| Type de charge | Puissance | % de 270 kW contractés |
|---|---|---|
| Chargeur AC (monophasé) | 3,7–7,4 kW | 1–3% |
| Chargeur AC (triphasé) | 11–22 kW | 4–8% |
| Chargeur DC | 50–150 kW | 18–55% |
| Chargeur DC rapide (camion) | 100–350 kW | 37–130% |

Un seul chargeur DC de 150 kW sur un contrat de 270 kW prend donc plus de la moitié de votre espace contractuel. C'est parfait en journée lorsque le théâtre consomme peu — mais le soir pendant une représentation, cela peut causer des problèmes.

**La solution : peak shaving / gestion de charge**

---

## Peak shaving et charge intelligente

Le **peak shaving** (ou gestion de charge ou charge intelligente) est un système qui adapte automatiquement la puissance de charge en fonction de la puissance disponible à ce moment-là.

### Comment cela fonctionne

1. Le système mesure en continu la consommation électrique actuelle du bâtiment
2. Il calcule combien d'espace il reste sous votre puissance contractuelle
3. La borne de charge reçoit exactement autant de puissance que disponible — pas plus
4. Lorsque la salle se remplit et que la consommation augmente, la puissance de charge est automatiquement réduite
5. Lorsque la consommation diminue (par exemple après une représentation), la puissance de charge augmente à nouveau

### Résultat

- **Jamais** de dépassement de votre puissance contractuelle
- **Vitesse de charge maximale** lorsque cela est possible
- **Aucune action manuelle** nécessaire

```
Puissance contractuelle :     270 kW
Consommation du théâtre le soir :       220 kW
Disponible pour la charge :       50 kW → borne de charge à 50 kW

Consommation du théâtre en journée :      40 kW
Disponible pour la charge :      230 kW → borne de charge à 150 kW (max borne)
```

---

## Quand une extension du réseau est-elle nécessaire ?

Dans la plupart des théâtres, une extension du réseau **n'est pas** nécessaire pour un premier point de charge de 60–150 kW, à condition que le peak shaving soit installé.

L'extension du réseau devient pertinente uniquement si vous :
- Voulez exploiter plusieurs points de charge en même temps (>3 chargeurs rapides)
- Voulez réserver une capacité de puissance fixe pour la charge (par exemple pour des garanties contractuelles aux transporteurs)
- Voulez ajouter un stockage de batterie (BSS) pour une capacité tampon supplémentaire

:::note Gestionnaire de réseau
Les délais d'attente pour l'extension du réseau aux Pays-Bas sont actuellement de 5–10 ans dans de nombreuses régions. Le stockage de batterie (BSS) peut être une alternative pour surmonter le délai d'attente. Voir la [ElaadNL Outlook Logistiek](https://elaadnl.nl) pour des chiffres actualisés sur la congestion du réseau et l'infrastructure de charge.
:::

---

## Stockage de batterie comme tampon

Un système de stockage de batterie (BSS) se charge lorsque votre consommation électrique est faible, puis restitue cette énergie aux points de charge lors des pics. Cela permet des puissances de charge plus élevées sans dépasser votre raccordement au réseau.

| Scénario | Sans BSS | Avec BSS |
|---|---|---|
| Disponible en journée | 230 kW | 230 kW + tampon |
| Disponible le soir | 50 kW | 50 kW + tampon du BSS |
| Puissance de charge maximale le soir | 50 kW | 150 kW (du BSS) |