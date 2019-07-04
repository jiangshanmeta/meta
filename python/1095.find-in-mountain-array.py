# """
# This is MountainArray's API interface.
# You should not implement it, or speculate about its implementation
# """
#class MountainArray:
#    def get(self, index: int) -> int:
#    def length(self) -> int:

class Solution:
    def findInMountainArray(self, target: int, mountain_arr: 'MountainArray') -> int:
        L = mountain_arr.length()
        # 找到峰顶
        peakIndex = 0
        low = 0
        high = L-1
        while low<=high :
            mid = (low+high)//2
            midVal = mountain_arr.get(mid)
            rightVal = mountain_arr.get(mid+1)
            if midVal < rightVal :
                low = mid+1
            else :
                leftVal = mountain_arr.get(mid-1)
                if midVal>leftVal :
                    peakIndex = mid
                    break
                else :
                    high = mid-1
        # 在左边找
        low = 0
        high = peakIndex-1
        while low<=high:
            mid = (low+high)//2
            midVal = mountain_arr.get(mid)
            if midVal == target :
                return mid
            elif midVal<target:
                low = mid+1
            else :
                high = mid-1
        # 在右边找
        low = peakIndex
        high = L-1
        while low<=high:
            mid = (low+high)//2
            midVal = mountain_arr.get(mid)
            if midVal == target :
                return mid
            elif midVal<target :
                high = mid-1
            else :
                low = mid+1
        # 都没有
        return -1
        