/* global expect, testRepeat, getRandom, getRandomMinMax */

// testRepeat(() => {
//   let testNumber = 10;
//   let result = getRandom(testNumber);
//   let condition = result >= 0 || result <= testNumber;
//   if (!condition) throw new Error('getRandom 테스트 실패');
//   console.log('getRandom 테스트 성공');
// }, 3);

function getRandomTest(max = 10) {
  testRepeat(() => {
    expect(getRandom(max)).toBeGreaterThenAndEqual(0);
    expect(getRandom(max)).toBeLessThenAndEqual(max);
  }, 1000);
  console.log('getRandom 테스트 성공');
}

getRandomTest(100);

// testRepeat(() => {
//   let min = 40;
//   let result = getRandomMinMax(min);
//   let condition = result >= min || result <= 100;
//   if (!condition) throw new Error('getRandomMinMax 테스트 실패');
//   console.log('getRandomMinMax 테스트 성공');
// }, 5);

function getRandomMinMaxTest(min = 0, max = 10) {
  testRepeat(() => {
    expect(getRandomMinMax(min, max)).toBeGreaterThenAndEqual(min);
    expect(getRandomMinMax(min, max)).toBeLessThenAndEqual(max);
  }, 1000);
  console.log('getRandomMinMax 테스트 성공');
}

getRandomMinMaxTest(1999, 2022);
