import React, { useRef } from 'react';
export const Requests = () => {
    return (
        <div style={{marginLeft:'200px', marginBottom:'100px',marginTop:'100px', fontFamily:''}}>
            <br/>
            <br/>
           <h2 >Draft us an E-mail describing what kind of special request you would like from us.</h2>
<form style={{marginLeft:'200px', marginBottom:'20px', fontFamily:''}}>
  <label>
    Email:
    <input type="text" name="Email" style={{marginLeft:'10px', marginBottom:'20px'}}/>
  </label>
  <label style={{marginLeft:'25px'}}>
    Phone Number:
    <input type="text" name="number" style={{marginLeft:'10px'}}/>
  </label>
  <br/>
  <label>
    Request:<br/>
    <input type="text" name="Request" style={{blockSize:'400px', width:'550px'}}/>
  </label>
  <br/>

  <input type="submit" value="Submit" style={{marginLeft:'500px', marginTop:'20px', color:'white'}}/>

</form>
           
            </div>
             
    )
}
export default Requests;