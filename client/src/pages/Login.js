import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/authContext';
import axios from 'axios';

import Navbar from '../components/Navbar';


const Login = () => {

    const { login } = useAuthContext();

    const navigate = useNavigate();

    // initial state 
    const initialState = {
        username: "",
        password: ""
    };

    const [loginData, setLoginData] = useState(initialState);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setLoginData((prevData) => ({...prevData, [name]: value}));
    };

    const verifyLoginCred = async (loginData) => {
        try {
            const response = await axios.post('http://localhost:5000/api/login', loginData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
    
            return response.data.token; 

        } catch (err) {
            console.log(err);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log("Login Data : ", loginData);

        // login("dummyToken");

        setLoginData(initialState);

        try {

            const token = await verifyLoginCred(loginData);

            if(token){
                login(token); //storing login data in context
                localStorage.setItem('token', token); // storing it in local storage
        
                setLoginData(initialState); //resetting login form

                navigate("/dashboard");
            }
            else{
                window.alert("Invalid Credentials");
            }

        } catch (error) {
            console.error("Login error: ", error);
        }

        navigate("/dashboard");
    }

  return (
    <div>
        <Navbar/>
        <div className='flex flex-col justify-center items-center py-36'>
            <h1 className='text-4xl mb-8 font-bold'>Login Page</h1>

            <div>
                <form onSubmit={handleSubmit} className='flex flex-col gap-3'>

                    <div className='flex gap-6 m-2'>
                        <label htmlFor='username'>Username</label>
                        <input type='text' id='username' name='username' 
                                value={loginData.username} onChange={handleChange} required
                                className='border border-gray-600 rounded-md w-[250px] h-[30px]'
                        />
                    </div>

                    <div className='flex gap-7 m-2'>
                        <label htmlFor='password'>Password </label>
                        <input type='password' id='password' name='password' 
                                value={loginData.password} onChange={handleChange} required
                                className='border border-gray-600 rounded-md w-[252px] h-[30px]'
                        />
                    </div>

                    <div className='flex mt-8 justify-center'>
                        <button type='submit' className='border bg-gray-200 rounded-md px-2 p-1 hover:bg-gray-400'>Login</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login