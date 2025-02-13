import React, { useState } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";

export const useFileLoader = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fileLoader = async (formData) => {
    setIsLoading(true);
    setError(null);

    // Start a loading toast and store the toast id
    const toastId = toast.loading("Loading...");

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

      // If response is invalid (though axios throws an error for non-2xx responses)
      if (!response) {
        toast.error("Failed to upload the file", { id: toastId });
        setIsLoading(false);
        return;
      }

      console.log(response.data);
      // Update the loading toast with a success message
      toast.success("File uploaded successfully", { id: toastId });
    } catch (error) {
      setError(true);
      // Update the loading toast with an error message
      toast.error("Failed to upload the file", { id: toastId });
    } finally {
      setIsLoading(false);
    }
  };

  return { fileLoader, error, isLoading };
};
