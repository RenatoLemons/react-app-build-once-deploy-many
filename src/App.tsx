import './App.css';
import HomePage from './pages/home';
import ConfigLoader from './components/configLoader';

function App() {
  return (
    <ConfigLoader>
      <HomePage />
    </ConfigLoader>
  );
}

export default App;
