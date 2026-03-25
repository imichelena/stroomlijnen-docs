---
sidebar_position: 1
title: Podróże elektryczne — co należy wiedzieć
description: Praktyczny przewodnik dla kierowców, którzy podróżują samochodem elektrycznym. Od zasięgu po zarządzanie ładowaniem w trasie.
keywords: [podróże elektryczne, kierowca, zasięg, OBC, strategia ładowania, szybkie ładowanie, ciężarówka, furgon]
---

# Podróże elektryczne — co należy wiedzieć

Praktyczny przewodnik dla kierowców, którzy podróżują samochodem elektrycznym. Główna zasada jest prosta: **ładuj, gdy stoisz, a nie gdy jedziesz**.

---

## Pojazd

### Zasięg decyduje o wszystkim

Zasięg Twojego pojazdu decyduje o tym, czy możesz dojechać z punktu A do punktu B bez postoju. Oto kilka ogólnych wskazówek dla Polski:

- **Samochód osobowy z dużym pakietem akumulatorów** (np. 77+ kWh): z Warszawy możesz dojechać do większości teatrów i wrócić w ciągu jednego ładowania
- **Furgon**: jest to praktycznie niemożliwe na jeden akumulator — ładowanie w trasie jest nieuniknione
- **Ciężarówka**: zależy od trasy i ładunku, ale ładowanie w teatrze jest kluczowe

### Zasięg WLTP a rzeczywistość

Oficjalny zasięg WLTP oparty jest na mieszanym użytkowaniu i nie jest dobrym miernikiem dla stałej jazdy po autostradzie.

| Prędkość | Zużycie w stosunku do WLTP | Skuteczny zasięg |
|---|---|---|
| 90 km/h | ~100% | Zasięg WLTP jest osiągalny |
| 100 km/h | ~110% | ~10% mniejszy zasięg |
| 120 km/h | ~150% | ~30% mniejszy zasięg |

**Przykład praktyczny (Kia e-Soul, WLTP 452 km):**
- Przy 90 km/h: ~450 km jest osiągalne
- Przy 120 km/h: ~300 km w praktyce
- Zasada przy średniej prędkości 100 km/h: licz na ~330 km

Temperatura i wiatr zmniejszają zasięg. Zawsze licz z marginesem.

### OBC — ładowarka pokładowa

**OBC (On Board Charger)** to wbudowana ładowarka pojazdu. Określa, jak szybko możesz ładować przy standardowej słupie ładowania. Jest to najwolniejszy element w łańcuchu.

| Moc OBC | Czas potrzebny do naładowania 60 kWh |
|---|---|
| 3 kW | ~20 godzin |
| 7 kW | ~8,5 godziny |
| 11 kW | ~5,5 godziny |
| 22 kW | ~2,75 godziny |

:::warning
Ładowarka OBC o mocy 11 kW ładuje maksymalnie z prędkością 11 kW, nawet jeśli słup ładowania może dostarczyć więcej. OBC jest ogranicznikiem przy ładowaniu AC.
:::

Prawie wszystkie pojazdy z prawem jazdy kategorii B (samochody osobowe, furgony) mają ograniczoną ładowarkę OBC — to już było tak w przypadku diesla (prąd do budowy), ale w przypadku elektrycznych jest to jeszcze bardziej istotne.

---

## Ładowarki

### Ładowarki AC (słupy publiczne, ładowarka domowa)

Ładowarki AC dostarczają prąd zmienny do pojazdu — OBC przekształca go w prąd stały dla baterii.

- **Moc:** 3,7–22 kW (w zależności od słupa i OBC)
- **Lokalizacje:** publiczne słupy ładowania na ulicach, przy firmach, w teatrach
- **Cena:** relatywnie niska (0,25–0,45 zł/kWh)
- **Wada:** wolne, a coraz więcej słupów ogranicza moc ładowania podczas wieczornych zatorów (16:00–22:00) lub w ogóle nie dostarczają prądu

:::warning Zatory wieczorne
Wiele publicznych słupów ładowania ogranicza moc ładowania lub całkowicie przestaje działać między 16:00 a 22:00 z powodu zatorów sieciowych. Jeśli liczyłeś na pełny akumulator rano, ale słup prawie w ogóle nie ładował przez 6 godzin — to możesz być zaskoczony.
:::

:::note Kary za parkowanie
Przy wielu słupach ładowania obowiązują already kary za pozostawienie samochodu po pełnym naładowaniu. Ustaw powiadomienie w aplikacji.
:::

### Ładowarki DC (szybkie ładowanie)

Ładowarki DC przekształcają prąd i ładują bezpośrednio baterię — bez OBC. Bardzo szybciej.

- **Moc:** 20–350+ kW
- **Cena:** do 4-krotnie wyższa niż cena słupa AC (0,60–0,90 zł/kWh na publicznych szybkich ładowarkach)
- **Lokalizacje dla samochodów osobowych i furgonów:** Fastned, Shell Recharge, Allego itd.
- **Lokalizacje dla ciężarówek:** ~100 publicznych placów ładowania w Polsce (do znalezienia za pomocą [Chargemap](https://chargemap.com) lub [Truckcharging od Volvo](https://truckscharging.com))

:::warning Ciężarówki nie mogą korzystać z szybkich ładowarek
Ciężarówki nie są akceptowane na szybkich ładowarkach Fastned, Shell Recharge i podobnych. Są one przeznaczone do specjalnych placów ładowania dla ciężarówek.
:::

### Zabranie własnej ładowarki

Zabranie własnej ładowarki (mobilnej przewodu ładowania lub wallboxu) to rozsądne rozwiązanie — wtedy masz pewność, że możesz ładować, gdy jest dostępny punkt zasilania.

**Uwaga przy gniazdach zasilania:**
- Przewód 32A może dostarczyć tę moc tylko w szczytowym momencie, ale tylko **25A ciągłe** (netto ~15 kW ciągłe ładowanie)
- Przewód 63A daje podwójną pojemność (~30 kW ciągłe)
- Długość i grubość przewodu decydują o tym, czy możesz uzyskać pełną moc — grube przewody na duże odległości tracą moc

Nie wszystkie place ładowania w teatrach mają zasilanie w pobliżu. Sprawdź to wcześniej.

---

## Zachowanie podczas jazdy

### Regeneracyjne hamowanie

Większość samochodów elektrycznych może odzyskiwać energię podczas hamowania (regeneracyjne hamowanie). Silnik działa jak dynamo i ładuje baterię podczas hamowania.

- **Nie możesz już tylko toczyć się** — pojazd hamuje, gdy puścisz gaz
- To wymaga przyzwyczajenia, ale daje znaczny zasięg przy każdym zjeździe lub zmniejszeniu prędkości
- Twoje hamulce prawie w ogóle nie zużywają się

**Wskazówka:** Naucz się jeździć jednym pedałem. Przy każdym zjeździe lub korku zyskujesz darmowy zasięg.

---

## Strategia ładowania w trasie

Optymalna strategia dla kierowcy podróżującego:

```
Baza       → Wyjazd z pełnym akumulatorem
        ↓
Miejsce docelowe  → Ładowanie podczas montażu/występu/rozmontowania
        ↓
Baza       → Opcjonalne doładowanie w domu
```

Jeśli zasięg na jedną trasę nie jest wystarczający:

- Wybierz pojazd z **wysoką szybkością ładowania DC (>100 kW)** — to umożliwia szybkie ładowanie w 15 minut zamiast 45
- Znajdź szybkie ładowarki na trasie za pomocą [Chargemap](https://chargemap.com), [ABRP](https://abetterrouteplanner.com) lub [PlugShare](https://www.plugshare.com)

---

## Ciężarówki: specjalne uwagi

Dla ciężarówek obowiązują dodatkowe ograniczenia:

- **Prawo jazdy:** łączenie ładowania z pracą techniczną jest problematyczne pod względem prawnym, jeśli kierowca musi czekać przy ładowarce. W teatrach, które nie mogą ładować, **wymagany jest dedykowany kierowca**.
- **Brak dostępu do szybkich ładowarek** — szukaj specjalnych placów ładowania dla ciężarówek
- **Ładowanie w teatrze**: nie zawsze jest to możliwe, a nie wszędzie jest dostępne zasilanie w pobliżu doków ładowania

---

## Podsumowanie

- **Ładuj, gdy stoisz** — w domu i w teatrze. Ładowanie w trasie liczy się do Twojego dnia pracy.
- **Zasięg > szybkość ładowania** jeśli możesz ładować na miejscu
- **Szybkość ładowania > zasięg** jeśli nie możesz uniknąć postoju w trasie — wtedy chcesz >100 kW DC
- **Zatory wieczorne** (16:00–22:00): publiczne słupy mogą niespodziewanie dostarczyć mało prądu
- **Własna ładowarka** to dobry pomysł — niezależnie od dostępnej infrastruktury
- **Szybkie ładowanie jest drogie** — używaj ich tylko gdy jest to absolutnie konieczne
- **Ciężarówki**: szukaj placów ładowania, a nie zwykłych szybkich ładowarek
- **Ciężarówka + brak ładowarki w teatrze** = wymagany dedykowany kierowca (prawo jazdy)