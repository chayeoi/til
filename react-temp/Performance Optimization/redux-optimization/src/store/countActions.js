export const INCREASE_COUNT = 'INCREASE_COUNT';
export const DECREASE_COUNT = 'DECREASE_COUNT';

export const increaseCount = () => ({
  type: INCREASE_COUNT,
});
export const decreaseCount = () => ({
  type: DECREASE_COUNT,
});