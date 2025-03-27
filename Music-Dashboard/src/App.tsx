import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import AppRouter from "./Router/router";
import Header from "./Components/Global/Header";
import RenderPlaylist from "./Components/Global/renderPlaylist";

const App: React.FC = () => {
  return (
    <Router>
        <Header />
        <div>
           <AppRouter />
           <RenderPlaylist />
        </div>
    </Router>
  );
};

export default App;
