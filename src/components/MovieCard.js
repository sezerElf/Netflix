import React from "react";
import { Card } from "react-bootstrap";

export default function MovieCard({results}) {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        gap: 10,
        marginRight: 10,
        paddingBottom: 150,
        paddingTop: 20,
      }}
    >
      {results.map((item) => (
        <Card className="mt-3" style={{ width: "18rem", marginLeft: "5px",height:300,boxShadow:' 0 3px 10px rgb(0 0 0 / 0.2)' }}>
        <Card.Img style={{height:'70%'}}
          variant="top"
          src={item.images["Poster Art"].url}
        />
        <Card.Body className="text-center">
          <Card.Title>{item.title}</Card.Title>
        </Card.Body>
      </Card>
      ))}
      
    </div>
  );
}
