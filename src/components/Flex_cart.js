import Image from 'next/image'
import React from 'react'
import Counter from './Counter'

const Flex_cart = () => {
    return (
        <div>
            <h1 className='text-center text-2xl font-bold mb-6 md:mb-12'>Your Cart</h1>
            <div>

                {/* heading start */}
                <div className='md:flex hidden justify-between flex-col md:flex-row w-[90%] m-auto items-center mb-8 border-b-2'>

                    <div className='flex flex-col md:flex-row md:ml-[10px] items-center'>

                        <div className='mr-[22vh] my-2 md:my-0'>
                            Items
                        </div>
                    </div>

                    <div className='my-2 md:my-0'>
                        Price
                    </div>
                    <div className='my-2 md:my-0'>
                        Quantity
                    </div>
                    <div className='my-2 md:my-0'>
                        Total
                    </div>

                </div>
                {/* heading end */}

            </div>
            <div className='flex justify-between flex-col md:flex-row w-[90%] m-auto items-center'>

                <div className='flex flex-col md:flex-row md:ml-[10px] items-center'>
                    <div>
                        <Image src="/images/1.png" width={50} height={50} />
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