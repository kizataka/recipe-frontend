export const LoginForm = (props) => {
  const { formValues, onChange, onSubmit } = props;
  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="email" placeholder="メールアドレス" value={formValues.email} onChange={onChange} />
      <input type="password" name="password" placeholder="パスワード" value={formValues.password} onChange={onChange}/>
      <button type="submit">ログイン</button>
    </form>
  );
};