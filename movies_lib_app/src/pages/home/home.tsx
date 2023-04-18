import React, { Fragment } from "react";
import "./home.scss";
import SearchBar from "../../shared/components/searchBar/searchBar";

const Home = () => {
	return (
		<Fragment>
			<header className="header__wrapper">
				<SearchBar />
			</header>
			<div>main content</div>
		</Fragment>
	);
};
export default Home;
