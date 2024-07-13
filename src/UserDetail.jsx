import './styles.css';
import { Header } from './components/Header';
import { UserDetailView } from './components/UserDetailView';
import { UserDishList } from './components/UserDishList';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axiosInstance from './axiosConfig';

export const UserDetail = () => {
    const { id } = useParams();
    const [user, setUser] = useState();
    const [dishes, setDishes] = useState();

    useEffect (() => {
        const fetchUserDetail = async () => {
            try {
                const response = await axiosInstance.get(`/api/users/${id}`);
                if (response.status === 200) {
                    console.log("ユーザー詳細の取得に成功しました");
                    console.log(response.data);
                    setUser(response.data);
                }
            } catch (error) {
                console.error("ユーザー詳細の取得に失敗しました", error);
            }
        };

        const fetchUserDishes = async () => {
            try {
                const response = await axiosInstance.get(`/api/dishes?user_id=${id}`);
                if (response.status === 200) {
                    console.log("ユーザーのレシピ一覧の取得に成功しました");
                    console.log(response.data);
                    setDishes(response.data.dishes);
                }
            } catch (error) {
                console.error("ユーザーのレシピ一覧の取得に失敗しました", error);
            }
        }

        fetchUserDetail();
        fetchUserDishes();
    }, [id]);

    return (
        <>
            <Header />
            <div>
                <h2>ユーザー詳細</h2>
            </div>
            {user && <UserDetailView user={user} />}
            {dishes && <UserDishList dishes={dishes} />}
        </>
    );
}