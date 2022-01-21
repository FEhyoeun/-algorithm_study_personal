# 단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

# s는 길이가 1 이상, 100이하인 스트링입니다.

import math

def solution(s):
    str = list(s)

    if len(str) % 2 == 0:  # 문자열이 짝수일 때
        return str[int(len(s) / 2) - 1] + str[int(len(s) / 2)]
    else:  # 문자열이 홀수일 때
        return str[math.trunc(len(str) / 2)]