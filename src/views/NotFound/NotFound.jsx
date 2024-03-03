
function NotFound() {

	return (
		<>
			<div className="container-fluid">
				<div className="d-flex flex-column align-items-center justify-content-center">
					<h1 className="display-2"><em>404</em></h1>
                    <p className="display-6"><em>page not found...</em></p>
					<figure className="figure welcome-fig">
						<img
							src='/404.png'
							className="figure-img img-fluid"
							alt="Pokemon #${randImg}"
						/>
					</figure>
				</div>
			</div>
		</>
	);
}

export default NotFound;
