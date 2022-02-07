import { Container, Row, Col } from "react-bootstrap";
import React from "react";

import SideBar from "./SideBar";

const About = () => (
  <Row className="mx-0 mt-5">
    <Col className="col-sm-2 col-xs-1 px-0">
      <SideBar selection={"About"} />
    </Col>
    <Col className="col-sm-8 col-xs-9 pt-5">
      <Container>
        <h2 className="mb-5">QuizPad</h2>

        <h5>Different Parts</h5>
        <p className="text-start">
          This project contains a <strong>mobile app</strong>, which is
          responsible for answering the quizes. In the <strong>web app</strong>{" "}
          fthe quize results are presented. Both mobile app and web app
          communicate with a <strong>server</strong> that includes the results
          of the quizes. In the first version of QuizPad there is only one
          question to be answered, <em>"Which one is the happiest country?"</em>
          , four options for the answers (including, Australia, USA, Japan,
          Finland), as well as a free text input.
        </p>
        <h5>Technologies</h5>
        <ul>
          <li>
            <strong>MongoDB:</strong> The option that is chosen, and the free
            text input, as well as the submition time and date, are stored in
            the MongoDB database. For this aim, mongoose library is used as
            saving JavaScript objects as Mongo documents is straightforward with
            this library. Mongoose could be described as an object document
            mapper (ODM){" "}
          </li>
          <li>
            <strong>Server Side Events:</strong> When a new quiz is submited in
            mobile app, in order to achieve real-time content update on the web
            app, server-side events is used. In server-side events, the
            browser’s event source API is used to open a channel of
            communication between the client and the server for updates to flow
            from the server to the client
          </li>
          <li>
            <strong>Routing:</strong> In order to implement transition between
            different views, we used react-router-dom in web application and
            react-router-native library in the mobile app.
          </li>
          <li>
            <strong>State Management: </strong>Because of the low complexity of
            the first version of our application, for state management, in both
            react native and the react app, React's useState hook is utilized.
          </li>
          <li>
            <strong>Bootstrap:</strong> for styling the web application,
            Bootstrap is used.
          </li>
        </ul>
      </Container>
    </Col>
  </Row>
);

export default About;
