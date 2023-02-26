import { useState, useEffect } from "react";
import { API } from "aws-amplify";
import "./App.css";

export const GitHubBornOn = () => {
	// Create user born variable and set to empty array
	const [born, updateBorn] = useState([]);

	// Define function to all API
	const fetchBorn = async () => {
		const data = await API.get("cryptoapi", `/born`);
		updateBorn(data.born);
	};

	// Call fetchBorn function when component loads
	useEffect(() => {
		fetchBorn();
	}, []);

	return (
		<h2>
			The GitHub user {born.login} was born on {born.created_at}
		</h2>
	);
};
