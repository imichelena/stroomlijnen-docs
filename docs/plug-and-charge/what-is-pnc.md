---
sidebar_position: 1
title: Wat is Plug & Charge?
description: "Wanneer een Plug & Charge-compatibele vrachtwagen aansluit op onze lader, start de facturering automatisch — geen pas, geen app, geen actie van de bestuurder nodig."
keywords: [Plug and Charge, ISO 15118, automatic charging, electric truck, fleet charging, PnC]
---

# Wat is Plug & Charge?

**Wanneer een Plug & Charge-compatibele vrachtwagen aansluit op onze lader, start de facturering automatisch — geen pas, geen app, geen actie van de bestuurder nodig.**

Dat is alles. Insteken, weglopen, terugkomen bij een opgeladen vrachtwagen. De lader en vrachtwagen regelen authenticatie, autorisatie en facturering onderling.

## Het Probleem dat Plug & Charge Oplost

Op dit moment vereisen de meeste laadsessies dat de bestuurder:
1. De juiste pas of app bij zich heeft
2. Weet welk netwerk deze lader beheert
3. Een pas tikt, een QR-code scant of een sessie start in een app
4. Wacht op autorisatie
5. Dan pas insteekt

Voor een personenautobezitter die één keer per week laadt, is dit lichte wrijving. Voor een vloot met 20 vrachtwagens met meerdere bestuurders over diensten heen is het een operationele last:

- Bestuurders vergeten passen
- Passen raken kwijt of beschadigd
- Nieuwe bestuurders moeten worden ingewerkt
- Verschillende ladernetwerken vereisen verschillende apps
- Gedeelde voertuigen vereisen gedeelde passen (veiligheidsrisico)
- Elke mislukte authenticatie is verloren laadtijd

### De Werkelijke Kosten van Wrijving

Voor een vloot van 20 elektrische vrachtwagens:
- Gemiddeld **3 minuten** per sessie aan authenticatiegedoe
- Gemiddeld **2 laadsessies** per vrachtwagen per dag
- Dat is **120 minuten per dag** — twee uur bestuurdersstijd verspild aan passen tikken
- Bij €35/uur volledig belaste bestuurderkosten: **€1.225/maand** aan verloren productiviteit
- Plus mislukte sessies, ondersteuningsoproepen en gefrustreerde bestuurders

## Hoe Plug & Charge Dit Oplost

Met Plug & Charge:
1. De bestuurder steekt de kabel in
2. **Klaar.**

Het boordcertificaat van de vrachtwagen regelt alles. De lader weet wie u bent, bij welke vloot u hoort en waar de factuur naartoe moet — alles cryptografisch uitgewisseld in minder dan 5 seconden.

Geen passen om kwijt te raken. Geen apps om te installeren. Geen training nodig. Geen verschil tussen een bestuurder van dag één en een veteraan van 10 jaar.

## Wie Kan Het Gebruiken?

Plug & Charge vereist:

1. **Een compatibel voertuig** — de vrachtwagen of bestelwagen moet ISO 15118-2 of hoger ondersteunen. Zie onze lijst met [Compatibele voertuigen](/docs/plug-and-charge/compatible-vehicles).
2. **Een compatibele lader** — moet ISO 15118 ondersteunen en verbonden zijn met een Plug & Charge-ecosysteem. Alle Stroomlijnen-laders ondersteunen dit.
3. **Certificaatprovisioning** — uw voertuig heeft een contractcertificaat nodig. Wij regelen dit via ons portaal.

## Is Het Veilig?

Ja. Plug & Charge gebruikt hetzelfde type cryptografie dat internetbankieren beveiligt:

- **X.509-certificaten** — elk voertuig heeft een uniek digitaal certificaat
- **PKI (Public Key Infrastructure)** — een vertrouwensketen van het voertuig tot de eMSP
- **TLS-versleuteling** — alle communicatie tussen voertuig en lader is versleuteld
- **Geen gevoelige gegevens blootgesteld** — de kabel draagt versleutelde certificaatgegevens, geen rekeningnummers

Een gestolen voertuig kan op afstand worden uitgeschakeld door het certificaat in te trekken. Een RFID-pas daarentegen werkt totdat iemand opmerkt dat hij verdwenen is.

:::info
Plug & Charge is **veiliger** dan RFID-passen. Passen kunnen worden gekloond (hoewel moderne passen dit moeilijk maken). Certificaten niet — ze gebruiken asymmetrische cryptografie met 256-bit sleutels.
:::

## De Business Case

Voor vlootbeheerders is Plug & Charge niet alleen handig — het is een kostenbesparing:

| Factor | RFID | Plug & Charge |
|--------|------|---------------|
| Bestuurdersstijd per sessie | 2–5 minuten | 0 minuten |
| Beheeroverhead voor passen | Hoog | Geen |
| Risico op verlies/diefstal | Reëel | N.v.t. |
| Inwerkproces nieuwe bestuurder | Pas uitreiken, proces uitleggen | "Gewoon insteken" |
| Voertuigen met meerdere diensten | Passen delen (risicovol) | Automatisch per voertuig |
| Maandelijkse beheertijd | Uren | Minuten |

## Aan de Slag

Klaar om Plug & Charge in te stellen voor uw vloot?

1. **[Controleer voertuigcompatibiliteit](/docs/plug-and-charge/compatible-vehicles)** — ondersteunt uw vrachtwagen het?
2. **[Begrijp hoe het werkt](/docs/plug-and-charge/how-it-works)** — de technologie erachter
3. **[Stel het in](/docs/plug-and-charge/setup-guide)** — stap voor stap in ons portaal
4. **[Merkspecifieke handleidingen](/docs/plug-and-charge/brand-guides/volvo-trucks)** — gedetailleerde instructies per fabrikant
