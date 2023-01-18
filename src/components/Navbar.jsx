import React from 'react'
import nftc from './images/nftcc.png';
import aazadi from './images/aazadi.png'
import swatch from './images/swatch.png'

const Navbar = () => {
  return (
    <>
      <div className='flex flex-row justify-between border-2 mt-5 place-content-center items-center'>
        <div className='flex flex-row'>
          <h3 className=' ml-14 mr-4 '>भारत सरकार</h3>
          <h3 className=''>GOVERMENT OF INDIA</h3>
        </div>
        <div className='flex flex-row justify-between items-center'>
          <h3><a href="#">SKIP TO MAIN CONTENT</a></h3>
          <img src="https://dummyimage.com/40x40" alt="" />
          <img src="https://dummyimage.com/40x40" alt="" />
          <img src="https://dummyimage.com/40x40" alt="" />
          <img src="https://dummyimage.com/40x40" alt="" />
          <h3 className='mr-14'> <a href="#">हिन्दी</a> </h3>
        </div>

      </div>

      <div className='flex flex-row justify-between mt-1 mx-14 '>
        <div className='flex felx-row items-center place-content-center'>
          <div className=''><img width={200} height={200} src={nftc} alt="image not found " /></div>
          <div className='font-sans'>
            <h1>National Federation of Tourism</h1>
            <h1>and Transport Cooperative of India Ltd.</h1></div>
        </div>
        <div className='flex felx-row'>
          <div><img width={200} height={200} src={aazadi} alt="" /></div>
          <div className='mt-9'><img width={200} height={200} src={swatch} alt="" /></div>
        </div>
      </div>

    </>
  )
}

export default Navbar
// border - solid