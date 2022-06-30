class Solution:
    def reverseWords(self, s: str) -> str:
        reverse_array = []
        for word in s.split():
            reverse_array.append(word[::-1])
        return ' '.join(reverse_array)
