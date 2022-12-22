import './App.css';
import Cakes from './components/cakes/Cakes';
import IceCream from './components/ice-cream/IceCream';

function App() {
  return (
    <div className="App">
      Hello Redux
      <Cakes />
      <IceCream/>
    </div>
  );
}
export default App;


//redux: store + reducer + action