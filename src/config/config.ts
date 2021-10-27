export const configUrl = "assets/config.json";

export interface dynamicConfig {
    apiUrl: string | undefined;
}

let _dynamicConfig: dynamicConfig = {
    apiUrl: undefined
};

export const setDynamicConfig = (value: dynamicConfig) => {
    _dynamicConfig = value;
}

export const getDynamicConfig = () => {
    return _dynamicConfig;
}
