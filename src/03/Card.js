import { useState, useEffect } from "react";
//화면에 변화가 생기면 이거 사용

export default function Card({ imgSrc, title, content }) {
  //컴포넌트 로컬변수
  // let n = 0 ;
  const [n, setN] = useState(0);//0이 초기 상태

  const handleClick = () => {
    // n = n + 1 ;
    setN(n + 1);
  }

  //컴포넌트 생성시 한번만 실행
  // useEffect(()=>{},[]);

  //특정 상태 변수가 변경 될때 마다 실행
  useEffect(() => {
    console.log(n)
  }, [n]);//[n]이 n이 변경 될때마다 실행
  return (
    <div className="flex justify-center items-top
                    w-full h-50 border border-slate-300
                    p-3">
      <div className="w-1/3 h-50 flex 
                      justify-center items-start">
        <img src={imgSrc} alt={title} />
      </div>
      <div className="w-2/3 h-50 flex flex-col
                      ml-5
                      justify-between items-start">
        <p className="text-2xl font-bold text-blue-900">
          {title}
        </p>
        <p className="text-sm text-slate-600">
          {content}
        </p>
        <p className="flex justify-end text-sm text-slate-900 text-right">
          <span className="text-lg font-bold cursor-pointer"
            onClick={handleClick}>
            ❤️ 좋아요
          </span>
          <span className="text-lg font-bold ml-5">
            {n}
          </span>
        </p>
      </div>
    </div>
  )
}