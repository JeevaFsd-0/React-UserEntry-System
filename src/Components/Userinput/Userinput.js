import React, { useState } from 'react';
import "./Userinput.css";

const UserInput = ({addUser}) => {

    const [input, setInput] = useState({
        name: "",
        email: "",
        phone: "",
        image: "",
        address: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setInput((currValue) => {
            return {
                ...currValue,
                [name]: value,
            };
        });
    };


    const handleAdd = (e) => {
        e.preventDefault();
        addUser(input);
        setInput({
            name:"",
            email:"",
            phone:"",
            image:"",
            address:"",
        });
    };

  return (
    <form className="inputForm">
        <input 
            type="text" 
            name="name" 
            placeholder="Name"
            onChange={handleChange} 
            value={input.name}
        />
        <br/>
        <input 
            type="email" 
            name="email" 
            placeholder="Email"
            onChange={handleChange} 
            value={input.email}
        />
        <br/>
        <input 
            type="number" 
            name="phone" 
            placeholder="Phone Number"
            onChange={handleChange} 
            value={input.phone}
        />
        <br/>
        <input 
            type="url" 
            name="image" 
            placeholder="Image URL"
            onChange={handleChange} 
            value={input.image}
        />
        <br/>
        <textarea
            rows={4} 
            name="address" 
            placeholder="Address"
            onChange={handleChange} 
            value={input.address}
        />
        <br/>
        <button onClick={handleAdd}>Add User</button>
    </form>
  );
}

export default UserInput;