import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate をインポート

export const useLogout = () => {
    const navigate = useNavigate(); // useNavigate を使用

    const logout = useCallback(() => {
        localStorage.removeItem('token'); // トークンを削除
        navigate('/api/login'); // ログインページにリダイレクト
    }, [navigate]);

    return logout;
};
