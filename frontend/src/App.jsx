import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import FileUpload from "./components/FileUpload";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <FileUpload></FileUpload>
    </>
  );
}

export default App;
