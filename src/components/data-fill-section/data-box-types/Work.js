function Work() {
    return (
      <div class="data-box">
        <div class="header">
          <h2 id="box-header">Work Experience</h2>
        </div>
        <form>
          <div class="input-row">
            <input type="text" placeholder="Job Position" />
            <input type="text" placeholder="Company/Institution" />
          </div>
          <div class="input-row">
  
              <input type="month"  value="01/2020"/>
              <input type="month" value="10/2023"/>
  
  
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
  