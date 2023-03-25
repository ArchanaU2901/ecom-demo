import React from 'react'
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
const Subtotal = () => {

    const data = [
        {
            title: "Subtotal",
            price: "$70"
        },
        {
            title: "Coupon Code",
            price: "Add Coupon"
        },
        {
            title: "Grand Total",
            price: "$70"
        }
    ]
    return (
        <div className='w-full flex md:justify-end justify-center items-center m-auto md:mr-[25px]'>
            <div className='w-[60%] md:w-[30%] md:mr-[67px] '>
                {
                    data.map(pro => (
                        <div className='flex justify-between my-3 border-b-2 border-gray-200'>
                            <div>{pro.title}</div>
                            <div>{pro.price}</div>
                        </div>
                    ))
                }

                <div className='flex flex-col md:flex-row md:gap-6 md:mt-[56px] border-b-2 border-gray-200'>
                    <div>Congrats you're eligble for free shipping</div>
                    <div><LocalShippingIcon /></div>
                </div>
                <div className='bg-black p-[4px_12px] text-center text-white items-center font-bold md:mb-20'><button>Checkout</button></div>
            </div>
        </div>
    )
}

export default Subtotal