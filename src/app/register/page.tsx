import RegisterView from "@/components/UI/RegisterView";

import React from "react";


const Register = () => {
  return (
    <div className="flex flex-wrap justify-around items-center p-4">
      <div className="flex-1 max-w-md">
    <RegisterView/>
    </div>
    <div className="flex-1 max-w-lg mt-4 md:mt-0 hidden md:block">
      <img 
        src="https://static.vecteezy.com/system/resources/previews/029/726/216/non_2x/3d-purple-illustration-icon-of-using-smartphone-for-sign-up-or-login-to-profile-account-with-security-padlock-side-free-png.png" 
        alt="Login Illustration"
        className="w-full h-auto rounded-lg"
      />
    </div>
  </div>
);
};

export default Register
