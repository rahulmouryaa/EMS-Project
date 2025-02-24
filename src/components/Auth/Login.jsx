import { useState } from "react";

const Login = ({handleLogin}) => {

    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    const SubmitHandler = (e) => {
        e.preventDefault()
        handleLogin(email,password)
        setEmail("")
        setPassword("")

    }

  return (
    <div className='flex items-center justify-center h-screen w-screen'>
        <div>
            <form  className='flex flex-col items-center justify-center p-25 border-2 border-emerald-600 rounded-xl'
             onSubmit={(e) =>{
                SubmitHandler(e);
             }}
             >
                <input required className="border-2 border-emerald-400 bg-transparent text-2xl py-3 px-5 text-white rounded-full outline-none placeholder-te"  
                type="email" 
                value={email} 
                placeholder="Enter your email"
                onChange={(e)=>{
                    setEmail(e.target.value)
                }}
                />
                <input required className="border-2 border-emerald-400 bg-transparent text-2xl py-3 px-5 mt-5 text-white rounded-full outline-none"  
                type="password" value={password} placeholder="Enter password"
                onChange={(e)=>{
                    setPassword(e.target.value)
                }} 
                />
                <button className=" bg-emerald-400 text-2xl py-3 px-32 mt-8 text-white rounded-full outline-none">Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login
