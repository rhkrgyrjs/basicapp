import MyDiv3 from "./MyDiv3";


// probs는 object
// export default function MyDiv2(probs) -> 구조분해 방식으로 변경
export default function MyDiv2({dn1, dn2, dn3})
{

  return (
    <div className="flex 
    flex-col justify-center items-center
    p-5 
    m-10 
    w-3/4 
    h-3/4 
    bg-lime-700 
    text-white">
    <div className="w-full flex justify-start">
        {/* {`${probs.dn1} > ${probs.dn2}`} */}
        {`${dn1} > ${dn2}`}
    </div>
      {/* <MyDiv3 d1={probs.dn1} d2={probs.dn2} d3={probs.dn3} /> */}
      <MyDiv3 d1={dn1} d2={dn2} d3={dn3} />
    </div>
  )
}
