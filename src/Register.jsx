import './styles.css';
import { RegisterForm } from './components/RegisterForm';

export const Register = () => {
  return (
    <>
      <div>
        <h1>レシピ共有アプリ</h1>
      </div>
      <div>
        <p>ユーザー登録</p>
      </div>
      <div className='input-area'>
        <RegisterForm />
      </div>
    </>
  );
}