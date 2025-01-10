import React from 'react'
import './App.css'

const SignUpPart2 = () => {
    //need to get the user name and the password from SignUp
    const [form, setForm] = useState({});
    const update = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    }
    const updateAdress = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, adress: { ...form.adress, [name]: value } });
    }
    const HandleForm = (event) => {
        event.preventDefault();
         localStorage.setItem("currentUser", JSON.stringify(userNam));
            console.log(localStorage.getItem("currentUser"));
            //add new user to data base
            const newUserData = {
                id,
                name,
                email,
                phone,
                // address: {
                //     street,
                //     suite,
                //     city,
                //     zipcode,
                //     geo: {
                //         latitude,
                //         longitude,
                //     },
                // },
                // company: {
                //     name: companyName,
                //     catchphrase,
                //     business,
                // },
            };
            //add to db.json
            //go to your home page
        }
    
    return (
        <>
            <form onSubmit={HandleForm}>
                <MyInput
                    type="number"
                    name='id'
                    form={form}
                    placeholder="ID"
                    onChange={update}
                    required
                />
                <br />
                <MyInput
                    type="text"
                    name='name'
                    value={form}
                    placeholder="Name"
                    onChange={update}
                    required
                />
                <br />
                <MyInput
                    type="email"
                    value={email}
                    name={email}
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <br />
                <MyInput
                    type="text"
                    value={phone}
                    placeholder="Phone"
                    onChange={(e) => setPhone(e.target.value)}
                    required
                />
                <br />

                <h3>Address</h3>
                <MyInput
                    type="text"
                    form={form.adress}
                    name='street'
                    placeholder="Street"
                    onChange={updateAdress}
                    required
                />
                <br />
                <MyInput
                    type="text"
                    value={form.adress}
                    name="suite"
                    placeholder="Suite"
                    onChange={(e) => setSuite(e.target.value)}
                    required
                />
                <br />
                <MyInput
                    type="text"
                    value={form.adress}
                    name="city"
                    placeholder="City"
                    onChange={(e) => setCity(e.target.value)}
                    required
                />
                <br />
                <MyInput
                    type="text"
                    value={form.adress}
                    placeholder="Zipcode"
                    onChange={(e) => setZipcode(e.target.value)}
                    required
                />
                <br />

                <h4>Geo</h4>
                <MyInput
                    type="text"
                    value={latitude}
                    placeholder="Latitude"
                    onChange={(e) => setLatitude(e.target.value)}
                    required
                />
                <br />
                <MyInput
                    type="text"
                    value={longitude}
                    placeholder="Longitude"
                    onChange={(e) => setLongitude(e.target.value)}
                    required
                />
                <br />

                <h3>Company</h3>
                <MyInput
                    type="text"
                    form={form}
                    name={'companyName'}
                    placeholder="Company Name"
                    onChange={update}
                    required
                />
                <br />
                <MyInput
                    type="text"
                    value={catchphrase}
                    placeholder="Catchphrase"
                    onChange={(e) => setCatchphrase(e.target.value)}
                    required
                />
                <br />
                <MyInput
                    type="text"
                    form={form}
                    name='business'
                    placeholder="Business"
                    onChange={(e) => setBusiness(e.target.value)}
                    required
                />
                <br />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

const MyInput = ({ form, name, type, update, placeholder, required }) => {
    return <input
        type={type}
        name={name}
        value={form[name]}
        placeholder={placeholder}
        onChange={update}
        required={required}
    />
}
export default SignUpPart2