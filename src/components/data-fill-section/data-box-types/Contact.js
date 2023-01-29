function Contact(props) {

  const {values,handleChange} = props;
  const index = 0;
  const {country,city,phone,email} = values;

  return (
    <div class="data-box">
      <h2 id="box-header">Contact</h2>

      <form>
        <div class="input-row">
          <input type="text" placeholder="Country" value={country} onChange={(e)=>{handleChange(e,index,"country","contact")}} />
          <input type="text" placeholder="City" value={city} onChange={(e)=>{handleChange(e,index,"city","contact")}} />
        </div>
        <input type="text" class="long" placeholder="phone number" value={phone} onChange={(e)=>{handleChange(e,index,"phone","contact")}} />
        <input type="text" class="long" placeholder="email adress" value={email} onChange={(e)=>{handleChange(e,index,"email","contact")}} />
      </form>
    </div>
  );
}

export { Contact };
