
import PokeCard from './Components/PokeCard/PokeCard';


function App() {
  return (
    <div className="App">
  
      <PokeCard
      id={4}
      name='Charmander'
      type="fire"
      Experience={62}
      />
      <PokeCard
        id={9}
        name='Baldazore'
        type="earth"
        Experience={77}
      />

      
    </div>
  );
}

export default App;
