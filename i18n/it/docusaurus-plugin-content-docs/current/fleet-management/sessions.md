---
sidebar_position: 3
title: Sessioni di Ricarica
description: Monitorare e analizzare le sessioni di ricarica per la tua flotta di veicoli elettrici nel portale Stroomlijnen Mijn Vloot.
keywords: [sessioni di ricarica, monitoraggio delle sessioni, consumo di energia, storia della ricarica, analisi della flotta]
---

# Sessioni di Ricarica

Ogni volta che uno dei tuoi veicoli si ricarica in una località Stroomlijnen, viene creato un record di sessione con dati completi — energia, costi, durata, curva di potenza e metodo di autenticazione.

## Sessioni Attive

La visualizzazione **Sessioni attive** mostra tutti i veicoli che stanno attualmente ricaricando:

- **Veicolo** — Identificato tramite targa, soprannome o numero di identificazione del veicolo (VIN)
- **Località** — Nome della località di ricarica e ID specifico dell'EVSE
- **Iniziata** — Data e ora di inizio della sessione
- **Durata** — Timer in corso
- **Energia** — kWh erogati fino ad ora (aggiornato ogni 60 secondi)
- **Potenza** — Potenza di ricarica attuale in kW
- **SoC** — Livello di carica della batteria (se segnalato dal veicolo)
- **Metodo di autenticazione** — Plug & Charge, RFID o app

È possibile fare clic su ogni sessione attiva per visualizzare una **curva di potenza in tempo reale** che mostra il profilo di ricarica in tempo reale.

## Storia delle Sessioni

La visualizzazione della storia mostra tutte le sessioni completate con opzioni di filtro:

### Filtri
- **Intervallo di date** — Date personalizzate o preset (oggi, questa settimana, questo mese, ultimi 30 giorni)
- **Veicolo** — Un veicolo o un gruppo di veicoli
- **Località** — Località specifica o tutte le località
- **Metodo di autenticazione** — PnC, RFID, app o tutto
- **Energia minima** — Filtra le sessioni molto brevi

### Dettagli della Sessione

Fare clic su una sessione per visualizzare:

- **Curva di potenza completa** — Grafico di kW nel tempo, con fase di avvio, plateau e diminuzione
- **Dettagli dell'energia** — kWh totali, potenza di picco, potenza media
- **Dettagli dei costi** — Costi dell'energia (€/kWh), eventuali sovrapprezzi, costi totali
- **Dati del veicolo** — SoC all'inizio e alla fine (se segnalato), VIN, targa
- **Dati della stazione di ricarica** — ID EVSE, tipo di connettore, versione del firmware
- **CDR** — Record dettagliato della ricarica conformi a OCPI (scaricabile)

## Analisi

Il dashboard di analisi offre informazioni approfondite sulla flotta:

### Consumo di Energia
- kWh totali per giorno/settimana/mese
- Dettagli per veicolo o gruppo di veicoli
- Confronto tra periodi di tempo
- Tendenze dei costi per kWh

### Indici di Efficienza
- Energia media per sessione
- Costi medi per kWh
- Utilizzo (tempo di ricarica rispetto al tempo di inattività per veicolo)
- Modelli di picco di domanda

### Analisi della Località
- Quali località la tua flotta utilizza di più
- Tempo di attesa medio per un caricabatterie libero
- Prezzi dell'energia per località

## Notifiche

Configurare le notifiche per:

- **Sessioni non riuscite** — Una sessione che è stata avviata ma terminata in modo anormale
- **Sessioni lunghe** — Un veicolo si ricarica per più tempo di una durata impostata
- **Alti costi** — Una sessione supera una soglia di costo
- **Limite SoC** — Il livello di carica di un veicolo scende al di sotto di un minimo prima di arrivare a una stazione di ricarica

Le notifiche vengono inviate via e-mail e/o visualizzate nel dashboard Mijn Vloot.

## Esportazione e Integrazione

### Esportazione CSV
Scaricare ogni visualizzazione filtrata come file CSV. Le colonne contengono tutti i dettagli della sessione più campi calcolati come costi per kWh e durata.

### API
Recuperare i dati delle sessioni in modo programmatico:

```
GET /api/v1/sessions?start_date=2026-03-01&end_date=2026-03-31
GET /api/v1/sessions/{session_id}
GET /api/v1/sessions/active
```

### Webhook
Ricevere notifiche in tempo reale quando le sessioni vengono avviate, aggiornate o terminate:

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

Configurare i webhook tramite **Impostazioni** → **API** → **Webhook**.

## Comprendere la Curva di Potenza

Una tipica sessione di ricarica DC per un camion elettrico mostra il seguente pattern:

1. **Avvio** (0–3 min) — La potenza aumenta mentre la stazione di ricarica e il veicolo negoziano e la batteria si riscalda
2. **Plateau** (3 min – 60%+ SoC) — Potenza di ricarica massima, spesso 150–350 kW a seconda del modello del camion
3. **Diminuzione** (60%+ SoC – SoC obiettivo) — La potenza diminuisce gradualmente man mano che la batteria si carica, per proteggere la salute della cella
4. **Completamento** — La sessione termina quando raggiunge l'obiettivo SoC o quando viene interrotta manualmente

La comprensione di questa curva aiuta nella pianificazione: se è necessario caricare solo dal 20% all'80% SoC, si riceve la maggior parte dell'energia durante la fase di plateau veloce. Caricare dall'80% al 100% richiede più tempo in proporzione.