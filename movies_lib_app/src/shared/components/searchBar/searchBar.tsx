import React from "react";
import { SearchBarProps } from "../../models/props.models";
import mf_glass_ico from "../../../assets/magnifying-glass-solid.svg";
import "./searchBar.scss";

const SearchBar = (props: SearchBarProps) => {
	return (
		<div className="search-bar__wrapper">
			<input
				className="search-bar__input"
				placeholder="Search"
				id="searchBox" 
				type="text"
				name="search_box"
				minLength={0} 
				maxLength={50}
				size={15}
				onChange={e => props.setTextSearched(e.target.value)}
			>
			</input>
			<div className="search-bar__icon-container">
				<span
					id="magnifying_glass" 
					className="search-bar__icon"
				>
					<img
						className="search-bar__icon-img"
						src={mf_glass_ico}
						alt="search bar logo"
					/>
				</span>
			</div>
		</div>
	);
};
export default SearchBar;
