---
sidebar_position: 10
title: CPO, eMSP e roaming spiegato
description: Cos'è un CPO e un eMSP, come funziona il roaming tra le reti di ricarica e quali protocolli vengono utilizzati?
keywords: [CPO, eMSP, roaming, OCPI, OCPP, rete di ricarica, interoperabilità, carta di ricarica]
---

# CPO, eMSP e roaming spiegato

Il mondo della ricarica elettrica ha un proprio gergo. Questa pagina spiega i concetti e i ruoli più importanti.

## I due ruoli nel sistema di ricarica

### CPO — Operatore di punti di ricarica

Un **CPO** gestisce l'infrastruttura di ricarica fisica. Il CPO è responsabile di:

- Installazione e manutenzione dei punti di ricarica
- Comunicazione tra punto di ricarica e backoffice (via OCPP)
- Autorizzazione delle sessioni di ricarica
- Misurazione e fatturazione dell'energia fornita
- Servizio di assistenza e monitoraggio

Un CPO gestisce punti di ricarica in una o più località. Come proprietario di un immobile, avete un contratto con un CPO.

---

### eMSP — Fornitore di servizi di mobilità elettrica

Un **eMSP** fornisce servizi all'utente finale (guidatore/gestore della flotta):

- Emissione di carte di ricarica (RFID) o app
- Accesso roaming ai punti di ricarica di diversi CPO
- Fatturazione mensile per tutte le sessioni di ricarica
- Servizio clienti

Un gestore della flotta ha un contratto con un eMSP. I suoi guidatori possono quindi ricaricare presso tutti i punti di ricarica collegati via roaming.

:::nota Un'azienda può avere entrambi i ruoli
Alcuni fornitori sono sia CPO che eMSP. Ciò significa che gestiscono sia i punti di ricarica che emettono carte di ricarica. Esempi: Vattenfall, Shell Recharge, Allego, Eneco.
:::

---

## OCPP — il protocollo tra punto di ricarica e backoffice

**OCPP (Open Charge Point Protocol)** è lo standard internazionale aperto per la comunicazione tra un punto di ricarica e il sistema di gestione (backoffice) del CPO.

| Versione | Stato | Caratteristiche |
|---|---|---|
| OCPP 1.6 | Diffuso, installazioni più vecchie | Funzionalità di base |
| OCPP 2.0.1 | Standard attuale | Ricarica intelligente, V2G, maggiore sicurezza |
| OCPP 2.1 | In sviluppo | MCS, V2G esteso |

**Perché OCPP è importante per i proprietari di immobili:** un punto di ricarica che supporta OCPP non è vincolato a un solo CPO. È possibile cambiare CPO senza sostituire il hardware.

---

## OCPI — il protocollo per il roaming

**OCPI (Open Charge Point Interface)** è il protocollo con cui i CPO e gli eMSP comunicano tra loro. Consente il roaming: un guidatore con una carta di un eMSP A può ricaricare presso un punto di ricarica di un CPO B, e entrambe le parti regolano automaticamente la sessione.

```
Guidatore (carta eMSP A)
        ↓
Punto di ricarica (CPO B)
        ↓ Collegamento OCPI
Backoffice CPO B → Backoffice eMSP A
        ↓
Fattura al gestore della flotta
```

Più CPO ed eMSP sono collegati via OCPI, più ampio è il network a cui un guidatore ha accesso.

---

## Roaming nella pratica

In Olanda, la maggior parte dei grandi CPO è connessa tramite hub di roaming. Gli hub più grandi sono:

| Hub | Ruolo |
|---|---|
| **Gireve** | Hub di roaming europeo, molti grandi network |
| **Hubject** | Roaming Plug & Charge (ISO 15118) |
| **e-Laad** | Gestori di rete olandesi (Nuon, Stedin ecc.) |

Una carta di ricarica di un eMSP olandese funziona generalmente su oltre 300.000 punti di ricarica in Europa tramite questi hub.

---

## Cosa significa questo per te come proprietario di immobili?

Se fate installare un punto di ricarica da un CPO connesso a reti di roaming, **tutti i guidatori con una carta di ricarica valida** possono ricaricare presso il vostro punto — non solo i clienti di quel CPO.

**Chiedete al momento della selezione di un CPO:**
- "Attraverso quali reti di roaming sono accessibili i vostri punti di ricarica?"
- "Funzionano le carte di ricarica di Vattenfall, Shell Recharge e Allego presso i vostri punti?"

---

## Risorse rilevanti

| Organizzazione | Link |
|---|---|
| Open Charge Alliance (OCPP/OCPI) | [openchargealliance.org](https://openchargealliance.org) |
| ElaadNL (standard tecnici NL) | [elaadnl.nl](https://elaadnl.nl) |
| Gireve (hub di roaming) | [gireve.com](https://gireve.com) |
| Hubject (Plug & Charge) | [hubject.com](https://hubject.com) |
| NAL (Agenda Nazionale per l'Infrastruttura di Ricarica) | [agendalaadinfrastructuur.nl](https://agendalaadinfrastructuur.nl) |