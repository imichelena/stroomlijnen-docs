---
sidebar_position: 3
title: Veicoli Compatibili
description: Quali camion elettrici, furgoni e auto compatibili con Plug & Charge presso le stazioni di ricarica Stroomlijnen.
keywords: [veicoli compatibili, Plug and Charge, camion elettrici, ISO 15118, Volvo, DAF, Mercedes, Scania, MAN]
---

# Veicoli Compatibili

La compatibilità con Plug & Charge dipende dal supporto del veicolo per **ISO 15118-2** con l'elaborazione dei certificati di contratto. Di seguito è riportato lo stato attuale per i veicoli più comunemente presenti presso le sedi Stroomlijnen.

:::info Aggiornato marzo 2026
La compatibilità evolve rapidamente. Aggiorniamo questa pagina man mano che gli OEM rilasciano nuovi firmware e modelli. Se il tuo veicolo non è elencato, [contattaci](mailto:info@stroomlijnen.nl).
:::

## Camion Elettrici

| Fabbricante | Modello | Supporto PnC | Note |
|-------------|-------|:-----------:|-------|
| **Volvo** | FH Electric | ✅ | Tramite Volvo Connect. Supporto completo PnC dalla versione del firmware v3.2+ |
| **Volvo** | FM Electric | ✅ | Tramite Volvo Connect. Stessa piattaforma di FH Electric |
| **Volvo** | FE Electric | ✅ | Tramite Volvo Connect |
| **Volvo** | FL Electric | ✅ | Tramite Volvo Connect |
| **DAF** | XF Electric | ✅ | Tramite DAF Connect. Richiede attivazione da parte del gestore della flotta |
| **DAF** | XD Electric | ✅ | Tramite DAF Connect |
| **DAF** | XB Electric | ✅ | Tramite DAF Connect |
| **Mercedes-Benz** | eActros 600 | ✅ | Tramite Fleetboard. Supporto PnC disponibile dal Q4 2025 |
| **Mercedes-Benz** | eActros 300 | ✅ | Tramite Fleetboard |
| **Mercedes-Benz** | eEconic | ⚠️ | Supporto PnC tramite aggiornamento OTA previsto per il Q2 2026 |
| **Scania** | BEV R-serie | ✅ | Tramite Scania Fleet Management. Firmware 2025.3+ |
| **Scania** | BEV P-serie | ✅ | Tramite Scania Fleet Management |
| **MAN** | eTGX | ✅ | Tramite piattaforma RIO. Supporto completo PnC dalla fine del 2025 |
| **MAN** | eTGS | ✅ | Tramite piattaforma RIO |
| **MAN** | eTGL/eTGM | ⚠️ | Distribuzione del supporto PnC in corso, consultare il concessionario |
| **Renault Trucks** | E-Tech T | ⚠️ | Hardware ISO 15118-2 presente, attivazione del supporto PnC tramite OTA prevista per il H1 2026 |
| **Renault Trucks** | E-Tech D | ⚠️ | Stessa situazione di E-Tech T |
| **Ford Trucks** | F-MAX Electric | ❌ | ISO 15118 non supportato. Solo RFID/app |
| **IVECO** | S-eWay | ⚠️ | Supporto PnC annunciato per i modelli del 2026 |

### Legenda

- ✅ **Supportato** — Il supporto PnC funziona oggi presso le stazioni di ricarica Stroomlijnen
- ⚠️ **Prossimamente** — Hardware idoneo, in attesa dell'aggiornamento software
- ❌ **Non supportato** — Utilizzare il pass RFID o l'app

## Furgoni Elettrici

| Fabbricante | Modello | Supporto PnC | Note |
|-------------|-------|:-----------:|-------|
| **Mercedes-Benz** | eSprinter | ✅ | ISO 15118-2 dal model year 2025 |
| **Mercedes-Benz** | eVito | ✅ | ISO 15118-2 dal model year 2025 |
| **Volvo** | EM90 | ✅ | Tramite Volvo Connect |
| **Ford** | E-Transit | ⚠️ | Hardware idoneo, attivazione del supporto PnC varia per mercato |
| **MAN** | eTGE | ⚠️ | Supporto PnC limitato, consultare il concessionario |
| **Renault** | Master E-Tech | ❌ | Solo RFID/app |
| **VW** | ID. Buzz Cargo | ⚠️ | Supporto PnC tramite backend VW, richiede contratto Volkswagen We Charge |
| **Fiat** | E-Ducato | ❌ | Nessun supporto ISO 15118 |
| **Maxus** | eDeliver 7 | ❌ | Nessun supporto ISO 15118 |

## Auto (CCS DC)

Sebbene le stazioni di ricarica Stroomlijnen siano progettate per veicoli commerciali, anche le auto con spine CCS possono ricaricare presso le nostre stazioni. Supporto PnC:

| Fabbricante | Supporto PnC | Note |
|-------------|:-----------:|-------|
| **BMW** | ✅ | i4, iX, i5, i7 — tramite BMW Charging |
| **Mercedes-Benz** | ✅ | EQS, EQE, EQA, EQB — tramite Mercedes me Charge |
| **Porsche** | ✅ | Taycan, Macan Electric — tramite Porsche Charging Service |
| **Audi** | ✅ | e-tron GT, Q6 e-tron, Q8 e-tron — tramite myAudi |
| **VW** | ⚠️ | ID.-serie — tramite Volkswagen We Charge, distribuzione in corso |
| **Hyundai/Kia** | ⚠️ | Ioniq 5/6, EV6/9 — supporto PnC varia per mercato e firmware |
| **Tesla** | ❌ | Utilizza il proprio Supercharger PnC, CCS PnC non supportato |
| **Marchi Stellantis** | ❌ | Nessun supporto ISO 15118 PnC sui modelli attuali |

:::tip
Anche senza il supporto PnC, tutti i veicoli con una spina **CCS Combo 2** possono ricaricare presso le stazioni di ricarica Stroomlijnen tramite un pass RFID o l'app Stroomlijnen. Il supporto PnC semplicemente rimuove la necessità di autenticazione manuale.
:::

## Controllare il Tuo Veicolo

1. **Controlla il portale OEM** — Volvo Connect, DAF Connect, Fleetboard, RIO o Scania Fleet Management mostra le impostazioni "Plug & Charge" o "ISO 15118"
2. **Controlla la versione del firmware** — Assicurati che il tuo veicolo abbia l'ultima versione del firmware (vedi [guide specifiche per marca](./brand-guides/volvo-trucks))
3. **Contatta il concessionario** — Possono confermare la possibilità ISO 15118 e installare i certificati se necessario
4. **Contatta Stroomlijnen** — Possiamo controllare la compatibilità quando ti registri nel nostro portale

## Il Tuo Veicolo Non è Elencato?

Se il tuo camion o furgone non è elencato, potrebbe comunque funzionare. Nuovi modelli e aggiornamenti del firmware vengono rilasciati regolarmente. Contattaci via [info@stroomlijnen.nl](mailto:info@stroomlijnen.nl) con il marchio, modello e numero di telaio del tuo veicolo, e verificheremo.

---

**Prossimo:** [Guida all'installazione →](./setup-guide)