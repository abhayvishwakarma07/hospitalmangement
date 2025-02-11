import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { __Appintment } from '../Userapi.'

function Appointment() {
    const navigate=useNavigate();
    const [email,setemail]=useState()
    const [name ,setname]=useState()
    const [date,setdate]=useState()
    const [mobile,setmobile]=useState()
    const [resion,setresion]=useState()
    const [output, setoutput]=useState()

    const handalSubmit=()=>{
        if (!name) return setOutput("*Name is required");
    if (!email) return setOutput("*Email is required");
    if (!mobile) return setOutput("*Mobile is required");
    if (!date)return setOutput("*date is require"); 
       const Appintment={"user":name,"email":email,"date":date,"mobile":mobile,"resion":resion}
       axios.post(__Appintment+'save',Appintment).then((res)=>{
         
         alert("appintment is shadule");
         navigate('/home');
       }).catch((err)=>{
        console.log(err);   
       })
    }
    return (
        <>
              <div className="flex justify-center items-center min-h-screen bg-gray-100">
                <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md">
                  <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">Doctor Appointment</h2>
                  <p>{output}</p>
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Full Name</label>
                      <input 
                        type="text" 
                        placeholder="Enter your name" 
                        className="mt-1 block w-full p-2 border rounded-lg focus:ring focus:ring-blue-300" 
                        required
                        value={name}
                        onChange={(e) => setname(e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Email</label>
                      <input 
                        type="email" 
                        placeholder="Enter your email" 
                        className="mt-1 block w-full p-2 border rounded-lg focus:ring focus:ring-blue-300" 
                        required
                        value={email}
                        onChange={(e) => setemail(e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                      <input 
                        type="tel" 
                        placeholder="Enter your phone number" 
                        className="mt-1 block w-full p-2 border rounded-lg focus:ring focus:ring-blue-300" 
                        required
                        value={mobile}
                        onChange={(e) => setmobile(e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Appointment Date</label>
                      <input 
                        type="date" 
                        className="mt-1 block w-full p-2 border rounded-lg focus:ring focus:ring-blue-300" 
                        required
                        value={date}
                        onChange={(e) => setdate(e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Message (Optional)</label>
                      <textarea 
                        placeholder="Any additional information..." 
                        className="mt-1 block w-full p-2 border rounded-lg focus:ring focus:ring-blue-300" 
                        rows="3"
                        value={resion}
                        onChange={(e) => setresion(e.target.value)}
                      ></textarea>
                    </div>
                    <button  
                      className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                    onClick={handalSubmit} >
                      Book Appointment
                    </button>
                  </form>
                </div>
              </div>
        </>
    )
}

export default Appointment
