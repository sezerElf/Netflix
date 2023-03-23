import { useState } from "react";
import MovieCard from "../components/MovieCard";
import data from "../data.json";
import Head from "../components/Navbar";
import Footer from "../components/Footer";
import SearchandSort from "../components/SearchandSort";

export default function Series() {
  const [results, setResults] = useState(
    data.entries.filter((item) => item.programType === "movie")
  );

  return (
    <div>
      <Head />
      <SearchandSort results={results} setResults={setResults}/>
      <MovieCard results={results} />
      <Footer />
    </div>
  );
}
