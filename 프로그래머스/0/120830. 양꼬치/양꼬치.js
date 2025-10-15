function solution(n, k) {
    let freeDrinks = Math.floor(n / 10);
    let drinksToPay = Math.max(0, k - freeDrinks);
    let answer = n * 12000 + drinksToPay * 2000;
    return answer;
}