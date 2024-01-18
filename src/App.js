import logo from './react-2.svg';
import './App.css';
import Block1 from './Block1.js'
import Block2 from './Block2.js'
import Block3 from './Block3.js'
import Block4 from './Block4.js'
function App() {
  return (
    <div>
      <div >
        <Block1 />
        <Block2 />
        <Block3 />
      </div>
      <div>
        <Block4 />
      </div>
    </div>
  );
}

export default App;
