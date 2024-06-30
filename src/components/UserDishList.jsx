export const UserDishList = () => {
    const dishes = ["レシピ1", "レシピ2", "レシピ3", "レシピ4"];

    return (
        <div>
            <h2>過去に投稿したレシピ</h2>
            <ul className="user-dish-list">
                {dishes.map((dish, index) => (
                    <li key={index} className="description-area">
                        <p className="title">{dish}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}