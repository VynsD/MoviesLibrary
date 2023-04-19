import React, { Fragment, useEffect, useState, useRef, useDeferredValue, Suspense } from "react";
import { fetchShows, fetchSrcShow } from "../../apis/api";
import SearchBar from "../../shared/components/searchBar/searchBar";
import MovieList from "../../shared/components/movieList/movielist";
import { Shows, SrcShow } from "../../shared/models/shows.models";
import "./home.scss";

const Home = () => {
	const [ movieLs, setMovieLs ] = useState([] as Shows[]);
	const [ textSrc, setTextSrc ] = useState("");
	const prevTxSrcRef = useRef();
	const deferredSrc = useDeferredValue(textSrc); // FIXME lighten-up calls
	const deferredMovieLs = useDeferredValue(movieLs);

	useEffect(() => {
		if(deferredSrc) {
			fetchSrcShow(deferredSrc)
				.then((res: SrcShow[])  => {
					if(res && res?.length) {
						setMovieLs(res.map(showEl => showEl.show));
					}
				})
				.catch((err: Error) => console.error("Error while fetching searched shows: ", err));
		} else if(prevTxSrcRef.current !== deferredSrc) {
			fetchShows()
				.then((res: Shows[])  => {
					if(res) setMovieLs(res);
				})
				.catch((err: Error) => console.error("Error while fetching shows: ", err));
		}
	}, [deferredSrc]);

	return (
		<Fragment>
			<header className="header__wrapper">
				<SearchBar setTextSearched={setTextSrc}/>
			</header>
			<main>
				<Suspense fallback={<h2>Loading...</h2>}>
					<MovieList movieLs={deferredMovieLs}/>
				</Suspense>
			</main>
		</Fragment>
	);
};
export default Home;
