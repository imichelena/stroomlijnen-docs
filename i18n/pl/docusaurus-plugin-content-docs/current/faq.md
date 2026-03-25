---
sidebar_position: 100
title: Często Zadawane Pytania
description: Najczęstsze pytania dotyczące Stroomlijnen elektrycznego ładowania ciężarówek — Plug & Charge, taryfy, RFID, zarządzanie flotą i więcej.
keywords: [Często Zadawane Pytania, FAQ, ładowanie EV, Plug and Charge, ładowanie floty, RFID, ceny]
---

# Często Zadawane Pytania

## Ogólne

### 1. Co to jest Stroomlijnen?
Stroomlijnen to holenderski operator punktów ładowania (CPO) i dostawca usług mobilności elektrycznej (eMSP), specjalizujący się w ładowaniu wysokimoprężnym DC dla elektrycznych ciężarówek. Instalujemy infrastrukturę ładowania w teatrach, centrach logistycznych i strategicznych lokalizacjach na terenie całej Holandii.

### 2. Dlaczego teatry?
Teatry posiadają duże połączenia elektryczne (dla oświetlenia, dźwięku i instalacji sceniczych), place parkingowe dostępne dla ciężarówek (dla dostaw dekoracji) oraz są dostępne w nocy, kiedy ciężarówki zwykle ładują. To logiczne połączenie — wykorzystujemy istniejącą infrastrukturę, która inaczej byłaby niezagospodarowana w nocy.

### 3. Jakie pojazdy mogą ładować się u Stroomlijnen?
Każdy pojazd z gniazdem **CCS Combo 2** może ładować się na naszych stacjach DC. Obejmuje to elektryczne ciężarówki, furgonetki, autobusy i samochody osobowe. Nasze ładowarki dostarczają do 400 kW, ale dostosowują się do maksymalnej mocy, jaką może obsłużyć pojazd.

### 4. Gdzie znajdują się ładowarki Stroomlijnen?
Głównie w Holandii, z planowanym rozszerzeniem na Belgię i Niemcy. Zobacz naszą [mapę ładowarek](./locations/finding-charger) dla wszystkich bieżących lokalizacji.

### 5. Czy samochody osobowe mogą korzystać z waszych ładowarek?
Tak. Chociaż nasze ładowarki są zaprojektowane i umieszczone dla pojazdów użytkowych, każdy samochód wyposażony w CCS może również ładować się. Należy pamiętać, że miejsca parkingowe dla ciężarówek mogą mieć wyższe krawężniki lub inną konfigurację niż zwykła stacja ładowania dla samochodów osobowych.

## Plug & Charge

### 6. Co to jest Plug & Charge?
Plug & Charge oznacza, że Twój ciężarówka automatycznie uwierzytelnia się i rozpoczyna ładowanie, gdy podłączysz kabel — bez karty, aplikacji ani działania kierowcy. Wykorzystuje certyfikaty cyfrowe ISO 15118 wbudowane w pojazd. Zobacz [Co to jest Plug & Charge?](./plug-and-charge/what-is-pnc) dla więcej szczegółów.

### 7. Czy Plug & Charge jest bezpieczne?
Tak — nawet bezpieczniejsze niż karty RFID. PnC wykorzystuje uwierzytelnianie wzajemne TLS i certyfikaty cyfrowe (tę samą technologię co bankowość internetowa). Certyfikaty są powiązane z numerem VIN pojazdu i przechowywane w module bezpieczeństwa sprzętu, co utrudnia klonowanie.

### 8. Jakie ciężarówki obsługują Plug & Charge?
Większość dużych producentów elektrycznych ciężarówek teraz obsługuje PnC: Volvo, DAF, Mercedes-Benz, Scania i MAN. Zobacz naszą [listę kompatybilnych pojazdów](./plug-and-charge/compatible-vehicles) dla pełnych szczegółów.

### 9. Jak długo trwa konfiguracja Plug & Charge?
Około 15 minut konfiguracji portalu, a następnie 1–24 godziny na instalację certyfikatu w pojeździe (w zależności od producenta). Zobacz [przewodnik instalacyjny](./plug-and-charge/setup-guide).

### 10. Czy mogę używać Plug & Charge i RFID jednocześnie?
Tak. PnC i RFID mogą współistnieć. Jeśli PnC z jakiegokolwiek powodu nie powiedzie się, kierowca może toujours wrócić do skanowania karty RFID. Ładowarka najpierw próbuje PnC; jeśli PnC nie uwierzytelnia się w ciągu 15 sekund, żąda karty RFID.

## Taryfy i Faktury

### 11. Ile kosztuje ładowanie?
Klienci floty otrzymują umowną taryfę €/kWh. Nie ma opłat za sesję ani czasowych — płacisz tylko za zużytą energię. Skontaktuj się z nami w celu uzyskania oferty na taryfę floty.

### 12. Jak działa faktura?
Miesięczne faktury z wyodrębnionymi danymi sesji, dostępne jako PDF, CSV lub UBL XML. Faktury są generowane w pierwszym dniu każdego miesiąca. Zobacz [Faktury](./fleet-management/invoicing) dla szczegółów.

### 13. Czy oferujecie zniżki za ilość?
Tak. Floty, które przekraczają miesięczne progi energii, kwalifikują się do stopniowych taryf. Skontaktuj się z naszym menedżerem konta lub wyślij e-mail na [sales@stroomlijnen.nl](mailto:sales@stroomlijnen.nl) w celu uzyskania szczegółów.

### 14. Czy użytkownicy roamingowi mogą ładować się u Stroomlijnen?
Tak, za pośrednictwem naszych połączeń roamingowych Hubject i OCPI. Użytkownicy z kartami ładowania innych dostawców mogą skanować i ładować się. Taryfy roamingowe mogą różnić się od taryf bezpośrednich.

## Karty RFID

### 15. Jak uzyskać karty RFID?
Zamów przez [Portal Mój Floty](./getting-started/rfid-cards) lub skontaktuj się z naszym menedżerem konta. Karty są wysyłane w ciągu 3 dni roboczych i wymagają aktywacji.

### 16. Co zrobić, jeśli karta RFID zostanie zgubiona lub skradziona?
Dezaktywuj kartę natychmiast przez Mój Flot → Karty RFID → wybierz kartę → Dezaktywuj. Karta jest zablokowana na wszystkich ładowarkach Stroomlijnen w ciągu kilku sekund. Zamów wymianę przez portal.

### 17. Czy jedna karta RFID może działać na wielu pojazdach?
Tak. Karty RFID są powiązane z kontem floty, a nie z konkretnym pojazdem. Każda karta przypisana do Twojej floty może uruchomić sesję ładowania na dowolnej ładowarce dla dowolnego z Twoich pojazdów.

## Techniczne

### 18. Jaka wersja OCPP używana jest przez wasze ładowarki?
Wszystkie nowe ładowarki używają **OCPP 2.0.1**. Niektóre starsze instalacje używają OCPP 1.6-J. Obie są w pełni obsługiwane przez nasze CSMS. Zobacz [Przegląd OCPP](./technical/ocpp-overview).

### 19. Czy obsługujecie inteligentne ładowanie / rozdział?
Tak. Nasze CSMS dynamicznie dzieli moc na ładowarkach w każdej lokalizacji na podstawie pojemności sieci, priorytetu pojazdu i optymalizacji czasowej. Zobacz [Przegląd OCPP → Inteligentne ładowanie](./technical/ocpp-overview#smart-charging).

### 20. Czy mogę zintegrować dane ładowania z moim systemem zarządzania flotą?
Tak. Oferujemy REST API z webhookami w czasie rzeczywistym dla danych sesji, zarządzania pojazdami i fakturacji. Dostępne są SDK dla Python, JavaScript i C#. Zobacz [API & Integracja](./technical/integration).

## Wsparcie

### Jak zgłosić awarię ładowarki?
- **Aplikacja:** Pomoc → Zgłoś problem → wybierz ładowarkę
- **Telefon:** Numer wsparcia znajduje się na każdej ładowarce
- **E-mail:** [support@stroomlijnen.nl](mailto:support@stroomlijnen.nl)
- **Podaj:** ID ładowarki (format: `NL*STM*E...`), czas i opis problemu

### Jak skontaktować się ze Stroomlijnen?
- **Ogólne pytania:** [info@stroomlijnen.nl](mailto:info@stroomlijnen.nl)
- **Sprzedaż floty:** [sales@stroomlijnen.nl](mailto:sales@stroomlijnen.nl)
- **Wsparcie techniczne:** [support@stroomlijnen.nl](mailto:support@stroomlijnen.nl)
- **Integracja techniczna:** [technical@stroomlijnen.nl](mailto:technical@stroomlijnen.nl)