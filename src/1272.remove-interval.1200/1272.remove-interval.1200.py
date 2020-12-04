class Solution:
    def removeInterval(self, intervals, toBeRemoved):
        if intervals[0][0]>= toBeRemoved[1] or intervals[-1][1]<=toBeRemoved[0] :
            return intervals
        L = len(intervals)
        index = L-1
        low = 0
        high = index
        while low<=high :
            mid = (low+high) // 2
            interval = intervals[mid]
            if interval[0]>= toBeRemoved[1] :
                high = mid-1
            elif interval[1]<=toBeRemoved[0] :
                low = mid+1
            else :
                index = min(index,mid)
                high = mid-1
        result = []
        for i in range(index):
            result.append(intervals[i])
        while index<L :
            interval = intervals[index]
            if interval[0]>=toBeRemoved[1] :
                while index<L :
                    result.append(intervals[index])
                    index += 1
                break
            if(interval[0]<toBeRemoved[0]) :
                result.append([interval[0],toBeRemoved[0]])
                if(toBeRemoved[1]<interval[1]) :
                    result.append([toBeRemoved[1],interval[1]])

            elif(interval[1]>toBeRemoved[1]):
                result.append([toBeRemoved[1],interval[1]])
        
            index += 1
            
        return result