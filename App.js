import './App.css';
import Menu from './components/Menu';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Services from './components/Services';

function App() {
  return (
    <div className="App">
      <Menu />
      <Home />
      <AboutMe />
      <Services />
    </div>
  );
}

export default App;
