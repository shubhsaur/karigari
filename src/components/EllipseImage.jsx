import React from 'react'

const EllipseImage = ({ image, alt, height, width, title }) => {
  return (
    <div className='flex flex-col items-center justify-center'>
        <div className=''>
            <img className={`h-[${height}px] w-[${width}px] rounded-[50%]`} src={image} alt={alt} />
            
        </div>
        <p className='text-[12px]'>{title}</p>
    </div>
  )
}

export default EllipseImage;