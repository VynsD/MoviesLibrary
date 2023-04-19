import React, { Fragment } from "react";
import { CastListItemProps, CastListProps } from "../../models/props.models";
import "./castList.scss";

const CastListItem = (props: CastListItemProps) => {
	const { img, person, character } = props;

	return <Fragment>
		<div className={"cast__row-wrapper"}>
			{img === false
				? <span className="cast__row-picture cast__row-picture--bold">Cast</span>
				: (
					<span className="cast__row-picture">
						<img
							className="cast__row-img"
							src={img as string}
							alt="Actor portrait"
						></img>
					</span> 
				)
			}
			{img
				? <span className="cast__row-data">{person?.name}</span>
				: <span className="cast__row-data cast__row-data--opc">{person?.name}</span>
			}
			{img
				? <span className="cast__row-data">{character?.name}</span>
				: <span className="cast__row-data cast__row-data--opc">{character?.name}</span>
			}
		</div>
	</Fragment>;
};

const CastList = (props: CastListProps) => {
	return <Fragment>
		<div className="cast__wrapper">
			<div className="cast__table">
				<CastListItem
					img={false}
					person={{ name: "Actor Name" }}
					character={{ name: "Hero Name" }}
				/>
				{props.castLs?.map(castEl => 
					<CastListItem
						key={castEl?.person?.id}
						img={castEl?.person?.image?.medium ?? castEl?.person?.image?.original}
						person={castEl?.person}
						character={castEl?.character}
					/>
				)}
			</div>
		</div>
	</Fragment>;
};
export default CastList;
