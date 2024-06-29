export const AddDishForm = () => {
    return (
      <form>
        <input type="image" src="https://img.icons8.com/ios/50/000000/image.png" alt="アップロード" />
        <input type="text" placeholder="レシピ名" />
        <input type="text" placeholder="レシピの説明" />
        <div className="button-container">
          <button type="submit">削除</button>
          <button type="submit">投稿</button>
        </div>
      </form>
    );
  }