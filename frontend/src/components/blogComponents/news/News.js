import React from "react";
import Newscard from "./NewsCard";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "reactstrap";
const News = () => {
  const cards = [1, 2, 3, 4];

  return (
    <Container>
      <Row>
        <h1 className="title">Nos Actualités</h1>
        {cards.map(() => {
          return (
            <Col>
              <Newscard></Newscard>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};
export default News;
