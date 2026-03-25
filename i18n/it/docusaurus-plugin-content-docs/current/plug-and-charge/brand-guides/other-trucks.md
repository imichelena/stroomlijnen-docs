---
sidebar_position: 6
title: Altri Marchi di Camion — Plug & Charge
description: Stato e informazioni sull'installazione di Plug & Charge per Scania, MAN, Renault Trucks, Ford Trucks, IVECO e Veicoli Commerciali VW.
keywords: [Scania, MAN, Renault Trucks, IVECO, Plug and Charge, ISO 15118, camion elettrico]
---

# Altri Marchi di Camion — Plug & Charge

Questa pagina tratta l'installazione di PnC per marche di camion che non hanno ancora una propria guida dettagliata. Man mano che l'adozione cresce, divideremo queste informazioni in guide separate.

## Scania BEV

**Modelli:** R-serie BEV, P-serie BEV
**Stato PnC:** ✅ Supportato (firmware 2025.3+)
**Portale di flotta:** Scania Fleet Management

### Passaggi di installazione

1. Accedi a [Scania Fleet Management](https://my.scania.com)
2. Vai a **Elettrificazione** → **Servizi di ricarica**
3. Clicca su **Aggiungi partner di ricarica** → cerca "Stroomlijnen"
4. Autorizza e seleziona i veicoli
5. Scania invia certificati tramite il loro gateway telematico
6. **Tempo di installazione tipico: 4–12 ore**

### Note
- Scania richiede la versione del firmware 2025.3 o successiva per il supporto completo a PnC
- I firmware più vecchi supportano la comunicazione ISO 15118 ma non l'elaborazione dei certificati di contratto
- Contatta il tuo concessionario Scania per gli aggiornamenti del firmware — gli aggiornamenti OTA per PnC verranno distribuiti gradualmente
- Il sistema telematico di Scania utilizza una connessione mobile separata dal sistema di infotainment del veicolo — assicurati che la SIM telematica sia attiva

## MAN Elettrico

**Modelli:** eTGX, eTGS, eTGL, eTGM
**Stato PnC:** ✅ Supportato su eTGX/eTGS | ⚠️ In fase di distribuzione su eTGL/eTGM
**Portale di flotta:** Piattaforma RIO

### Passaggi di installazione

1. Accedi a [RIO](https://rio.cloud)
2. Naviga in **Servizi** → **Gestione della ricarica**
3. Clicca su **Connetti partner** sotto **Partner di ricarica esterni**
4. Cerca **"Stroomlijnen B.V."** e clicca su **Autorizza**
5. Seleziona i veicoli e conferma
6. **Tempo di installazione tipico: 6–24 ore**

### Note
- La piattaforma RIO è condivisa da MAN e altri marchi TRATON
- eTGX e eTGS hanno il supporto completo a PnC dalla fine del 2025
- eTGL e eTGM riceveranno il supporto a PnC tramite aggiornamenti del firmware in fasi durante il 2026
- I certificati MAN utilizzano un modulo di sicurezza hardware (HSM) nel veicolo — ciò offre una sicurezza eccellente, ma significa che i certificati possono essere installati solo quando il modulo di sicurezza del camion è in "modalità di provisioning" (primi 30 minuti dopo l'accensione)

## Renault Trucks E-Tech

**Modelli:** E-Tech T, E-Tech D, E-Tech Master (furgone)
**Stato PnC:** ⚠️ Arriverà nel primo semestre del 2026
**Portale di flotta:** Gestione della flotta Renault Trucks

### Stato attuale
- L'hardware ISO 15118-2 è presente in E-Tech T e E-Tech D
- L'attivazione del software PnC è prevista tramite aggiornamento OTA nel primo semestre del 2026
- Renault Trucks sta eseguendo test di interoperabilità PnC con Hubject dal terzo trimestre del 2025
- Il furgone E-Tech Master non ha il supporto ISO 15118

### Cosa fare adesso
1. Assicurati che il tuo account del portale di flotta sia configurato con l'accesso dell'amministratore
2. Registra i tuoi veicoli nel portale Stroomlijnen Mijn Vloot
3. Utilizza pass RFID per la ricarica nel frattempo
4. Ti informeremo quando PnC sarà disponibile per Renault Trucks

## Ford Trucks

**Modelli:** F-MAX Elettrico
**Stato PnC:** ❌ Non supportato

### Stato attuale
- Il Ford F-MAX Elettrico (prodotto da Ford Otosan in Turchia) non supporta attualmente l'ISO 15118
- Ford Otosan ha annunciato il supporto ISO 15118 nel loro piano di modello per il 2027
- Utilizza pass RFID o l'app Stroomlijnen per la ricarica

## IVECO

**Modelli:** S-eWay
**Stato PnC:** ⚠️ Annunciato per i modelli del 2026

### Stato attuale
- IVECO ha annunciato il supporto ISO 15118-2 PnC per i camion S-eWay del modello 2026
- I modelli precedenti al 2026 non dispongono dell'hardware ISO 15118 necessario
- La conversione non è disponibile — PnC richiede moduli di comunicazione installati in fabbrica
- Utilizza pass RFID per i camion S-eWay attuali

## Veicoli Commerciali VW

**Modelli:** ID. Buzz Cargo
**Stato PnC:** ⚠️ Supporto limitato

### Stato attuale
- L'ID. Buzz Cargo supporta l'ISO 15118-2, ma PnC è gestito tramite l'ecosistema VW We Charge
- Il PnC tra provider (utilizzo di certificati Stroomlijnen con veicoli VW) è tecnicamente possibile, ma richiede una configurazione aggiuntiva
- Contatta il supporto Stroomlijnen per la configurazione PnC specifica per VW

---

:::info Il tuo marchio non trovato?
Contattaci via [info@stroomlijnen.nl](mailto:info@stroomlijnen.nl). Stiamo attivamente estendendo il supporto PnC man mano che più OEM abilitano l'ISO 15118.
:::

**Prossimo:** [Risoluzione dei problemi →](../troubleshooting)