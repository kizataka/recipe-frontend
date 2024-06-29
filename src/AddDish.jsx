import './styles.css';
import { AddDishForm } from './components/AddDishForm';

export const AddDish = () => {
  return (
    <>
      <div>
        <h1>レシピ共有アプリ</h1>
      </div>
      <div>
        <p>レシピの投稿・編集・削除</p>
      </div>
      <div className='input-area'>
        <AddDishForm />
      </div>
    </>
  );
}