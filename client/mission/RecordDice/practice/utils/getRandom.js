// [인터페이스] getRandom(n:number): number
// [테스트] getRandom(20) 0~20 사이 난수 반환
// [테스트] getRandom() 타입 오류 발생!!!!!!!
function getRandom(n) {
  // validation
  if (!n || typeof n !== 'number')
    throw new TypeError('매개변수 n은 숫자 값이어야 합니다.');
  // logic
  // Math.random() * n
  // Math.floor() + 1
  // return Math.floor(Math.random() * n) + 1;
  // Math.round()
  return Math.round(Math.random() * n);
}

function testRepeat(callback, count = 10) {
  // 로직
  // count 만큼 callback 함수를 실행한다.
  // optional chaining
  while (count--) callback?.();
}

// [인터페이스] getRandomMinMax(min:number = 0, max:number = 100): number
// [테스트] getRandomMinMax(40) 40~100 사이 난수 반환
// [테스트] getRandomMinMax(32, 54) 32~54 사이 난수 반환
// [테스트] getRandomMinMax(80, 32) 오류 발생!!!!!!!
function getRandomMinMax(min = 0, max = 100) {
  // 유효성 검사
  if (typeof min !== 'number' || typeof max !== 'number')
    throw new TypeError('min 또는 max 값은 숫자 타입이어야 합니다.');
  if (min >= max)
    throw new SyntaxError('min 값은 max 값보다 크거나 같으면 안됩니다.');
  // 로직
  // 최솟값 - 최댓값 사이 수
  // 난수(최댓값 - 최솟값) + 최솟값
  // 난수(10 - 4) + 4
  return getRandom(max - min) + min;
}
