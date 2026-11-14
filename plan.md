# Projektisuunnitelma: Tassula ry – kotia odottavat eläimet

## 1. Asiakas ja lähtötilanne

Tassula ry on vapaaehtoisvoimin toimiva eläinsuoja Seinäjoen lähellä. Yhdistyksen kokemus on, että eläin löytää kodin nopeammin, kun ihminen näkee siitä hyvän kuvan ja saa käsityksen sen luonteesta. Sivuston tehtävä ei siis ole vain kertoa yhdistyksestä, vaan tuoda eläimet näkyviin ja madaltaa kynnystä ottaa yhteyttä.

Toimeksiannosta nousee neljä varsinaista ongelmaa:

- Kävijä ei tunne eläimiä, eikä pelkkä nimi ja laji kerro, sopisiko eläin hänen arkeensa.
- Adoptioprosessi on kävijälle tuntematon. Epävarmuus siitä, mihin yhteydenotto sitoo, voi estää ottamasta yhteyttä lainkaan.
- Vapaaehtoisten aika on rajallinen. Listan pitää pysyä ajan tasalla vähällä vaivalla, eikä kenenkään pidä joutua vastaamaan kyselyihin jo adoptoiduista eläimistä.
- Yksi yhteydenottoihin vastaavista vapaaehtoisista on sokea ja käyttää ruudunlukijaa. Hän on sekä sivuston käyttäjä että osa yhdistyksen työtä, joten sivuston pitää toimia hänelle yhtä hyvin kuin muille.

## 2. Kohderyhmät ja niiden tarpeet

**Adoptiota harkitseva** haluaa nähdä eläimet nopeasti, rajata ne itselleen sopivaan lajiin ja ymmärtää, mitä seuraavaksi tapahtuu. Hänelle tärkeintä on luottamus: että yhdistys välittää eläimistä ja että kyselyn lähettäminen on turvallinen ensimmäinen askel.

**Tassulan vapaaehtoiset** käyttävät sivua työvälineenä. He tarkistavat, mitkä eläimet ovat vielä kotia vailla, ja ohjaavat kysyjiä adoption vaiheisiin. Heille tärkeää on, että tiedot ovat ajan tasalla ja että sivu toimii myös ruudunlukijalla.

**Eläinsuojelusta kiinnostuneet** haluavat tietää, millainen yhdistys on ja miten se toimii.

## 3. Miten sivusto ratkaisee asiakkaan ongelmat

**Kuva ja tarina ensin.** Eläinkortissa on iso kuva, laji, nimi ja lyhyt tarina. Tarina kertoo luonteesta ja siitä, millaiseen arkeen eläin sopisi, jotta kävijä voi kuvitella eläimen omaan kotiinsa. Etusivun suuri kuva ja kolme kotia odottavaa eläintä vievät suoraan asiaan.

**Suodatus yhdellä silmäyksellä.** Listasivulla on neljä valintaa: Kaikki, Kissat, Koirat ja Muut. Ne näkyvät kerralla, eikä niitä tarvitse etsiä pudotusvalikosta. Lista päivittyy heti, ja sivu kertoo, montako eläintä näkyy. Jos jossakin ryhmässä ei ole eläimiä, sivu sanoo sen ja neuvoo kokeilemaan toista lajia.

**Adoptoidut katoavat itsestään.** Eläinten tiedot ovat yhdessä tiedostossa (animals.js). Kun eläin adoptoidaan, vapaaehtoinen vaihtaa sen tilaksi "adopted", ja eläin poistuu sekä listalta että lomakkeen eläinvalikosta. Näin kukaan ei kysy jo kodin saaneesta eläimestä.

**Adoptio näkyväksi ja turvalliseksi.** Tietoa meistä -sivulla adoptio on jaettu neljään vaiheeseen: tutustu eläimeen, lähetä adoptiokysely, tavataan ja jutellaan sekä yhteisen arjen alku. Sivu muistuttaa myös ajasta, kodista ja kuluista, jotta päätös tehdään harkiten. Sama viesti toistuu etusivulla, adoption vaiheissa ja lomakkeella: kysely ei sido adoptioon. Jokaisesta eläinkortista pääsee suoraan lomakkeelle niin, että eläin on jo valmiiksi valittuna.

**Lomake, joka ei jätä arvailemaan.** Lomake tarkistaa pakolliset kentät, sähköpostiosoitteen muodon ja viestin vähimmäispituuden. Virheet kootaan lomakkeen alkuun linkkeinä, ja jokaisen kentän alla kerrotaan, mitä pitää korjata. Kun tiedot ovat kunnossa, sivu näyttää yhteenvedon ja kertoo selvästi, että kysely on valmis mutta sitä ei ole vielä lähetetty. Tämä on tärkeää, koska sähköpostiyhteys tulee IT-kumppanilta vasta myöhemmin: kävijä ei saa jäädä odottamaan vastausta viestiin, jota kukaan ei saanut.

## 4. Sivukartta

- **Etusivu (index.html):** lupaus uudesta alusta, kolme kotia odottavaa eläintä ja kehotus aloittaa adoptiokysely.
- **Tietoa meistä (about.html):** yhdistyksen esittely, mitä adoptiossa kannattaa miettiä ja adoption neljä vaihetta.
- **Eläimet (listing.html):** kaikki kotia odottavat eläimet ja lajisuodatus.
- **Yhteystiedot (contact.html):** adoptiokysely ja tieto siitä, mitä lomakkeen tiedoille tapahtuu.

Header, valikko ja footer ovat samat joka sivulla, ja valikko näyttää, millä sivulla ollaan.

## 5. Visuaalinen ilme

Toimeksiannon "vanha paperi" -värit (teksti #2e2a24, tausta #f3ead8, korostus #8a5a2b) antavat lämpimän ja rauhallisen pohjan. Se sopii pienelle vapaaehtoisyhdistykselle paremmin kuin kirkas, kaupallinen ilme. Värejä täydentävät korttien kermanvaalea (#fcf8ef), ohuet beigenruskeat erotinviivat ja tumma kehotusalue sivun lopussa.

Otsikot ovat serif-fontilla (Georgia), joka tuo painetun tiedotteen tuntua, ja leipäteksti on selkeää Arialia. Etusivun kuva on kaarevan ikkunan muotoinen, jotta eläin on sivun keskipiste. Kuvat ovat Pexelsistä, ja ne on merkitty alt-teksteissä kuvituskuviksi, jotta kukaan ei luule niitä oikeiksi Tassulan eläimiksi.

Sivustolla on myös tumma tila, joka seuraa laitteen asetusta. Siinä tausta on lämmin tummanruskea, ja korostusväri vaalenee karamelliksi, jotta kontrasti säilyy. Ulkoasun tarkemmat perustelut ovat tiedostossa [moodboard.md](moodboard.md).

Asettelu on tehty mobiili ensin: puhelimella kaikki on yhdessä sarakkeessa, ja leveämmällä näytöllä etusivun kuva siirtyy tekstin viereen, header asettuu yhdelle riville ja eläinkortit jakautuvat useaan sarakkeeseen.

## 6. Saavutettavuus

Sokea vapaaehtoinen määrittää saavutettavuuden tason: hänen pitää pystyä tarkistamaan eläinlista ja ohjaamaan kysyjiä samalla tavalla kuin muidenkin.

- Jokaisen eläimen nimi on otsikko, joten ruudunlukijalla voi hypätä eläimestä toiseen otsikoittain.
- Lajisuodatin on nimetty valintaryhmä, ja näkyvien eläinten määrä luetaan ääneen, kun valinta muuttuu.
- Lomakkeen kentillä on näkyvät nimet ja ohjeet, ja virheilmoitukset on kytketty kenttiin. Virheyhteenveto ja valmis kysely saavat fokuksen, joten ruudunlukija kertoo tuloksen heti.
- Sivun alussa on "Siirry sisältöön" -linkki, ja fokus näkyy selvästi. Kaikki toiminnot on tehty tavallisista linkeistä, painikkeista ja lomakekentistä, joten ne toimivat näppäimistöllä.
- Värien kontrastit täyttävät WCAG AA -tason sekä vaaleassa että tummassa tilassa: esimerkiksi teksti taustalla 11,9:1 (tummassa 14,5:1) ja linkki taustalla 4,9:1 (tummassa 8,5:1).
- Fokusreunus näkyy myös tummalla kehotusalueella, koska sen väri vaihtuu alueen mukaan.
- Sivu mahtuu 320 px leveälle puhelimen näytölle ilman vaakavieritystä, ja fonttikoot ovat remeinä, joten ne kasvavat selaimen fonttiasetuksen mukana.

Sivut tarkistetaan W3C-validaattorilla sekä käymällä ne läpi pelkällä näppäimistöllä ja ruudunlukijalla (esimerkiksi NVDA).

## 7. Esimerkkisivustot

- [HESY – Helsingin eläinsuojeluyhdistys](https://hesy.fi): Kotia etsivät eläimet on päävalikon toinen kohta heti etusivun jälkeen. HESYn eläinesittelyt kertovat luonteen lisäksi, millaiseen kotiin eläin sopii, esimerkiksi rauhalliseen kotiin ilman pieniä lapsia. Tästä tuli idea Tassulan tarinoihin: tarina kertoo myös eläimen tarpeista, ei vain siitä, että eläin on suloinen.
- [SEY Suomen Eläinsuojelu](https://sey.fi): Sivustolla on erillinen saavutettavuustyökalu, josta voi valita esimerkiksi korkean kontrastin tai helppolukuisen fontin. Tassulassa valittiin toisin: perusulkoasu on itsessään riittävän kontrastinen ja selkeä, joten kenenkään ei tarvitse etsiä erillisiä asetuksia. SEYn eläinkuvat suurina nostoina ja korteissa vahvistivat ajatusta kuvalähtöisistä eläinkorteista.
- [kodittomat.info](http://kodittomat.info): SEYn opas ohjaa tänne etsimään eläinsuojeluyhdistysten ja löytöeläintalojen kotia etsiviä eläimiä. Kun eläimiä on paljon, kävijä tarvitsee tavan rajata niitä. Tassulassa eläimiä on vähemmän, joten pelkkä lajirajaus riittää, eikä raskaampia hakutoimintoja tarvita.

## 8. Julkaisu ja jatkokehitys

Sivusto julkaistaan GitHub Pagesissa, ja muutokset tallennetaan Gitiin omina committeinaan. Seuraavat askeleet:

- IT-kumppani kytkee lomakkeen yhdistyksen sähköpostiin. Lomakkeen kentät ja yhteenveto ovat jo valmiina, joten käyttöliittymään ei tarvita suuria muutoksia.
- Esimerkkieläimet ja kuvituskuvat vaihdetaan oikeisiin eläimiin ja yhdistyksen omiin valokuviin.
- Jos eläimiä tai päivittäjiä on myöhemmin paljon, animals.js-tiedoston muokkaaminen voidaan korvata helpommalla ylläpitotavalla.
