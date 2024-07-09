import clock from './colock.png'
import './MyCom.css'

function MyCom() {
   const mycomDiv ={
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column'
      // "-" 이 기호 사용 못하고 카멜표기법으로 단어 시작마다 대문자
   }
   return (
      <div style={mycomDiv}>
         <p><img src={clock} alt='시계' style={{'width':'400px'}}/></p>
         <p>현재 시간 : {new Date().toLocaleTimeString()}</p>
      </div>
   );
}

export default MyCom ;