import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";
import {} from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <Container style={{paddingBottom:15}}>
        <Row className="mt-3">
          <Col lg={4} className="text-center">
            <a style={{textDecoration:'none',color:'black'}} href="/" >Ana Sayfa</a>
          </Col>
          <Col lg={4} className="text-center">
            <a style={{textDecoration:'none',color:'black'}} href="/kullanicisozlesmesi">Kullanıcı Sözleşmesi</a>
          </Col>
          <Col lg={4} className="text-center">
            <a style={{textDecoration:'none',color:'black'}} href="/gizliliksozlesmesi">Gizlilik Sözleşmesi</a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
