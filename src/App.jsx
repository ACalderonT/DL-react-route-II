import { Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar/NavBar";

import Home from "./views/Home/Home";
import Pokemon from "./views/Pokemon/Pokemon";
import Pokemons from "./views/Pokemons/Pokemons";
import NotFound from "./views/NotFound/NotFound";
import Login from "./views/Login/Login";

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/pokemons" element={<Pokemons />} />
				<Route path="/pokemon/:name" element={<Pokemon />} />
				<Route path="/about" element={<h1>Working...</h1>} />
				<Route path="/login" element={<Login />} />
				<Route path="*" element={ <NotFound />} />
			</Routes>
		</>
	);
}

export default App;
