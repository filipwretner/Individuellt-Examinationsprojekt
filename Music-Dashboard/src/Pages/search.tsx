import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { searchForMusic } from "../Redux/Reducers/searchSlice";
import { RootState, AppDispatch } from "../Redux/store";
import SearchSongs from "../Components/Search/searchSongs";
import SearchAlbums from "../Components/Search/searchAlbums";
import SearchArtists from "../Components/Search/searchArtists";

const Search: React.FC = () => {

    const dispatch = useDispatch<AppDispatch>();
    const [searchParams] = useSearchParams();
    const query = searchParams.get("query") || "";
    const { tracks, albums, artists } = useSelector((state: RootState) => state.search.searchResults);
    const status  = useSelector((state: RootState) => state.search.status);
    console.log("search albums", albums);

    useEffect(() => {
        if (query) {
            dispatch(searchForMusic(query));
        }
    }, [query, dispatch]);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Sökresultat för: "{query}"</h1>
            {status === "loading" ? (
                <p className="text-gray-500">Laddar...</p>
            ) : (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div>
                        <SearchSongs songs={tracks} />
                    </div>
                    <div>
                        <SearchAlbums albums={albums} />
                    </div>
                    <div>
                        <SearchArtists artists={artists} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Search;