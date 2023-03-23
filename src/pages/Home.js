import { useState } from "react";
import Head from "../components/Navbar";
import Footer from "../components/Footer";
import { Container, Form } from "react-bootstrap";
import MovieCard from "../components/MovieCard";
import data from "../data.json";
import SearchandSort from "../components/SearchandSort";

export default function Home() {
  const [results, setResults] = useState(data.entries.slice(0, 18));
  return (
    <div>
      <Head />
      <SearchandSort results={results} setResults={setResults}/>
      <MovieCard results={results} />
      <Footer />
    </div>
  );
}
