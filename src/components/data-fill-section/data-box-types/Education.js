function Education() {
  return (
    <div class="data-box">
      <div class="header">
        <h2 id="box-header">Personal Data</h2>
      </div>
      <form>
        <div class="input-row">
          <input type="text" placeholder="Degree" />
          <input type="text" placeholder="Institution" />
        </div>
        <div class="input-row">

            <input type="month"  value="01/2020"/>
            <input type="month" value="10/2023"/>


        </div>
        <textarea placeholder="Description..." col="5" rows="6"></textarea>
        <div className="buttons">
            <button>Previous</button>
            <button>Add Education</button>
        </div>
      </form>
    </div>
  );
}

export { Education };
