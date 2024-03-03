import { useEffect, useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";

function Home() {
	const [randImg, setRandImg] = useState('151');
	const { activeSession, user } = useContext(UserContext);

	const generateRandomImg = () => {
		const rand = Math.floor(Math.random() * 150) + 1;
		const paddRand = String(rand).padStart(3, "0");
		setRandImg(paddRand);
	};

	useEffect(() => {
		const intervalo = setInterval(() => {
			generateRandomImg();
		}, 1500);

		return () => clearInterval(intervalo);
	}, []);

	return (
		<>
			<div className="container-fluid">
				<div className="d-flex flex-column align-items-center justify-content-center">
					<p className="fs-2 mt-3 mb-5">Bienvenido maestro Pokemon</p>
					<figure className="figure welcome-fig mb-3">
						<img
							src={`src/assets/img/${randImg}.png`}
							className="figure-img img-fluid"
							alt="Pokemon #${randImg}"
						/>
					</figure>
					{activeSession ? <span className="fs-5 text-muted">Has iniciado sesión como <em>{user}</em>!!</span> : ""}
				</div>
			</div>
		</>
	);
}

export default Home;
