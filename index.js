import React from 'react';
import ReactDOM from 'react-dom/client';
import HeroMovies from './HeroMovies';

const MovieList = () => { 
    return <>
    <HeroMovies name="mahesh" movies="62"/><br/>
    <HeroMovies name="nbk" movies="44" /><br/>
    </>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MovieList/>);
export default MovieList;