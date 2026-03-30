import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs'
import React from 'react'

function Header() {
  return (
    <div className='p-3 px-5 flex items-center justify-between shadow-md'>
      <div className='flex gap-3 items-center'>
        <img src={'./logo.svg'} width={30} height={30}/>
        <h2 className='font-bold text-xl'>Ai Short Video</h2>
      </div>
      <div className='flex gap-3 items-center'>
         <Button className='bg-[#8338ec]'>Dashboard</Button>
         <UserButton/>
      </div>
    </div>
  )
}

export default Header
