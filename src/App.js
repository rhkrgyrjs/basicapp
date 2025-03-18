import logo from './logo.svg';
import './App.css';

//import Hello from './01/Hello';
import { RiHomeHeartFill } from 'react-icons/ri';
//import MyClock from './02/MyClock';
//import MyDiv1 from './03/MyDiv1';
//import MyList from './04/MyList';
//import Lotto from './05/Lotto';
import Traffic from './06/Traffic';

function App() {
  return (
    <div className="flex flex-col w-full h-screen mx-auto">
      <header className="flex justify-between items-center text-xl font-bold h-20 p-10 bg-slate-200">
        <p>리액트 기초</p>
        <p><RiHomeHeartFill /></p>
      </header>
      <main className="grow w-full flex justify-center items-center overflow-y-auto">
        {/* <MyDiv1 /> */}
        {/* <MyList /> */}
        {/* <Lotto /> */}
        {/* <MyClock /> */}
        <Traffic />
      </main>
      <footer className="flex justify-center items-center h-20 bg-black text-slate-100">
        Copyright : Hyogun Gwak
      </footer>
    </div>
  );
}

// 외부에서 import 해서 쓸 수 있게 export함
export default App;
