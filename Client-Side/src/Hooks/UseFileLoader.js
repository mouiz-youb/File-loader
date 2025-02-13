import React, { useState } from "react";
import { toast } from "react-hot-toast";
export const useFileLoader = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fileloading = async (formData) => {
    setLoading(true);
    setError(false);
    try {
      const response = await axios.post(
        "http://localhost:3000/file",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Set the correct content type
          },
        }
      );
      if (!response) {
        toast.error("Failed to upload the file");
      }
    } catch (error) {
      setError(true);
      toast.error("Failed to upload the file");
    } finally {
      setLoading(false);
    }
  };

  return { fileloading, loading, error };
};
