export type IdentifierType = "email" | "phone" | "userName" | "unknown";

export interface IdentifyResult {
  type: IdentifierType;
  field: "email" | "phone" | "userName" | null;
  value: string;
  valid: boolean;
}

export interface IdentifyConfig {
  trim?: boolean;
  caseInsensitive?: boolean;

  email?: {
    enabled?: boolean;
  };

  phone?: {
    enabled?: boolean;
    minLength?: number;
    maxLength?: number;
  };

  userName?: {
    enabled?: boolean;
    minLength?: number;
    maxLength?: number;
    allowUnderscore?: boolean;
    allowDot?: boolean;
  };
}
