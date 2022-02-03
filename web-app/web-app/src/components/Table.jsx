import { useEffect, useState } from "react";
import { Table as BootstrapTable, Pagination } from "react-bootstrap";

const Table = ({ quizes, rowsNum, ...props }) => {
  const [active, setActive] = useState("");
  const [rows, setRows] = useState([]);
  let items = [];

  useEffect(() => {
    setRows(quizes.slice(0, 10));
  }, [quizes]);

  for (let i = 1; i <= quizes.length / 10 + 1; i++) {
    items.push(
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

  return (
    <BootstrapTable striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Date</th>
          <th>Time</th>
          <th>Selected-Option</th>
          <th>Text-Answer</th>
        </tr>
      </thead>
      <tbody>
        {/* substring(0, 10) substring(11, 19)*/}
        {rows.length !== 0 &&
          rows.map((quiz, i) => (
            <tr key={quiz.id}>
              <td>1</td>
              <td>{quiz.createdAt}</td>
              <td>{quiz.createdAt}</td>
              <td>{quiz.option}</td>
              <td>{quiz.text}</td>
            </tr>
          ))}
        <tr>
          <td colSpan={3}>
            <Pagination>{items}</Pagination>
          </td>
        </tr>
      </tbody>
    </BootstrapTable>
  );
};

export default Table;
