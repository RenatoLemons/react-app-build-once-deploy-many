import { createContext } from "react";
import { configAction, configState } from "./configReducer";

export interface IContextProps {
    state: configState;
    dispatch: React.Dispatch<configAction>;
}

export const ConfigContext = createContext({} as IContextProps);