# Individuellt Examinationsprojekt

En musikdashboard-applikation som låter användare söka efter album, visa albumnamn, hantera en spellista och utforska trendande musik. Projektet är byggt med **React**, **Redux** och **Tailwind CSS**, och integrerar med Last.fm API för musikdata.

---

## Innehållsförteckning

- [Funktioner](#funktioner)
- [Använda teknologier](#använda-teknologier)
- [Installationsinstruktioner](#installationsinstruktioner)
- [Mappstruktur](#mappstruktur)
- [Användning](#användning)
- [API-integration](#api-integration)

---

## Funktioner

- **Sök efter låtar, artister eller album**: Ange sökterm och få fram matchningar av låtar, artister och album.
- **Artistdetaljer**: Visar en artists mest populära låtar och alla släppta album.
- **Albumdetaljer**: Visa alla låtar i ett album.
- **Hantera spellista**: Lägg till och ta bort låtar från spellista.
- **Trendande musik**: Utforska trendande låtar och artister.
- **Responsiv design**: Fullt responsivt användargränssnitt byggt med Tailwind CSS.

---

## Använda teknologier

- **Frontend**: React, TypeScript
- **State Management**: Redux Toolkit
- **Stilning**: Tailwind CSS
- **API**: Last.fm API
- **Routing**: React Router

---

## Installationsinstruktioner

### Förutsättningar

Se till att du har följande installerat på ditt system:
- [Node.js](https://nodejs.org/) (v14 eller högre)
- [npm](https://www.npmjs.com/) eller [yarn](https://yarnpkg.com/)

### Installation

1. Klona detta repository:

   Med Git bash:
   1. git clone https://github.com/filipwretner/Individuellt-Examinationsprojekt.git
   2. cd Music-Dashboard¨

   Med Github desktop:
   1. Klona från Github
   2. Starta repo med VS Code
   3. Kör cd Music-Dashboard i terminalen

2. Installera beroenden:

   Kör följande kommand i terminalen:

   npm install react react-dom react-router-dom react-redux @reduxjs/toolkit tailwindcss @tailwindcss/vite

3. Starta server:

   Kör följande kommand i terminalen:

   npm run dev

   Följ länken i terminalen för att öppna applikationen

### Mappstruktur

Individuellt-Examinationsprojekt/
├── src/
│   ├── Components/                                         # Återanvändbara React-komponenter
│   │   ├── ArtistDetails/                                  # Komponenter som hanterar artistdetaljer
│   │   ├── Global/                                         # Globala komponenter som finns på samtliga sidor
│   │   ├── Home/                                           # Komponenterer som hanteras på startsidan
│   │   └── Search/                                         # Komponenter för sökfunktionalitet
│   ├── Pages/                                              # Huvudkomponenter för alla sidor
│   ├── Redux/                                              # Redux-slices och store-konfiguration
│   ├── Router/                                             # Hanterar routing
│   ├── Utilities/                                          # Hjälpfunktioner och API-integrationer
│   ├── App.tsx                                             # Huvudkomponenten för applikationen
│   └── index.tsx                                           # Ingångspunkt
├── package.json                                            # Projektberoenden och skript
└── [README.md](http://_vscodecontentref_/0)                # Projektets dokumentation

### Användning

Startsida

- Startsidan visar upp de mest populära låtarna och artiserna just nu
- Lägga till låtar direkt i din spellista
- Klicka på artist för att se artistens låtar och album

Sökfunktion

- Börja skriv i sökfältet efter låt, artist och/eller album
- Lägga till låtar direkt i din spellista
- Klicka på album för att se låtar på det valda albumet
- Klicka på artist för att se artistens låtar och album

Hantera spellista

- På mindre skärmar syns spellistan genom att trycka på knappen längst ned på sidan
- På större skärmar syns spellistan hela tiden på högra sidan av skärmen
- Ta bort låtar om du inte vill ha kvar dem i spellistan

### API-integration

Detta projekt använder Last.fm API för att hämta musikdata. Nedan är de endpoints som används:

https://ws.audioscrobbler.com/2.0/
Startsida:
1. Hämta trendande låtar:
Endpoint: chart.gettoptracks
https://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=${API_KEY}&format=json

2. Hämta trendande artister:
Endpoint: chart.gettopartists
https://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${API_KEY}&format=json

3. Hämta liknande artister (icke funktionell, endast för display):
Endpoint: 
Exempel: https://ws.audioscrobbler.com/2.0/?method=track.getsimilar&artist=tesseract&track=legion&api_key=${API_KEY}&format=json

Söksida: 
1. Söka efter låtar:
Endpoint: track.search&track=query
Exempel: https://ws.audioscrobbler.com/2.0/?method=track.search&track=query&api_key=${API_KEY}&format=json

2. Söka efter album:
Endpoint: album.search&album=query
Exempel: https://ws.audioscrobbler.com/2.0/?method=album.search&album=query&api_key=${API_KEY}&format=json

3. Söka efter artist:
Endpoint: artist.search&artist=query
Exempel: https://ws.audioscrobbler.com/2.0/?method=artist.search&artist=query&api_key=${API_KEY}&format=json

Artistsida:
1. Hämta artistens album:
Endpoint: artist.gettopalbums
Exempel: https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=artist&api_key=${API_KEY}&format=json

2. Hämta artistens låtar:
Endpoint: artist.gettoptracks
Exempel: https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=artist&api_key=${API_KEY}&format=json

Albumsida:
Endpoint: album.getinfo&artist=artist&album=album
Exempel: https://ws.audioscrobbler.com/2.0/?method=album.getinfo&artist=artist&album=album&api_key=${API_KEY}&format=json