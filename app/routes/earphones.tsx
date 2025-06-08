import React from 'react'
import ProductCategories from '~/components/ProductCategories'
import ProductItem from '~/components/ProductItem';
import productData from '~/data/data.json';
import type { Route } from '../+types/root';

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Audiophile | Earphones" },
  ];
}
const earphonesData = productData.filter(product => product.category === 'earphones').sort((a, b) => b.new ? 1 : -1);
const Earphones = () => {
  return (
    <div>
        <div className='bg-[#191919] flex items-center justify-center py-5 md:py-16'>
            <h4 className='text-white'>earphones</h4>
        </div>
        <div className='lg:w-[80%] lg:max-w-[1200px] lg:mx-auto'>

        <div className='px-5 py-10 md:py-20 md:px-10 flex flex-col gap-20'>
            {earphonesData.map((product, index) => {
                return (
                    <ProductItem reversedescriptionOrder={index % 2 !== 0} description={product.description} isNew={product.new} desktopImageUrl={product.image.desktop} tabletImageUrl={product.image.tablet} mobileimageUrl={product.image.mobile} title={product.name} key={product.id}/>
                )
            })}
        </div>

        <ProductCategories/>
        </div>
    </div>
  )
}

export default Earphones