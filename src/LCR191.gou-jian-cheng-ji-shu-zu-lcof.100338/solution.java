class Solution {
    public int[] statisticalResult(int[] arrayA) {
        if(arrayA.length == 0){
            return new int[]{};
        }
        int[] after = new int[arrayA.length];
        after[after.length-1] = 1;
        for(int i=after.length-2;i>-1;i--){
            after[i] = after[i+1]*arrayA[i+1];
        }
        int before = 1;
        int[] result = new int[after.length];
        for(int i=0;i< after.length;i++){
            result[i] = before*after[i];
            before *= arrayA[i];
        }

        return result;
    }
}