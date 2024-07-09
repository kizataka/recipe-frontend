import './styles.css';
import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import axiosInstance from './axiosConfig';
import { AddDishForm } from './components/AddDishForm';
import { useNavigate } from 'react-router-dom';

export const AddDish = () => {
  const [formValues, setFormValues] = useState({
    title: "",
    description: "",
    // image: ""
  });
  const navigate = useNavigate();

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
      const token = localStorage.getItem("token")
      const response = await axiosInstance.post("/api/dishes", formValues, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      if (response.status === 200) {
        console.log("レシピの登録が完了しました");
        alert("レシピの登録が完了しました");
      }
    } catch (error) {
      console.error(error);
      alert("レシピの登録に失敗しました");
    }
  };

  return (
    <>
      <Header />
      <div>
        <h1>レシピの投稿</h1>
      </div>
      <div className='input-area'>
        <AddDishForm
          formValues={formValues}
          onChange={onChange}
          onSubmit={onSubmit}
        />
      </div>
    </>
  );
}