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
    const searchResults = useSelector((state: RootState) => state.search.searchResults);

    useEffect(() => {
        if (query) {
            dispatch(searchForMusic(query));
        }
    }, [query, dispatch]);

    return (
        <div>
            <h1>Sökresultat för: "{query}"</h1>
            {searchResults ? (
                <div>
                    <SearchSongs songs={searchResults.songs?.song || []} />
                    <SearchAlbums albums={searchResults.albums?.album || []} />
                    <SearchArtists artists={searchResults.artists?.artist || []} />
                </div>
            ) : (
                <p>Inga sökresultat hittades</p>
            )}

        </div>
    );
};

export default Search;