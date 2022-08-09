import React, { useEffect } from "react";
import "./App.css";
import Routes from "./components/Routes/Routes";

function App() {
	useEffect(() => {
		window.location.href = "https://apelmahmud.vercel.app/";
	}, []);

	return (
		<div className="App">
			<Routes></Routes>
		</div>
	);
}

export default App;
