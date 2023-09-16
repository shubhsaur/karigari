import React from 'react'
import EllipseImage from './EllipseImage'
import Bestseller from "../resources/images/Ellipse1.png";

const Featured = () => {
  return (
    <div className='flex justify-evenly -translate-y-8'>
        <EllipseImage 
            image={Bestseller}
            alt="Bestseller image"
            height={61}
            width={61}
            title="Bestseller"
        />
    </div>
  )
}

export default Featured