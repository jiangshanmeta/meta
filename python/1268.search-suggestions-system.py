class Solution:
    def suggestedProducts(self, products, searchWord) :
        trie = [0 for i in range(26) ]
        for word in products :
            self.buildSegmentTree(trie,word)

        
        result = []
        sequence = []
        for letter in searchWord :
            code = ord(letter)-97
            if trie[code] == 0 :
                break
            sequence.append(letter)
            subResult = []
            trie = trie[code]
            self.traversalTrie(trie,sequence,subResult)
            result.append(subResult)
                
        while(len(result)<len(searchWord)) :
            result.append([])
        
        return result
    
    def traversalTrie(self,trie,sequence,subResult) :
        if len(subResult) == 3:
            return
        if trie[26] :
            count = trie[26]
            word = "".join(sequence)
            while(count and len(subResult)<3):
                subResult.append(word)
                count -= 1
        for i in range(26) :
            if trie[i] != 0 :

                sequence.append(chr(i+97))
                self.traversalTrie(trie[i],sequence,subResult)
                sequence.pop()
        
        
    def buildSegmentTree(self,trie,word):
        for letter in word :
            code = ord(letter)-97
            if trie[code] == 0 :
                trie[code] = [0 for i in range(27)]
            
            trie = trie[code]
        trie[26] += 1
            