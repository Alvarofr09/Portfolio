import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import ToggleColorMode from "../components/NavBar";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ToggleColorMode />
		{/* <App /> */}
	</React.StrictMode>
);
