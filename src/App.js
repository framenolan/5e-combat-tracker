import './App.css';
import Header from './components/Header/Header';
import Monster from './components/Monster/Monster';
import Player from './components/Player/Player';

function App() {
  return (
    <div className="App">
      <Header/>
      <section className='Battlefield'>
        <Player/>
        <Monster/>
      </section>
    </div>
  );
}

export default App;
