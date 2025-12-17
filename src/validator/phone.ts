export const isPhone = (input: string, min: number, max: number): boolean => {
  const regex = new RegExp(`/^[+]?[0-9]{${min},${max}}$/;`);
  return regex.test(input);
};
