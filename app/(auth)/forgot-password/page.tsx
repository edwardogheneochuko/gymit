import React from 'react'
import ForgotPassword from '@/src/components/auth/Forgot-password'


const page = () => {
  return (
    <div className='w-full h-screen flex relative overflow-hidden bg-black'>
        <div className='w-[40%] h-screen max-md:hidden'>
            open
        </div>
      <div className='w-full h-screen overflow-y-auto overflow-x-hidden'>
        <div className='flex items-center max-md:justify-center h-full sm:w-[600px] 
        w-[100%] md:px-[8rem] px-[2rem]'>
            <ForgotPassword />
        </div>
      </div>
    </div>
  )
}

export default page
