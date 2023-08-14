import './App.css';
import 'bulma/css/bulma.min.css';
import MainLanding from './components/Body';
import NavHeaders from './components/Navigation';
import Meet from './components/Meet';
import Live from './components/Live';
import FruitCakes from './components/FruitCakes';

function App() {
  return (
    <div className="App">
      <NavHeaders />
      <MainLanding />
      <Meet />
      {/* <FruitCakes /> */}
      <Live />
    </div>
  )
}

export default App;
