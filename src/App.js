import './App.css';

import From from './components/from';
import LineBreak from './components/linebreak';
import TypewriterEffect from './components/title';
import Projetos from './components/Projetos';
import About from './components/about';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <TypewriterEffect/>
          <From/>            
          <LineBreak/> 
      </header>
      <Projetos/>
      <About/>
    </div>
  );
}

export default App;
