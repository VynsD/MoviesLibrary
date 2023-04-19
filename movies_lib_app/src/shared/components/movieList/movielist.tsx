import React, { Fragment } from "react";
import Card from "../card/card";
import { MovieListProps } from "../../models/props.models";
import { Moment } from "../../../utils/general.utils";
import "./movieList.scss";

const MovieList = (props: MovieListProps) => {
	return <Fragment>
		<div className="movielist__wrapper">
			{props.movieLs?.map(({ id, name, image, genres, network, premiered }) =>
				<Card
					key={id}
					id={id}
					title={name}
					img={image?.medium ?? image?.original}
					genre={genres.join("/")}
					nation={network?.country?.code ?? network?.country?.name}
					year={premiered
						? Moment(premiered).format("YYYY")
						: ""
					}
				/>
			)}
		</div>
	</Fragment>;
};
export default MovieList;