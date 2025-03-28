export interface Song {
    name: string;
    artist: { name: string; };
}

export interface Album {
    name: string;
    artist: { name: string; };
}

export interface SearchAlbum {
    name: string;
    artist: string;
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

export interface TrendingArtistsResponse {
    artists: { artist: Artist[] };
}

export interface MusicState {
    similarSongs: SimilarSongsResponse | null;
    trendingSongs: TrendingMusicResponse | null;
    trendingArtists: TrendingArtistsResponse | null;
    searchResults: any;
    artistAlbums: any;
    artistSongs: any;
    album: any;
    status: "idle" | "loading" | "failed";
}