function solution(nums) {
  let sum = 0
  let result = 0

  const isPrime = (number) => {
    for(let i=2; i<number; i++) {
      if(number % i === 0) return false
    }
    return number > 1 // 2 이상의 수여야 하니까
  }

  for(let i=0; i<nums.length; i++) {
    for(let j=i+1; j<nums.length; j++) {
      for(let k=j+1; k<nums.length; k++) {
        sum = nums[i] + nums[j] + nums[k]
        if(isPrime(sum)) result++
      }
    }
  }

  return result
}