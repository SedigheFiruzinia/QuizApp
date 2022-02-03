import { useEffect, useState } from "react";
import { Table as BootstrapTable, Pagination, Stack } from "react-bootstrap";

const Table = ({ quizes, rowsNum, ...props }) => {
  const [active, setActive] = useState(1);
  const [rows, setRows] = useState([]);
  let items = [];

  useEffect(() => {
    setRows(quizes.slice((active - 1) * rowsNum, active * rowsNum));
  }, [quizes]);

  for (let i = 1; i <= Math.ceil(quizes.length / rowsNum); i++) {
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

  const truncate = (str) => {
    return str.length > 10 ? str.substring(0, 7) + "..." : str;
  };

  return (
    <Stack gap={3} className="align-items-center">
      <BootstrapTable striped bordered hover>
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
                <td>1</td>
                <td>{quiz.date}</td>
                <td>{quiz.time}</td>
                <td>{quiz.option}</td>
                <td>{truncate(quiz.text)}</td>
              </tr>
            ))}
        </tbody>
      </BootstrapTable>
      <Pagination>{items}</Pagination>
    </Stack>
  );
};

export default Table;
