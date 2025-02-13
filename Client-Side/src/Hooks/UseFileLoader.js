import React, { useState } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";
export const useFileLoader = () => {
  const [error, setError] = useState(false);
  const [isloading, setIsloading] = useState(false);
  const fileLoader = async (formData) => {
    setIsloading(true);
    setError(null);
    const toastId = toast.loading(`is loading`);
    try {
      const response = await axios.post(
        "http://localhost:3000/file",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (!response) {
        toast.error(`Failed to upload the file `);
      }
      console.log(response.data);
      // after this line i don't have any idea for the next step
    } catch (error) {
      setError(true);
      toast.error(`Failed to upload the file `);
      setIsloading(false);
    } finally {
      setIsloading(false);
    }
  };
  return { fileLoader, error, isloading };
};
