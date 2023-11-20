import './App.css';
import From from './components/from';
import Carousel from './components/slideInfo';
import LineBreak from './components/linebreak';
import About from './components/about';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='persondev'>odevpablo</div>
          <From/>
          <LineBreak/> 
          <section className='viewcarousel'>
            <Carousel/>
          </section>
            <About/>
      </header>
     
    </div>
  );
}

export default App;
