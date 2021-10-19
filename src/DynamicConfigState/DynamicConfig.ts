export const dynamicConfigSourceUrl = "assets/config.json";

export const defaultConfig: IDynamicConfig = {
    apiUrl: undefined,
};

export interface IDynamicConfig {
    apiUrl: string | undefined;
}

let _dynamicConfig = defaultConfig;

export const setDynamicConfig = (value: IDynamicConfig) => {
    _dynamicConfig = value;
}

export const getDynamicConfig = () => {
    return _dynamicConfig;
}