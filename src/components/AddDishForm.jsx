export const AddDishForm = (props) => {
  const { formValues, onChange, onSubmit, isEdit, handleCancel } = props;
    return (
      <form onSubmit={onSubmit}>
        <input type="text" name="title" placeholder="レシピ名" value={formValues.title} onChange={onChange} />
        <textarea type="text" name="description" placeholder="レシピの説明" value={formValues.description} onChange={onChange} rows="20"/>
        <button type="submit">{isEdit ? "再投稿" : "投稿"}</button>
        {isEdit && (
          <div>
            <button onClick={handleCancel}>キャンセル</button>
          </div>
        )}
      </form>
    );
  }