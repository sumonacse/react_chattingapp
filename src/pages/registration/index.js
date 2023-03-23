import React, { useState } from 'react'

const Registration = () => {

  let  [email , setEmail] = useState("");
  let  [fullname , setFullname] = useState("");
  let  [password , setPassword] = useState("");


  let  [emailerr , setEmailerr] = useState("");
  let  [fullnameerr , setFullnameerr] = useState("");
  let  [passworderr , setPassworderr] = useState("");



  let handleEmail = (e)=>{
      setEmail(e.target.value);
  };
  let handleFullName = (e)=>{
      setFullname(e.target.value);
  };
  let handlePassword = (e)=>{
      setPassword(e.target.value);
  };
  let handleSubmit = (e)=>{
    if(!email){

    }
    if(!fullname){
      
    }
    if(!password){

    }
  };





  return (
    <div className='flex'>
        <div className='w-2/4 flex justify-end'>
            <div className='mr-16 mt-[53px]' >
                 <h3 className='font-nunito font-bold text-4xl text-heading'>Get started with easily register</h3>
                 <p className='font-nunito font-regular text-xl text-secondary mt-3.5'>Free register and you can enjoy it</p>
                 <div className='relative mt-16'>
                     <input type="email" className='border border-solid border-secondary w-96 px-14 py-6 rounded-lg ' onChange={handleEmail}/>
                     <p className='font-nunito font-semibold text-sm text-heading  bg-[#fff]  absolute top-[-10px] left-[34px] px-[18px]'>Email Address</p>
                 </div>
                 <div className='relative mt-16'>
                     <input type="text" className='border border-solid border-secondary w-96 px-14 py-6 rounded-lg ' onChange={handleFullName}/>
                     <p className='font-nunito font-semibold text-sm text-heading  bg-[#fff]  absolute top-[-10px] left-[34px] px-[18px]'>Full name</p>
                 </div>
                 <div className='relative mt-16'>
                     <input type="password" className='border border-solid border-secondary w-96 px-14 py-6 rounded-lg ' onChange={handlePassword}/>
                     <p className='font-nunito font-semibold text-sm text-heading  bg-[#fff]  absolute top-[-10px] left-[34px] px-[18px]'>Password</p>
                 </div>
                 <button onClick={handleSubmit} className='w-96 bg-primary text-[#fff] rounded-full font-nunito font-semibold text-xl py-5  mt-12'>Sign up</button>
                 <p className='text-center w-96 font-open font-regular text-sm text-heading mt-[10px]'>Already  have an account ? <span className='font-bold text-[#EA6C00] '>Sign In</span></p>
            </div>
        </div>
        <div className='w-2/4'>
          <img className="w-full h-screen object-cover" src='images/registration.png'/>
        </div>
    </div>
  );
}

export default Registration

