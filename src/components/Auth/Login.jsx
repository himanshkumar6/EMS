import { useState } from "react"

const Login = ({ handelLogin }) => {

  const [Email, setEmail] = useState("")
  const [Password, setPassword] = useState("")

  const submitHandler = (e) => {
    e.preventDefault()
    handelLogin(Email, Password)
  }


  return (
    <div className='flex items-center justify-center h-screen w-screen text-lg lg:text-2xl font-comic lg:mx-0'>
      <div className='border-2 border-red-500 px-10 py-10 rounded-3xl '>
        <h1 className='my-10 text-center text-xl'>Employee Management System (EMS)</h1>
        <form onSubmit={(e) => submitHandler(e)} className='flex flex-col justify-center items-center '>
          <input required className='border-2 border-emerald-300 rounded-full py-2 px-8 my-2 placeholder:text-white' type="email" placeholder='Enter your email' value={Email} onChange={(e) => {
            setEmail(e.target.value)
          }} />
          <input required className='border-2 border-emerald-300 rounded-full py-2 px-8 my-2 placeholder:text-white' type="password" placeholder='Enter password' value={Password} onChange={(e) => {
            setPassword(e.target.value)
          }} />
          <button className='bg-rose-600 px-10 py-2 rounded-lg mt-4 cursor-pointer'>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login
