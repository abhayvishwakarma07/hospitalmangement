import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { __userapiurl } from '../Userapi.';

function Doctor() {
     
    const [list,setlist]=useState([]);
    const [user,setuser]=useState([]);

    useEffect(() => {
        axios     
          .get( __userapiurl+'fetch')
          .then((response) => {
            console.log(response);
                setlist(response.data)           
          }).catch((err)=>{
            console.log(err);   
           })
      }, []);

  return (
    <>
    <div className='justify-items-center content-center min-h-screen'>
        <div className='justify-items-center content-center'>
            <h1 className='font-bold text-4xl'>hellow</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam facere itaque ea perspiciatis blanditiis, expedita repellendus voluptates neque nulla quasi nam mollitia odio beatae.</p>

            <table className='border w-3/5'>
                <thead>
                    <tr className='border'>
                        <th style={{ border: "1px solid black", padding: "10px" }}>name</th>
                        <th style={{ border: "1px solid black", padding: "10px" }}>emai</th>
                        <th style={{ border: "1px solid black", padding: "10px" }}>contect</th>
                        <th style={{ border: "1px solid black", padding: "10px" }}>address</th>
                        <th style={{ border: "1px solid black", padding: "10px" }}>city</th>
                        <th style={{ border: "1px solid black", padding: "10px" }}>gender</th>  
                    </tr>
                </thead>
                <tbody>
                    {
                        list.map((row)=>(
                            <tr className='border'>
                                <td style={{ border: "1px solid black", padding: "10px" }}>{row.name}</td>
                                <td style={{ border: "1px solid black", padding: "10px" }}>{row.email}</td>
                                <td style={{ border: "1px solid black", padding: "10px" }}>{row.mobile}</td>
                                <td style={{ border: "1px solid black", padding: "10px" }}>{row.address}</td>
                                <td style={{ border: "1px solid black", padding: "10px" }}>{row.city}</td>
                                <td style={{ border: "1px solid black", padding: "10px" }} >{row.gender}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    </div>
    </>
  )
}

export default Doctor
