import React from 'react'

const YourCard = () => {
    const list = [
        {
            ltext:"Product",
            rtext:"Subtotal"
        },
        {
            ltext:"Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
            rtext:"45000"
        },
        {
            ltext:"Lorem ipsum dolor sit amet consectetur",
            rtext:"45000"
        },
        {
            ltext:"SubTotal",
            rtext:"45000"
        },
        {
            ltext:"Estimate tax",
            rtext:"45000"
        },
        {
            ltext:"Total",
            rtext:"45000"
        }
    ]
  return (
    <div>
        <div className='w-full'>
            {
                list.map(pro => (
                    <div className='my-[30px] border-b-2 border-gray-300 flex justify-between mx-2'>
                        <div className=''>{pro.ltext}</div>
                        <div>{pro.rtext}</div>
                    </div> 
                ))
            }
           
        </div>
    </div>
  )
}

export default YourCard