export const AddDishForm = (props) => {
  const { formValues, onChange, onSubmit } = props;
    return (
      <form onSubmit={onSubmit}>
        <input type="text" name="title" placeholder="レシピ名" value={formValues.title} onChange={onChange} />
        <textarea type="text" name="description" placeholder="レシピの説明" value={formValues.description} onChange={onChange} rows="20"/>
        <button type="submit">{formValues.title ? "再投稿" : "投稿"}</button>
      </form>
    );
  }