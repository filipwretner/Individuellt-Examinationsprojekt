import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Pages/home";
import Search from "../Pages/search";
import AlbumDetails from "../Pages/albumDetails";
import ArtistDetails from "../Pages/artistDetails";

const AppRouter: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search" element={<Search />} />
                <Route path="/album/:id" element={<AlbumDetails />} />
                <Route path="/artist/:id" element={<ArtistDetails />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;