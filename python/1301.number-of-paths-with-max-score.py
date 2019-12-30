class Solution:
    def pathsWithMaxScore(self, board) :
        # 动态规划
        # scoreDp[i][j] = max( scoreDp[i+1][j] , scoreDp[i][j+1] , scoreDp[i+1][j+1]  )
        L = len(board)
        modVal = 10**9+7
        scoreDp = [0 for i in range(L)]
        countDp = [0 for i in range(L)]
        scoreDp[L-1] = [0 for i in range(L)]
        countDp[L-1] = [0 for i in range(L)]
        countDp[L-1][L-1] = 1
        for j in range(L-2,-1,-1):
            if board[L-1][j] == 'X':
                break
            
            scoreDp[L-1][j] = scoreDp[L-1][j+1]+int(board[L-1][j])
            countDp[L-1][j] = 1
        
        for i in range(L-2,-1,-1):
            scoreDp[i] = [0 for i in range(L)]
            countDp[i] = [0 for i in range(L)]
            if board[i][L-1] == 'X' :
                scoreDp[i][L-1] = 0
            else :
                scoreDp[i][L-1] = scoreDp[i+1][L-1]+int(board[i][L-1])
                if countDp[i+1][L-1]>0 :
                    countDp[i][L-1] = 1
            for j in range(L-2,-1,-1):
                if board[i][j] == 'X':
                    scoreDp[i][j] = 0
                    countDp[i][j] = 0
                    continue
                node = 0
                if i>0 or j>0:
                    node = int(board[i][j])
                
                maxVal = max(scoreDp[i+1][j],scoreDp[i][j+1],scoreDp[i+1][j+1])
                scoreDp[i][j] = maxVal+node
                if scoreDp[i+1][j] == maxVal:
                    countDp[i][j] = (countDp[i][j]+countDp[i+1][j])%modVal
                if scoreDp[i][j+1] == maxVal:
                    countDp[i][j] = (countDp[i][j]+countDp[i][j+1])%modVal
                if scoreDp[i+1][j+1] == maxVal :
                    countDp[i][j] = (countDp[i][j]+countDp[i+1][j+1])%modVal
        
        if countDp[0][0] == 0:
            return [0,0]
        else :
            return [scoreDp[0][0],countDp[0][0]]