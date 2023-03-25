import { React, useState } from 'react'
import Link from 'next/link';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
const Nav = () => {
    // navbar list created 
    const list = [
        {
            name: "Home",
            link: "/"
        },
        {
            name: "Search",
            link: "/card"
        },
        {
            name: "Contact",
            link: "/checkout"
        }
    ]



    // usestate
    const [nav, setnav] = useState(false);

    // functions
    const func = () => {
        setnav(!nav)
        if (!nav) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "auto"
        }
    }



    return (
        <div>
            <nav className={`border-b-2  ${nav ? "bg-blue-500" : "bg-white"}
              w-full  z-[1] py-8 md:py-6`}>
                <div className={`mx-[20px] flex justify-between items-center text-[20px] ${nav ? "text-white" : "text-[#1d4130]"} font-semibold`}>
                    <div className={`uppercase ${nav ? "text-white" : "text-[#1d4130]"} text-xl md:text-3xl`}>
                        <span className='md:text-[#1d4130]'>Ecom</span>
                    </div>

                    <div className={`flex list-none absolute items-center h-[134vh]  w-[80%] ${nav ? "left-0" : "-left-[100%]"} top-[116px] md:top-0 flex-col  md:static md:h-0 md:w-auto md:flex-row text-[18px] md:text-[#1d4130] text-white font-thin z-0 bg-blue-500`}>
                        <div className='md:flex w-full'>
                            {
                                list.map(pro => (
                                    <li key={pro.name} className="mx-[13px] my-[20px]">
                                        <Link href={pro.link}>{pro.name}</Link>
                                    </li>
                                ))
                            }
                            <div className="text-[18px] text-white md:hidden mx-[13px] my-[20px]">
                                Product
                            </div>
                        </div>
                    </div>

                    <div className='flex'>
                        <div className="text-[18px] mx-8 font-thin">
                             <ShoppingCartOutlinedIcon />
                        </div>
                        <div onClick={func} className="md:hidden uppercase font-thin text-[18px]">
                            <p> {nav ? "close" : "menu"}</p>
                        </div>
                    </div>






                </div>
            </nav>

        </div>
    );
}

export default Nav