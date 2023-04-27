import './App.css';
import PokeCard from './Components/PokeCard/PokeCard';

function App() {
  return (
    <div className="App">
      <PokeCard
      id={4}
      name='Charmander'
      Type='Fire'
      Experience={62}
      />
      
    </div>
  );
}

export default App;
