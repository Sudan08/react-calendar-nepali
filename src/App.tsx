import { useState } from "react";
import "./index.css";
import { Button } from "./components/ui/button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex w-screen h-screen justify-center items-center flex-col">
        <span className="text-2xl">
          Tailwind Has been successfully installed.
        </span>{" "}
        <span className="text-3xl font-bold my-4">Count : {count} </span>
        <Button onClick={() => setCount((prev) => prev + 1)}>
          Shadcn Installed. Click Me to increase Count
        </Button>
      </div>
    </>
  );
}

export default App;
