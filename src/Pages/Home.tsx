import React from 'react'

type Props = {}

export default function Home({}: Props) {

    const RangeItem = [
        {
            id : 1,
            img : "public/range-img-1.webp",
            data : "Dining"
        },
        {
            id : 2,
            img : "public/range-img-2.webp",
            data : "Living"
        },
        {
            id : 3,
            img : "public/range-img-3.webp",
            data : "Bedroom"
        }
    ]

  return (
    <>
    <div className='banner-img px-14'>
        <div className="bg-[#FFF3E3] w-[35rem] p-10">
            <h5 className='text-[18px] font-semibold'>New Arrival</h5>
            <h1 className='text-[44px] font-bold text-[#B88E2F]'>Discover Our<br></br> New Collection</h1>
            <p className='text-[16px]  mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
            <button className='px-10 py-3 border-2 mt-4 border-[#B88E2F] bg-[#B88E2F] text-white hover:bg-white hover:text-[#B88E2F]'>BUY Now</button>
        </div>
    </div>
    <div className="mt-20">
        <h2 className='text-[30px] font-bold text-black text-center'>Browse The Range</h2>
        <p className='text-[17px] font-medium text-black text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className="flex justify-center mt-8">
            <div className="flex gap-14">
                {
                    RangeItem.map((item) => (
                        <div className="w-[25rem]" key={item.id}>
                            <img src={item.img} alt={item.img} />
                            <h5 className='mt-5 font-semibold text-center text-[18px]'>{item.data}</h5>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
    <div className="mt-20">
        <h2 className='text-[30px] font-bold text-black text-center'>Our Products</h2>
        <div className="flex justify-center">
            <div className="flex gap-10 w-[80%] flex-wrap justify-between mt-10">
                <div className="w-[19rem] bg-[#F4F5F7]">
                    <img src="public/product-img-1.webp" alt="" />
                    <div className="p-4 mt-2">
                        <h3 className='text-black text-[18px] font-semibold'>Syltherine</h3>
                        <p className='text-[#898989] text-[16px] font-medium'>Stylish cafe chair</p>
                        <div className="flex justify-between">
                            <h6 className='text-black text-[16px] font-semibold'>Rs 2.500.000</h6>
                            <h6 className='text-[#898989] text-[16px] font-medium line-through'>Rs 3.500.000</h6>
                        </div>
                    </div>
                </div>
                <div className="w-[19rem] bg-[#F4F5F7]">
                    <img src="public/product-img-2.webp" alt="" />
                    <div className="p-4 mt-2">
                        <h3 className='text-black text-[18px] font-semibold'>Potty</h3>
                        <p className='text-[#898989] text-[16px] font-medium'>Stylish cafe chair</p>
                        <div className="flex justify-between">
                            <h6 className='text-black text-[16px] font-semibold'>Rs 2.500.000</h6>
                            <h6 className='text-[#898989] text-[16px] font-medium line-through'>Rs 3.500.000</h6>
                        </div>
                    </div>
                </div>
                <div className="w-[19rem] bg-[#F4F5F7]">
                    <img src="public/product-img-3.webp" alt="" />
                    <div className="p-4 mt-2">
                        <h3 className='text-black text-[18px] font-semibold'>Lolito</h3>
                        <p className='text-[#898989] text-[16px] font-medium'>Stylish cafe chair</p>
                        <div className="flex justify-between">
                            <h6 className='text-black text-[16px] font-semibold'>Rs 2.500.000</h6>
                            <h6 className='text-[#898989] text-[16px] font-medium line-through'>Rs 3.500.000</h6>
                        </div>
                    </div>
                </div>
                <div className="w-[19rem] bg-[#F4F5F7]">
                    <img src="public/product-img-4.webp" alt="" />
                    <div className="p-4 mt-2">
                        <h3 className='text-black text-[18px] font-semibold'>Respira</h3>
                        <p className='text-[#898989] text-[16px] font-medium'>Stylish cafe chair</p>
                        <div className="flex justify-between">
                            <h6 className='text-black text-[16px] font-semibold'>Rs 2.500.000</h6>
                            <h6 className='text-[#898989] text-[16px] font-medium line-through'>Rs 3.500.000</h6>
                        </div>
                    </div>
                </div>
                <div className="w-[19rem] bg-[#F4F5F7]">
                    <img src="public/product-img-1.webp" alt="" />
                    <div className="p-4 mt-2">
                        <h3 className='text-black text-[18px] font-semibold'>Grifo</h3>
                        <p className='text-[#898989] text-[16px] font-medium'>Stylish cafe chair</p>
                        <div className="flex justify-between">
                            <h6 className='text-black text-[16px] font-semibold'>Rs 2.500.000</h6>
                            <h6 className='text-[#898989] text-[16px] font-medium line-through'>Rs 3.500.000</h6>
                        </div>
                    </div>
                </div>
                <div className="w-[19rem] bg-[#F4F5F7]">
                    <img src="public/product-img-2.webp" alt="" />
                    <div className="p-4 mt-2">
                        <h3 className='text-black text-[18px] font-semibold'>Muggo</h3>
                        <p className='text-[#898989] text-[16px] font-medium'>Stylish cafe chair</p>
                        <div className="flex justify-between">
                            <h6 className='text-black text-[16px] font-semibold'>Rs 2.500.000</h6>
                            <h6 className='text-[#898989] text-[16px] font-medium line-through'>Rs 3.500.000</h6>
                        </div>
                    </div>
                </div>
                <div className="w-[19rem] bg-[#F4F5F7]">
                    <img src="public/product-img-3.webp" alt="" />
                    <div className="p-4 mt-2">
                        <h3 className='text-black text-[18px] font-semibold'>Pingky</h3>
                        <p className='text-[#898989] text-[16px] font-medium'>Stylish cafe chair</p>
                        <div className="flex justify-between">
                            <h6 className='text-black text-[16px] font-semibold'>Rs 2.500.000</h6>
                            <h6 className='text-[#898989] text-[16px] font-medium line-through'>Rs 3.500.000</h6>
                        </div>
                    </div>
                </div>
                <div className="w-[19rem] bg-[#F4F5F7]">
                    <img src="public/product-img-4.webp" alt="" />
                    <div className="p-4 mt-2">
                        <h3 className='text-black text-[18px] font-semibold'>Potty</h3>
                        <p className='text-[#898989] text-[16px] font-medium'>Stylish cafe chair</p>
                        <div className="flex justify-between">
                            <h6 className='text-black text-[16px] font-semibold'>Rs 2.500.000</h6>
                            <h6 className='text-[#898989] text-[16px] font-medium line-through'>Rs 3.500.000</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex justify-center mt-12">
            <button className='px-14 py-2 border-2 border-[#B88E2F] bg-[#B88E2F] text-white hover:bg-white hover:text-[#B88E2F]'>Show More</button>
        </div>
    </div>
    <div className='bg-[#FCF8F3] flex justify-center items-center py-20 mt-20'>
            <div className="w-[80%] flex items-center">
                <div className="w-[30%]">
                    <h2 className='text-[30px] font-bold text-black'>50+ Beautiful rooms<br></br>
                    inspiration</h2>
                    <p>Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
                    <button className='px-10 py-2 border-2 mt-4 border-[#B88E2F] bg-[#B88E2F] text-white hover:bg-white hover:text-[#B88E2F]'>Explore More</button>
                </div>
                <div className="w-[70%]">
                    
                </div>
            </div>
    </div>
    </>
  )
}