import './styles.css';
import { LoginForm } from './components/LoginForm';

export const Login = () => {
  return (
    <>
      <div>
        <h1>レシピ共有アプリ</h1>
      </div>
      <div>
        <p>ログイン</p>
      </div>
      <div className='input-area'>
        <LoginForm />
      </div>
    </>
  );
}
