import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { CardProps } from "../../models/props.models";
import "./card.scss";

const Card = (props: CardProps) => {
	const { id, img, title, genre, nation, year } = props;
	return <Fragment>
		<Link
			to={`/detail/${id}`}
			state={{ ...props }}
			preventScrollReset={true}
		>
			<div className="card__wrapper">
				<div className="card__poster">
					<img
						className="card__poster-img"
						src={img}
						alt="film poster"
					></img>
				</div>
				<div className="card__data">
					<h4 className="card__title">
						{title}
					</h4>
					<span className="card__info">
						<span className="card__info-genres">{genre}</span>
						<span className="card__info-nation">{`- ${nation}`}</span>
						<span className="card__info-year">{year ? `- ${year}` : ""}</span>
					</span>
				</div>
			</div>
		</Link>
	</Fragment>;
};
export default Card;
