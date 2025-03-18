import { useState, useEffect } from 'react';
import TrafficNav from './TrafficNav';

export default function Traffic() 
{
  // 전체 fetch 데이터
  const [tdata, setTdata] = useState();

  // 대분류 데이터
  const [c1, setC1] = useState();
  // 선택된 대분류
  const [selC1, setSelC1] = useState();

  const getFetchData = () => {
    let url = `https://api.odcloud.kr/api/15070282/v1/uddi:34f1f0b1-1289-49db-be1b-a4566880bb97?page=1&perPage=18&serviceKey=${process.env.REACT_APP_API_KEY}`;
    console.log(url);

    fetch(url)
     .then(resp => resp.json()) // 정상작동
     .then(data => setTdata(data.data)) // 데이터 저장해놓기
     .catch(err => console.log(err)) // 오류발생시
  };

  // 컴포넌트 생성시 fetch
  useEffect(() => {
  getFetchData();    
  }, []); // dependency array가 공백이면 한번만 호출

  // tdata가 변경되었을 때
  useEffect(() => {
    if (!tdata) return; // tdata 없을 때는 바로 리턴

    // 대분류 만들기
    let tm = tdata.map( item => item['사고유형대분류'] );
    tm = [... new Set(tm)];
    setC1(tm);
  }, [tdata]);
  return (
    <div className="w-full h-full flex flex-col justify-start items-center">
      {c1 && <TrafficNav title={'대분류'} c={c1} sel={selC1} setSel={setSelC1} />}
    </div>
  )
}
