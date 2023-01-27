function Skills() {
  return (
    <div class="data-box">
      <h2 id="box-header">Skills</h2>

      <form>
        <div class="input-row">
          <input type="text" placeholder="Skill" />
          <select>
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Advanced</option>
            <option>Proficient</option>
            <option>Expert</option>
          </select>
          <button className="delete">X</button>
        </div>
        <div class="input-row">
          <input type="text" placeholder="Skill" />
          <select>
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Advanced</option>
            <option>Proficient</option>
            <option>Expert</option>
          </select>
          <button className="delete">X</button>
        </div>
        <div className="wrap-add-buttons">
          <button class="add">+ Add Skill</button>
        </div>
      </form>
    </div>
  );
}

export { Skills };
