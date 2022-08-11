/* global testRepeat, getRandom, getRandomMinMax */

testRepeat(() => {
  let testNumber = 10;
  let result = getRandom(testNumber);
  let condition = result >= 0 || result <= testNumber;
  if (!condition) throw new Error('테스트 실패');
  console.log('테스트 성공');
}, 1500);

testRepeat(() => {
  let min = 40;
  let result = getRandomMinMax(min);
  let condition = result >= min || result <= 100;
  if (!condition) throw new Error('테스트 실패');
  console.log('테스트 성공');
}, 2000);
