# union-find + backTracking
class Solution:
    def generateSentences(self, synonyms, text):
        group = {}
        for item in synonyms :
            word1 = item[0]
            word2 = item[1]
            if word1 not in group :
                group[word1] = word1
            if word2 not in group :
                group[word2] = word2
            
            while group[word1] != group[group[word1]] :
                group[word1] = group[group[word1]]
            
            while group[word2] != group[group[word2]] :
                group[word2] = group[group[word2]]
            
            if group[word1] != group[word2] :
                group[group[word2]] = group[word1]
            
            group[word2] = group[word1]
            
        relatives = {}
        for key in group :
            while group[key] != group[group[key]] :
                group[key] = group[group[key]]

            parent = group[key]
            if parent not in relatives :
                relatives[parent] = []

            relatives[parent].append(key)
            relatives[key] = relatives[parent]

        for key in group :
            if group[key] == key :
                relatives[key].sort()



        result = []
        self.backTracking(text.split(' '),relatives,0,[],result )
        return result
                    
    def backTracking(self,sentense,relatives,index,sequence,result) :
        if index == len(sentense) :
            result.append(" ".join(sequence))
            return
        
        word = sentense[index]
        if word in relatives :
            replaces = relatives[word]
            for w in replaces :
                sequence.append(w)
                self.backTracking(sentense,relatives,index+1,sequence,result)
                sequence.pop()
        
        else :
            sequence.append(word)
            self.backTracking(sentense,relatives,index+1,sequence,result)
            sequence.pop()