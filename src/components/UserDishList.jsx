import { Link } from 'react-router-dom';

export const UserDishList = ({ dishes }) => {
    if (!Array.isArray(dishes) || dishes.length === 0) {
        return <p>投稿されたレシピはありません</p>;
    }
    
    return (
        <div>
            <h3>過去に投稿したレシピ</h3>
            <ul className="user-dish-list">
                {dishes.map((dish, index) => (
                    <li key={index} className="description-area">
                        <Link to={`/api/dishDetail/${dish.id}`} className="link-wrapper">
                            <h3 className="title">{dish.title}</h3>
                            <img src="https://img.icons8.com/ios/50/000000/image.png" alt="レシピの画像" />
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}