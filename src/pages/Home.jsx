import MovieCard from "../components/MovieCard";
import { useState ,useEffect} from "react";
import { searchMovies,getpopularMovies } from "../services/api";
import "../css/Home.css";


function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const[movies,setMovies] = useState([]); 
  const [error,setError] = useState(null);
  const [loading,setLoading]= useState(true)

  useEffect(()=>{
    const loadpopularMovies = async () =>{
      try{
        const popularMovies = await getpopularMovies()
        setMovies(popularMovies)
      }catch (err) {
        console.log(err)
        setError("Failed to load movies...")
      }
        finally{
          setLoading(false)
        }
    }
    loadpopularMovies()
  },[])

 
  const handleSearch = async(e) =>{
    e.preventDefault()
    if(!searchQuery.trim()) return
    if(loading) return

    setLoading(true)
    try{
      const searchResults = await searchMovies(searchQuery)
      setMovies(searchResults)
      searchError(null)
    }catch(err){
        setError("falied to search movies...")
    }finally{
      setLoading(false)
    }
    setSearchQuery("");
  };

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

 return (
  <div className="home">
    <form className="search-form" onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Search for the movie..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <button type="submit" className="search-button">
        Search
      </button>
    </form>

    <div className="movies-grid">
      {filteredMovies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  </div>
);
}

export default Home;

