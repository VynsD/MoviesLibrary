import React, { Fragment } from "react";
import Card from "../card/card";
import "./movieList.scss";

type FakeDB = {
	id: number;
	name: string;
	img: string;
	genre: string;
	nation: string;
	year: number; 
}

const randomHex =() => Math.floor(Math.random()*16777215).toString(16);

const MovieList = () => {
	const fakeDb: FakeDB[] = [
		{ id: 0, name: "The handmaid's Tale", img: `#${randomHex()}`, genre: "Thriller", nation: "USA", year: 2021 },
		{ id: 1, name: "The expanse", img: `#${randomHex()}`, genre: "Noire", nation: "Europe", year: 2022 },
		{ id: 2, name: "The Magicians", img: `#${randomHex()}`, genre: "Fanatasy", nation: "Asia", year: 2023 },
		{ id: 3, name: "The Mentalist", img: `#${randomHex()}`, genre: "Detective", nation: "Asia", year: 2023 },
		{ id: 4, name: "The foo", img: `#${randomHex()}`, genre: "Action", nation: "Asia", year: 2023 },
		{ id: 5, name: "The bar", img: `#${randomHex()}`, genre: "Romance", nation: "Asia", year: 2023 },
		{ id: 6, name: "The baz", img: `#${randomHex()}`, genre: "Drama", nation: "Asia", year: 2023 }
	];
	
	return <Fragment>
		<div className="movielist__wrapper">
			{fakeDb.map(show =>
				<Card
					key={show.id}
					title={show.name}
					img={show.img}
					genre={show.genre}
					nation={show.nation}
					year={show.year}
				/>
			)}
		</div>
	</Fragment>;
};
export default MovieList;