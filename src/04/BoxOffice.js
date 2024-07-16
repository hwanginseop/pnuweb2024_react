import { useState, useEffect, useRef } from "react";
//useStat는 변수 useEffect는 함수 
export default function BoxOffice() {
  //json data 저장변수
  const [tdata, setTdata] = useState([]); //영화 데이터 저장
  const [tags, setTags] = useState([]);  //테이블 row 요소를 저장
  const [selMv, setSelsMv] = useState([]); //선택한 영화 정보를 저장
  const inRef = useRef(); //날짜 입력 참조


  //데이터 가져오기
  const getData = () =>{
    let tmDt = inRef.current.value.replaceAll('-','')
    //inRef.current.value가 현재 날짜 예를 들어서 2000-01-24
    let url = 'https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?';
    url = url + `key=${process.env.REACT_APP_MV}`;
    url = url + `&targetDt=${tmDt}`;

    console.log(url);

    //fetch함수를 이용하여 오픈API 데이터 불러오기
    fetch(url)
      .then(resp => resp.json())
      .then(data => setTdata(data.boxOfficeResult.dailyBoxOfficeList))//링크타고 들어가서 내용 위치 확인하기
      ;
  }

  //날짜가 선택되었을때
  const handleSelDt = (e) => {
    //form이 들어가면 e를 넣고 밑에도 작성하기
    e.preventDefault();
    console.log(inRef.current.value)
    getData()
  }

  //영화가 선택되었을때
  const handleSelMv = (mv) => {
    console.log(mv)
    let tm =
      <>
        <span className="mr-2">{mv.movieNm}</span>
        <span className="mr-2 text-white">개봉일 : {mv.openDt}</span>
        <span className="mr-2 text-white">
          누적관객수 : {parseInt(mv.audiAcc).toLocaleString()}</span>
          {/* parseInt로 정수로 만들고 tolo~ 이걸로 쉼표찍음 천단위 */}
      </>
    setSelsMv(tm) //밑에 영화 정보 저장
  }


  //컴포넌트 생성시
  useEffect(() => {
    
  }, []);

  //tdata가 변경될때 실행
  useEffect(() => {
    if (tdata.length == 0) return;

    console.log(tdata)
    let tm = tdata.map(item =>
      <tr className="bg-white border-b hover:bg-gray-50 font-bold text-gray-900 hover:cursor-pointer
        " onClick={() => handleSelMv(item)}
        key={item.movieCd}>
        <th scope="row" className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap ">
          {item.rank}
        </th>
        <td className="px-6 py-2">
          {item.movieNm}
        </td>
        <td className="px-6 py-2 text-right">
          {parseInt(item.salesAmt).toLocaleString()}
        </td>
        <td className="px-6 py-2  text-right">
          {parseInt(item.audiCnt).toLocaleString()}
        </td>
        <td className="px-6 py-2">
          {parseInt(item.rankInten) > 0 ? <span className="text-red-600">▲</span>
            : parseInt(item.rankInten) < 0 ? <span className="text-blue-600">▼</span> : '-'}
          {parseInt(item.rankInten) != 0 && Math.abs(item.rankInten)}
          {/* 위에 코드는 변동이 있을때만 표시 값은 절대값으로 표시 예로 -3을 3으로 */}
        </td>
      </tr>);

    setTags(tm); //날짜에 맞는 테이블 row 정보를 저장

  }, [tdata]);

  return (
    <div className="text-black w-10/12
                    relative overflow-x-auto shadow-md sm:rounded-lg
                    ">
      <form className="flex justify-end items-center
                        mb-2 text-lg">
        <label htmlFor="dt" className="text-sm mr-3 font-bold">날짜선택</label>
        <input type='date' id='dt'
                    ref={inRef}
                    onChange={handleSelDt}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block ps-10 p-2.5 " />
      </form>

      {/* 이거 google에서 windtail table 검색해서 한거임 className으로 고치고 dark 지우고*/}
      <table className="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead className="text-lg text-gray-50 uppercase bg-black">
          <tr>
            <th scope="col" className="px-6 py-3">
              순위
            </th>
            <th scope="col" className="px-6 py-3">
              영화명
            </th>
            <th scope="col" className="px-6 py-3">
              매출액
            </th>
            <th scope="col" className="px-6 py-3">
              관객수
            </th>
            <th scope="col" className="px-6 py-3">
              증감
            </th>
          </tr>
        </thead>
        <tbody>
          {tags}
        </tbody>
      </table>
      <div className="flex justify-center items-center
                        px-6 py-2 font-bold
                        text-lg bg-black text-yellow-300">
        {selMv != '' && selMv}
      </div>

    </div>
  )
}