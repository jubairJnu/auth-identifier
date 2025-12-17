import { IdentifyConfig } from "../types";
import { defaultConfig } from "../config/defaultConfig";

export const mergeConfig = (userConfig?: IdentifyConfig): IdentifyConfig => {
  return {
    ...defaultConfig,
    ...userConfig,
    email: {
      ...defaultConfig.email,
      ...userConfig?.email,
    },
    phone: {
      ...defaultConfig.phone,
      ...userConfig?.phone,
    },
    userName: {
      ...defaultConfig.userName,
      ...userConfig?.userName,
    },
  };
};
