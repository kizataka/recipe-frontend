export const AddDishForm = (props) => {
  const { formValues, onChange, onSubmit } = props;
    return (
      <form onSubmit={onSubmit}>
        {/* <input type="image" name="image" src="https://img.icons8.com/ios/50/000000/image.png" alt="アップロード" value={formValues.image} onChange={onChange} /> */}
        <input type="text" name="title" placeholder="レシピ名" value={formValues.title} onChange={onChange} />
        <textarea type="text" name="description" placeholder="レシピの説明" value={formValues.description} onChange={onChange} rows="20"/>
        <button type="submit">投稿</button>
      </form>
    );
  }