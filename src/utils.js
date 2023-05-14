export const makeURL = (id) => {
  return `https://picsum.photos/id/${id}/200/300`;
};
export const makeRandomInt = () => {
  const num = 100 + Math.floor(300 * Math.random());
  return `${num}px`;
};
