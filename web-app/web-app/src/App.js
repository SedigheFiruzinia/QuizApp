import quizeService from "./services/quizes";
import { useEffect, useState } from "react";
import Table from "./components/Table";

function App() {
  const [quizes, setQuizes] = useState([]);

  useEffect(() => {
    quizeService.getAll().then((q) => setQuizes(q));
  }, []);

  useEffect(() => {
    const source = new EventSource("http://localhost:3001/api/new");
    source.onmessage = (event) => {
      const newQuiz = JSON.parse(event.data);
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
    <>
      <Table quizes={quizes} />
      {quizes.map((q) => (
        <div key={q.id}> {q.text}</div>
      ))}
    </>
  );
}

export default App;
