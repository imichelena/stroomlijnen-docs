---
sidebar_position: 7
title: Veicoli per Passeggieri — Plug & Charge
description: Come funziona Plug & Charge per veicoli per passeggieri nelle stazioni di ricarica Stroomlijnen — BMW, Mercedes, Porsche, Audi, VW e altri.
keywords: [veicoli per passeggieri, Plug and Charge, BMW, Mercedes, Porsche, Audi, VW, CCS, auto elettrica]
---

# Veicoli per Passeggieri — Plug & Charge

Sebbene le stazioni di ricarica Stroomlijnen siano progettate per veicoli commerciali, i veicoli per passeggieri con connettori CCS possono anche ricaricare alle nostre stazioni. Molti veicoli elettrici moderni supportano già Plug & Charge.

## Come Funziona per Veicoli per Passeggieri

Plug & Charge per veicoli per passeggieri funziona nello stesso modo dei camion — il veicolo presenta un certificato di contratto digitale tramite ISO 15118, e il caricabatterie autentica automaticamente.

La differenza sta in **come il certificato arriva nell'auto**:
- Le auto ricevono i certificati PnC generalmente attraverso il servizio di ricarica del fabbricante (BMW Charging, Mercedes me Charge, ecc.)
- Il certificato PnC dell'auto può essere collegato all'eMSP del fabbricante, non direttamente a Stroomlijnen
- Il roaming tramite Hubject consente il Plug & Charge cross-network — il certificato dell'auto funziona presso Stroomlijnen tramite roaming

## Marche Supportate

| Marca | Metodo PnC | Funziona con Stroomlijnen |
|------|-------------|:----------------------:|
| **BMW** | BMW Charging / Hubject | ✅ Via roaming |
| **Mercedes-Benz** | Mercedes me Charge / Hubject | ✅ Via roaming |
| **Porsche** | Porsche Charging Service / Hubject | ✅ Via roaming |
| **Audi** | myAudi / Hubject | ✅ Via roaming |
| **VW** | Volkswagen We Charge | ⚠️ Rollout in corso |
| **Hyundai** | Hyundai Bluelink | ⚠️ Dipende dal mercato |
| **Kia** | Kia Connect | ⚠️ Dipende dal mercato |
| **Tesla** | Supercharger PnC proprietario | ❌ Non tramite ISO 15118 |
| **Stellantis** | — | ❌ Non ancora supportato |

### Come Funziona il Roaming PnC

1. Attivate PnC nell'app del fabbricante del vostro veicolo (ad esempio, BMW Charging nell'app My BMW)
2. Il fabbricante installa un certificato di contratto nel vostro veicolo
3. Quando si collega a una stazione di ricarica Stroomlijnen, il veicolo presenta il suo certificato
4. La nostra stazione di ricarica valida il certificato tramite la pool di certificati di Hubject
5. La sessione viene autorizzata e fatturata tramite il servizio di ricarica del fabbricante
6. Vedrete la sessione nell'app del fabbricante (e noi la vediamo nel nostro backend)

**Attenzione ai prezzi:** quando si carica tramite roaming PnC, si applica il prezzo dell'eMSP (ad esempio, i prezzi di BMW Charging), non i prezzi di Stroomlijnen. Per ottenere i migliori prezzi nelle località Stroomlijnen, potreste considerare di richiedere un account di flotta diretto.

## Plug & Charge Diretto per Veicoli per Passeggieri

Se gestite una flotta di veicoli per passeggieri (ad esempio, auto aziendali), potete configurare il Plug & Charge diretto Stroomlijnen:

1. Registrate i veicoli in Miei Veicoli (stessa procedura dei camion)
2. Abilitate PnC per ogni veicolo
3. Per le marche supportate (BMW, Mercedes, Audi), il nostro CPS spinge i certificati tramite la backend OEM
4. Riceverete i prezzi di flotta diretti di Stroomlijnen al posto dei prezzi di roaming

Ciò è particolarmente utile per le flotte aziendali in cui la gestione dei costi è importante.

## Note Pratiche

### Compatibilità Fisica
Le stazioni Stroomlijnen sono progettate per camion. Quando si carica un veicolo per passeggieri:
- Parcheggiate in un parcheggio designato per auto, se disponibile
- Il cavo CCS può essere più pesante rispetto alle stazioni di ricarica standard per auto (progettate per connessioni camion)
- La lunghezza del cavo è sufficiente — i nostri cavi sono lunghi 5 m o più

### Velocità di Ricarica
Le nostre stazioni di ricarica forniscono fino a 400 kW, ma la vostra auto caricherà solo ciò che può gestire. Un veicolo per passeggieri medio caricherà a 50-250 kW a seconda del modello e dello stato della batteria.

### Trovare Località Amichevoli per le Auto
Cercate nell'app Stroomlijnen o sulla mappa località che siano indicate con sia un simbolo di camion che un simbolo di auto. Alcune località hanno parcheggi designati per auto con supporti per cavi più bassi.