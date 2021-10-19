import { defaultConfig, dynamicConfigSourceUrl, IDynamicConfig, setDynamicConfig } from "./DynamicConfig";

export interface IDynamicConfigState {
  loading: boolean,
  data?: IDynamicConfig,
  error?: string
};

export type DynamicConfigAction =
  | { type: 'success', data: IDynamicConfig }
  | { type: 'error', error: string }
  | { type: 'loading' };

export const initialDynamicConfigState: IDynamicConfigState = {
  loading: false,
  data: defaultConfig
};

export default function dynamicConfigReducer(state: IDynamicConfigState, action: DynamicConfigAction): IDynamicConfigState {
  switch (action.type) {
    case 'success':
      return {
        ...state,
        data: action.data,
        loading: false
      };
    case 'error':
      return {
        ...state,
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

export const fetchDynamicConfig = (dispatch: React.Dispatch<DynamicConfigAction>) => {
  setLoading(dispatch);

  fetch(dynamicConfigSourceUrl)
    .then(response => {
      if (!response.ok) {
        setError(dispatch, response.status);
        throw new Error("HTTP error " + response.status);
      }
      return response.json();
    })
    .then(json => {
      setSuccess(dispatch, json);
    })
    .catch(function (reason) {
      setError(dispatch, reason);
    });
}

const setLoading = (dispatch: React.Dispatch<DynamicConfigAction>) =>
  dispatch({ type: "loading" });

const setSuccess = (dispatch: React.Dispatch<DynamicConfigAction>, data: IDynamicConfig) => {
  dispatch({ type: "success", data: data });
  setDynamicConfig(data);
}

const setError = (dispatch: React.Dispatch<DynamicConfigAction>, errors: any) => {
  console.error(errors);
  const errorMessage = `Error while fetching global config, the App wil not be rendered. Have you provided the config file '${dynamicConfigSourceUrl}'?`;
  dispatch({ type: "error", error: errorMessage });
}