import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return(
    <div className='grid grid-cols-1 md:grid-cols-2'>
      <div>
        <img src={'/auth.webp'} alt=' ' width={500} height={500}
        className='width-full object-contain'/>
      </div>
      <div className='flex justify-center items-center h-screen'><SignIn/></div>
    </div>
  )
}