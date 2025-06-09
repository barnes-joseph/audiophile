import type { CartProduct } from "~/providers/cartProvider"

export interface Product{
  id: number
  slug: string
  name: string
  image: {
    mobile: string
    tablet: string
    desktop: string
  }
  category: string
  categoryImage: {
    mobile: string
    tablet: string
    desktop: string
  }
  new: boolean
  price: number
  description: string
  features: string
  includes: Array<{
    quantity: number
    item: string
  }>
  gallery: {
    first: {
      mobile: string
      tablet: string
      desktop: string
    }
    second: {
      mobile: string
      tablet: string
      desktop: string
    }
    third: {
      mobile: string
      tablet: string
      desktop: string
    }
  }
  others: Array<{
    slug: string
    name: string
    image: {
      mobile: string
      tablet: string
      desktop: string
    }
  }>
}


export const getCartProduct = (product: Product, quantity: number) => {
    return {name: product.slug.split('-').slice(0,-1).join(' '), slug: product.slug, price: product.price, quantity, image: product.image.desktop} as CartProduct;
}