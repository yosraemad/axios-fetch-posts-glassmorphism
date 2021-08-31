import { useState, useCallback } from "react";
import axios from "axios";

const useAxios = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getPosts = useCallback(async (applyData) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = response.data;
      console.log(data);
      applyData(data);
      setIsLoading(false);
    } catch (error) {
      setError(error.message || "Something went wrong!");
      console.log(error);
    }
  }, []);
  return {
    isLoading,
    error,
    getPosts,
  };
};

export default useAxios;
