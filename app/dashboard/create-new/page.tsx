import React from 'react'
import SelectTopics from '../_components/SlectTopics'
function CreateNew() {
  return (
    <div className='md:px-20'>
        <h2 className='font-bold text-4xl text-[#8338ec] text-center'>
             Create New
        </h2>

        <div className='mt-10 shadow-md p-10 '>
            {/* Select Topic */}
            <SelectTopics />
            {/* Select Style */}

            {/* duration */}
            {/* create button */}
        </div>
      
    </div>
  )
}

export default CreateNew
