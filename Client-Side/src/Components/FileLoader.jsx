import React, { useState } from "react";
import { useFileLoader } from "../Hooks/UseFileLoader";
import axios from "axios";
function FileLoader() {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState("");
  const { fileLoader, error, isloading } = useFileLoader();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("file", file);
    await fileLoader(formData);
  };
  return (
    <div>
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
    </div>
  );
}

export default FileLoader;
