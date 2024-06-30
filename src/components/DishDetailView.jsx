export const DishDetailView = () => {
    return (
        <div className="dish-detail-container">
            <div className="left-side">
                <p>レシピの名前：</p>
                <p>作成者：</p>
                <p>レシピの画像：</p>
            </div>
            <div className="right-side description-area">
                <p className="title">レシピの説明</p>
            </div>
        </div>
    );
}
