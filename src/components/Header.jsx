import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <div className="header">
            <Link to="/api/dishList">
                <h1>レシピ共有アプリ</h1>
            </Link>
            <div className="button-group">
                <button className="post-button">投稿</button>
                <button className="login-button">ログイン</button>
            </div>
        </div>
    );
}