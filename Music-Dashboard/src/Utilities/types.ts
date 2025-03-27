export interface Song {
    name: string;
    artist: { name: string; };
}

export interface Album {
    name: string;
    artist: { name: string; };
}

export interface Artist {
    name: string;
}

export interface SimilarSongsResponse {
    similartracks: { track: Song[] };
}

export interface TrendingMusicResponse {
    tracks: { track: Song[] };
}

export interface MusicState {
    similarSongs: SimilarSongsResponse | null;
    trending: TrendingMusicResponse | null;
    searchResults: any;
    artistAlbums: any;
    artistSongs: any;
    album: any;
    status: "idle" | "loading" | "failed";
}