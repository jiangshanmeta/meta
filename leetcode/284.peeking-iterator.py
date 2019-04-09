# Below is the interface for Iterator, which is already defined for you.
#
# class Iterator:
#     def __init__(self, nums):
#         """
#         Initializes an iterator object to the beginning of a list.
#         :type nums: List[int]
#         """
#
#     def hasNext(self):
#         """
#         Returns true if the iteration has more elements.
#         :rtype: bool
#         """
#
#     def next(self):
#         """
#         Returns the next element in the iteration.
#         :rtype: int
#         """

class PeekingIterator:
    def __init__(self, iterator):
        """
        Initialize your data structure here.
        :type iterator: Iterator
        """
        self.iterator = iterator
        # 为了peek缓存用的
        self.cache = 0
        self.inCache = False

    def peek(self):
        """
        Returns the next element in the iteration without advancing the iterator.
        :rtype: int
        """
        if not self.inCache :
            self.cache = self.iterator.next()
            self.inCache = True
        return self.cache

    def next(self):
        """
        :rtype: int
        """
        if self.inCache :
            self.inCache = False;
            return self.cache
        else :
            return self.iterator.next()

    def hasNext(self):
        """
        :rtype: bool
        """
        if self.inCache :
            return True
        else :
            return self.iterator.hasNext()