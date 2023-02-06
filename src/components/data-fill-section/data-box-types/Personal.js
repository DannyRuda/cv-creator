function Personal(props) {

  const {values,handleChange,onFocusOut} = props;
  const index = 0;
  const {first,last,job,description} = values[0];
  return (
    <div className="data-box">
      <h2 id="box-header">Personal Data</h2>
      <div className="box-anchor" id="Personal" ></div>
      <form >
        <div className="input-row">
          <input type="text" placeholder="First Name" value={first} onChange={(e)=>{handleChange(e,index,"first","personal")}}  onBlur={onFocusOut} />
          <input type="text" placeholder="Last Name" value={last} onChange={(e)=>{handleChange(e,index,"last","personal")}} onBlur={onFocusOut}/>
        </div>
        <input type="text" className="long" placeholder="Job Title" value={job} onChange={(e)=>{handleChange(e,index,"job","personal")}} onBlur={onFocusOut}/>
        <textarea placeholder="Description..." col="5" rows="6" value={description} onChange={(e)=>{handleChange(e,index,"description","personal")}} onBlur={onFocusOut}></textarea>
      </form>
    </div>
  );
}

export { Personal };
