import { dynamicConfig, setDynamicConfig } from "./config";

export interface configState {
  loading: boolean,
  data?: dynamicConfig,
  failed: boolean,
  error?: string
};

export type configAction =
  | { type: 'success', data: dynamicConfig }
  | { type: 'error', error: string }
  | { type: 'loading' };

export default function configReducer(state: configState, action: configAction): configState {
  switch (action.type) {

    case 'success':
      setDynamicConfig(action.data);
      return {
        ...state,
        data: action.data,
        loading: false
      };

    case 'error':
      console.error(action.error);
      return {
        ...state,
        failed: true,
        error: action.error,
        loading: false
      };

    case 'loading':
      return {
        ...state,
        loading: true
      };

    default:
      return state;
  }
};
