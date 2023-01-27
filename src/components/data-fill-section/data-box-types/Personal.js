function Personal() {
  return (
    <div class="data-box">
      <h2 id="box-header">Personal Data</h2>

      <form>
        <div class="input-row">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <input type="text" class="long" placeholder="Job Title" />
        <textarea placeholder="Description..." col="5" rows="6"></textarea>
      </form>
    </div>
  );
}

export { Personal };
