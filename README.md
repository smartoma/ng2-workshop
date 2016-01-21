Install
=======
Etter at du har klonet repoen:

1. npm install
2. npm install -g gulp
3. gulp serve

Åpne browseren i http://localhost:3000

Endring av kode
===============
Endringene blir oppdatert automatisk. Følg med kommanlinjen hva gulp gjør.
Hvis du legger til filer, kan det være lurt å restarte serveren.

Oppgavene
=========
Du skal lage en bok-applikasjon til Kantega hvor man kan:
 * Se alle bøker som finnes i Kantega
 * Søke etter bøker
 
Full applikasjon, og hvordan løsningen skal se ut, finns her: 
### https://ng-kantega-ws.herokuapp.com


1. Router og navigering
-----------------------
* Åpne filer **src/app/app.html og src/app/app.component.ts**
* Konfigurer riktig path til 'Books' og 'Search'
* Knytt click-event til list-elementer i app.html, slik at man kan navigere til
  'Books' og 'Search'. Bruk show-metoden i app.component.ts som navigerer til
  gitt path-navn.
* Bruk path til 'Books' som default, slik at når du går til http://localhost:3000 blir
  URLen byttet til http://localhost:3000/books (Hint: bruk 'useAsDefault')
* Se: https://angular.io/docs/ts/latest/guide/router.html
  I **'Wrap Up'** seksjonen ser du gode eksempler om routing.
  I **'Navigate to the detail imperatively'** hjelper å knytte clic-event til metode-kall.
  
2. \*ngFor og bookdetaljer
--------------------------
* Åpne filer **src/app/book/books.html, src/app/book/book.component.ts
  og src/app/app.component.ts**
* Endre @RouteConfig i app.component slik at den heter 'BookDetails' og har path 
  som '/book/:id' 
* Endre books.html slik at alle bøkene skrives ut til tabellen. Bruk \*ngfor.
* Endre books.html slik at ved å klikke tr-element du går til book-detaljer.
  Her må du kalle select-metoden i book.component.ts
* Endre books.html slik at title, author og isbn skrives ut til html-tabellen.
  Se: src/app/model/bookdetails.ts
* Se: https://angular.io/docs/ts/latest/guide/router.html
   I 'Wrap Up' seksjonen ser du gode eksempler om routing.
* Se: https://angular.io/docs/ts/latest/guide/structural-directives.html 
  for å få hjelp med \*ngFor
  
3. RouterLinking i html
------------------------
* Åpne fil **src/app/book/bookdetail.html**
* Endre 'Back'-linken slik at man kommer tilbake til 'Books' ved å
  erstatte href med 'routerLink'-syntaksen.
* Se: https://angular.io/docs/ts/latest/guide/router.html og 'Router Links' der. 
  
4. Component template, lokal variable og selector
---------------------------------

* Åpne filer **src/app/search/search.component.ts og src/app/app.html**
* Legg til 'selector' for komponent slik søke-feltet dukker opp i app.html.
* I template til search.component.ts binde 'keyup'-event å kalle search-metoden
  i search.component.ts 
* Se: https://angular.io/docs/ts/latest/guide/user-input.html
  og der under **'Get user input from a local template variable'**

5. Lifecycle-hook OnInit
-------------------------

* Åpne **src/app/search/result.component.ts og src/app/services/search.service.ts**
* Endre result.component.ts slik at den implementerer OnInit-interface og
  'bestiller' resultater fra searchService.
* Husk å importere riktig interface !
* Se: https://angular.io/docs/ts/latest/guide/lifecycle-hooks.html
  og https://angular.io/docs/ts/latest/api/
  
6. Hidden element
------------------
* Åpne **src/app/search/result.component.ts og src/app/search/result.html**
* Se: http://blog.thoughtram.io/angular/2015/03/27/building-a-zippy-component-in-angular-2.html
  eksempel om bruk av 'hidden'-property.
* Bruk 'whenEmptyResult'-metoden for å vise/skjule dom-elementer.

7. Bonus-oppgave, implementer super-search
------------------------------------------
* Prøv å implementer din egen versjon av super-search i result.html hvor
man kan søke i 'description'-felt i BookDetails.
* Se på filene:
  * book.data.ts
  * search.service.ts
  * result.html

  


  
