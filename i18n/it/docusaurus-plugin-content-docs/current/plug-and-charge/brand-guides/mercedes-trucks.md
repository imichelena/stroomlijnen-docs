---
sidebar_position: 3
title: Mercedes-Benz Trucks — Configurazione Plug & Charge
description: Guida passo dopo passo per l'abilitazione di Plug & Charge su camion Mercedes-Benz eActros ed eEconic tramite Fleetboard.
keywords: [Mercedes-Benz, eActros, eEconic, Fleetboard, Plug and Charge, ISO 15118, Daimler Truck]
---

# Mercedes-Benz Trucks — Configurazione Plug & Charge

Mercedes-Benz (Daimler Truck) supporta ISO 15118-2 Plug & Charge su eActros 600 ed eActros 300. L'eEconic riceverà probabilmente il supporto PnC tramite un aggiornamento OTA nel Q2 2026. La configurazione viene gestita attraverso la piattaforma Fleetboard.

## Modelli Supportati

| Modello | Opzioni di batteria | Caricamento DC massimo | PnC Pronto |
|-------|-----------|---------------|:---------:|
| eActros 600 | Fino a 621 kWh | 400 kW (MCS/CCS) | ✅ |
| eActros 300 | Fino a 336 kWh | 160 kW (CCS) | ✅ |
| eEconic | Fino a 336 kWh | 160 kW (CCS) | ⚠️ Q2 2026 |

## Requisiti

- Account Fleetboard con accesso amministratore per la gestione della flotta
- Firmware eActros con modulo eMobility (incluso di serie dal Q4 2025)
- Account Stroomlijnen con PnC abilitato ([Guida all'installazione](../setup-guide))

## Passo dopo Passo: Fleetboard

### 1. Accesso alle impostazioni eMobility

1. Accedi a [Fleetboard](https://fleetboard.com)
2. Vai a **eMobility** → **Gestione della ricarica**
3. Se utilizzi il nuovo portale **Daimler Truck Digital**, vai a **Servizi** → **Gestione della ricarica**

### 2. Aggiunta di Stroomlijnen come Fornitore

1. Nella gestione della ricarica, clicca su **Fornitori di ricarica**
2. Clicca su **Aggiungi fornitore**
3. Cerca **"Stroomlijnen B.V."** (o utilizza l'ID eMSP `NL-STM`)
4. Clicca su **Connetti**
5. Accetta le condizioni di condivisione dei dati (ID del veicolo e scambio di certificati)

### 3. Registrazione dei Veicoli per PnC

1. Vai a **Gestione della ricarica** → **Impostazioni PnC del veicolo**
2. Per ogni eActros che desideri abilitare:
   - Clicca sulla riga del veicolo
   - Imposta **Plug & Charge** su ATTIVO
   - Seleziona **Stroomlijnen** come fornitore di ricarica preferito (o uno dei molti)
3. Clicca su **Salva modifiche**

### 4. Distribuzione del Certificato

Dopo aver salvato:
1. Fleetboard avvia la richiesta di certificato a Stroomlijnen
2. Il certificato di contratto viene generato dal nostro backend
3. Viene inviato al camion tramite l'unità telematica di Daimler Truck
4. **Tempo di distribuzione tipico: 2-6 ore**
5. Il veicolo deve essere online (contatto acceso o collegato a un caricabatterie)

### 5. Verifica in Entrambi i Portali

- **Fleetboard** → eMobility → Veicolo → Stato PnC: dovrebbe visualizzare "Certificato Attivo"
- **Stroomlijnen Miei Veicoli** → Veicolo → Plug & Charge: dovrebbe visualizzare "✅ Attivo"

### 6. Prima Sessione

Collega l'eActros a un caricabatterie Stroomlijnen. Il cruscotto dell'eActros mostra lo stato di autenticazione "Plug & Charge". La ricarica dovrebbe avviarsi automaticamente entro 5-10 secondi.

## Molti Fornitori di Ricarica

Mercedes-Benz supporta più fornitori PnC contemporaneamente. Puoi avere certificati Stroomlijnen insieme a certificati di altri fornitori sullo stesso veicolo. Il camion utilizza il certificato corretto in base alla rete del caricabatterie.

## Fleetboard versus Daimler Truck Digital

Daimler Truck sta passando da Fleetboard al nuovo portale **Daimler Truck Digital**. Entrambi i portali supportano attualmente la gestione PnC:

- **Fleetboard (legacy):** Supporto PnC completo, ben documentato
- **Daimler Truck Digital (nuovo):** PnC disponibile in Servizi → Gestione della ricarica

Se si passa tra le piattaforme, le impostazioni PnC vengono trasferite automaticamente.

## Risoluzione dei Problemi

### Sezione "eMobility" non disponibile in Fleetboard
- Assicurati che il tuo abbonamento Fleetboard includa il modulo eMobility
- Il modulo eMobility è incluso in Fleetboard Premium per veicoli elettrici
- Contatta il tuo concessionario Mercedes-Benz per la verifica

### Certificato mostra "In lavorazione" per un lungo periodo
1. Assicurati che il camion sia stato online per almeno 2 ore
2. Controlla le notifiche di Fleetboard per eventuali approvazioni in sospeso
3. Verifica che l'unità telematica di Daimler Truck abbia una connessione di rete mobile (controlla l'antenna nel veicolo)
4. Contatta il supporto Stroomlijnen per la verifica del backend

### eActros 600 con connettore MCS
L'eActros 600 supporta sia CCS che MCS (Sistema di ricarica Megawatt). PnC funziona su entrambi i tipi di connettori nelle sedi Stroomlijnen. I caricabatterie MCS verranno implementati nel 2026 in sedi selezionate.

---

**Successivo:** [Altri Camion →](./other-trucks)