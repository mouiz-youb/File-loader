import axios from "axios";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";

export const useListFile = () => {
  const [listFile, setListFile] = useState([]);

  useEffect(() => {
    const getFile = async () => {
      try {
        const response = await axios.get("http://localhost:3000/get");
        if (response.status === 200) {
          setListFile(response.data.AllFiles);
          toast.success("File loaded successfully");
        } else {
          toast.error("No files found");
        }
      } catch (error) {
        toast.error(
          error.response?.data?.message || "Failed to load files. Try again."
        );
      }
    };
    getFile();
  }, []);

  return { listFile, setListFile };
};
