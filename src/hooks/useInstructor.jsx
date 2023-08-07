import axios from 'axios';
import { useContext } from 'react';
import { FirebaseAuthContext } from '../Provider/AuthProvider';
import { useQuery } from "@tanstack/react-query";

const useInstructor = () => {
  const token = localStorage.getItem('token');
  const { user, loading } = useContext(FirebaseAuthContext);

  console.log("User:", user); // Add this log to check user data
  console.log("Token:", token); // Add this log to check token

  const { data: isInstructor, isLoading: isIsInstructorLoading } = useQuery({
    queryKey: ['isInstructor', user?.email],
    enabled: !loading,
    queryFn: async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/user/instructor/${user?.email}`, {
          headers: { authorization: `bearer ${token}` }
        });

        console.log("IsInstructor Response:", res.data); // Add this log to check the response data

        return res.data.instructor;
      } catch (error) {
        console.error("Error fetching instructor data:", error);
        throw error;
      }
    }
  });

  return [isInstructor, isIsInstructorLoading];
};

export default useInstructor;
