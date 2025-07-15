import { ContentItem } from "../models/content-item";
import { CloneWarsSeriesData } from "./clone-wars-data";

export const ContentData: readonly ContentItem[] = [
  {
    id: 'the-acolyte',
    title: 'The Acolyte',
    displayTitle: 'The Acolyte',
    type: 'series',
    releaseYear: 2024,
    poster: '/posters/the-acolyte.jpg',
    order: { release: 24, chronological: 1 },
    selected: true
  },
  {
    id: 'phantom-menace',
    title: 'Star Wars: The Phantom Menace',
    displayTitle: 'Phantom Menace',
    type: 'movie',
    releaseYear: 1999,
    episode: 'Episode I',
    poster: '/posters/phantom-menace.jpg',
    order: { release: 4, chronological: 2 }
  },
  {
    id: 'attack-of-the-clones',
    title: 'Star Wars: Attack of the Clones',
    displayTitle: 'Attack of the Clones',
    type: 'movie',
    releaseYear: 2002,
    episode: 'Episode II',
    poster: '/posters/attack-of-the-clones.jpg',
    order: { release: 5, chronological: 3 }
  },
  {
    id: 'clone-wars-movie',
    title: 'Star Wars: The Clone Wars',
    displayTitle: 'Clone Wars (Movie)',
    type: 'movie',
    releaseYear: 2008,
    poster: '/posters/clone-wars-movie.jpg',
    order: { release: 7, chronological: 4 }
  },
  {
    id: 'clone-wars-series',
    title: 'Star Wars: The Clone Wars',
    displayTitle: 'Clone Wars (Series)',
    type: 'series',
    releaseYear: 2008,
    poster: '/posters/clone-wars-series.jpg',
    seriesData: CloneWarsSeriesData,
    order: { release: 8, chronological: 5 }
  },
  {
    id: 'tales-of-the-jedi',
    title: 'Star Wars: Tales of the Jedi',
    displayTitle: 'Tales of the Jedi',
    type: 'series',
    releaseYear: 2022,
    poster: '/posters/tales-of-the-jedi.jpg',
    order: { release: 21, chronological: 6 }
  },
  {
    id: 'revenge-of-the-sith',
    title: 'Star Wars: Revenge of the Sith',
    displayTitle: 'Revenge of the Sith',
    type: 'movie',
    releaseYear: 2005,
    episode: 'Episode III',
    poster: '/posters/revenge-of-the-sith.jpg',
    order: { release: 6, chronological: 7 }
  },
  {
    id: 'tales-of-the-empire',
    title: 'Star Wars: Tales of the Empire',
    displayTitle: 'Tales of the Empire',
    type: 'series',
    releaseYear: 2024,
    poster: '/posters/tales-of-the-empire.jpg',
    order: { release: 23, chronological: 8 }
  },
  {
    id: 'tales-of-the-underworld',
    title: 'Star Wars: Tales of the Underworld',
    displayTitle: 'Tales of the Underworld',
    type: 'series',
    releaseYear: 2025,
    poster: '/posters/tales-of-the-underworld.jpg',
    order: { release: 26, chronological: 9 }
  },
  {
    id: 'the-bad-batch',
    title: 'Star Wars: The Bad Batch',
    displayTitle: 'The Bad Batch',
    type: 'series',
    releaseYear: 2021,
    poster: '/posters/the-bad-batch.jpg',
    order: { release: 18, chronological: 10 }
  },
  {
    id: 'solo',
    title: 'Solo: A Star Wars Story',
    displayTitle: 'Solo',
    type: 'movie',
    releaseYear: 2018,
    poster: '/posters/solo.jpg',
    order: { release: 13, chronological: 11 }
  },
  {
    id: 'obi-wan-kenobi',
    title: 'Obi-Wan Kenobi',
    displayTitle: 'Obi-Wan Kenobi',
    type: 'series',
    releaseYear: 2022,
    poster: '/posters/obi-wan-kenobi.jpg',
    order: { release: 19, chronological: 12 }
  },
  {
    id: 'andor',
    title: 'Andor',
    displayTitle: 'Andor',
    type: 'series',
    releaseYear: 2022,
    poster: '/posters/andor.jpg',
    order: { release: 20, chronological: 13 }
  },
  {
    id: 'rebels',
    title: 'Star Wars Rebels',
    displayTitle: 'Rebels',
    type: 'series',
    releaseYear: 2014,
    poster: '/posters/rebels.jpg',
    order: { release: 9, chronological: 14 }
  },
  {
    id: 'rogue-one',
    title: 'Rogue One: A Star Wars Story',
    displayTitle: 'Rogue One',
    type: 'movie',
    releaseYear: 2016,
    poster: '/posters/rogue-one.jpg',
    order: { release: 11, chronological: 15 }
  },
  {
    id: 'a-new-hope',
    title: 'Star Wars: A New Hope',
    displayTitle: 'A New Hope',
    type: 'movie',
    releaseYear: 1977,
    episode: 'Episode IV',
    poster: '/posters/a-new-hope.jpg',
    order: { release: 1, chronological: 16 }
  },
  {
    id: 'empire-strikes-back',
    title: 'Star Wars: The Empire Strikes Back',
    displayTitle: 'Empire Strikes Back',
    type: 'movie',
    releaseYear: 1980,
    episode: 'Episode V',
    poster: '/posters/empire-strikes-back.jpg',
    order: { release: 2, chronological: 17 }
  },
  {
    id: 'return-of-the-jedi',
    title: 'Star Wars: Return of the Jedi',
    displayTitle: 'Return of the Jedi',
    type: 'movie',
    releaseYear: 1983,
    episode: 'Episode VI',
    poster: '/posters/return-of-the-jedi.jpg',
    order: { release: 3, chronological: 18 }
  },
  {
    id: 'the-mandalorian',
    title: 'The Mandalorian',
    displayTitle: 'The Mandalorian',
    type: 'series',
    releaseYear: 2019,
    poster: '/posters/the-mandalorian.jpg',
    order: { release: 15, chronological: 19 }
  },
  {
    id: 'book-of-boba-fett',
    title: 'The Book of Boba Fett',
    displayTitle: 'Book of Boba Fett',
    type: 'series',
    releaseYear: 2021,
    poster: '/posters/book-of-boba-fett.jpg',
    order: { release: 17, chronological: 20 }
  },
  {
    id: 'ahsoka',
    title: 'Ahsoka',
    displayTitle: 'Ahsoka',
    type: 'series',
    releaseYear: 2023,
    poster: '/posters/ahsoka.jpg',
    order: { release: 22, chronological: 21 }
  },
  {
    id: 'skeleton-crew',
    title: 'Skeleton Crew',
    displayTitle: 'Skeleton Crew',
    type: 'series',
    releaseYear: 2024,
    poster: '/posters/skeleton-crew.jpg',
    order: { release: 25, chronological: 22 }
  },
  {
    id: 'resistance',
    title: 'Star Wars Resistance',
    displayTitle: 'Resistance',
    type: 'series',
    releaseYear: 2018,
    poster: '/posters/resistance.jpg',
    order: { release: 14, chronological: 23 }
  },
  {
    id: 'the-force-awakens',
    title: 'Star Wars: The Force Awakens',
    displayTitle: 'The Force Awakens',
    type: 'movie',
    releaseYear: 2015,
    episode: 'Episode VII',
    poster: '/posters/the-force-awakens.jpg',
    order: { release: 10, chronological: 24 }
  },
  {
    id: 'the-last-jedi',
    title: 'Star Wars: The Last Jedi',
    displayTitle: 'The Last Jedi',
    type: 'movie',
    releaseYear: 2017,
    episode: 'Episode VIII',
    poster: '/posters/the-last-jedi.jpg',
    order: { release: 12, chronological: 25 }
  },
  {
    id: 'the-rise-of-skywalker',
    title: 'Star Wars: The Rise of Skywalker',
    displayTitle: 'The Rise of Skywalker',
    type: 'movie',
    releaseYear: 2019,
    episode: 'Episode IX',
    poster: '/posters/the-rise-of-skywalker.jpg',
    order: { release: 16, chronological: 26 }
  }
];
