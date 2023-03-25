import Image from 'next/image'
import React from 'react'
import Counter from './Counter'

const Flex_cart = () => {
    return (
        <div>
            <h1 className='text-center text-2xl font-bold mb-6 md:mb-12'>Your Cart</h1>
            <div className='flex justify-between flex-col md:flex-row w-[90%] m-auto items-center'>
                
                <div className='flex flex-col md:flex-row md:ml-[10px] items-center'>
                    <div>
                        <Image src="/images/1.png" width={150} height={150} />
                    </div>
                    <div className='mx-10 my-2 md:my-0'>
                        T-Shirt
                    </div>
                </div>

                <div className='my-2 md:my-0'>
                    $1200
                </div>
                <div className='my-2 md:my-0'>
                    <Counter />
                </div>
                <div className='my-2 md:my-0'>
                    $18000
                </div>

            </div>

        </div>
    )
}

export default Flex_cart