import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/home";
import Search from "../Pages/search";
import AlbumDetails from "../Pages/albumDetails";
import ArtistDetails from "../Pages/artistDetails";
import ShowStatistics from "../Pages/statistics";

const AppRouter: React.FC = () => {
    return (
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/statistics" element={<ShowStatistics />} />
                <Route path="/search" element={<Search />} />
                <Route path="/album/:artist/:album" element={<AlbumDetails />} />
                <Route path="/artist/:id" element={<ArtistDetails />} />
            </Routes>
    );
};

export default AppRouter;