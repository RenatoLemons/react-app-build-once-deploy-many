import { useContext, useReducer } from "react";
import { DynamicConfigContext } from "./DynamicConfigContext";
import dynamicConfigReducer, { initialDynamicConfigState, fetchDynamicConfig } from "./DynamicConfigReducer";

export const useDynamicConfig = () => {
  const { state, dispatch } = useContext(DynamicConfigContext);
  const { loading, data, error } = state;
  const fetchDynamicConfigWithDispatch = () => fetchDynamicConfig(dispatch);
  return { loading, config: data, error, fetchDynamicConfig: fetchDynamicConfigWithDispatch };
};

const DynamicConfigState: React.FunctionComponent<{}> = ({ children }) => {
  const [state, dispatch] = useReducer(dynamicConfigReducer, initialDynamicConfigState);
  const value = { state, dispatch };

  return (
    <DynamicConfigContext.Provider value={value}>
      {children}
    </DynamicConfigContext.Provider>
  );
}

export default DynamicConfigState;