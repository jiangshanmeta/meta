class Solution:
    def toHexspeak(self, num: str) -> str:
        stack = []
        num = int(num)
        numStrMap = {
            0:'O',
            1:'I',
            10:'A',
            11:'B',
            12:'C',
            13:'D',
            14:'E',
            15:'F',
        }
        while num>0 :
            mod = num%16
            if mod>1 and mod<10 :
                return "ERROR"
            stack.append(numStrMap[mod])
            num = (num-mod)/16
        stack.reverse()
        return "".join(stack)