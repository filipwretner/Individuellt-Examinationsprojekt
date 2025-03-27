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
  }

  return (
    <Router>
        <Header />
        <div className="container mx-auto p-4 flex flex-col lg:flex-row gap-4">

           <div className="flex-1">
              <AppRouter />
           </div>

           <div className="hidden lg:block lg:w-1/3">
              <RenderPlaylist />
           </div>
        </div>

        {isPlaylistVisible &&(
          <div className="fixed inset-0 bg-white z-50 p-4 overflow-y-auto shadow-lg">
          <button
            onClick={togglePlaylist}
            className="text-red-500 font-bold mb-4"
          >
            Close Playlist
          </button>
          <RenderPlaylist />
        </div>
        )}

        <button onClick={togglePlaylist} className="fixed bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-full shadow-lg lg-hidden">
          {isPlaylistVisible ? "Close Playlist" : "Open Playlist"}
        </button>
    </Router>
  );
};

export default App;
