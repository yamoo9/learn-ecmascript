function expect(received) {
  // 로직
  // 함수의 반환 값은 객체이다. (toEqual 메서드 포함)
  return {
    toEqual(expected) {
      // 로직
      // 전달값과 기대값이 다르면 오류 발생
      if (!Object.is(received, expected)) {
        throw new Error(
          `전달값(received) ${received}과 기댓값(expected) ${expected}은 같지 않습니다.`
        );
      }
    },
    toBeGreaterThen(expected) {
      if (received <= expected) {
        throw new Error(
          `전달값(received) ${received}이 기댓값(expected) ${expected} 보다 작거나 같습니다.`
        );
      }
    },
    toBeGreaterThenAndEqual(expected) {
      if (received < expected) {
        throw new Error(
          `전달값(received) ${received}이 기댓값(expected) ${expected} 보다 작습니다.`
        );
      }
    },
    toBeLessThen(expected) {
      if (received >= expected) {
        throw new Error(
          `전달값(received) ${received}이 기댓값(expected) ${expected} 보다 크거나 같습니다.`
        );
      }
    },
    toBeLessThenAndEqual(expected) {
      if (received > expected) {
        throw new Error(
          `전달값(received) ${received}이 기댓값(expected) ${expected} 보다 큽니다.`
        );
      }
    },
  };
}
