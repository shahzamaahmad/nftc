import React from 'react'
import Crousal from './Crousal'

const Navigation = () => {
  return (
    <div>
      <div>
        <ul className='flex flex-row justify-around bg-blue-500 text-white items-center font-bold '>
          <li className='bg-red-600'><img src="https://dummyimage.com/40x40" alt="image" srcset="" /></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Tourism Project</a></li>
          <li><a href="#">Transport Project</a></li>
          <li><a href="#">Other Project</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">Media</a></li>
          <li><a href="#">RTI</a></li>
          <li><a href="#">Tenders</a></li>
          <li><a href="#">Public Grivancas</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Navigation