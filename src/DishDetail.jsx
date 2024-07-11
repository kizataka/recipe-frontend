import './styles.css';
import { Header } from './components/Header';
import { DishDetailView } from './components/DishDetailView';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axiosInstance from './axiosConfig';

export const DishDetail = () => {
  const { id } = useParams();
  const [dish, setDish] = useState();

  useEffect(() => {
    const fetchDishDetail = async () => {
      try {
        const response = await axiosInstance.get(`/api/dishes/${id}`);
        if (response.status === 200) {
          console.log("レシピ詳細の取得に成功しました");
          console.log(response.data);
          setDish(response.data);
        }
      } catch (error) {
        console.error(error);
      }
    }
    fetchDishDetail();
  }, [id]);

  return (
    <>
        <Header />
        <div>
            <h2>レシピの詳細</h2>
        </div>
        {dish && <DishDetailView dish={dish} />}
    </>
  );
}