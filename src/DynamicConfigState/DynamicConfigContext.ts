import { createContext } from "react";
import { DynamicConfigAction, IDynamicConfigState } from "./DynamicConfigReducer";

export interface IContextProps {
    state: IDynamicConfigState;
    dispatch: React.Dispatch<DynamicConfigAction>;
}

export const DynamicConfigContext = createContext({} as IContextProps);