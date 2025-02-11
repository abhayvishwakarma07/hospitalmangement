import React, { useState } from 'react'
import { __userapiurl } from '../Userapi.'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Ragistar() {
    const navigate=useNavigate();
     const [name , setName ]=useState()
     const [email , setEmail ]=useState()
     const [password , setPassword]=useState()  
     const [address , setAddress ]=useState()  
     const [city , setCity ]=useState()  
     const [role, setRole ]=useState()  
     const [gender, setGender ]=useState() 
     const [mobile, setMobile ]=useState()  

     const handalSubmit=()=>{
     var userdetails={"name":name,"email":email,"password":password,"mobile":mobile,"address":address,"city":city,"role":role,"gender":gender}
      console.log(userdetails);
         axios.post(__userapiurl+'save',userdetails).then((result)=>{
            setEmail(''),
            setCity('')
            setGender('')
            setName(''),
            setPassword('')
            setRole('')
            setMobile('')
            setAddress('')
            alert("ragister successfullay"); 
            navigate('/'); 
         }).catch((error)=>{
            console.log(error);
         })
     }

    return (
        <>
       <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-xl">
        <h1 className="text-2xl font-bold text-center mb-4 text-gray-700">
          Register
        </h1>
        <form>
          <div className="mb-3">
            <input
              type="text"
              className="border rounded w-full p-2"
              placeholder="Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              className="border rounded w-full p-2"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="border rounded w-full p-2"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="border rounded w-full p-2"
              placeholder="Mobile"
              required
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <select
              className="border rounded w-full p-2"
              required
              value={city}
              onChange={(e) => setCity(e.target.value)}
            >
              <option>Select City</option>
              <option>Indore</option>
              <option>Ujjain</option>
              <option>Bhopal</option>
            </select>
          </div>
          <div className="mb-3">
            <select
              className="border rounded w-full p-2"
              required
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option>Select Role</option>
              <option>Doctor</option>
              <option>Patient</option>
            </select>
          </div>
          <div className="mb-3">
            <label className="font-medium">Gender:</label>
            <div className="flex gap-4 mt-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  onChange={(e) => setGender(e.target.value)}
                />
                Male
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  onChange={(e) => setGender(e.target.value)}
                />
                Female
              </label>
            </div>
          </div>
          <div className="mb-3">
            <textarea
              className="border rounded w-full p-2"
              rows="4"
              placeholder="Address"
              required
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <button
            type="button"
            className="w-full p-2 text-white bg-blue-500 rounded hover:bg-blue-600 transition"
            onClick={handalSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
        </>
    )
}

export default Ragistar
