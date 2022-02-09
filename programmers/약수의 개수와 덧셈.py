# 두 정수 left와 right가 매개변수로 주어집니다. left부터 right까지의 모든 수들 중에서, 약수의 개수가 짝수인 수는 더하고, 약수의 개수가 홀수인 수는 뺀 수를 return 하도록 solution 함수를 완성해주세요.

# 1 ≤ left ≤ right ≤ 1,000

def solution(left, right):
    arr = [i for i in range(left, right + 1)]
    temp_arr = []

    for i in arr:
        temp_arr.append(getDivisorCount(i))

    for i in list(range(len(temp_arr))):
        if temp_arr[i] % 2 != 0: arr[i] = -arr[i]

    return sum(arr)


def getDivisorCount(number):
    divisor_list = []
    for i in list(range(1, number + 1)):
        if number % i == 0:
            divisor_list.append(i)
    return len(divisor_list)