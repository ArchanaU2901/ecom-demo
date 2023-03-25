import Link from 'next/link';
import React from 'react'

const Carts = () => {
    const data = [
        {
            img: "/images/1.png",

            title: "T-shirt",

            price: "$70",

        },
        {
            img: "/images/1.png",

            title: "T-shirt",

            price: "$70",

        }


    ]

    return (
        <div>

            <div id="about" className='pt-[60px] bg-[aliceblue] md:pt-[65px]'>
                <h1 className='text-center text-5xl'>CART</h1>
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

                            </div>

                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Carts