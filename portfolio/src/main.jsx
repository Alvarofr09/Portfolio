import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import AppBar from "../components/NavBar";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<AppBar />
		<App />
	</React.StrictMode>
);
