function Contact(props) {

  const {values,handleChange,onFocusOut} = props;
  const index = 0;
  const {country,city,phone,email} = values;

  return (
    <div className="data-box">
      <h2 id="box-header">Contact</h2>
      <div className="box-anchor" id="Contact" ></div>
      <form >
        <div className="input-row">
          <input type="text" placeholder="Country" value={country} onChange={(e)=>{handleChange(e,index,"country","contact")}} onBlur={onFocusOut}/>
          <input type="text" placeholder="City" value={city} onChange={(e)=>{handleChange(e,index,"city","contact")}} onBlur={onFocusOut}/>
        </div>
        <input type="text" className="long" placeholder="phone number" value={phone} onChange={(e)=>{handleChange(e,index,"phone","contact")}} onBlur={onFocusOut}/>
        <input type="text" className="long" placeholder="email adress" value={email} onChange={(e)=>{handleChange(e,index,"email","contact")}} onBlur={onFocusOut}/>
      </form>
    </div>
  );
}

export { Contact };
