import { Table as BootstrapTable } from "react-bootstrap";

const Table = ({ quizes, ...props }) => {
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
        {quizes.map((quiz) => (
          <tr key={quiz.id}>
            <td>1</td>
            <td>{quiz.createdAt.substring(0, 10)}</td>
            <td>{quiz.createdAt.substring(11, 19)}</td>
            <td>{quiz.option}</td>
            <td>{quiz.text}</td>
          </tr>
        ))}
      </tbody>
    </BootstrapTable>
  );
};

export default Table;
