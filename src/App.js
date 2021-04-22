import logo from './logo.svg';
import './App.css';
import Loader from './components/Loader'
import Logo from './components/Logo'
import List from './components/List';
import Menu from './components/Menu';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Loader />
        <Logo />
        <List />
        <Menu />
      </header>
    </div>
  );
}

export default App;
