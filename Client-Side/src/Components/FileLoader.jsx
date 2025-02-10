import React, { useState } from "react";

function FileLoader() {
  const [Title, setTitle] = useState("");
  const [File, setFile] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDATA = {
      Title: Title,
      File: File,
    };
    console.log(formDATA);
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
        onChange={(e) => setFile(e.target.value)}
        type="file"
        accept="application/pdf"
        className="shadow-2xl w-[50vw ] h-[50px] rounded-lg p-5"
      />
      <input
        type="submit"
        className="bg-black text-white text-xl pt-2 pb-2 pl-5 pr-5 rounded-2xl cursor-pointer"
      />
    </form>
  );
}

export default FileLoader;
