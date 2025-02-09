class Solution {
    public int hammingDistance(int x, int y) {
        int result = 0;
        while (x>0 && y>0){
            if( (x&1) != (y&1) ){
                result++;
            }
            x>>=1;
            y>>=1;
        }
        
        while (x != 0){
            if( (x&1) != 0){
                result++;
            }
            x >>= 1;
        }
        while ( y != 0){
            if( (y&1) != 0){
                result++;
            }
            y >>= 1;
        }
        
        return result;
    }
}