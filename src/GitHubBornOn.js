import { useState, useEffect } from "react";
import { API } from "aws-amplify";
import "./App.css";

export const GitHubBornOn = () => {
	// Create user born-on-date variable and set to empty array
	const [borninfo, updateBorn] = useState([]);
	// Create a variable for loading screen
	// const [loading, updateLoading] = useState(true);

	// Define function to all API
	const fetchBorn = async () => {
		// updateLoading(true);
		const data = await API.get("cryptoapi", `/born`);
		updateBorn(data.borninfo);
		// updateLoading(false);
	};

	// Call fetchBorn function when component loads
	useEffect(() => {
		fetchBorn();
	}, []);

	return (
		<h2>
			The GitHub user {borninfo.login} was born on {borninfo.created_at}
		</h2>
	);
};
