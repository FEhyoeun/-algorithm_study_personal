function solution(numbers) {
  const isAllZero = (number) => number === 0
  if(numbers.every(isAllZero)) return "0"

  let strings = numbers.map((number) => String(number));

  const answer = strings.sort((a, b) => (b + a) - (a + b)).join("");
  // sort의 compareFunc는 a - b가 양수면 b, a로 정렬하고 음수면 a, b로 정렬.
  // 여기서는 (b + a)가 a, (a + b)가 b가 된 셈.

  return answer
}