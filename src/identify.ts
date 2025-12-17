import { IdentifyConfig, IdentifyResult } from "./types";
import { mergeConfig } from "./utils/mergeConfig";
import { isEmail } from "./validator/email";
import { isPhone } from "./validator/phone";
import { isUsername } from "./validator/userName";

export const identify = (
  input: string,
  config?: IdentifyConfig
): IdentifyResult => {
  const cfg = mergeConfig(config);

  let value = input;

  if (cfg.trim) value = value.trim();
  if (cfg.caseInsensitive) value = value.toLowerCase();

  if (cfg.email?.enabled && isEmail(value)) {
    return {
      type: "email",
      field: "email",
      value,
      valid: true,
    };
  }
  //   phone
  if (
    cfg.phone?.enabled &&
    isPhone(value, cfg.phone.minLength!, cfg.phone?.maxLength!)
  ) {
    return {
      type: "phone",
      field: "phone",
      value,
      valid: true,
    };
  }
  //   userName
  if (
    cfg.userName?.enabled &&
    isUsername(value, {
      minLength: cfg.userName.minLength!,
      maxLength: cfg.userName.maxLength!,
      allowUnderscore: cfg.userName.allowUnderscore!,
      allowDot: cfg.userName.allowDot!,
    })
  ) {
    return {
      type: "userName",
      field: "userName",
      value,
      valid: true,
    };
  }
  return {
    type: "unknown",
    field: null,
    value,
    valid: false,
  };
};
