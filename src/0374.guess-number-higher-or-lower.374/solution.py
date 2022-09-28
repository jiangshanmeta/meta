# The guess API is already defined for you.
# @param num, your guess
# @return -1 if my number is lower, 1 if my number is higher, otherwise return 0
# def guess(num):
# 就是二分
class Solution(object):
    def guessNumber(self, n):
        """
        :type n: int
        :rtype: int
        """
        low = 1
        high = n
        while True:
            mid = (low+high)//2
            rst = guess(mid)
            if rst == 0 :
                return mid
            elif rst>0 :
                low = mid+1
            else :
                high = mid-1