import React from 'react'
import type { ProductCategoryProps } from './ProductCategory'
import ProductCategory from './ProductCategory'

const productCategories: ProductCategoryProps[] = [
    {
      category: "Headphones",
      imageUrl: "/assets/categories/image-category-headphones.png",
      link: "/headphones"
    },
    {
      category: 'Speakers',
      imageUrl: '/assets/categories/image-category-speakers.png',
      link: '/speakers'
    },
    {
      category: 'Earphones',
      imageUrl: '/assets/categories/image-category-earphones.png',
      link: '/earphones'
    }
  ]
const ProductCategories = () => {
  return (
    <div className="flex flex-col md:flex-row md:gap-5 gap-20 items-center justify-center px-5 md:px-10 py-24">
        {productCategories.map((category, index) => {
          return (
            <ProductCategory key={index} {...category}/>
          )
        })}
    </div>
  )
}

export default ProductCategories