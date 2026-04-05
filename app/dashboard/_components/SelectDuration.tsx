import React from 'react'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

function SelectDuration({onUserSelect}:{onUserSelect:(fieldName:string,fieldValue:string) => void}) {
  return (
    <div className='mt-7'>
      <h2 className='font-bold text-xl text-[#8338ec] '>Duration</h2>
      <p className='text-gray-500'>Select the duration of your video</p>
    <Select
  onValueChange={(value: string) => {
  

    if (value !== "custom Pro") {
     onUserSelect("duration", value);
    }
  }}
>

  <SelectTrigger className="w-full mt-2 p-6 text-lg">
    <SelectValue placeholder="Select Duration" />
  </SelectTrigger >
  <SelectContent>
   <SelectItem value='30 seconds'> 30 Seconds</SelectItem>
   <SelectItem value='60 seconds'> 60 Seconds</SelectItem>
  </SelectContent>
</Select>
    

    </div>
  )
}

export default SelectDuration
