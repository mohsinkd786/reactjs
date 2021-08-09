import './App.css';
import Aboutus from './components/Aboutus';
import Home from './components/Home';

function App() {
  return (
    <>
      <div className="App">
        <h2>App Component</h2>
      </div>
      <Home message="How r u " />
      <Aboutus sample="Welcome to React" />
    </>
  );
}

export default App;
