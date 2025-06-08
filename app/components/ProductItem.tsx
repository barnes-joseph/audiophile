import { NavLink } from "react-router";

interface ProductItemProps {
    isNew: boolean;
    mobileimageUrl: string;
    tabletImageUrl: string;
    desktopImageUrl: string;
    title: string;
    description: string;
    reversedescriptionOrder: boolean;
    slug: string;
}

const ProductItem = ({...props}: ProductItemProps) => {
  return (
    <div className={`flex flex-col ${props.reversedescriptionOrder ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-5 items-center justify-center lg:gap-16`}>
        <div className="bg-gray-primary w-full lg:w-[50%] h-fit rounded-xl">
            <img src={props.mobileimageUrl} className='w-full h-60 md:hidden object-cover rounded-xl'/>
            <img src={props.tabletImageUrl} className='hidden md:block w-full h-96 lg:hidden object-contain rounded-xl'/>
            <img src={props.desktopImageUrl} className='hidden lg:block w-full h-96 object-contain rounded-xl'/>

        </div>
<div className={`flex flex-col items-center justify-center lg:items-start gap-5 lg:w-[50%]`}>
            {props.isNew &&         <span className='overline-text text-primary'>new product</span>
            }
        <span className='font-manrope text-[28px] uppercase block text-center lg:text-start text-black tracking-[1px] md:w-60'>{props.title}</span>
        <p className='text-center lg:text-start body-text opacity-[50%] md:w-[80%] lg:w-full'>{props.description}</p>
        
        <NavLink to={`/product/${props.slug}`}>
            <button className='button-primary w-max'>see product</button>
        </NavLink>
</div>
    </div>
  )
}

export default ProductItem