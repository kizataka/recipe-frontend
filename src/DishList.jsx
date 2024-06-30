import './styles.css';
import { Header } from './components/Header';
import { AllDishList } from './components/AllDishList';

export const DishList = () => {
  return (
    <>
        <Header />
        <div>
            <p>ユーザー登録</p>
        </div>
        <AllDishList />
    </>
  );
}