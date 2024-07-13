import { Link } from 'react-router-dom'; // Added this line

export const ActionButtons = ({ handleDelete, editLink }) => {
    return (
        <div className="action-buttons">
            <Link to={editLink}>
                <button>編集</button>
            </Link>
            <button onClick={handleDelete}>削除</button>
        </div>
    );
}