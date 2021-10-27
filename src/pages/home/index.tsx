import { getDynamicConfig } from '../../config';
import './styles.css';

function HomePage() {
    const config = getDynamicConfig();

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
                        href={config.apiUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {config.apiUrl ?? 'empty'}
                    </a>
                </p>
            </header>
        </div>
    );
}

export default HomePage;
