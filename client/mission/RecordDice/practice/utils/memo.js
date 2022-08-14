// 함수 구현
// memo(key, () => value)
// memo(key)

const memo = (() => {
  const cache = {};

  const _memo = (key, callback) => {
    if (!cache[key]) {
      console.log(`cached: ${key}`);
      cache[key] = callback?.();
    } else if (cache[key] && typeof callback === 'function') {
      // confirm(`cache의 ${key}를 덮어쓰겠습니까?`) &&
      //   (cache[key] = callback?.());

      if (confirm(`cache의 ${key}를 덮어쓰겠습니까?`)) {
        cache[key] = callback?.();
      }
    }

    return cache[key];
  };

  _memo.getCache = () => console.log({ cache });

  return _memo;
})();
