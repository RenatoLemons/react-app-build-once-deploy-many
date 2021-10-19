import { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { useDynamicConfig } from './DynamicConfigState';

function App() {
  const { loading, error, config, fetchDynamicConfig } = useDynamicConfig();

  useEffect(() => {
    fetchDynamicConfig();
  }, []);

  if (loading) {
    // TODO: replace by some progress loading
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    );
  }

  if (error) {
    return (
      <div className="App">
        <header className="App-header">
          <p style={{ textAlign: "center" }}>{error}</p>
        </header>
      </div>
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          The file /assets/config.json was fetch and its settings loaded, before running the app.
        </p>
        <p>
          <span>The URL to backend loaded from config.json is </span>
          <a
            className="App-link"
            href={config?.apiUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {config?.apiUrl ?? 'empty'}
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
