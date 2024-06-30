import './styles.css';
import { Header } from './components/Header';
import { RegisterForm } from './components/RegisterForm';

export const Register = () => {
  return (
    <>
      <Header />
      <div>
        <p>ユーザー登録</p>
      </div>
      <div className='input-area'>
        <RegisterForm />
      </div>
    </>
  );
}