class CombinationIterator:

    def __init__(self, characters: str, combinationLength: int):
        result = []
        self.backTracking(characters,0,[],combinationLength,result)
        print(result)
        self.result = result
        self.index = 0
        
    def backTracking(self,characters,index,sequence,combinationLength,result) :
        if len(sequence) == combinationLength :
            result.append("".join(sequence))
            return
        while index<len(characters) :
            sequence.append(characters[index])
            self.backTracking(characters,index+1,sequence,combinationLength,result)
            sequence.pop()
            index += 1

    def next(self) -> str:
        element = self.result[self.index]
        self.index += 1
        return element

    def hasNext(self) -> bool:
        return self.index<len(self.result)
