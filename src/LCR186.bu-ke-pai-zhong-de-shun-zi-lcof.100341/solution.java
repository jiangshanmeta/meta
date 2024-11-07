class Solution {
    public boolean checkDynasty(int[] places) {
        boolean[] exists = new boolean[14];
        int min = 14;
        int max = 0;
        for(int place : places){
            if(place != 0 && exists[place]){
                return false;
            }
            exists[place] = true;
            if(place != 0){
                min = Math.min(min,place);
                max = Math.max(max,place);
            }
        }
        if(max == 0){
            return true;
        }


        return max-min <= 4;
    }
}