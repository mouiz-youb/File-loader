import React, { useState } from "react";
import { useFileLoader } from "../Hooks/UseFileLoader";
function FileLoader() {
  const [Title, setTitle] = useState("");
  const [File, setFile] = useState("");
  const { fileloading } = useFileLoader();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(); // Create a FormData object
    formData.append("title", Title); // Append the title
    formData.append("file", File); // Append the file

    await fileloading(formData); // Pass the FormData object to the hook
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-center items-center flex-col gap-5 m-5 border-2"
    >
      <p>File loader</p>
      <input
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        placeholder="Tilte"
        className="shadow-2xl w-[50vw ] h-[50px] rounded-lg p-5"
      />
      <input
        onChange={(e) => setFile(e.target.files[0])}
        type="file"
        accept="application/pdf"
        className="shadow-2xl w-[50vw ] h-[50px] rounded-lg p-5"
      />
      <button
        type="submit"
        className="bg-black text-white text-xl pt-2 pb-2 pl-5 pr-5 rounded-2xl cursor-pointer"
      >
        Submit
      </button>
    </form>
  );
}

export default FileLoader;
