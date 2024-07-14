import { Link } from 'react-router-dom';

export const AllDishList = (props) => {
    const { dishes } = props;
    return (
        <div>
            <h2>すべてのレシピ</h2>
            <ul className="user-dish-list">
                {dishes.map((dish, index) => (
                    <li key={index} className="description-area">
                        <Link to={`/api/dishDetail/${dish.id}`} className="link-wrapper">
                            <h3 className="title">{dish.title}</h3>
                            <img src="https://img.icons8.com/ios/50/000000/image.png" alt="レシピの画像" />
                            <p>{dish.user.name}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}