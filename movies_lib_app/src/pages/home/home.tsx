import React, { Fragment } from "react";
import SearchBar from "../../shared/components/searchBar/searchBar";
import MovieList from "../../shared/components/movieList/movielist";
import "./home.scss";

const Home = () => {
	return (
		<Fragment>
			<header className="header__wrapper">
				<SearchBar />
			</header>
			<main>
				<MovieList />
			</main>
		</Fragment>
	);
};
export default Home;
