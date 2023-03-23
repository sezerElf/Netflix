import { useState } from "react";
import { Container, Form } from "react-bootstrap";
import data from "../data.json";
import "./SearchandSort.css";

export default function SearchandSort({ results, setResults }) {
  const [query, setQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  
  function handleInputChange(event) {
    const query = event.target.value;
    setQuery(query);

    if (query.length >= 3) {
      const filteredData = data.entries.filter((entry) =>
        entry.title.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filteredData);
    } else {
      setResults(data.entries.slice(0, 18));
    }
  }

  function handleSortOrderChange(event) {
    const selectedSortOrder = event.target.value;
    setSortOrder(selectedSortOrder);

    let sortedResults = [...results];
    if (selectedSortOrder === "newest") {
      sortedResults.sort((a, b) => b.releaseYear - a.releaseYear);
    } else if (selectedSortOrder === "oldest") {
      sortedResults.sort((a, b) => a.releaseYear - b.releaseYear);
    } else if (selectedSortOrder === "random") {
        sortedResults.sort(() => Math.random() - 0.5);
    }

    setResults(sortedResults);
  }
  return (
    <div>
      <Container
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          marginTop: 80,
        }}
      >
        <Form style={{ width: 400 }}>
          <Form.Control
            style={{ boxShadow: "none" }}
            value={query}
            onChange={handleInputChange}
            type="search"
            placeholder="Ara"
          />
        </Form>
        <select
          value={sortOrder}
          onChange={handleSortOrderChange}
          style={{ borderRadius: 5, borderColor: "#D1D3D3" }}
        >
          <option value="">Sıralama Düzeni Seçin</option>
          <option value="newest">En Yeniye Göre Sırala</option>
          <option value="oldest">En Eskiye Göre Sırala</option>
          <option value="random">Rastgele Sırala</option>
        </select>
      </Container>
    </div>
  );
}
