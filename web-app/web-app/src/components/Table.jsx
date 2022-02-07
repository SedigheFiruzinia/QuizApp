import { useEffect, useState } from "react";
import { Table as BootstrapTable, Pagination, Col } from "react-bootstrap";

const Table = ({ quizes, rowsNum, ...props }) => {
  const [active, setActive] = useState(1);
  const [rows, setRows] = useState([]);
  let pages = [];

  useEffect(() => {
    setRows(quizes.slice((active - 1) * rowsNum, active * rowsNum));
  }, [quizes, active]);

  for (let i = 1; i <= Math.ceil(quizes.length / rowsNum); i++) {
    pages.push(
      <Pagination.Item
        key={i}
        active={i === active}
        onClick={() => pageChanged(i)}
      >
        {i}
      </Pagination.Item>
    );
  }

  const pageChanged = (i) => {
    setActive(i);
    setRows(quizes.slice((i - 1) * rowsNum, i * rowsNum));
  };

  const truncate = (str) => {
    return str.length > 10 ? str.substring(0, 7) + "..." : str;
  };

  const extraSpace = () => {
    if (rows.length % 10 !== 0) {
      return (
        <tr
          style={{
            height: `${(rowsNum - (rows.length % rowsNum)) * 41.5}px`,
          }}
        >
          <td colSpan="5"></td>
        </tr>
      );
    }
  };

  return (
    <Col className="d-flex flex-column align-items-center">
      <BootstrapTable striped bordered>
        <thead>
          <tr>
            <th>#</th>
            <th>Date</th>
            <th>Time</th>
            <th>Option</th>
            <th>Text</th>
          </tr>
        </thead>
        <tbody>
          {rows.length !== 0 &&
            rows.map((quiz, i) => (
              <tr key={quiz.id}>
                <td>{(active - 1) * rowsNum + i}</td>
                <td>{quiz.date}</td>
                <td>{quiz.time}</td>
                <td>{quiz.option}</td>
                <td>{truncate(quiz.text)}</td>
              </tr>
            ))}

          {extraSpace()}
        </tbody>
      </BootstrapTable>
      <Pagination className="pages">{pages}</Pagination>
    </Col>
  );
};

export default Table;
