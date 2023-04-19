import React, { Fragment, useState } from "react";
import CastList from "../../shared/components/castList/castList";
import MovieDetail from "../../shared/components/movieDetail/movieDetail";
import { Cast } from "../../shared/models/shows.models";
import "./detail.scss";

const DetailPage = () => {
	const [ castLs, setCastList ] = useState([] as Cast[]);
	return <Fragment>
		<div className="detail__wrapper">
			<MovieDetail setCastLs={setCastList} />
			<CastList castLs={castLs} />
			<div className="detail__fade"></div>
		</div>
	</Fragment>;
};
export default DetailPage;
