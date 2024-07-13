import './styles.css';
import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import axiosInstance from './axiosConfig';
import { AddDishForm } from './components/AddDishForm';
import { useNavigate, useLocation } from 'react-router-dom';

export const AddDish = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const [formValues, setFormValues] = useState({
    title: queryParams.get('title') || "",
    description: queryParams.get('description') || "",
  });

  const isEdit = queryParams.has('id'); // idが存在するかどうかで編集モードを判定

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("ログインが必要です");
      navigate("/api/login");
    }
  }, [navigate]);

  const onChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (formValues.title === "" || formValues.description === "") {
      alert("全ての項目を入力してください");
      return;
    }
    try {
      const token = localStorage.getItem("token");
      const response = isEdit
        ? await axiosInstance.put(`/api/dishes/${queryParams.get('id')}`, formValues, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          })
        : await axiosInstance.post("/api/dishes", formValues, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
      if (response.status === 200) {
        console.log(isEdit ? "レシピの更新が完了しました" : "レシピの登録が完了しました");
        alert(isEdit ? "レシピの更新が完了しました" : "レシピの登録が完了しました");
        navigate(isEdit ? `/api/dishDetail/${queryParams.get('id')}` : "/api/userDetail");
      }
    } catch (error) {
      console.error(error);
      alert(isEdit ? "レシピの更新に失敗しました" : "レシピの登録に失敗しました");
    }
  };

  const handleCancel = () => {
    navigate(`/api/dishDetail/${queryParams.get('id')}`);
  };

  return (
    <>
      <Header />
      <div>
        <h1>{isEdit ? "レシピの編集" : "レシピの投稿"}</h1>
      </div>
      <div className='input-area'>
        <AddDishForm
          formValues={formValues}
          onChange={onChange}
          onSubmit={onSubmit}
        />
        {isEdit && (
          <div>
            <button onClick={handleCancel}>キャンセル</button>
          </div>
        )}
      </div>
    </>
  );
}