import ProductCategories from '~/components/ProductCategories'
import type { Route } from './+types/product-detail';
import productData from '~/data/data.json';
import SimilarProduct from '~/components/SimilarProduct';
import { Fragment } from 'react/jsx-runtime';
import { NavLink, useNavigate, useNavigation } from 'react-router';
import NumberInput from '~/components/NumberInput';
import { formatUSD } from '~/utils/currency-formatter';

export async function clientLoader({
    serverLoader,
  params,
}: Route.ClientLoaderArgs) {
    const selectedProduct = productData.filter(product => product.slug === params.slug);
    const serverData = await serverLoader();
    return selectedProduct.length > 0 ? {...serverData, ...selectedProduct[0]} : null;
}

export async function loader({ params }: Route.LoaderArgs) {
    const selectedProduct = productData.filter(product => product.slug === params.slug);
    
    return selectedProduct.length > 0 ? selectedProduct[0] : null;

}

const ProductDetail = ({loaderData}: Route.ComponentProps) => {
  const navigate = useNavigate();

    return (
    <div className='lg:w-[80%] lg:max-w-[1200px] lg:mx-auto'>
        <button className='body-text text-black opacity-[50%] px-5 md:px-10 my-5' onClick={()=>navigate(-1)}>Go Back</button>
        <section className='px-5 md:px-10 flex flex-col md:flex-row gap-5 md:gap-16 md:items-center mb-20'>
            <img src={loaderData?.image?.mobile} className='w-full md:hidden h-auto rounded-xl'/>
            <img src={loaderData?.image?.tablet} className='w-[40%] hidden md:block lg:hidden h-auto object-cover rounded-xl'/>
            <img src={loaderData?.image?.desktop} className='w-[40%] hidden lg:block h-auto object-cover rounded-xl'/>

            <div className='flex flex-col gap-5'>
                {loaderData?.new &&         <span className='overline-text text-primary'>new product</span>
            }
            <span className='font-manrope text-[28px] tracking-[1px] md:w-60'>{loaderData?.name}</span>
            <p className='body-text text-black opacity-[50%]'>{loaderData?.description}</p>
            <span className='font-manrope text-[18px] tracking-[1.29px] font-bold'>{loaderData?.price && formatUSD(loaderData.price)}</span>
            <div className='flex gap-5'>
                <div className='flex-1'>
                    <NumberInput minNumber={1}/>
                </div>
                <button className='button-primary flex-1'>add to cart</button>
            </div>
            </div>
        </section>
        <div className='flex flex-col lg:flex-row lg:gap-16 px-5 md:px-10'>
            <section className='lg:w-[50%] mb-20'>
            <span className='uppercase text-black font-manrope text-[24px] leading-[36px] tracking-[0.86px]'>features</span>
            <p className='body-text text-black opacity-[50%] mt-10 whitespace-pre-wrap'>{loaderData?.features}</p>
        </section>
        <section className='flex flex-col md:flex-row lg:flex-col lg:justify-start md:justify-between lg:w-[50%] mb-20'>
            <span className='uppercase text-black font-manrope text-[24px] leading-[36px] tracking-[0.86px]'>In the box</span>
            <div className='flex flex-col md:w-[50%] lg:w-full md:mt-0 lg:mt-10 gap-5 mt-10'>
                {
                    loaderData?.includes?.map((item, index) => {
                        return (
                            <div className='flex gap-10' key={index}>
                                <span className='text-primary font-manrope font-bold text-[15px] leading-[25px] tracking-[0px]'>{item.quantity}x</span>
                                <span className='text-black opacity-[50%] font-manrope font-medium text-[15px] leading-[25px] tracking-[0px]'>{item.item}</span>
                            </div>
                        )
                    })
                }
            </div>
        </section>
        </div>
        <section className='px-5 md:px-10  mb-20'>
        <div className='flex flex-col gap-5 md:hidden'>
            {loaderData?.gallery && Object.values(loaderData?.gallery)?.map((image, index) => {
                return (
                    <Fragment key={image.mobile}>
                        <img src={image.mobile} className='w-full h-auto rounded-xl'/>
                    </Fragment>
                )
            })}
        </div>
        <div className='gap-5 items-stretch hidden md:flex lg:hidden'>
            <div className='w-[40%] flex flex-col justify-between gap-5'>
                <img src={loaderData?.gallery?.first?.tablet} className='rounded-xl h-[50%] w-auto object-cover'/>
                <img src={loaderData?.gallery?.second?.tablet} className='rounded-xl h-[50%] w-auto object-cover'/>
            </div>
            <div className='w-[60%] h-auto'>
                <img src={loaderData?.gallery?.third?.tablet} className='rounded-xl h-full w-auto object-cover'/>
            </div>
        </div>
        <div className='gap-5 items-stretch hidden lg:flex'>
            <div className='w-[40%] flex flex-col justify-between gap-5'>
                <img src={loaderData?.gallery?.first?.desktop} className='rounded-xl h-[50%] w-auto object-cover'/>
                <img src={loaderData?.gallery?.second?.desktop} className='rounded-xl h-[50%] w-auto object-cover'/>
            </div>
            <div className='w-[60%] h-auto'>
                <img src={loaderData?.gallery?.third?.desktop} className='rounded-xl h-full w-auto object-cover'/>
            </div>
        </div>
        </section>
        <section className='flex flex-col items-center mb-20'>
            <h5>You may also like</h5>
            <div className='flex px-5 md:px-10 flex-col md:flex-row gap-5 mt-5'>
                {loaderData?.others.map(otherProduct => {
                    return (
                        <SimilarProduct slug={otherProduct.slug} tableImageUrl={otherProduct.image.tablet} desktopImageUrl={otherProduct.image.desktop} key={otherProduct.slug} title={otherProduct.name} mobileImageUrl={otherProduct.image.mobile}/>
                    )
                })}
            </div>
        </section>
        <ProductCategories/>
    </div>
  )
}

export default ProductDetail