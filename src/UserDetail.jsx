import './styles.css';
import { UserDetailView } from './components/UserDetailView';
import { UserDishList } from './components/UserDishList';

export const UserDetail = () => {
    return (
        <>
            <div>
                <h1>レシピ共有アプリ</h1>
            </div>
            <div>
                <h2>ユーザー詳細</h2>
            </div>
            <UserDetailView />
            <UserDishList />
        </>
    );
}