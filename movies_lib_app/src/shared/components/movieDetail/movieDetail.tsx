import React, { Fragment, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { fetchShowDetail } from "../../../apis/api";
import { CardProps, MovieDetailProps } from "../../models/props.models";
import { Shows } from "../../models/shows.models";
import arrwLfIco from "../../../assets/arrow-left-solid.svg";
import imdbIco from "../../../assets/imdb.svg";
import calendarIco from "../../../assets/calendar-regular.svg";
import "./movieDetail.scss";

const MovieDetail = (props: MovieDetailProps) => {
	const [ movieDet, setMovieDet ] = useState({} as Shows);
	const navTo = useNavigate();
	const { state } = useLocation();
	console.info("route state: ", state);
	const { id } = state || {} as CardProps;

	useEffect(() => {
		if(id) {
			fetchShowDetail(id)
				.then((res: Shows) => {
					console.info("res: ", res);
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
		<div 
			className="detail__big-poster section-background"
			style={{ 
				backgroundImage: `url(${movieDet?.image?.original ?? movieDet?.image?.medium})` 
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
					{movieDet?.schedule?.days.join("/")} - {movieDet?.schedule?.time}
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
				<span className="rating__info">{movieDet?.rating?.average}</span>
			</div>
		</div>
		<article className="detail__data">
			<div className="detail__data-heading">
				<h2 className="detail__data-title">{movieDet?.name}</h2>
				<span className="detail__data-info">
					{movieDet?.genres?.join("/")} - {
						movieDet?.network?.country?.code ?? movieDet?.network?.country?.name
					}
				</span>
			</div>
			<p
				className="detail__data-description"
				dangerouslySetInnerHTML={{ __html: movieDet?.summary }}
			>
			</p>
		</article>
	</Fragment>;
};
export default MovieDetail;
