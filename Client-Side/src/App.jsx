import React from "react";
import FileLoader from "./Components/FileLoader";
import { Toaster } from "react-hot-toast";
import "./App.css";
import Result from "./Components/Result";
function App() {
  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <FileLoader />
      <Result />
    </div>
  );
}

export default App;
