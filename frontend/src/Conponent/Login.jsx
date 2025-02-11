import axios from 'axios'
import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { __userapiurl } from '../Userapi.'

function Login() {
    const navigate=useNavigate();
    const [email, setEmail] =useState()
    const [password ,setPassword] =useState()
    const [output,setoutput]=useState();

    const handleSubmit=(()=>{
         if(!email) return setoutput("email is require")
         if(!password) return setoutput("passsword is require")

        const userDtails={"email":email,"password":password}
        axios.post(__userapiurl+'login',userDtails).then((res)=>{
            console.log(res)
           const user=res.data.userDetails.role
           user=="Doctor"?navigate('/doctor'):navigate('/home')
        }).catch((err)=>{
          alert("details was wrong")
            setEmail('');
            setPassword('')
            console.log(err)
        })

    }) 

  return (
    <>
   <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm p-6 bg-white shadow-2xl rounded-2xl">
        <h1>{output}</h1>
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-700">Log In</h1>
        
        <div className="mb-4">
          <label className="block text-gray-600 mb-1">Email</label>
          <input
            type="email"
            className="border rounded w-full p-2"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-600 mb-1">Password</label>
          <input
            type="password"
            className="border rounded w-full p-2"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          className="w-full p-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600 transition"
          onClick={handleSubmit}
        >
          Log In
        </button>

        <p className="text-center text-gray-500 mt-3">or</p>

        <Link to="/Signup">
          <button className="w-full p-2 bg-green-500 text-white font-bold rounded hover:bg-green-600 transition">
            Sign Up
          </button>
        </Link>
      </div>
    </div>
    </>
  )
}

export default Login



