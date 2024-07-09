// import logo from './logo.svg';
import './App.css';
import { TiHome } from "react-icons/ti";
// import Hello from './01/Hello';
// import './01/Hello.css'
// 내가 만든 component 함수는 태그가 됨 - 사용자 정의 태크
import MyDiv from './02/MyDiv';

function App() {
  return (
    <div className='App-header'>
      <main className='flex flex-col justify-center items-center
                      w-full md:w-4/5
                      h-full'>
        <header className='w-full h-16 bg-slate-50
                            flex justify-between
                            p-5 text-slate-800'>
          <h1 className='text-xl font-bold'>리액트실습</h1>
          <div><TiHome /></div>
        </header>
        <div className="w-full grow
                        flex flex-col justify-center items-center">
          {/* <Hello /> */}
          <MyDiv />
        </div>
        <footer className='w-full h-16
                            flex justify-center items-center
                            bg-black text-slate-200'>
          <p className='text-sm font-bold'>2024 여름 계절학기 소프트웨어 융합기초</p>
        </footer>
      </main>
    </div>
  );
}

export default App;