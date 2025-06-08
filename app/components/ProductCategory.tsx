import React from 'react'
import { NavLink } from 'react-router';

export interface ProductCategoryProps {
    category: string;
    imageUrl: string;
    link: string;
}

const ProductCategory = ({category, imageUrl, link}: ProductCategoryProps) => {
  return (
    <div className='rounded-xl relative h-36 w-full md:flex-1'>
        <img src={imageUrl} className='h-28 w-fit absolute z-5 top-[-40%] left-0 right-0 mx-auto my-0 bg-transparent drop-shadow-3xl'/>
        <div className='absolute bottom-0 top-0 flex flex-col items-center gap-3 p-3 justify-end left-0 h-full w-full bg-gray-primary rounded-xl'>
            <span className='font-manrope text-[15px] uppercase tracking-[1.07px]'>{category}</span>
            <NavLink className='button-tertiary-text flex gap-2 items-center' to={link}>Shop <img src='/assets/shared/desktop/icon-arrow-right.svg' className='h-2 w-fit'/></NavLink>
        </div>
    </div>
  )
}

export default ProductCategory