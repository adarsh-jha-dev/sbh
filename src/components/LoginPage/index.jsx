import React from 'react'
import logo from "./images/Logo.png";
import backgroundImage from "./images/SignUpBg.png"

export default function Login() {
  return (
    <div className="bg-cover bg-no-repeat bg-center flex justify-center items-center min-h-screen w-full h-full" style={{backgroundImage: "url("+backgroundImage+")"}}>
      <img className="h-20 w-15 max-h-32 max-w-32 min-h-12 min-w-12 absolute right-4 top-4" src={logo} alt="Logo" />
      <form action="">
        <div className="inline-block px-5">
            <h1 className="text-3xl text-center mr-6 mb-2 font-bold">Welcome Back!</h1>
            <p className="text-lg font-bold text-center">Enter your credentials to access your account</p>
            <div className="relative w-full h-12 my-2 mr-24 px-4 text-lg font-bold">
                <div>Email address</div>
                <input type="text" placeholder="Enter your email id" className="placeholder:font-medium pl-3 rounded-lg bg-transparent outline-none border border-gray-500 w-full font-normal"/>
            </div>
            <div className="relative w-full h-12 my-2 mr-24 px-4 text-lg font-bold">
                <div>Password</div>
                <input type="password" placeholder="Enter the password" className=" placeholder:font-medium pl-3 rounded-lg bg-transparent outline-none border border-gray-500 w-full font-normal"/>
            </div>
            <div className="my-2 no-underline text-base">
                <a href="#" className="text-blue-700 font-medium">forgot password?</a>
            </div>
            <button type="submit" className=" w-full text-base h-7 bg-pink-600 text-white rounded-lg border-none outline-none font-medium mb-3">Login</button>
            <div className="text-center font-semibold">
                <p className='flex justify-center'>
                Don't have an account? <a href="#" className="text-blue-700 font-medium ml-1">Sign Up</a>
                </p>
            </div>
        </div>
      </form>
    </div>
  )
}
