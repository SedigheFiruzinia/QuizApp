import { Container, Row, Col } from "react-bootstrap";
import React, { useState, useEffect } from "react";

import SideBar from "./SideBar";
import Table from "./Table";
import quizeService from "../services/quizes";

const Data = () => {
  const [quizes, setQuizes] = useState([]);

  useEffect(() => {
    quizeService.getAll().then((q) => setQuizes(q));
  }, []);

  useEffect(() => {
    const source = new EventSource("http://localhost:3001/api/new");
    source.onmessage = (event) => {
      const newQuiz = JSON.parse(event.data);
      console.log(newQuiz);
      update(newQuiz);
    };
    return () => {
      source.close();
    };
  }, []);

  const update = (newQuiz) => {
    if (newQuiz) {
      setQuizes((quizes) => quizes.concat([newQuiz]));
    }
  };
  return (
    <Row className="mx-0 mt-5">
      <Col className="col-sm-2 col-xs-2 px-0">
        <SideBar selection={"Data"} />
      </Col>

      <Col className="col-sm-10 col-xs-10 pt-5">
        <h2 className="mb-5 ms-4">Results</h2>
        <Container>
          <Table quizes={quizes} rowsNum={10} />
        </Container>
      </Col>
    </Row>
  );
};

export default Data;
