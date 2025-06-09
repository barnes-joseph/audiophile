import { NavLink } from "react-router";
import type { Route } from "./+types/home";
import ProductCategories from "~/components/ProductCategories";
import About from "~/components/About";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Audiophile" },
  ];
}

export default function Home() {
  
  return (
    <div className='bg-white'>
        <div className="flex bg-[#191919] flex-col lg:flex-row lg:justify-start gap-5 items-center justify-center bg-[url('/assets/home/mobile/image-header.jpg')] md:!bg-[url('/assets/home/tablet/image-header.jpg')] lg:!bg-[url('/assets/home/desktop/image-hero.jpg')] bg-no-repeat bg-cover bg-bottom md:bg-contain h-[500px]">
          <div className="flex flex-col gap-5 items-center lg:items-start justify-center lg:w-[80%] lg:max-w-[1200px] lg:mx-auto lg:px-10">
            <span className="overline-text text-white opacity-[50%]">New Product</span>
            <span className="uppercase font-manrope text-[36px] md:text-[56px] leading-[40px] md:leading-[58px] tracking-[1.29px] md:tracking-[2px] font-bold text-white">XX99 MARK II <br/> Headphones</span>
            <p className="font-manrope text-[15px] leading-[25px] tracking-[0px] font-medium opacity-[75%] text-white text-center lg:text-start">Experience natural, lifelike audio and <br/> exceptional build quality made for the <br/> passionate music enthusiast.</p>
            <NavLink to={`/product/xx99-mark-two-headphones`}>
              <button className="button-primary !px-8">See Product</button>
            </NavLink>
          </div>
        </div>
        <div className="w-full lg:w-[80%] lg:max-w-[1200px] lg:mx-auto mb-20">
        <ProductCategories/>
        <div className="px-5 md:px-10 flex flex-col gap-5 lg:gap-10 mt-20">
          <div className="rounded-xl bg-primary bg-[url('/assets/home/desktop/pattern-circles.svg')] bg-no-repeat bg-bottom lg:bg-bottom-left lg:bg-contain bg-cover px-5 w-full relative">
            <div className="py-16 flex flex-col items-center gap-5 lg:flex-row lg:gap-40 lg:pb-0 lg:pt-32 lg:items-start lg:justify-center">
              <img src='/assets/home/mobile/image-speaker-zx9.png' className="h-32 w-auto mx-auto md:hidden"/>
              <img src='/assets/home/tablet/image-speaker-zx9.png' className="hidden md:block lg:hidden h-40 w-auto"/>
              <img src='/assets/home/desktop/image-speaker-zx9.png' className="h-96 w-auto hidden lg:block"/>

              <div className="flex flex-col items-center lg:items-start gap-10">
                <span className="uppercase font-manrope text-[36px] lg:text-[56px] lg:leading-[58px] leading-[40px] lg:tracking-[2px] tracking-[1.29px] font-bold text-white text-center lg:text-start">zx9 <br/> speaker</span>
                <p className="text-center lg:text-start body-text text-white opacity-[75%]">Upgrade to premium speakers that are <br className="hidden md:block"/> phenomenally built to deliver truly remarkable <br className="hidden md:block"/> sound.</p>
                <NavLink to={'/product/zx9-speaker'}>
                  <button className="button-tertiary lg:!bg-[#4c4c4c]">see product</button>
                </NavLink>
              </div>
            </div>
          </div>
          <div className="rounded-xl bg-transparent w-full h-96 md:h-72 relative">
            <img src='/assets/home/mobile/image-speaker-zx7.jpg' className="absolute top-0 bottom-0 left-0 right-0 w-full h-full rounded-xl md:hidden"/>
            <img src='/assets/home/tablet/image-speaker-zx7.jpg' className="absolute top-0 bottom-0 left-0 right-0 w-full h-full object-cover rounded-xl hidden md:block lg:hidden"/>
            <img src='/assets/home/desktop/image-speaker-zx7.jpg' className="absolute top-0 bottom-0 left-0 right-0 w-full h-full object-cover rounded-xl hidden lg:block"/>
            <div className="flex flex-col justify-center px-5 md:px-10 absolute top-0 bottom-0 my-auto mx-0">
              <span className="font-manrope uppercase text-[28px] tracking-[2px] text-black">zx7 speaker</span>
                <NavLink to={'/product/zx7-speaker'}>
                  <button className="button-secondary w-max mt-5 lg:!bg-black lg:!text-white">see product</button>
                </NavLink>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:items-stretch gap-10 md:gap-5">
            <img src='/assets/home/mobile/image-earphones-yx1.jpg' className="w-full h-auto rounded-xl md:hidden"/>
            <img src='/assets/home/tablet/image-earphones-yx1.jpg' className="w-[50%] h-auto rounded-xl hidden md:block lg:hidden"/>
            <img src='/assets/home/desktop/image-earphones-yx1.jpg' className="hidden lg:block rounded-xl w-[50%] h-auto"/>
            <div className="bg-gray-primary md:flex-1 md:h-auto md:flex md:flex-col md:items-start md:justify-center rounded-xl px-5 md:px-auto mt-5 md:mt-0 py-10 lg:px-20">
              <span className="font-manrope uppercase text-[28px] tracking-[2px] text-black">YX1 Earphones</span>
              <NavLink to={'/product/yx1-earphones'}>
                <button className="button-secondary mt-5 lg:!bg-black lg:!text-white">see product</button>
              </NavLink>
            </div>
          </div>
        </div>
        </div>
        <About/>

    </div>
  );
}
