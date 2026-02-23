import "./css/App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import { MovieProvider } from "./context/MovieContext";
import NavBar from "./components/Navbar";

function App() {
  return (
    <MovieProvider>
      <NavBar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/favorites" element={<Favorites />} />
    </Routes>
    </MovieProvider>
  );
}

export default App;
