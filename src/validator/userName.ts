export const isUsername = (
  input: string,
  config: {
    minLength: number;
    maxLength: number;
    allowUnderscore: boolean;
    allowDot: boolean;
  }
): boolean => {
  let chars = "a-zA-Z0-9";

  if (config.allowUnderscore) chars += "_";
  if (config.allowDot) chars += ".";

  const regex = new RegExp(
    `^[${chars}]{${config.minLength},${config.maxLength}}$`
  );

  return regex.test(input);
};
