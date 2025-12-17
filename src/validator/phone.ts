export const isPhone = (input: string): boolean => {
  const regex = /^[+]?[0-9]{10,15}$/;
  return regex.test(input);
};
