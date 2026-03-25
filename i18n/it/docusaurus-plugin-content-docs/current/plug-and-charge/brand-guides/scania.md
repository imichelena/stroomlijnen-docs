---
sidebar_position: 4
title: Scania BEV — Configurazione Plug & Charge
description: Guida passo dopo passo per l'abilitazione di Plug & Charge su camion elettrici Scania R-serie e P-serie tramite Scania Fleet Management.
keywords: [Scania, BEV, R-series, P-series, Scania Fleet Management, Plug and Charge, ISO 15118]
---

# Scania BEV — Configurazione Plug & Charge

I camion elettrici Scania (R-serie e P-serie BEV) supportano ISO 15118-2 Plug & Charge con firmware versione 2025.3 o successiva. La gestione di PnC avviene tramite il portale Scania Fleet Management.

## Modelli Supportati

| Modello | Opzioni batteria | Caricamento DC massimo | PnC Pronto |
|-------|-----------|---------------|:---------:|
| R-serie BEV | Fino a 624 kWh | 375 kW (CCS) | ✅ (fw 2025.3+) |
| P-serie BEV | Fino a 416 kWh | 250 kW (CCS) | ✅ (fw 2025.3+) |

## Requisiti

- Account Scania Fleet Management con accesso amministratore
- Firmware del veicolo versione 2025.3 o successiva
- Account flotta Stroomlijnen con PnC abilitato ([Guida all'installazione](../setup-guide))

## Passo dopo Passo: Scania Fleet Management

### 1. Verifica Firmware

1. Accedi a [My Scania](https://my.scania.com) (Scania Fleet Management)
2. Seleziona il tuo veicolo → **Informazioni veicolo** → **Versione software**
3. Conferma la versione 2025.3 o successiva
4. Se inferiore, pianifica una visita al concessionario o controlla gli aggiornamenti OTA disponibili sotto **Manutenzione** → **Aggiornamenti software**

### 2. Abilitazione Servizi Elettrificati

1. Vai in Scania Fleet Management a **Servizi** → **Elettrificazione**
2. Se questa sezione non è visibile, il tuo abbonamento potrebbe richiedere l'aggiornamento dell'add-on Elettrificazione — contatta il concessionario Scania
3. Clicca su **Gestione partner di ricarica**

### 3. Aggiunta Stroomlijnen

1. Clicca su **Aggiungi partner**
2. Cerca "**Stroomlijnen B.V.**" o inserisci l'ID eMSP `NL-STM`
3. Clicca su **Connetti**
4. Esamina e accetta l'accordo di condivisione dei dati (identificazione del veicolo per associazione certificato)
5. Clicca su **Conferma**

### 4. Assegnazione Veicoli

1. Dopo aver connesso Stroomlijnen, clicca su **Gestisci veicoli**
2. Seleziona i camion per cui PnC deve essere abilitato
3. Clicca su **Applica**

### 5. Installazione Certificato

- La telematica gateway Scania invia il certificato di contratto al veicolo
- Il camion deve essere online (contatto acceso o collegato a un caricabatterie)
- **Tempo di installazione tipico: 4–12 ore**
- Segui lo stato di avanzamento in Scania Fleet Management → Elettrificazione → Stato certificato

### 6. Verifica

1. Controlla lo stato sia in Scania Fleet Management che in Stroomlijnen Mijn Vloot
2. Collegati a un caricabatterie Stroomlijnen per testare
3. L'autenticazione automatica dovrebbe essere completata entro 5–10 secondi

## Note Importanti

### SIM Telematica
I camion Scania hanno un modulo telematico separato con una propria connessione mobile (indipendente dal sistema di intrattenimento). Assicurati che l'abbonamento SIM telematico sia attivo — la consegna del certificato dipende da questa connessione, non dalla WiFi del camion.

### Aggiornamenti Firmware
Scania distribuisce gli aggiornamenti firmware relativi a PnC per regione. Se il tuo camion ha un firmware 2025.2 o precedente, l'aggiornamento PnC potrebbe non essere ancora disponibile tramite OTA. Il concessionario può installarlo manualmente.

### Flotte Multiple
Se i tuoi camion sono registrati con più account Scania Fleet Management (ad esempio dopo acquisizioni), ogni account deve autorizzare Stroomlijnen separatamente.

## Risoluzione dei Problemi

| Problema | Soluzione |
|---------|----------|
| "Elettrificazione" non nel menu | L'abbonamento potrebbe richiedere un aggiornamento — contatta il concessionario Scania |
| Certificato bloccato su "In elaborazione" | Verifica che il camion sia online, SIM telematico attivo, firmware ≥ 2025.3 |
| PnC fallito al caricabatterie | Riavvia il camion (ciclo di contatto completo), prova nuovamente. Controlla lo stato del certificato. |
| "Partner non trovato" durante la ricerca | Assicurati di cercare con il nome o codice corretto (NL-STM) |

---

**Successivo:** [MAN Configurazione →](./man)