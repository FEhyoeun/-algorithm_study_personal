class Solution:
    def firstPalindrome(self, words: List[str]) -> str:
        palindromic_list = [word for word in words if word == word[::-1]]
        return palindromic_list[0] if len(palindromic_list) > 0 else ""