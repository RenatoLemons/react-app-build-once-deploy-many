import { useContext, useEffect } from 'react';
import { configUrl, ConfigContext, configAction } from '../../config/index';
import logo from './../../logo.svg';

const fetchConfig = (dispatch: React.Dispatch<configAction>) => {
    dispatch({ type: "loading" });

    fetch(configUrl)
        .then(response => {
            if (!response.ok) {
                dispatch({ type: "error", error: response.status.toString() });
                throw new Error("HTTP error " + response.status);
            }
            return response.json();
        })
        .then(json => {
            dispatch({ type: "success", data: json });
        })
        .catch(function (reason) {
            dispatch({ type: "error", error: reason });
        });
}

const ConfigLoader: React.FunctionComponent<{}> = ({ children }) => {
    const { state, dispatch } = useContext(ConfigContext);
    const { loading, failed } = state;

    useEffect(() => {
        fetchConfig(dispatch);
    }, [dispatch]);

    if (loading) {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                </header>
            </div>
        );
    }

    if (failed) {
        const errorMessage = `Error while fetching global config, the App wil not be rendered. Have you provided the config file '${configUrl}'?`;
        return (
            <div className="App">
                <header className="App-header">
                    <p style={{ textAlign: "center" }}>{errorMessage}</p>
                </header>
            </div>
        );
    }

    return (
        <>
            {children}
        </>
    );
}

export default ConfigLoader;