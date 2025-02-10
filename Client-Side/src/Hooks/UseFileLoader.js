import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
export const useFileLoader = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const fileloading = async (Title, file) => {
    setLoading(true);
    setError(false);
    try {
      const response = await axios.post("http://localhost:3000/file", {
        title: Title,
        file: file,
      });
      if (!response) {
        toast.error("Failed to upload the file");
      }
    } catch (error) {
      setError(true);
      toast.error("Failed to upload the file");
    }
  };
  return { fileloading, loading, error };
};
