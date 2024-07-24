import logo from './logo.svg';
import { Random } from './components/Random';
import { Tag } from './components/Tag';

function App() {
  return (
    <div className="relative w-full min-h-screen h-full flex flex-col background items-center">

        <h1 className='bg-white uppercase rounded-xl w-[90vw] 
        text-center mt-[40px] py-4 text-3xl font-bold'>
          Random Gifs
        </h1>

        <div className='flex flex-col w-full items-center gap-y-10 mt-7'>
          <Random/>

          <Tag/>

        </div>

    </div>
  );
}

export default App;
