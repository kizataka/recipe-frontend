import './styles.css';
import { AllDishList } from './components/AllDishList';

export const DishList = () => {
  return (
    <>
        <div>
            <h1>レシピ共有アプリ</h1>
        </div>
        <div>
            <p>ユーザー登録</p>
        </div>
        <AllDishList />
    </>
  );
}