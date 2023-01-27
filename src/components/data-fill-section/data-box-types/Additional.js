function Additional() {
  return (
    <div class="data-box">
      <h2 id="box-header">Additional Data</h2>

      <form>
        <input type="text" class="long" placeholder="Category" />
        <div class="input-row">
          <input type="text" placeholder="Skill" />
          <input type="text" placeholder="Skill Level 1-5" />
          <button className="delete">X</button>
        </div>
        <div className="wrap-add-buttons">
          <button class="add">+ Add Point</button>
          <button class="add">+ Add Category</button>
        </div>
      </form>
    </div>
  );
}

export { Additional };
