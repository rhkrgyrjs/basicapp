import TailButton from "../UI/TailButton";
import { useRef, useEffect } from 'react';

export default function MyRefAdd() 
{
    const x1 = useRef();
    const x2 = useRef();
    const x3 = useRef();

    const handleAdd = () => {
        if (!x1.current.value) 
        {
            alert('첫번째 값을 입력해주세요.'); 
            x1.current.focus();
            return;
        }
        if (!x2.current.value) 
        {
            alert('두번째 값을 입력해주세요.'); 
            x2.current.focus();
            return;
        }
        
        x3.current.value = parseInt(x1.current.value)+parseInt(x2.current.value);
    };

    const handleFocus = (x) => {
        x3.current.value = '';
        x.current.value = '';
    };

    useEffect(() => {
        x1.current.focus();
    }, []); // dependency array가 비어있으면 최초 한 번만 실행

  return (
    <div className="w-10/12 flex justify-center items-center">
        <div className="bg-slate-50 grid grid-cols-5 gap-2 m-5 p-5">
            <input type='number' ref={x1} onFocus={() => handleFocus(x1)} id='txt1' className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg text-center text-xl p-2.5" />
            <div className="flex justify-center items-center text-x1 font-bold">
                +
            </div>
            <input type='number' ref={x2} onFocus={() => handleFocus(x2)} id='txt2' className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg text-center text-xl p-2.5" />
            <TailButton caption={'='} bcolor='orange' handleClick={handleAdd} />
            <input type='number' ref={x3} id='txt3' className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg text-center text-xl p-2.5" />
        </div>
    </div>
  )
}
