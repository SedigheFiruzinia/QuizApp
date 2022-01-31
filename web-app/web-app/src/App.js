import quizeService from "./services/quizes";
import { useEffect, useState } from "react";

function App() {
  const [quizes, setQuizes] = useState([]);

  useEffect(() => {
    quizeService.get().then((q) => setQuizes(q));
  });
  return (
    <>
      {quizes.map((q) => (
        <div key={q.id}> {q.text}</div>
      ))}
    </>
  );
}

export default App;
