"use client"

import React, { useState } from 'react'
import SelectTopics from '../_components/SlectTopics'
import SelectStyle from '../_components/SelectStyle'
import SelectDuration from '../_components/SelectDuration'
import { Button } from '@/components/ui/button'
import axios from 'axios'
import CustomerLoading from '../_components/CustomerLoading'
import { v4 as uuidv4 } from 'uuid';


const scriptData ='it was a cold,dark night,the wind howled,and .....';


function CreateNew() {

  const [formData, setFormData] = useState<{ [key: string]: string }>({})
  const [loading,setloading] =useState<boolean>(false)
  const [videoScript, setVideoScript] = useState<{ contentText: string }[]>([]);
  const onHandleInputChange = (fieldName: string, fieldValue: string) => {
    setFormData(prev => ({
      ...prev,
      [fieldName]: fieldValue
    }))
  }

  const onCreateClickHandle =() =>{
   // GetVideoScript();
    generateAudioFile([{contentText:scriptData}])
  }

  const GetVideoScript =async() =>{
    setloading(true)
    const prompt ='write a script to generate '+formData.duration+' video on topic:'+formData.topic+' along with ai prompt in '+formData.imagestyle+' format for each scence and give me result in json format with imageprompt and context as field no plain text'
    console.log(prompt)
   
    const result= await axios.post('/api/get-video' 
      ,{prompt:prompt})
      .then(res =>{
        console.log(res.data)
        setVideoScript(res.data.result)
        generateAudioFile(res.data.result);
      })
      setloading(false)
  }

  const generateAudioFile =async(videoScriptData: { contentText: string }[])=>{

    let script ='';
    const id =uuidv4();
    videoScriptData.forEach((item: { contentText: string }) =>{
      script = script+item.contentText+' ';

    })

    await axios.post('/api/audio',{
      text:videoScriptData,
      id:id
    }).then(resp =>{
      console.log(resp.data)
    })

    console.log(script)

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

      <CustomerLoading loading={loading}/>
    </div>
  )
}

export default CreateNew