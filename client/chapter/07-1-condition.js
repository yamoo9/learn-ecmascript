/* ---------------------------------------------------------------------- */
/* Condition                                                              */
/* ---------------------------------------------------------------------- */

// 그 영화 봤니?
//     ↓
// Yes | No
//     | 영화 볼거니?
//           ↓
//       Yes | No

// 영화 봤니?
let didWatchMovie = 'No';

// 영화 볼거니?
let goingToWatchMovie = 'Yes';

// if 문(statement)
if (didWatchMovie.includes('Yes')) {
  console.log('응. 그 영화 봤어 좋더라.');
}
// else if 복수 조건 처리
else if (goingToWatchMovie.includes('Yes')) {
  console.log('응. 볼 생각이야. 설레는 군!');
}
// else 절(caluse)
else {
  console.log('그다지... 안 땡기네. 그 영화.');
}

// 조건부 연산자 식
// didWatchMovie 조건에 따른 처리
let message =
  didWatchMovie === 'Yes'
    ? '응. 그 영화 봤어 좋더라.'
    : '그다지... 안 땡기네. 그 영화.';

// 멀티 조건부 연산자 식
// didWatchMovie, goingToWatchMovie 멀티 조건에 따른 처리
message =
  didWatchMovie === 'Yes'
    ? '응. 그 영화 봤어 좋더라.'
    : goingToWatchMovie.includes('Yes')
    ? '응. 볼 생각이야. 설레는 군!'
    : '그다지... 안 땡기네. 그 영화.';

console.log('message:', message);
