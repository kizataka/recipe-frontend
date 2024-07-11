export const DishDetailView = ({ dish }) => {
    return (
        <div className="dish-detail-container">
            <div className="left-side">
                <p>レシピの名前：{dish.title}</p>
                <p>作成者：{dish.user.name}</p>
                <p>レシピの画像：</p>
                <img src="https://img.icons8.com/ios/50/000000/image.png" alt="レシピの画像" />
            </div>
            <div className="right-side description-area">
                <p className="title">レシピの説明</p>
                <p>{dish.description}</p>
            </div>
        </div>
    );
}
