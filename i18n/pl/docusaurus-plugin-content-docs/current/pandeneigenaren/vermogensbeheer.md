---
sidebar_position: 6
title: Zarządzanie mocą i przyłączem do sieci
description: Wyjaśnienie pojęć takich jak moc przyłącza, umowna moc, zarządzanie szczytowym obciążeniem i inteligentne ładowanie dla właścicieli nieruchomości.
keywords: [moc przyłącza, umowna moc, zarządzanie szczytowym obciążeniem, inteligentne ładowanie, przyłącze do sieci, zarządzanie obciążeniem]
---

# Zarządzanie mocą i przyłączem do sieci

Przed instalacją punktów ładowania ważne jest zrozumienie, jak działa Twoje przyłącze do sieci elektrycznej i w jaki sposób infrastruktura ładowania współpracuje z tym przyłączem.

## Dwa pojęcia, które należy znać

### Moc przyłącza

**Moc przyłącza** to maksymalna wartość, jaką może obsłużyć Twoje przyłącze do sieci — określona przez przewody i stację transformatorową operatora sieci. Jest to absolutny górny limit.

**Typowa dla teatru:** 400–2000 kVA (= 400–2000 kW na fazę, w zależności od wielkości)

### Umowna moc

**Umowna moc** to maksymalna moc, na którą masz umowę z operatorem sieci. Płacisz abonament na podstawie tej mocy. Jeśli systematycznie pobierasz więcej energii, możesz otrzymać kary lub musisz dostosować umowę.

Umowna moc jest zwykle **niższa** niż moc przyłącza.

**Typowa dla teatru:** 150–500 kW

---

:::tip Zasada
- **Moc przyłącza** = to, co mogą obsłużyć przewody (górny limit)
- **Umowna moc** = to, za co zapłaciłeś (umowa)
- **Bieżące zużycie** = to, co faktycznie używasz (zmienia się w ciągu godziny)

W ciągu dnia zwykle masz dużo miejsca między bieżącym zużyciem a umowną mocą. To miejsce możesz wykorzystać do ładowania.
:::

---

## Jak DC-lader wpływa na Twoje przyłącze

DC-lader pobiera energię bezpośrednio i szybko z Twojego przyłącza. 60 kW DC-lader pobiera 60 kW przez cały czas, gdy jest aktywny. To:

| Typ ładowania | Moc | % z 270 kW umowy |
|---|---|---|
| Ładowanie AC (jednofazowe) | 3,7–7,4 kW | 1–3% |
| Ładowanie AC (trójfazowe) | 11–22 kW | 4–8% |
| Ładowanie DC | 50–150 kW | 18–55% |
| Szybkie ładowanie DC (ciężarówka) | 100–350 kW | 37–130% |

Jeden DC-lader o mocy 150 kW na umowie 270 kW zajmuje więc więcej niż połowę Twojej umownej mocy. To nie jest problem w ciągu dnia, gdy teatr zużywa mało energii — ale wieczorem podczas spektaklu może to powodować problemy.

**Rozwiązanie: zarządzanie szczytowym obciążeniem / inteligentne ładowanie**

---

## Zarządzanie szczytowym obciążeniem i inteligentne ładowanie

**Zarządzanie szczytowym obciążeniem** (również znane jako zarządzanie obciążeniem lub inteligentne ładowanie) to system, który automatycznie dostosowuje moc ładowania na podstawie dostępnego prądu w danym momencie.

### Jak to działa

1. System ciągle mierzy bieżące zużycie energii przez budynek
2. Oblicza, ile miejsca jest jeszcze dostępne poniżej umownej mocy
3. Słup ładowania otrzymuje dokładnie tyle mocy, ile jest dostępne — nie więcej
4. Gdy sala się zapełnia i zużycie rośnie, moc ładowania jest automatycznie zmniejszana
5. Gdy zużycie spada (np. po spektaklu), moc ładowania ponownie wzrasta

### Wynik

- **Nigdy** nie przekraczasz umownej mocy
- **Maksymalna prędkość ładowania**, gdy jest to możliwe
- **Żadnych ręcznych działań** nie jest wymaganych

```
Umowna moc:     270 kW
Zużycie teatru wieczorem:       220 kW
Dostępne do ładowania:       50 kW → słup ładowania ładowuje z prędkością 50 kW

Zużycie teatru w ciągu dnia:      40 kW
Dostępne do ładowania:      230 kW → słup ładowania ładowuje z prędkością 150 kW (maksymalna prędkość słupa)
```

---

## Kiedy jest wymagana rozbudowa sieci?

W większości teatrów rozbudowa sieci **nie** jest wymagana dla pierwszego słupa ładowania o mocy 60–150 kW, pod warunkiem zainstalowania systemu zarządzania szczytowym obciążeniem.

Rozbudowa sieci staje się istotna tylko wtedy, gdy:
- Chcesz eksploatować wiele punktów ładowania jednocześnie (>3 szybkie ładowarki)
- Chcesz zarezerwować stałą moc dla ładowania (np. na potrzeby gwarancji umownych dla przewoźników)
- Chcesz dodać magazynowanie energii w battery (BSS) w celu zapewnienia dodatkowej pojemności buforowej

:::note Operator sieci
Czas oczekiwania na rozbudowę sieci w Holandii wynosi obecnie 5–10 lat w wielu regionach. Magazynowanie energii w battery (BSS) może być alternatywą, aby przetrwać ten czas oczekiwania. Zobacz [ElaadNL Outlook Logistyk](https://elaadnl.nl) dla aktualnych danych na temat zatłoczenia sieci i infrastruktury ładowania.
:::

---

## Magazynowanie energii w battery jako bufor

System magazynowania energii w battery (BSS) ładuje się, gdy Twoje zużycie prądu jest niskie, a następnie dostarcza tę energię z powrotem do słupów ładowania w momentach szczytowego obciążenia. To umożliwia uzyskanie wyższych mocy ładowania bez przekraczania Twojego przyłącza do sieci.

| Scenariusz | Bez BSS | Z BSS |
|---|---|---|
| Dostępne w ciągu dnia | 230 kW | 230 kW + bufor |
| Dostępne wieczorem | 50 kW | 50 kW + bufor z BSS |
| Maks. moc ładowania wieczorem | 50 kW | 150 kW (z BSS) |