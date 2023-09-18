import React from "react";
import { Home } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
		</Routes>
	);
};

export default App;
