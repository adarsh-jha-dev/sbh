import React from "react";
// import "./style.css";
import logo from "./images/Logo.png";
import backgroundImage from "./images/SignUpBg.png"

export default function SignUp() {
  return (
    <div className="bg-cover bg-no-repeat bg-center flex justify-center items-center min-h-screen w-full h-full" style={{backgroundImage: "url("+backgroundImage+")"}}>
      <img className="h-20 w-15 max-h-32 max-w-32 min-h-12 min-w-12 absolute right-4 top-4" src={logo} alt="Logo" />
      <form action="">
        <div className="inline-block px-5">
            <h1 className="text-3xl text-center mr-6 mb-2 font-bold">Get Started Now</h1>
            <div className="relative w-full h-12 my-2 mr-24 px-4 text-lg font-bold">
                <div>Name</div>
                <input type="text" placeholder="Enter your name" className="placeholder:font-medium pl-3 rounded-lg bg-transparent outline-none border border-gray-500 w-full font-normal"/>
            </div>
            <div className="relative w-full h-12 my-2 mr-24 px-4 text-lg font-bold">
                <div>Email address</div>
                <input type="text" placeholder="Enter your email id" className="placeholder:font-medium pl-3 rounded-lg bg-transparent outline-none border border-gray-500 w-full font-normal" />
            </div>
            <div className="relative w-full h-12 my-2 mr-24 px-4 text-lg font-bold mb-5">
                <div>Password</div>
                <input type="password" placeholder="Enter the password" className="placeholder:font-medium pl-3 rounded-lg bg-transparent outline-none border border-gray-500 w-full font-normal"/>
            </div>
            <div className="termsAndPolicy">
                <label className="text-lg font-normal text-center m-5 flex">
                <input type="checkbox"/> <p className=" ml-1">I agree to the terms & policy</p>
                </label>
            </div>
            <button id='submit' type="submit" className=" w-full text-base h-7 bg-pink-600 text-white rounded-lg border-none outline-none font-medium mb-3">Signup</button>
            <div className="text-center font-semibold">
                <p className='flex justify-center'>
                Have an account? <a href="#" className="text-blue-700 font-medium ml-1"> Login</a>
                </p>
            </div>
        </div>
      </form>
    </div>
  );
}
