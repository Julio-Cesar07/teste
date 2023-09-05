import { ChangeEventHandler, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

export function App() {
  const [count, setCount] = useState(0);
  const [file, setFile] = useState<File>();
  const navigate = useNavigate();

  // file
  const onDrop = useCallback((e: any) => {
    // Do something with the files
    console.log(e.target.files);
  }, []);

  return (
    <>
      <h1>Hello World</h1>
      <h1>Estado</h1>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>
        Aumentar valor do estado
      </button>
      <button
        onClick={() =>
          navigate("/app2", {
            state: {
              count,
            },
          })
        }
        style={{ marginLeft: 20 }}
      >
        Próxima página
      </button>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: 15,
          gap: 15,
        }}
      >
        <label>seila</label>
        <input
          type="file"
          onChange={onDrop}
          id="naosei"
          name="naosei"
          multiple
        />
      </div>
    </>
  );
}
