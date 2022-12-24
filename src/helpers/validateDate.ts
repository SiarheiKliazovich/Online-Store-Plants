export const validateDate = (date: string): boolean => {
  const month = date.slice(0, 2);
  return +month <= 12;
};