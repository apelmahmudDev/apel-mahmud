import React from 'react';
import './App.css';
import Routes from './components/Routes/Routes';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

function App() {
	return (
		<div className="App">
			<Routes></Routes>
		</div>
	);
}

export default App;
