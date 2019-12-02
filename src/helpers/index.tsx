export const dateAt = (days: number) => {
  let next = new Date();
  next.setDate(new Date().getDate() + days);
  return next.toDateString().slice(0, -5);
};
