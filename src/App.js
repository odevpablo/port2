import './App.css';
import From from './components/from';
import Carousel from './components/slideInfo';
import LineBreak from './components/linebreak';
import TypewriterEffect from './components/title';
import About from './components/about';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <TypewriterEffect/>
          <From/>
          <LineBreak/> 
          <Carousel/>
          <About/>  
      </header>
     
    </div>
  );
}

export default App;
