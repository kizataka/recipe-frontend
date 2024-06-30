export const AllDishList = () => {
    const dishes = ["レシピ1", "レシピ2", "レシピ3", "レシピ4"];

    return (
        <div>
            <h2>すべてのレシピ</h2>
            <p>ユーザー間でレシピを共有できるアプリです。</p>
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