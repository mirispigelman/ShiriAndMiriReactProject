import React ,{useContext,ContextUser} from 'react'
import '../App.css'
import { useState } from 'react'
import fetchData from './FetchData';

const SignUpPart2 = () => {
    const {setUser}=useContext(ContextUser)
    
    //need to get the user name and the password from SignUp
    const [form, setForm] = useState({
        id: '',
        name: '',
        email: '',
        phone: '',
        adress: {
            street: '',
            suite: '',
            city: '',
            zipcode: '',
            geo: {
              lat: '',
              lng: ''
            }
        },
        company: {
            companyName: '',
            catchphrase: '',
            business: '',
        },
    });
    const update = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    }
    const updateAdress = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, adress: { ...form.adress, [name]: value } });
    }
    const updateGoe = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, adress: { ...form.adress, geo: { ...form.adress.geo, [name]: value } }});
    }
    const updateCompany = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, company: { ...form.company, [name]: value } });
    }
    const HandleForm  = async (event) => {
        event.preventDefault();
            //add new user to data base
            try{
                const response = await fetchData('users', 'POST',form);
                console.log(response);
                setUser(form.name);
                
                //save the user name in local storage
                localStorage.setItem("currentUser", JSON.stringify(form.name));
                //go to your home page
                navigate("/home");
            }
            catch(e){console.error('Error fetching:', error);}
        }
    
    return (
        <>
            <h3>please comlete the details</h3>
            <form onSubmit={HandleForm}>
                <MyInput
                    type="text"
                    name='id'
                    form={form}
                    placeholder="ID"
                    update={update}
                />
                <br />
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
                    form={form.adress}
                    name='street'
                    placeholder="Street"
                    update={updateAdress}
                    
                />
                <br />
                <MyInput
                    type="text"
                    form={form.adress}
                    name="suite"
                    placeholder="Suite"
                    update={updateAdress}
                    
                />
                <br />
                <MyInput
                    type="text"
                    form={form.adress}
                    name="city"
                    placeholder="City"
                    update={updateAdress}
                    
                />
                <br />
                <MyInput
                    type="text"
                    form={form.adress}
                    placeholder="Zipcode"
                    update={updateAdress}
                />
                <br />

                <h3>Geo</h3>
                <MyInput
                    type="text"
                    form={form.adress.geo}
                    name='lat'
                    placeholder="Latitude"
                    update={updateGoe}
                />
                <br />
                <MyInput
                    type="text"
                    form={form.adress.geo}
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

const MyInput = ({ form, name, type, update, placeholder}) => {
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