import React, { useMemo, useState } from 'react';


const ReactMemo = () => {
 
    const [count,setCount] = useState(0);
    const [numbers] = useState([1,2,3,4,5,6,7,8,9,10]);

    const fillterNumbers = useMemo(()=>{
        console.log("Filtering numbers");
        return numbers.filter((num) => num%2 === 0);
    },[numbers])

  return (
    <div className='w-screen h-screen bg-white flex flex-row items-center justify-center'>
        <h1 className='text-xl text-black'>UseMemo</h1>
        <button onClick={()=>setCount(count+1)} className='text-md text-black mt-10'>Increment {count}</button>
        <div className='w-fit shadow-md h-48'>
            Even numbers : {fillterNumbers.join(', ')}
        </div>
    </div>
  );
};

export default ReactMemo;