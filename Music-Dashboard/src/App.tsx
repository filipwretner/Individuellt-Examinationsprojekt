import './App.css';
import AppRouter from "./Router/router";
import Header from "./Components/Global/header";

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <AppRouter />
    </div>
  );
};

export default App;
