import React from 'react'
import Link from 'next/link'
const singleproduct = () => {
    const data = [
        {
            img: "https://cdn.shopify.com/s/files/1/0240/7285/products/WithinYourselfLongSleeveT-ShirtinBlack06_360x.jpg?v=1642719812",

            title: "T-shirt",

            price: "$70",

        },


    ]
    return (
        <div>
            <div id="about" className='pt-[60px] bg-[aliceblue] h-screen md:pt-[65px]'>
                <h1 className='text-center text-5xl'>SINGLE PRODUCTS</h1>
                {
                    data.map(pro => (
                        <div className='flex flex-col md:gap-4 md:flex-row m-[40px_auto] md:w-[95%] w-[85%] lg:w-[92%] justify-between'>
                            <div className='lg:w-[45%] flex  justify-center'>
                                <img className='w-[280px] h-[280px] rounded-3xl object-cover' src={pro.img} alt="" />
                            </div>
                            <div className='lg:w-[86%] text-black capitalize font-semibold text-xl text-justify 
                    flex-col flex flex-wrap m-auto align-middle'>


                                <p>{pro.title}</p>

                                <p>{pro.price}</p>

                                <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                                <div className='md:flex md:flex-row md:gap-8 mt-12 block '>
                                    <div className=''>
                                        <Link href="#" className='bg-red-500 p-[6px_50px] rounded-full flex items-center text-center m-auto justify-center mb-3'>Add to Cart</Link>
                                    </div>
                                    <div>
                                        <Link href="#" className='bg-red-500 p-[6px_50px] rounded-full flex items-center justify-center'>Buy Now</Link>
                                    </div>
                                </div>
                            </div>

                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default singleproduct