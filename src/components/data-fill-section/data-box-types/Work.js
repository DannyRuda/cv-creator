function Work() {
  return (
    <div class="data-box">
      <h2 id="box-header">Work Experience</h2>

      <form>
        <div class="input-row">
          <input type="text" placeholder="Job Position" />
          <input type="text" placeholder="Company/Institution" />
        </div>
        <div class="input-row">
          <input type="text" placeholder="Start Date mm/yyyy" />
          <input type="text" placeholder="End Date mm/yyyy" />
        </div>
        <textarea placeholder="Description..." col="5" rows="6"></textarea>
        <div className="buttons">
          <button>Previous</button>
          <button>Add Experience</button>
        </div>
      </form>
    </div>
  );
}

export { Work };
