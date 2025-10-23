function solution(num1, num2) {
  const quotient = Math.floor(num1 / num2);
  return num1 - (quotient * num2);
}