import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPokemon } from "../../services/services";

function Pokemon() {
	const { name } = useParams();
	const [pokemon, setPokemon] = useState("");

	useEffect(() => {
		getPokemon(name).then((response) => setPokemon(response));
	}, []);

	return (
		<>
			{pokemon ? (
				<div className="container-fluid">
					<div className="row text-center mb-5">
						<h1 className="display-3">{pokemon.name}</h1>
					</div>
					<div className="row px-5">
						<div className="col-4 vstack gap-2 justify-content-center align-item-center">
							<figure className="figure text-center">
								<img
									src={
										pokemon.sprites.other[
											"official-artwork"
										]["front_default"]
									}
									className="figure-img img-fluid rounded border"
									alt={`Pokemon #${pokemon.name} artwork`}
								/>
								<figcaption className="figure-caption">
									Official Art-Work
								</figcaption>
							</figure>
							<figure className="figure text-center">
								<img
									src={
										pokemon.sprites.other[
											"official-artwork"
										]["front_shiny"]
									}
									className="figure-img img-fluid rounded border"
									alt={`Pokemon #${pokemon.name} shiny artwork`}
								/>
								<figcaption className="figure-caption">
									Official Art-Work Shiny
								</figcaption>
							</figure>
						</div>
						<div className="col-8">
							{/*  BASIC INFORMATION */}
							<div className="row mb-3">
								<div className="row p-2">
									<span className="fw-bolder border-bottom">
										Basic Information
									</span>
								</div>
								<div className="row p-2">
									<div className="col-3 text-end fw-bold">
										#
									</div>
									<div className="col-9 text-muted">
										{pokemon.id}
									</div>
								</div>
								<div className="row p-2">
									<div className="col-3 text-end fw-bold">
										height
									</div>

									<div className="col-9 text-muted">
										{(pokemon.height / 10).toFixed(1)}m
									</div>
								</div>
								<div className="row p-2">
									<div className="col-3 text-end fw-bold">
										weight
									</div>
									<div className="col-9 text-muted">
										{(pokemon.weight / 10).toFixed(1)}kg
									</div>
								</div>
								<div className="row p-2">
									<div className="col-3 text-end fw-bold">
										Type
									</div>
									<div className="col-9 d-flex gap-3">
										{pokemon.types.map((type, index) => (
											<span
												key={index}
												className={`types ${type.type.name}`}
											>
												{type.type.name}
											</span>
										))}
									</div>
								</div>
								<div className="row p-2">
									<div className="col-3 text-end fw-bold">
										Base experience
									</div>
									<div className="col-9 text-muted">
										{pokemon.base_experience}
									</div>
								</div>
							</div>
							{/*  STATS  */}
							<div className="row mb-4">
								<div className="row p-2">
									<span className="fw-bolder border-bottom">
										Stats
									</span>
								</div>
								<div className="row">
									<div className="row p-2">
										<div className="col-3 text-end fw-bold">
											{pokemon.stats[0].stat.name}
										</div>
										<div className="col-3 text-muted text-center">
											{pokemon.stats[0].base_stat}
										</div>
										<div className="col-3 text-muted text-center">
											{pokemon.stats[5].base_stat}
										</div>
										<div className="col-3 text-start fw-bold">
											{pokemon.stats[5].stat.name}
										</div>
									</div>
									<div className="row p-2">
										<div className="col-3 text-end fw-bold">
											{pokemon.stats[1].stat.name}
										</div>
										<div className="col-3 text-muted text-center">
											{pokemon.stats[1].base_stat}
										</div>
										<div className="col-3 text-muted text-center">
											{pokemon.stats[2].base_stat}
										</div>
										<div className="col-3 text-start fw-bold">
											{pokemon.stats[2].stat.name}
										</div>
									</div>
									<div className="row p-2">
										<div className="col-3 text-end fw-bold">
											{pokemon.stats[3].stat.name}
										</div>
										<div className="col-3 text-muted text-center">
											{pokemon.stats[3].base_stat}
										</div>
										<div className="col-3 text-muted text-center">
											{pokemon.stats[4].base_stat}
										</div>
										<div className="col-3 text-start fw-bold">
											{pokemon.stats[4].stat.name}
										</div>
									</div>
									<div className="row p-2"></div>
								</div>
							</div>
							{/*  ABILITIES  */}
							<div className="row mb-3">
								<div className="row p-2">
									<span className="fw-bolder border-bottom">
										abilities
									</span>
								</div>
								<div className="row p-2">
									{pokemon.abilities.map((ability, index) => (
										<div
											className="col text-center"
											key={index}
										>
											{ability.ability.name}
										</div>
									))}
								</div>
							</div>
							{/*  SPRITES  */}
							<div className="row">
								<div className="row p-2 mb-3">
									<span className="fw-bolder border-bottom">
										sprites
									</span>
								</div>
								<div className="row mb-3">
									<div className="col-6 vstack justify-content-center">
										<figure className="figure text-center">
											<img
												src={
													pokemon.sprites
														.front_default
												}
												className="figure-img img-fluid rounded border"
												alt={`Pokemon #${pokemon.name} artwork`}
											/>
											<figcaption className="figure-caption">
												Front Default
											</figcaption>
										</figure>
									</div>
									<div className="col-6 vstack justify-content-center">
										<figure className="figure text-center">
											<img
												src={
													pokemon.sprites.back_default
												}
												className="figure-img img-fluid rounded border"
												alt={`Pokemon #${pokemon.name} artwork`}
											/>
											<figcaption className="figure-caption">
												Back Default
											</figcaption>
										</figure>
									</div>
								</div>
								<div className="row">
									<div className="col-6 vstack justify-content-center">
										<figure className="figure text-center">
											<img
												src={
													pokemon.sprites.front_shiny
												}
												className="figure-img img-fluid rounded border"
												alt={`Pokemon #${pokemon.name} artwork`}
											/>
											<figcaption className="figure-caption">
												Front Shiny
											</figcaption>
										</figure>
									</div>
									<div className="col-6 vstack justify-content-center">
										<figure className="figure text-center">
											<img
												src={pokemon.sprites.back_shiny}
												className="figure-img img-fluid rounded border"
												alt={`Pokemon #${pokemon.name} artwork`}
											/>
											<figcaption className="figure-caption">
												Back Shiny
											</figcaption>
										</figure>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			) : (
				<div className="container-fluid text-center">
					<div className="spinner-border text-danger" role="status">
						<span className="visually-hidden">Loading...</span>
					</div>
				</div>
			)}
		</>
	);
}

export default Pokemon;
