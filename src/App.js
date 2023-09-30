import './App.css';
import { useState } from 'react';

function App() {
  console.log();
  
  const [formData, setFormData] = useState({
    firstName : "",lastName : "",eamil :"",
    country : "India",stradd :"",city:"",
    state:"",psCode:"",comments:false,
    candidates:false, offers:false,pushNotifications:""
  })

  function changeHandler(event){
    const {name, value, checked, type} = event.target;
    setFormData((prev)=>({...prev,
    [name]:type === "checkbox" ? checked : value
    }) )

  }

  function submitHandler(event){
    event.preventDefault();
    console.log("Printing the Form Data");
    console.log(formData)
     
  }

  return(
  <div className='flex flex-col items-center mt-2'>
    <form onSubmit={submitHandler}>
    <label htmlFor="firstName">First Name</label><br/>
      <input
        type="text"
        placeholder="Ujjwal"
        name = "firstName"
        id="firstName"
        onChange={changeHandler}
        className='outline'
        value={formData.firstName}
      /><br/><br/>

      <label htmlFor="lastName">Last Name</label><br/>
      <input
        type="text"
        placeholder="Suman"
        name = "lastName"
        id="lastName"
        value={formData.lastName}
        onChange={changeHandler}
        className='outline'
      /><br/><br/>

      <label htmlFor="eamil">Email Id</label><br/>
      <input
        type="email"
        placeholder="ujjwal@abc.com"
        name = "eamil"
        id="eamil"
        value={formData.eamil}
        onChange={changeHandler}
        className='outline'
      /><br/><br/>

      <label>Country</label><br/>
      <select
       name='country'
       id='country'
       value={formData.country}
       onChange={changeHandler}
       className='outline'
      >
        <option>India</option>
        <option>Japan</option>
        <option>London</option>
        <option>Newzland</option>
      </select><br/><br/>
      <label htmlFor="stradd">Street address</label><br/>
      <input
        type="text"
        placeholder="123 abc"
        name = "stradd"
        id="stradd"
        value={formData.stradd}
        onChange={changeHandler}
        className='outline'
      /><br/><br/>
      <label htmlFor="city">City</label><br/>
      <input
        type="text"
        placeholder="Ahmedabad"
        name = "city"
        id="city"
        value={formData.city}
        onChange={changeHandler}
        className='outline'
      /><br/><br/>
      <label htmlFor="lastName">State/Province</label><br/>
      <input
        type="text"
        placeholder="Gujarat"
        name = "state"
        id="state"
        value={formData.state}
        onChange={changeHandler}
        className='outline'
      /><br/><br/>
      <label htmlFor="psCode">ZIP / Postal code</label><br/>
      <input
        type="text"
        placeholder="382421"
        name = "psCode"
        id="psCode"
        value={formData.psCode}
        onChange={changeHandler}
        className='outline'
      /><br/><br/>
      <fieldset>
        <legend>By Email</legend>
        <div className='flex'>
          <input
           id="comments"
           name ="comments"
           type = "checkbox"
           checked ={formData.comments}
           onChange={changeHandler}
           />
          <div>
            <label htmlFor="comments">Comments</label>
           <p>Get notified when someones posts a comment on a posting. </p>
          </div>
        </div>

        <div className='flex'>
          <input
           id="candidates"
           name ="candidates"
           type = "checkbox"
           checked ={formData.candidates}
           onChange={changeHandler}
           />
          <div>
            <label htmlFor="candidates">Candidates</label>
           <p>Get notified when a candidate applied for a job . </p>
          </div>
        </div>

        <div className='flex'>
          <input
           id="offers"
           name ="offers"
           type = "checkbox"
           checked ={formData.offers}
           onChange={changeHandler}
           />
          <div>
            <label htmlFor="offers">Offers</label>
           <p>Get notified when candidate accepts or reject an offer. </p>
          </div>
        </div>
      </fieldset><br/>

      <fieldset>
        <legend>Push Notifications</legend>
        <p>There are delivered via SMS to your mobile phone. </p>

        <input
          type ="radio"
          name = "pushNotifications"
          id = "pushEverything"
          value ="Everything"
          onChange={changeHandler}
        />
        <label htmlFor="pushEverything">Everything</label><br/>

        <input
          type ="radio"
          name = "pushNotifications"
          id = "pushEmail"
          value ="Same as email"
          onChange={changeHandler}
        />
        <label htmlFor="pushEmail">Same as email</label><br/>

        <input
          type ="radio"
          name = "pushNotifications"
          id = "nopushEverything"
          value ="No push notifications"
          onChange={changeHandler}
        />
        <label htmlFor="nopushEverything">No push notifications</label>

      </fieldset><br/>

      <button
      className='bg-blue-500 text-white font-bold rounded py-2 px-4'
      >Save</button>

    </form>
  </div>
  )
}

export default App;
