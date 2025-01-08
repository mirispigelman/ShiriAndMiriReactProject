import React from 'react'
import './App.css'

export default function SignUp() {

    return (
        <>
        <form id="userForm">
                <input type="number" placeholder="ID" required/>
                <input type="text"  placeholder="Name" required/>
                <input type="email" placeholder="Email" required/>
                <input type="text"  placeholder="Phone" required/>

                
                <h3>Address</h3>
                <input type="text" placeholder="Street" required/>
                <input type="text" placeholder="Suite" required/>
                <input type="text" placeholder="City" required/>
                <input type="text" placeholder="Zipcode" required/>
                <h4>Geo</h4>
                <input type="text" placeholder="Latitude" required/>
                <input type="text" placeholder="Longitude" required/>

                <h3>Company</h3>
                <input type="text" placeholder="Company Name" required/>
                <input type="text" placeholder="Catchphrase" required/>
                <input type="text" placeholder="Business" required/>

                <button type="submit">Submit</button>
        </form>
      </>
    )
}
