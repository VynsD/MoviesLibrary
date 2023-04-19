import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink } from "@apollo/client";
// import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql, HttpLink } from "@apollo/client";
import reportWebVitals from "./utils/reportWebVitals";
import { routes } from "./routes";
import "./index.scss";

const proxy = "https://cors-anywhere.herokuapp.com/";
const endpoint = "https://api.tvmaze.com/shows";
// const endpoint = "https://flyby-router-demo.herokuapp.com/";

const client = new ApolloClient({
	cache: new InMemoryCache(),
	link: new HttpLink({
		uri: `${proxy}${endpoint}`
	})
	// uri: `${proxy}${endpoint}`,
});
const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);

// const SEARCH_SHOW = gql`
// 	query searchShows($searchTyped: String) {
// 		shows(q: $searchTyped) {
// 			id
// 			name
// 			image {
// 				medium
// 			}
// 			summary
// 		}
// 	}
// `;

// const TestQuery = () => {
// 	const query = useQuery(SEARCH_SHOW, {
// 		variables: { id: "girls" },
// 		context: {
// 			// url: "shows",
// 			fetchOptions: { method: "GET" }
// 		},
// 		fetchPolicy: "network-only",
// 		returnPartialData: true
// 	});
// 	const { loading, error, data } = query;

// 	if (loading) return <p>Loading...</p>;
// 	if (error) return <p>Error : {error.message}</p>;
// 	// @ts-ignore // TODO RM
// 	return data?.map(({ id, name }) => (
// 		<div key={id}>
// 			<h3>{name}</h3>
// 		</div>
// 	));
// };

// const GET_LOCATIONS = gql`
//   query GetLocations {
//     locations {
//       id
//       name
//       description
//       photo
//     }
//   }
// `;
// const TestStrQuery = () => {
// 	const { loading, error, data } = useQuery(GET_LOCATIONS);
	
// 	if (loading) return <p>Loading...</p>;
// 	if (error) return <p>Error : {error.message}</p>;
// 	// @ts-ignore
// 	return data.locations.map(({ id, name, description, photo }) => (
// 		<div key={id}>
// 			<h3>{name}</h3>
// 			<img width="400" height="250" alt="location-reference" src={`${photo}`} />
// 			<br />
// 			<b>About this location:</b>
// 			<p>{description}</p>
// 			<br />
// 		</div>
// 	));
// };

root.render(
	<React.StrictMode>
		<ApolloProvider client={client}>
			{/*
				<TestQuery />
				<TestStrQuery />
			*/}
			<RouterProvider router={createBrowserRouter(routes)} />
		</ApolloProvider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
