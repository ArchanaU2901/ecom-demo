import React from 'react'
import Link from 'next/link'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
const Product = () => {
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

    },
    {
      img: "/images/1.png",

      title: "T-shirt",

      price: "$70",

    },
    {
      img: "/images/1.png",

      title: "T-shirt",

      price: "$70",

    },
    {
      img: "/images/1.png",

      title: "T-shirt",

      price: "$70",

    },
    {
      img: "/images/1.png",

      title: "T-shirt",

      price: "$70",

    },
    {
      img: "/images/1.png",

      title: "T-shirt",

      price: "$70",

    },
    {
      img: "/images/1.png",

      title: "T-shirt",

      price: "$70",

    },

  ]
  return (
    <div>
      <div className="flex justify-center md:justify-between w-[80%] m-auto items-center p-[20px] flex-wrap">

        {
          data.map(pro => (

            <div className="flex pb-[10px] flex-col flex-wrap justify-center items-center m-auto w-[100%] md:w-[calc(33.33%-10px)] lg:w-[calc(25%-10px)] hover:translate-y-[-3px] ">

              <div className="flex flex-col bg-gray-300 h-[56vh] w-full text-center items-center">
                <Link href="/singleproduct">
                  <div className="w-full h-[45vh] flex">
                    <img className='w-full h-full ' src={pro.img} alt="" />
                  </div>
                </Link>
                <div className="text-xl flex justify-center items-center md:h-[8vh] text-center align-middle  w-full font-medium overflow-hidden text-ellipsis ">
                  {pro.title}
                </div>

                <div className="flex justify-between w-full font-normal px-[10px]">
                  <div className='text-yellow-700  flex items-center'>
                    <ion-icon name="star"></ion-icon>
                    {pro.price}
                  </div>

                  <div className='font-medium flex items-center text-green-600'>
                    <ion-icon name="calendar"></ion-icon>
                    <ShoppingCartOutlinedIcon/>
                  </div>

                </div>

              </div>

            </div>

          ))
        }







      </div>


    </div >
  )
}

export default Product