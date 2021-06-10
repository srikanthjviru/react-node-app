import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
function App() {
	useEffect(() => {
		callAPI();
	}, []);
	const callAPI = async () => {
		console.log("API called!!");
		const resj = await fetch("http://localhost:5000/api/test");
		const res = resj.json();
		console.log("Res", res);
	};
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<div
					style={{
						backgroundColor: "white",
						padding: "0px 20px",
						borderRadius: 20
					}}
				>
					<h2 style={{ color: "green", fontStyle: "italic" }}>
						NODE REACT APP
					</h2>
				</div>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
