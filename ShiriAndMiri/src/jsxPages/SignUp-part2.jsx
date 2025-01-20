import React, { useContext } from 'react'
import '../App.css'
import { useState } from 'react'
import fetchData from '../service/FetchData.js';
import { ContextUser } from './ContextUser';
import { useNavigate, useLocation } from 'react-router-dom';

const SignUpPart2 = () => {
    const { setUser } = useContext(ContextUser)
    const location = useLocation();
     const { username, password } = location.state || {}; 
    const navigate = useNavigate();
    const [form, setForm] = useState({
      name:'',
      username:username,
      email:'',
       address:{
         street:'',
         suite:'',
         city:'',
         zipcode: '',
         geo: {
           lat: '',
           lng: ''
        }
      },
       phone: '',
       website: password,
       company: {
         name: '',
         catchPhrase: '',
         bs : ''
      }
    }
    );
    const update = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    }
    const updateAdress = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, adress: { ...form.address, [name]: value } });
    }
    const updateGoe = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, adress: { ...form.address, geo: { ...form.address.geo, [name]: value } } });
    }
    const updateCompany = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, company: { ...form.company, [name]: value } });
    }
    const HandleForm = async (event) => {
        event.preventDefault();
        try {
            const response = await fetchData('users', 'POST', form);
            setUser(response);
            localStorage.setItem("currentUser", JSON.stringify(response.id));
            navigate(`/users/${response.id}/home`);
        }
        catch (e) { 
            console.error('Error fetching:', error);
            alert('Error fetching data');
         }
    }

    return (
        <>
            <h3>please comlete the details</h3>
            <form onSubmit={HandleForm}>
                <MyInput
                    type="text"
                    name='name'
                    form={form}
                    placeholder="Name"
                    update={update}

                />
                <br />
                <MyInput
                    type="email"
                    name='email'
                    form={form}
                    placeholder="Email"
                    update={update}

                />
                <br />
                <MyInput
                    type="text"
                    name='phone'
                    form={form}
                    placeholder="Phone"
                    update={update}

                />
                <br />

                <h3>Address</h3>
                <MyInput
                    type="text"
                    form={form.address}
                    name='street'
                    placeholder="Street"
                    update={updateAdress}

                />
                <br />
                <MyInput
                    type="text"
                    form={form.address}
                    name="suite"
                    placeholder="Suite"
                    update={updateAdress}

                />
                <br />
                <MyInput
                    type="text"
                    form={form.address}
                    name="city"
                    placeholder="City"
                    update={updateAdress}

                />
                <br />
                <MyInput
                    type="text"
                    form={form.address}
                    placeholder="Zipcode"
                    update={updateAdress}
                />
                <br />

                <h3>Geo</h3>
                <MyInput
                    type="text"
                    form={form.address.geo}
                    name='lat'
                    placeholder="Latitude"
                    update={updateGoe}
                />
                <br />
                <MyInput
                    type="text"
                    form={form.address.geo}
                    name='lng'
                    placeholder="Longitude"
                    update={updateGoe}

                />
                <br />

                <h3>Company</h3>
                <MyInput
                    type="text"
                    form={form.company}
                    name='companyName'
                    placeholder="Company Name"
                    update={updateCompany}

                />
                <br />
                <MyInput
                    type="text"
                    form={form.company}
                    name='catchphrase'
                    placeholder="Catchphrase"
                    update={updateCompany}

                />
                <br />
                <MyInput
                    type="text"
                    form={form.company}
                    name='business'
                    placeholder="Business"
                    update={updateCompany}
                />
                <br />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

const MyInput = ({ form, name, type, update, placeholder }) => {
    return <input
        type={type}
        name={name}
        value={form[name]}
        placeholder={placeholder}
        onChange={update}
        required
    />
}
export default SignUpPart2