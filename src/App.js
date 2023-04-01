import './App.css';
import 'bulma/css/bulma.min.css';
import MainLanding from './components/Body';
import NavHeaders from './components/Navigation';

function App() {
  return (
    <div className="App">
      <NavHeaders />
      <MainLanding />
    </div>
  )
}

export default App;
