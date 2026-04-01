"use client"

import React,{   useState } from 'react'
import SelectTopics from '../_components/SlectTopics'
import SelectStyle from '../_components/SelectStyle'


function CreateNew() {
    const [fonrmData,setFormData] =useState<[]>([])
    const onHandleInputChange =(fieldName:string,fieldvalue:string) =>{

    }
  return (
    <div className='md:px-20'>
        <h2 className='font-bold text-4xl text-[#8338ec] text-center'>
             Create New
        </h2>

        <div className='mt-10 shadow-md p-10 '>
            {/* Select Topic */}
            <SelectTopics onUserSelect={onHandleInputChange} />
            {/* Select Style */}
            <SelectStyle />

            {/* duration */}
            {/* create button */}
        </div>
      
    </div>
  )
}

export default CreateNew
