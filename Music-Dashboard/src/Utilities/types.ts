export interface Song {
    title: string;
    artist: { name: string; };
}

export interface Album {
    title: string;
    artist: { name: string; };
    songs: { song: Song[] };
}

export interface Artist {
    name: string;
}

export interface NewReleasesResponse {
    albums: { album: Album[] };
}

export interface TrendingMusicRespnse {
    songs: { song: Song[] };
}

export interface MusicState {
    newReleases: NewReleasesResponse | null;
    trending: TrendingMusicRespnse | null;
    searchResults: any;
    artist: any;
    artistSongs: any;
    album: any;
    status: "idle" | "loading" | "failed";
}