import React, { Fragment } from "react";
import "./card.scss";

type CardProps = {
	title: string;
	img: string;
	genre: string;
	nation: string;
	year: number;
}

const Card = (props: CardProps) => {
	return <Fragment>
		<div className="card__wrapper">
			<div className="card__poster">
				{props.img}
			</div>
			<div className="card__data">
				<h4 className="card__title">
					{props.title}
				</h4>
				<span className="card__info">
					{`${props.genre} - ${props.nation} - ${props.year}`}
				</span>
			</div>
		</div>
	</Fragment>;
};
export default Card;
