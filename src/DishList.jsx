import './styles.css';
import { Header } from './components/Header';
import { useEffect, useState } from 'react';
import axiosInstance from './axiosConfig';
import { AllDishList } from './components/AllDishList';

export const DishList = () => {
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    const fetchDishes = async () => {
      try {
        const response = await axiosInstance.get("/api/dishes");
        if (response.status === 200) {
          console.log("レシピ一覧の取得に成功しました");
          console.log(response.data);
          setDishes(response.data.dishes);
        }
      } catch (error) {
        console.error(error);
      }
    }
    fetchDishes();
  }, []);

  return (
    <>
        <Header />
        <AllDishList
          dishes={dishes}
        />
    </>
  );
}