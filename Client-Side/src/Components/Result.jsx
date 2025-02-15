import React from "react";
import { useListFile } from "../Hooks/useListFile";
function Result() {
  const listFile = useListFile();
  console.log(listFile.listFile);
  const showPdf = (pdf) => {
    window.open(`http://localhost:3000/files/${pdf}`);
  };
  return (
    <div className="flex justify-center items-center flex-row gap-5 flex-wrap">
      {listFile.listFile.map((file, index) => (
        <div
          key={index}
          className="flex justify-center items-center flex-col gap-5"
        >
          <p
            className="text-red-700 cursor-pointer"
            onClick={() => {
              showPdf(file.file);
            }}
          >
            file is : {file.file}{" "}
          </p>
          <p className="text-blue-800">The title is : {file.title} </p>
        </div>
      ))}
    </div>
  );
}

export default Result;
