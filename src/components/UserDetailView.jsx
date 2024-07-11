export const UserDetailView = ({ user }) => {
    return (
        <div>
            <p>ユーザー名：{user.name}</p>
            <p>メールアドレス：{user.email}</p>
        </div>
    );
}