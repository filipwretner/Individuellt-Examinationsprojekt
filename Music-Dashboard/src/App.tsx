import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import AppRouter from "./Router/router";
import Header from "./Components/Global/header";

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Header />
        <AppRouter />
      </div>
    </Router>
  );
};

export default App;
