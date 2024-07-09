import './styles.css';
import { useState } from 'react';
import axiosInstance from './axiosConfig';
import { Header } from './components/Header';
import { LoginForm } from './components/LoginForm';

export const Login = () => {
  const [formValues, setFormValues] = useState({
    email: "",
    password: ""
  });

  const onChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    try{
      const response = await axiosInstance.post("/api/session", formValues);
      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        console.log("ログインが完了しました");
        alert("ログインが完了しました");
      }
    } catch (error) {
      console.error(error);
      alert("ログインに失敗しました");
    }
  }

  return (
    <>
      <Header />
      <div>
        <h1>ログイン</h1>
      </div>
      <div className='input-area'>
        <LoginForm
          formValues={formValues}
          onChange={onChange}
          onSubmit={onSubmit}
        />
      </div>
    </>
  );
}
