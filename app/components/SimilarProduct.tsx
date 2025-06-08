import React from 'react'
import { NavLink } from 'react-router';

interface SimilarProductProps {
    mobileImageUrl: string;
    tableImageUrl: string;
    desktopImageUrl: string;
    title: string;
    slug: string;
}

const SimilarProduct = ({...props}: SimilarProductProps) => {
  return (
    <div className='flex flex-col items-center gap-5'>
        <div className='w-full rounded-xl h-fit md:h-72 flex items-center justify-center bg-gray-primary'>
            <img src={props.mobileImageUrl} className='h-auto w-full md:hidden md:w-auto md:object-cover mx-auto rounded-xl'/>
            <img src={props.tableImageUrl} className='h-full w-full hidden md:block lg:hidden md:w-auto md:object-cover mx-auto rounded-xl'/>
            <img src={props.mobileImageUrl} className='w-full hidden lg:block h-full md:w-auto md:object-cover mx-auto rounded-xl'/>
        </div>
        <span className='font-manrope text-[24px] tracking-[1.71px] uppercase font-bold text-black'>{props.title}</span>
        <NavLink to={`/product/${props.slug}`}>
            <button className='button-primary w-max'>see product</button>
        </NavLink>
    </div>
  )
}

export default SimilarProduct