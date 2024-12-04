class Solution {
    public int minChanges(int n, int k) {
        int result = 0;
        while (n != 0){
            int digiN = n&1;
            int digiK = k&1;
            if(digiN == 0 && digiK == 1){
                return -1;
            }
            if(digiN == 1 && digiK == 0){
                result++;
            }

            n >>= 1;
            k >>= 1;
        }
        return k != 0? -1:result;
    }
}