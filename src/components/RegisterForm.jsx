export const RegisterForm = (props) => {
  const { formValues, onChange, onSubmit } = props;
    return (
      <form onSubmit={onSubmit}>
        <input type="text" name="name" placeholder="ユーザー名" value={formValues.name} onChange={onChange} />
        <input type="text" name="email" placeholder="メールアドレス" value={formValues.email} onChange={onChange} />
        <input type="password" name="password" placeholder="パスワード" value={formValues.password} onChange={onChange} />
        <input type="password" name="password_confirmation" placeholder="パスワード（確認用）" value={formValues.password_confirmation} onChange={onChange} />
        <button>登録</button>
      </form>
    );
  }