
"use client"

import React, { useState } from 'react'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

function SelectTopics({onUserSelect}:{onUserSelect:(fieldName:string,fieldValue:string) => void}) {

    const options =['Custom Prompt',"Random AI Story",'Scary Story','Historical Facts','Bed Time Story','Motivational','Fun Facts'];
    const [selectOption,setSelectOption]=useState<string | null>();
    
  
  
    return (
    <div>
      <h2 className='font-bold text-xl text-[#8338ec] '>Content</h2>
      <p className='text-gray-500'>What is the topic of your video</p>
    <Select
  onValueChange={(value: string) => {
    setSelectOption(value);

    if (value !== "custom Prompt") {
     onUserSelect("topic", value);
    }
  }}
>

  <SelectTrigger className="w-full mt-2 p-6 text-lg">
    <SelectValue placeholder="Content Type" />
  </SelectTrigger >
  <SelectContent>
    <SelectGroup>
        {options.map((item, index)=>(
            <SelectItem value={item} key={index}>{item}</SelectItem>

        ))}
    
    </SelectGroup>
  </SelectContent>
</Select>
    

    {selectOption == 'Custom Prompt' && (
        <Textarea className='mt-3 ' 
        onChange={(e)=>onUserSelect('topic',e.target.value)}
        placeholder='write prompt on shich use on generate'/>
    )}
    </div>
  )
}

export default SelectTopics
