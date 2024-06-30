import './styles.css';
import { Header } from './components/Header';
import { UserDetailView } from './components/UserDetailView';
import { UserDishList } from './components/UserDishList';

export const UserDetail = () => {
    return (
        <>
            <Header />
            <div>
                <h2>ユーザー詳細</h2>
            </div>
            <UserDetailView />
            <UserDishList />
        </>
    );
}