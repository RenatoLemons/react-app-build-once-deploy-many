import { configUrl, getDynamicConfig } from './config';
import { ConfigContext } from './ConfigContext';
import { configAction } from './configReducer';
import ConfigProvider from './ConfigProvider';

export { configUrl, getDynamicConfig, ConfigContext, ConfigProvider };
export type { configAction };