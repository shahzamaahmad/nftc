import React from 'react'

const SectionTwo = () => {
  return (
    <div className='container flex '>
      <div className='w-2/4  h-96  bg-red-500 '>
        <div className='m-14'><h1 className='font-extrabold'>Whats's New</h1></div>
        <div className='m-14 flex flex-col '>
          <h2 className='m-4' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, illo.</h2>
          <h2 className='m-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, rem.</h2>
          <h2 className='m-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa facere, aliquid nihil earum eveniet inventore?</h2>
        </div>
      </div>

      <div>
        <div className='w-2/4'>
          <h1 className='font-extrabold'>Related Links</h1>
        </div>
      </div>

    </div>
  )
}

export default SectionTwo