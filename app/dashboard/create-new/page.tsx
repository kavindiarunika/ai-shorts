"use client"

import React, { useState } from 'react'
import SelectTopics from '../_components/SlectTopics'
import SelectStyle from '../_components/SelectStyle'
import SelectDuration from '../_components/SelectDuration'
import { Button } from '@/components/ui/button'
import axios from 'axios'
function CreateNew() {

  const [formData, setFormData] = useState<{ [key: string]: string }>({})

  const onHandleInputChange = (fieldName: string, fieldValue: string) => {
    setFormData(prev => ({
      ...prev,
      [fieldName]: fieldValue
    }))
  }

  const onCreateClickHandle =() =>{
    GetVideoScript();
  }

  const GetVideoScript =async() =>{
    const prompt ='write a script to generate '+formData.duration+' video on topic:'+formData.topic+' along with ai prompt in '+formData.imagestyle+' format for each scence and give me result in json format with imageprompt and context as field no plain text'
    console.log(prompt)
   
    // const result= await axios.post('/api/get-video' 
    //   ,{prompt:})
  }

  return (
    <div className='md:px-20'>
      <h2 className='font-bold text-4xl text-[#8338ec] text-center'>
        Create New
      </h2>

      <div className='mt-10 shadow-md p-10'>
        {/* Select Topic */}
        <SelectTopics onUserSelect={onHandleInputChange} />

        {/* Select Style */}
        <SelectStyle onUserSelect={onHandleInputChange} />

        {/* Duration */}
        <SelectDuration onUserSelect={onHandleInputChange} />

        {/* create button */}
<Button className='mt-10 w-full bg-[#8338ec] text-white hover:bg-[#6a2ca9]'
         onClick={onCreateClickHandle}>Create Short Video</Button>
      </div>
    </div>
  )
}

export default CreateNew