 //Contact.js
 import React from 'react'
 import Navbar from '../components/Navbar'
 import { useState } from 'react'
 import axios from 'axios'
 import { useNavigate } from 'react-router-dom'

 const Contact = () => {

    const navigate = useNavigate();

    // initializing form fields values. Also used for state management
    const initialState = {
        name: "",
        email: "",
        phone: "",
        message: ""
    };

    // passing the initial state to the form state
    const [formData, setFormData] = useState(initialState);

    // function function to handle change
    const handleChange = (e) => {
        const {name, value} = e.target;  // destructuring values from the target event, i.e., on change
        setFormData((prevFormData) => ({...prevFormData, [name]: value}));
    }

    const createContact = async (formData) => {
        try{
            const response = await axios.post("http://localhost:5000/api/insertcontact", formData);
            console.log("Contact created : ", response.data);
        }catch(err){
            console.log("Error creating contact : ", err);
        }
    }

    // submit funcion
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("form Data : ", formData);
        createContact(formData);
        setFormData(initialState);
        alert("Thankyou for contacting us")
        navigate("/")
    }

   return (
     <div>
         <Navbar />
         <div className='flex flex-col justify-center items-center py-20'>
            <h1 className='text-4xl mb-6 font-bold'>Contact Us</h1>

            <div>
                <form onSubmit={handleSubmit} className='flex flex-col gap-3'>

                    <div className='flex gap-10 m-2'>
                        <label htmlFor='name'> Name</label>
                        <input type='text' id='name' name='name' value={formData.name} onChange={handleChange} required className='border border-gray-600 rounded-md w-[300px] h-[30px]'/>
                    </div>
                    

                    <div className='flex gap-11 m-2'>
                        <label htmlFor='email'> Email</label>
                        <input type='email' id='eamil' name='email' value={formData.email} onChange={handleChange} required className='border border-gray-600 rounded-md w-[300px] h-[30px]'/>
                    </div>

                    <div className='flex gap-6 m-2'>
                        <label htmlFor='phone'> Phone Number</label>
                        <input type='number' id='phone' name='phone' value={formData.phone} onChange={handleChange} required className='border border-gray-600 rounded-md w-[250px] h-[30px]'/>
                    </div>

                    <div className='flex gap-16 m-2'>
                        <label htmlFor='message'> Message</label>
                        <textarea id='message' name='message' value={formData.message} onChange={handleChange} required className='border border-gray-600 rounded-md w-[250px] ml-[5px] h-[70px]'/>
                    </div>

                    <div className='flex mt-4 justify-center'>
                        <button type='submit' className='border bg-gray-200 rounded-md px-2 p-1 hover:bg-gray-400'>Contact Us</button>
                    </div>

                </form>
            </div>
         </div>
     </div>
   )
 }

 export default Contact