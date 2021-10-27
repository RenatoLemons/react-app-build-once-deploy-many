import { useReducer } from "react";
import { ConfigContext } from "./ConfigContext";
import configReducer from "./configReducer";

const ConfigProvider: React.FunctionComponent<{}> = ({ children }) => {
  const [state, dispatch] = useReducer(configReducer, {
    loading: false,
    data: undefined,
    failed: false
  });
  const value = { state, dispatch };

  return (
    <ConfigContext.Provider value={value}>
      {children}
    </ConfigContext.Provider>
  );
}

export default ConfigProvider;