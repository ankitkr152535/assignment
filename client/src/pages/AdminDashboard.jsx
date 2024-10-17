import React from 'react'
import TableComp from '../components/TableComp';
import { useState, useEffect } from 'react';
import axios from 'axios';
// import { useAuthContext } from '../context/authContext';
import Navbar from '../components/Navbar';


const AdminDashboard = () => {

    
    const columns = [
        { Header: 'ID', accessor: 'id' },
        { Header: 'Name', accessor: 'name' },
        { Header: 'Email', accessor: 'email' },
        { Header: 'Phone Number', accessor: 'phone' },
        { Header: 'Message', accessor: 'message' },
    ];
    
    // const data = [
    //     { name: 'Alice Johnson', email: 'alice@example.com', phoneNumber: '555-1234', message: 'Hello, I am interested in your services.' },
    //     { name: 'Bob Smith', email: 'bob@example.com', phoneNumber: '555-5678', message: 'Can you provide more details about your offerings?' },
    //     { name: 'Charlie Brown', email: 'charlie@example.com', phoneNumber: '555-8765', message: 'I would like to schedule a consultation.' },
    //     { name: 'Diana Prince', email: 'diana@example.com', phoneNumber: '555-4321', message: 'What are your business hours?' },
    // ];

    const [data, setData] = useState([]);

    //function to fetch all contacts data
    const fetchAllContacts = async () => {
        try{
            const response = await axios.get("http://localhost:5000/api/getallcontacts");
            // const response = await axios.get(`${url}/getallcontacts`);
            setData(response.data.data);
        }catch(err){
            console.log("Error fetching all contacts data : ", err);
        }
    }

    useEffect(() => {
        //the promise method
        // axios.get("http://localhost:5000/api/getallcontacts")
        //     .then((res) => {
        //         setData(res.data.data);
        //         console.log("data", data);
        //     });
        fetchAllContacts();
    }, []);

    useEffect(() => {
        console.log("data", data);
    }, [data]);

    
  return (
    <div className=''>
        <Navbar className=''/>
        <div className='flex flex-col justify-center items-center mt-8'>
            <h1 className='text-4xl mb-8 font-bold'>Admin Dashboard</h1>
            <div className="container mx-auto p-4">
                <h1 className="text-2xl font-semibold mb-4 ml-8">Users Contacts</h1>
                <TableComp columns={columns} data={data} />
            </div>
        </div>
    </div>
  )
}

export default AdminDashboard