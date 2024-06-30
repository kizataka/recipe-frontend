import './styles.css';
import { DishDetailView } from './components/DishDetailView';

export const DishDetail = () => {
  return (
    <>
      <div>
        <h1>レシピ共有アプリ</h1>
      </div>
      <div>
        <h2>レシピの詳細</h2>
      </div>
      <div>
        <DishDetailView />
      </div>
    </>
  );
}