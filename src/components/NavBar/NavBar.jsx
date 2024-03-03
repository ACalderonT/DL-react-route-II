import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";

function Navbar() {
	const setActiveClass = ({ isActive }) => (isActive ? "active" : "inactive");
	const { user } = useContext(UserContext);

	return (
		<div className="poke-nav d-flex flex-row justify-content-between align-items-center py-3 px-4 mb-5">
			<div className="d-flex align-items-center gap-3">
				<figure className="figure brand-img">
					<img
						src="src/assets/img/logo.png"
						className="figure-img img-fluid"
						alt=""
					/>
				</figure>
			</div>
			<div className="d-flex flex-row justify-content-evenly gap-2 me-3">
				<NavLink className={setActiveClass} to="/">
					Home
				</NavLink>
				<div className="vr inactive"></div>
				<NavLink className={setActiveClass} to="/pokemons">
					Pokemons
				</NavLink>
				{/* <div className="vr inactive"></div>
				<NavLink className={setActiveClass} to="/about">
					About
				</NavLink> */}
				<div className="vr inactive"></div>
				<NavLink className={setActiveClass} to="/login">
					{user ? (
						<div>
							<span>LogOut</span>
							<i className="fa-solid fa-right-from-bracket ms-2"></i>
						</div>
					) : (
						<div>
							<span>LogIn</span>
							<i className="fa-solid fa-right-to-bracket ms-2"></i>
						</div>
					)}
				</NavLink>
			</div>
		</div>
	);
}

export default Navbar;
