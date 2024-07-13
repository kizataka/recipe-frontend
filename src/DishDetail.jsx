import './styles.css';
import { Header } from './components/Header';
import { DishDetailView } from './components/DishDetailView';
import { ActionButtons } from './components/ActionButtons';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axiosInstance from './axiosConfig';
import { useAuth } from './hooks/useAuth';
import { useNavigate } from 'react-router-dom';

export const DishDetail = () => {
  const { id } = useParams();
  const [dish, setDish] = useState();
  const user = useAuth();
  const navigate = useNavigate();

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

  const handleDelete = async (event) => {
    event.preventDefault();
    const confirmDelete = window.confirm("本当にこのレシピを削除しますか？");
    if (!confirmDelete) return;

    try {
      const token = localStorage.getItem('token');
      const response = await axiosInstance.delete(`/api/dishes/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (response.status === 200) {
        console.log("レシピの削除に成功しました");
        navigate(`/api/userDetail/${user.id}`);
      }
    } catch (error) {
      console.error(error);
      alert("レシピの削除に失敗しました");
    }
  };

  return (
    <>
        <Header />
        <div>
            <h2>レシピの詳細</h2>
        </div>
        {dish && <DishDetailView dish={dish} />}
        {user && dish && user.id === dish.user.id && (
          <ActionButtons
            handleDelete={handleDelete}
            editLink={`/api/addDish?id=${id}&title=${dish.title}&description=${dish.description}`} // Added id to the edit link
          />
        )}
    </>
  );
}