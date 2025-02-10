import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";
export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isloading, setIsloading] = useState(null);
  const navigate = useNavigate();
  // the request function
  const signup = async (username, email, password) => {
    setIsloading(true);
    setError(null);
    const toastID = toast.loading(`is loading`);
    try {
      const response = await axios.post(
        "http://localhost:3006/api/user/signup",
        {
          username: username,
          email: email,
          password: password,
        }
      );
      if (!response) {
        toast.error("Failed to signup");
      }
      toast.dismiss(toastID);
      const userData = response.data.userData;
      const token = response.data.token;
      localStorage.setItem("token", JSON.stringify(token));
      localStorage.setItem("userData", JSON.stringify(userData));
      toast.success("Signup successful! Welcome to the platform!");
      navigate("/task");
    } catch (error) {
      toast.dismiss(toastID);
      setError(error.response?.data || "An error occurred");
      toast.error(error.response?.data?.error || "Signup failed.");
    } finally {
      setIsloading(false);
    }
  };
  return { signup, isloading, error };
};
