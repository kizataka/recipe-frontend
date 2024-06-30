import './styles.css';
import { Header } from './components/Header';
import { DishDetailView } from './components/DishDetailView';

export const DishDetail = () => {
  return (
    <>
        <Header />
        <div>
            <h2>レシピの詳細</h2>
        </div>
        <DishDetailView />
    </>
  );
}