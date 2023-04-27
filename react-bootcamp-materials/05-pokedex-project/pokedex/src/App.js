
import PokeCard from './Components/PokeCard/PokeCard';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header/>
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
