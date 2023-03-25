import React, {useState} from "react";

function Counter() {
  const [num, setnum] = useState(5)
  const dec = ()=>{
    if(num==1){
      setnum(1)
    }
    else{
      const a=num-1;
      setnum(a)
    }
  }

  const inc = ()=>{
    const a=num+1;
     setnum(a)
     
  }
  return (
    <div>
      <div className="counter flex items-center text-2xl justify-start">
       
        <div className=" shadow-md flex">
        <div onClick={dec} className="bg-gray-200 text-white w-8 flex items-center justify-center rounded-l-lg cursor-pointer">
          -
        </div>
        <div className="w-8 flex items-center justify-center border-[1px] border-gray-200">
          {num}
        </div>
        <div onClick={inc} className="bg-gray-200 text-white w-8 flex items-center justify-center rounded-r-lg cursor-pointer">
          +
        </div>
        </div>
      </div>
    </div>
  );
}

export default Counter;