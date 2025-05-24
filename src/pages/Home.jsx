import MovieCard from "../components/MovieCard"
import idiot from "/hq720.jpg"
import asshole from "/asshole.webp"
import { useState } from "react";
import '../css/Home.css'

function Home(){

    const [searchQuery, setSearchQuery] = useState("");
    const movies = [
        {id: 1, title: "Motorbike Jerk Strikes Again", release_date: "23.5.2025", url: idiot}, 
        {id: 2, title: "Assholes on Motorcycles", release_date: "23.5.2025", url: asshole}

    ]

    const handleSearch = (e) => {
        e.preventDefault();
        alert(searchQuery);
        setSearchQuery("")
      }
      

return <div className="home">
    <form onSubmit={handleSearch} className="search-form">
        <input
            type="text"
            className="search-input"
            placeholder="Search movies ..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
        />

        <button type="submit" className="search-button">Search</button>
    </form>
    <div className="movies-grid">
        {movies.map(
            (movie) => 
                movie.title.toLowerCase().startsWith(searchQuery) && (
                    <MovieCard movie={movie} key={movie.id} />
                    )
        )}
    </div>

</div>
}

export default Home