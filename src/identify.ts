import { IdentifyResult } from "./types";
import { isEmail } from "./validator/email";
import { isPhone } from "./validator/phone";
import { isUsername } from "./validator/userName";

export const indentify = (input: string): IdentifyResult => {
  const value = input.trim();
  //   Email
  if (isEmail(value)) {
    return {
      type: "email",
      field: "email",
      value,
      valid: true,
    };
  }
  //   phone
  if (isPhone(value)) {
    return {
      type: "phone",
      field: "phone",
      value,
      valid: true,
    };
  }
  //   userName
  if (isUsername(value)) {
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
