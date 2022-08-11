function testRepeat(callback, count = 10) {
  // 로직
  // count 만큼 callback 함수를 실행한다.
  while (count--) callback?.();
}
