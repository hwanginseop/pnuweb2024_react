import Card from "./Card";
import CData from "./CardData.json" ;

export default function CardMain() {
  console.log(CData);
  //cardData가 []에 들어있음 그래서 콘솔에 리스트 갬성으로 나옴
  const tags = CData.map(item => <Card imgSrc={item.imgUrl} 
                                    title={item.title} 
                                    content={item.content} />
  ) ;
  
  return (
    <div className="w-10/12 grid grid-cols-1 lg:grid-cols-2 gap-4">
      {/* grid 는 grid-col-n으로 세로로 n개하고 lg이상일때는 몇개로 하는 갬성 */}
      {/* <Card imgSrc={imgSrc} 
            title={title} 
            content={content} />  */}

      {tags}
    </div>
  )
}