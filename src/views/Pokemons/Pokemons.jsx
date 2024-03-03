import { useEffect, useState } from "react";
import { getPokemons } from "../../services/services";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";


function Pokemons() {
	const [images, setImages] = useState([]);
	const [pokemonList, setPokemonList] = useState([]);
	const [selectedPokemon, setSelectedPokemon] = useState("");
	const navigate = useNavigate();
	const { user } = useContext(UserContext);

	const makeImages = () => {
		const num = [];
		for (let i = 1; i <= 150; i++) {
			const paddRand = String(i).padStart(3, "0");
			num.push(paddRand);
		}
		setImages(num);
	};

	const handleChange = (e) => {
		e.preventDefault;
		setSelectedPokemon(e.target.value);
	};

	const handleClick = () => {
		user ? navigate(`/pokemon/${selectedPokemon}`) : navigate(`/login`);
	};

	useEffect(() => {
		makeImages();
		getPokemons()
			.then((response) => setPokemonList(response));
	}, []);

	return (
		<>
			<div className="container-fluid select-container">
				<p className="fs-2">Selecciona un Pokemon</p>
				<div className="input-group">
					<select
						className="form-select text-muted ps-3"
						onChange={handleChange}
					>
						<option defaultValue className="text-center" value={""}>
							-- Choose your Pokemon --
						</option>
						{pokemonList.map((pokemon, index) => (
							<option key={index + 1} value={pokemon.name}>
								#{index + 1} | {pokemon.name}
							</option>
						))}
					</select>
					<button
						type="button"
						className="btn"
						onClick={handleClick}
						disabled={selectedPokemon == ""}
					>
						Ver Detalle
					</button>
				</div>
			</div>
			<div className="pokemon-container mb-5">
				{images.map((image, index) => (
					<figure key={index} className="pokemon-img">
						<img
							src={`src/assets/img/${image}.png`}
							alt={`Pokemon #${image}`}
						/>
					</figure>
				))}
			</div>
		</>
	);
}

export default Pokemons;
