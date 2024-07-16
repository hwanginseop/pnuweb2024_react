import { useState, useEffect, useRef } from "react"
import GalCard from "./GalCard";

export default function GalMain() {
  //상태변수
  const [tdata, setTdata] = useState([]); //데이터를 저장하는 상태 변수
  const [tags, setTags] = useState([]);  //렌더링할 태그를 저장하는 상태 변수
  const inRef = useRef();  //입력 필드 참조 변수

  //데이터 가져오기
  const getData = (kw) => {
    console.log(kw)
    let url = `https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?`
    url = url + `serviceKey=${process.env.REACT_APP_API_KEY}`
    url = url + `&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A`
    url = url + `&keyword=${kw}&_type=json`
    console.log(url)

    fetch(url)
      .then(resp => resp.json())
      .then(data => setTdata(data.response.body.items.item))//링크타고 들어가서 내용 위치 확인하기
    // .error(err=>console.log(err))
  }

  //확인
  const handleClick = (e) => {
    //form으로 묶여있음
    e.preventDefault();
    let kw = encodeURI(inRef.current.value);//인코딩 필요하다고 적혀있어서 하는거임
    getData(kw)
  }

  //맨처음 한번
  useEffect(() => {
    //let kw = encodeURI('부산역') ;

    //getData(kw)
  }, [])

  //tdata가 변경되었을대
  useEffect(() => {

    let tm = tdata.map(item =>
      <GalCard
        galTitle={item.galTitle}
        galWebImageUrl={item.galWebImageUrl}
        galPhotographyLocation={item.galPhotographyLocation}

        key={item.galContentId} />
    );
    setTags(tm)
  }, [tdata])

  return (
    <div className="flex flex-col">
      <form className="w-full flex m-5">
        <input type='text' id='txt1' 
         ref={inRef}
         //밑에도 tailwind input 쳐서 가져온거
         className="bg-gray-50 border border-gray-300 text-gray-900"  placeholder="문자를 입력하세요" required/>
        <button onClick={handleClick}
          className="bg-blue-700 text-white p-5 text-lg" >
            확인
            </button>
      </form>
     
      <div className="text-black grid grid-cols-1 md:grid-cols-3 gap-4">
      {tags}
    </div>
    </div>
  )
}
