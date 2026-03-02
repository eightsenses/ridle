export const parseRating = (ratings: string[]): number => {
  if (!ratings.length) return 0;
  const value = Number(ratings[0].split(':')[1]);
  return Number.isNaN(value) ? 0 : value;
};
