import { useNavigate } from "react-router-dom";

export const Header = () => {
    const navigate = useNavigate();

    const handleDishListButtonClick = () => {
        navigate("/api/dishList");
    };
    return (
        <div className="header">
            <h1 onClick={handleDishListButtonClick}>レシピ共有アプリ</h1>
            <div　className="button-group">
                <button className="post-button">投稿</button>
                <button className="login-button">ログイン</button>
            </div>
        </div>
    );
}