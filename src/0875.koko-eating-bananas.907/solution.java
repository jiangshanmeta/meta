class Solution {
    public int minEatingSpeed(int[] piles, int h) {
        int low = 1;
        int high = max(piles);
        int result = high;
        while (low<=high){
            int mid = low + (high-low)/2;
            long time = calcTime(piles,mid);
            if(time>h){
                low = mid+1;
            }else{
                result = mid;
                high = mid-1;
            }
        }
        return result;
    }

    public long calcTime(int[] piles,int speed ){
        long result = 0;
        for(int pile : piles){
            result += pile/speed;
            if(pile%speed != 0){
                result++;
            }
        }

        return result;
    }

    private int max(int[] piles){
        int result = piles[0];
        for(int i=1;i<piles.length;i++){
            result = Math.max(result,piles[i]);
        }
        return result;
    }
}