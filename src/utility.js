/**
 * @param {number} min
 * @param {number} max
 */
export function randomIntFromInterval(min, max) {
  // min and max included
  const result = Math.floor(Math.random() * (max - min + 1) + min);
  console.log(result);
  return result;
}
