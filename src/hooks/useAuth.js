import { useState, useEffect } from 'react';
import axiosInstance from '../axiosConfig';

export const useAuth = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const response = await axiosInstance.get('/api/users/me', {
            headers: { Authorization: `Bearer ${token}` }
          });
          if (response.status === 200) {
            setUser(response.data);
          }
        } catch (error) {
          console.error(error);
        }
      }
    };
    fetchUser();
  }, []);

  return user;
};