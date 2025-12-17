import { IdentifyConfig } from "../types";

export const defaultConfig: IdentifyConfig = {
  trim: true,
  caseInsensitive: true,

  email: {
    enabled: true,
  },
  phone: {
    enabled: true,
    minLength: 10,
    maxLength: 15,
  },
  userName: {
    enabled: true,
    minLength: 3,
    maxLength: 20,
    allowDot: true,
    allowUnderscore: true,
  },
};
