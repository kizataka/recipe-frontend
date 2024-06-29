export const RegisterForm = () => {
    return (
      <form>
        <input type="text" placeholder="ユーザー名" />
        <input type="text" placeholder="メールアドレス" />
        <input type="password" placeholder="パスワード" />
        <button type="submit">登録</button>
      </form>
    );
  }