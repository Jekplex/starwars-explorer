import { Episode } from "../data/clone-wars-data";

export interface ContentItemOrder {
  readonly release: number;
  readonly chronological: number;
}

export interface ContentItem {
  readonly id: string;
  readonly title: string;
  readonly displayTitle: string;
  readonly type: 'movie' | 'series';
  readonly releaseYear: number;
  readonly episode?: string; // turn to subtitle maybe?
  readonly poster: string;
  readonly order: ContentItemOrder;
  readonly seriesData?: Episode[]
  open?: boolean;
}
