import Carts from '@/components/Carts'
import Flex_cart from '@/components/Flex_cart'
import Subtotal from '@/components/Subtotal'
import React from 'react'


const card = () => {
    return (
        <div>
            {/* <Carts/> */}
            <div className='md:mt-[5vh] mt-[10px] md:border-[2px] md:mx-40 '>
            <Flex_cart/>
            <Subtotal/>
            </div>
        </div>
    )
}

export default card