import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const token = localStorage.getItem('token')

export const useGetData = (endpoint, queryKey) => {
    return useQuery(queryKey, async () => {
      const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/${endpoint}`, {
        headers: { authorization: `baerer ${token}` }
      });
      return res.data;
    });
  };