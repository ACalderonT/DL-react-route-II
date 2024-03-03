import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/userContext";
import { useNavigate } from "react-router-dom";

function Login() {
	const { user, setUser, password, setPassword, validUser, setActiveSession } =
		useContext(UserContext);
	const [invalidUser, setInvalidUser] = useState(null);

	const navigate = useNavigate();

	const handleUser = (e) => {
		e.preventDefault;
		setUser(e.target.value);
	};

	const handlePassword = (e) => {
		e.preventDefault;
		setPassword(e.target.value);
	};

	const handleOnSubmit = () => {
		if (user === validUser.user && password === validUser.password) {
            setActiveSession(true);
            setInvalidUser(null);
			navigate("/");
            return 
		}
		setInvalidUser(true);
        setUser("");
        setPassword("");
	};

    useEffect(() => {
        if(user){
            setUser(null);
            setPassword(null);
            setActiveSession(false);
        }
    }, [])

	return (
		<>
			<div className="container">
				<form className="vstack justify-content-center align-items-center border rounded p-5">
                    <h1 className="display-6 mb-3">Inicia Sesión</h1>
					{invalidUser ? (
						<div
							className="row-fluid alert alert-danger text-center"
							role="alert"
						>
							usuario y/o contraseña incorrectos!!
						</div>
					) : (
						""
					)}
					<div className="input-group mb-3">
						<span className="input-group-text" id="basic-addon1">
							<i className="fa-solid fa-user"></i>
						</span>
						<input
							type="text"
							className="form-control"
							placeholder="Username"
							aria-describedby="basic-addon1"
							onChange={handleUser}
                            value={user}
						/>
					</div>
					<div className="input-group mb-3">
						<span className="input-group-text" id="basic-addon1">
							<i className="fa-solid fa-key"></i>
						</span>
						<input
							type="password"
							className="form-control"
							placeholder="Password"
							aria-describedby="basic-addon1"
							onChange={handlePassword}
                            value={password}
						/>
					</div>
					<div className="col-auto">
						<button
							type="button"
							className="btn btn-danger mb-3"
							onClick={handleOnSubmit}
						>
							Confirm identity
						</button>
					</div>
				</form>
			</div>
		</>
	);
}

export default Login;
