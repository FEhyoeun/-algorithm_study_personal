# 문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요. 예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.

# s는 길이 1 이상, 길이 8 이하인 문자열입니다.

def solution(s):
    num_list = str(list(range(10)))
    boolean_list = []
    for i in s:
        print(i in num_list)
        if(i in num_list): boolean_list.append(True)
        else: boolean_list.append(False)

    if False not in boolean_list and len(s) == 4 or len(s) == 6: return True
    else: return False