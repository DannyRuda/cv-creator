function Contact() {
  return (
    <div class="data-box">
      <h2 id="box-header">Contact</h2>

      <form>
        <div class="input-row">
          <input type="text" placeholder="Country" />
          <input type="text" placeholder="City" />
        </div>
        <input type="text" class="long" placeholder="phone number" />
        <input type="text" class="long" placeholder="email adress" />
      </form>
    </div>
  );
}

export { Contact };
