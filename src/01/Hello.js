import './Hello.css'
import MyCom from './MyCom'

function Hello() {
   const name = 'PNU';
   return (
      // fragment tag
      <>
         <div className='hellodiv'>
            {name}님 안녕하세유
         </div>
         <MyCom />
      </>
      // component는 1개만 가능
   );
}

export default Hello;