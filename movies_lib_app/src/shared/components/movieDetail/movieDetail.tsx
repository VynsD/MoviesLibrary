import React, { Fragment, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { fetchShowDetail } from "../../../apis/api";
import { CardProps, MovieDetailProps, MovieDetailsProps, MoviePosterProps, MovieWidgetProps } from "../../models/props.models";
import { Shows } from "../../models/shows.models";
import arrwLfIco from "../../../assets/arrow-left-solid.svg";
import imdbIco from "../../../assets/imdb.svg";
import calendarIco from "../../../assets/calendar-regular.svg";
import "./movieDetail.scss";

const MoviePoster = (props: MoviePosterProps) => {
	const navTo = useNavigate();
	const { posterImg } = props || {};
	return <Fragment>
		<div 
			className="detail__big-poster section-background"
			style={{ 
				backgroundImage: `url(${posterImg?.original ?? posterImg?.medium})` 
			}}
		>
			<button
				className="detail__back-btn" 
				onClick={() => navTo(-1)}
			>
				<img
					className="detail__back-btn-ico"
					src={arrwLfIco}
					alt="Back button"
				/>
			</button>
		</div>
	</Fragment>;
};
const MovieWidget = (props: MovieWidgetProps) => {
	const { schedule, rating } = props;
	return <Fragment>
		<div className="detail__widget">
			<div className="detail__widget-date">
				<span className="date__icon">
					<img
						className="date__icon-ico"
						src={calendarIco}
						alt="Imdb icon"
					/>
				</span>
				<span className="date__info">
					{schedule?.days.join("/")} - {schedule?.time}
				</span>
			</div>
			<div className="detail__widget-rating">
				<span className="rating__icon">
					<img
						className="rating__icon-ico"
						src={imdbIco}
						alt="schedule icon"
					/>
				</span>
				<span className="rating__info">{rating?.average}</span>
			</div>
		</div>
	</Fragment>;
};
const MovieDetails = (props: MovieDetailsProps) => {
	const { name, genres, network, summary } = props;
	return <Fragment>
		<article className="detail__data">
			<div className="detail__data-heading">
				<h2 className="detail__data-title">{name}</h2>
				<span className="detail__data-info">
					{genres?.join("/")} - {
						network?.country?.code ?? network?.country?.name
					}
				</span>
			</div>
			<p
				className="detail__data-description"
				dangerouslySetInnerHTML={{ __html: summary }}
			>
			</p>
		</article>
	</Fragment>;
};

const MovieDetail = (props: MovieDetailProps) => {
	const [ movieDet, setMovieDet ] = useState({} as Shows);
	const { state } = useLocation();
	const { id } = state || {} as CardProps;

	useEffect(() => {
		if(id) {
			fetchShowDetail(id)
				.then((res: Shows) => {
					if(res && Object.keys(res)?.length) {
						setMovieDet(res);
						if(res._embedded) {	
							props.setCastLs(res._embedded?.cast);
						}
					}
				})
				.catch((err: Error) => console.error("Error while fetching show detail: ", err));
		}
	}, []);

	return <Fragment>
		<MoviePoster posterImg={movieDet?.image} />
		<MovieWidget 
			schedule={movieDet?.schedule}
			rating={movieDet?.rating}
		/>
		<MovieDetails
			name={movieDet?.name}
			genres={movieDet?.genres}
			network={movieDet?.network}
			summary={movieDet?.summary}
		/>
	</Fragment>;
};
export default MovieDetail;
