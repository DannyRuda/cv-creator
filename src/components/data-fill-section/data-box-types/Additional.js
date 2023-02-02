function Additional() {
  return (
    <div className="data-box">
      <h2 id="box-header">Additional Data</h2>

      <form>
        <input type="text" className="long" placeholder="Category" />
        <div className="input-row">
          <input type="text" placeholder="Skill" />
          <input type="text" placeholder="Skill Level 1-5" />
          <button className="delete">X</button>
        </div>
        <div className="wrap-add-buttons">
          <button className="add">+ Add Point</button>
          <button className="add">+ Add Category</button>
        </div>
      </form>
    </div>
  );
}

export { Additional };
