/* ---------------------------------------------------------------------- */
/* Functions → Arrow                                                      */
/* ---------------------------------------------------------------------- */

// 함수 식 → 화살표 함수 식
// const calculateTotal = (first, ...restArgs) => {
const calculateTotal = (...args) => args.reduce((total, current) => total + current, 0);

let resultX = calculateTotal(10000, 8900, 1360, 2100);
let resultY = calculateTotal(21500, 3200, 9800, 4700);
let resultZ = calculateTotal(9000, -2500, 5000, 11900);

console.log(resultX);
console.log(resultY);
console.log(resultZ);

// 화살표 함수와 this

/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// pow(numeric: number, powerCount: number): number;
let pow;

// repeat(text: string, repeatCount: number): string;
let repeat;
