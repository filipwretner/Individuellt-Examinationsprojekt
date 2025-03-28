import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import AppRouter from "./Router/router";
import Header from "./Components/Global/Header";
import RenderPlaylist from "./Components/Global/RenderPlaylist";

const App: React.FC = () => {
    const [isPlaylistVisible, setIsPlaylistVisible] = React.useState(false);

    const togglePlaylist = () => {
        setIsPlaylistVisible(!isPlaylistVisible);
    };

    return (
        <Router>
            <Header />
            <div className="container mx-auto p-4 grid grid-cols-1 lg:grid-cols-3 h-[calc(100vh-4rem)]">
                {/* Main Content */}
                <div className="h-full overflow-y-auto flex flex-col col-span-2">
                    <AppRouter />
                </div>

                {/* Playlist Sidebar */}
                <div className="h-full overflow-y-auto col-span-1">
                    <RenderPlaylist />
                </div>
            </div>

            {/* Playlist Overlay for Small Screens */}
            {isPlaylistVisible && (
                <div className="fixed inset-0 bg-white dark:bg-gray-900 dark:text-white z-50 p-4 overflow-y-auto shadow-lg">
                    <button
                        onClick={togglePlaylist}
                        className="text-red-500 font-bold mb-4"
                    >
                        Close Playlist
                    </button>
                    <RenderPlaylist />
                </div>
            )}

            {/* Toggle Button for Small Screens */}
            <button
                onClick={togglePlaylist}
                className="fixed bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-full shadow-lg lg:hidden"
            >
                {isPlaylistVisible ? "Close Playlist" : "Open Playlist"}
            </button>
        </Router>
    );
};

export default App;

