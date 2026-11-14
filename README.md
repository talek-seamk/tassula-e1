Tassula ry – Kotia odottavat eläimet

Web-ohjelmoinnin harjoitustöinä toteutettu sivusto kuvitteelliselle Tassula ry:lle. Sivusto esittelee kotia etsiviä eläimiä ja adoption vaiheita. Ulkoasun pohjana on käytetty TikTokista löydettyä ohjemateriaalia. Tekoälyä (Copilot ja Claude) on käytetty suunnitteluun, toteutukseen ja korjauksiin, ja käyttö on kirjattu tarkemmin ai-log.md-tiedostoon.


Sivut ja toiminnot
index.html – sivuston esittely ja kolme kotia odottavaa eläintä.
about.html – yhdistyksen esittely ja adoption vaiheet.
listing.html – eläinten suodatus: kissat, koirat ja muut. Adoptoidut eläimet piilotetaan.
contact.html – adoptiokyselyn tarkistus ja yhteenveto.

Eläintiedot ovat animals.js-tiedostossa. Adoptoidun eläimen status muutetaan arvoon "adopted". Eläimet ovat esimerkkejä ja kuvat kuvituskuvia. Kuvien lähteet ja käyttöehdot ovat KUVAT.txt-tiedostossa.

Ulkoasu

Kaikki sivut käyttävät yhtä style.css-tiedostoa. Asettelu on tehty mobiili ensin: puhelimella sisältö on yhdessä sarakkeessa, ja leveämmällä näytöllä asettelu jakautuu useaan sarakkeeseen. Värit, fontit ja välit on määritelty muuttujina tiedoston alussa. Sivustolla on myös tumma tila, joka seuraa laitteen asetusta.

Ulkoasun perustelut, värit ja kontrastit ovat moodboard.md-tiedostossa.

Tekniikat ja saavutettavuus

HTML5, CSS3 ja JavaScript. Versionhallinta: Git ja GitHub. Julkaisu: GitHub Pages.

Saavutettavuutta tukevat otsikkotasot, alt-tekstit, näppäimistökäyttö ja näkyvä fokus, sisältöön-siirtymislinkki sekä lomakkeen nimetyt kentät ja virheilmoitukset. Tekstien kontrasti on vähintään 4.5:1 sekä vaaleassa että tummassa tilassa.

Tiedostot
plan.md – projektisuunnitelma: miten sivusto ratkaisee asiakkaan tarpeet.
moodboard.md – ulkoasun tunnelma, värit, fontit ja lähteet.
ai-log.md – tekoälyn käyttö: mitä pyysin, mitä sain ja mitä tein itse.
KUVAT.txt – kuvien lähteet ja lisenssit.

Web-ohjelmointi