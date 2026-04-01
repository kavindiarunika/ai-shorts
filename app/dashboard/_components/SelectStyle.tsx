import React, { useState } from 'react'

function SelectStyle() {

    const stypeOption=[
        {
            name:'Realsic',
            image:'/real.jfif'
        },
        {
            name:'cartoon',
            image:'/cartoon.jpg'
        },
        {
            name:'comic',
            image:'/comic.jfif'
        },
        {
            name:'water color',
            image:'/images.jfif'
        },
        {
            name:'gta',
            image:'/gta.jfif'
        },



    ]

    const [selectOption,setSelectOption ] =useState<String>();
  return (
    <div className='mt-7'>
        <h2 className='font-bold text-xl text-[#8338ec] '>Style</h2>
      <p className='text-gray-500'>Select your video style</p>
      

      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 mt-3 gap-5'>
        {stypeOption.map((item,index)=>(
            <div className='relative hover:scale-105 transition-all cursor-pointer' key={index}>

                <img src ={item.image} alt={item.name} width={100} height={100}
                className='h-48 object-cover rounded-lg w-full'
                onClick={()=>setSelectOption(item.name)} />
                <h2 className='absolute p-1 w-full  text-center bg-black bottom-0 rounded-b-lg text-white text-canter'>{item.name}</h2>
            </div>

        ))}
      </div>
    </div>
  )
}

export default SelectStyle
