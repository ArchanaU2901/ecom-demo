import React from 'react'
import Image from 'next/image'
import YourCard from './YourCard'
const Checkout = () => {
    const data = [
        {
            img: "/images/1.png",

            title: "T-shirt",

            price: " Price $70",

        },



    ]


    const list = [
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
        <div>
            <div class="mt-20">
                <h1 class="flex items-center justify-center font-bold text-blue-600 text-md lg:text-3xl">
                    Checkout Page
                </h1>
            </div>
            <div class="container ml-auto">
                <div class="flex flex-col w-full px-0 mx-auto md:flex-row">
                    <div class="flex flex-col md:w-full">
                        <h2 class="mb-4 font-bold md:text-xl text-heading ">Shipping Address
                        </h2>
                        <form class="justify-center w-full mx-auto" method="post" action>
                            <div class="">
                                <div class="space-x-0 lg:flex lg:space-x-4">
                                    <div class="w-full lg:w-1/2">
                                        <label for="firstName" class="block mb-3 text-sm font-semibold text-gray-500">First
                                            Name</label>
                                        <input name="firstName" type="text" placeholder="First Name"
                                            class="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" />
                                    </div>
                                    <div class="w-full lg:w-1/2 ">
                                        <label for="firstName" class="block mb-3 text-sm font-semibold text-gray-500">Last
                                            Name</label>
                                        <input name="Last Name" type="text" placeholder="Last Name"
                                            class="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" />
                                    </div>
                                </div>
                                <div class="mt-4">
                                    <div class="w-full">
                                        <label for="Email"
                                            class="block mb-3 text-sm font-semibold text-gray-500">Email</label>
                                        <input name="Last Name" type="text" placeholder="Email"
                                            class="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" />
                                    </div>
                                </div>
                                <div class="mt-4">
                                    <div class="w-full">
                                        <label for="Address"
                                            class="block mb-3 text-sm font-semibold text-gray-500">Address</label>
                                        <textarea
                                            class="w-full px-4 py-3 text-xs border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                                            name="Address" cols="20" rows="4" placeholder="Address"></textarea>
                                    </div>
                                </div>
                                <div class="space-x-0 lg:flex lg:space-x-4">
                                    <div class="w-full lg:w-1/2">
                                        <label for="city"
                                            class="block mb-3 text-sm font-semibold text-gray-500">City</label>
                                        <input name="city" type="text" placeholder="City"
                                            class="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" />
                                    </div>
                                    <div class="w-full lg:w-1/2 ">
                                        <label for="postcode" class="block mb-3 text-sm font-semibold text-gray-500">
                                            Postcode</label>
                                        <input name="postcode" type="text" placeholder="Post Code"
                                            class="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" />
                                    </div>
                                </div>
                                <div class="flex items-center mt-4">
                                    <label class="flex items-center text-sm group text-heading">
                                        <input type="checkbox"
                                            class="w-5 h-5 border border-gray-300 rounded focus:outline-none focus:ring-1" />
                                        <span class="ml-2">Save this information for next time</span></label>
                                </div>
                                <div class="relative pt-3 xl:pt-6"><label for="note"
                                    class="block mb-3 text-sm font-semibold text-gray-500"> Notes
                                    (Optional)</label><textarea name="note"
                                        class="flex items-center w-full px-4 py-3 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-600"
                                        rows="4" placeholder="Notes for delivery"></textarea>
                                </div>
                                <div class="mt-4">
                                    <button
                                        class="w-full px-6 py-2 text-blue-200 bg-blue-600 hover:bg-blue-900">Process</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    {/* <div class="flex flex-col w-full ml-0 lg:ml-12 lg:w-2/5 md:border-[2px] md:pl-3 md:ml-4">
                        <div class="pt-12 md:pt-0 2xl:ps-4">
                            <h2 class="text-xl font-bold">Your Order
                            </h2>
                            <div class="mt-8">
                                <div class="flex flex-col space-y-4">
                                    {
                                        data.map(pro => (
                                            <div class="flex space-x-4">
                                                <div>
                                                    <Image src={pro.img} alt="image"
                                                         height={80} width={80} />
                                                </div>
                                                <div>
                                                    <h2 class="text-xl font-bold">{pro.title}</h2>
                                                    <span class="text-red-600">{pro.price}</span> 
                                                </div>
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none"
                                                        viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                            d="M6 18L18 6M6 6l12 12" />
                                                    </svg>
                                                </div>
                                            </div>
                                        ))
                                    }

                                </div>
                            </div>
                            <div class="flex p-4 mt-4">
                                <h2 class="text-xl font-bold">ITEMS 2</h2>
                            </div>
                            <div
                                class="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                                Subtotal<span class="ml-2">$70.00</span></div>
                            <div
                                class="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                                Shipping Tax<span class="ml-2">$10</span></div>
                            <div
                                class="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                                Total<span class="ml-2">$80.00</span></div>
                        </div>
                    </div> */}

                    <div class="flex flex-col  ml-0 lg:ml-12 lg:w-3/5 md:border-[2px] md:pl-3 md:ml-4">
                        <YourCard />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout