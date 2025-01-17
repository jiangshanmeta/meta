class Solution {
    public int maxSum(int[] nums) {
        int[] maxs = new int[10];
        int[] nexts = new int[10];
        for(int num : nums){
            int index = calc(num);
            if(maxs[index]<=num){
                nexts[index] = maxs[index];
                maxs[index] = num;
            }else if(nexts[index]<num){
                nexts[index] = num;
            }
        }
        int result = -1;
        for(int i=0;i<10;i++){
            if(nexts[i] != 0){
                result = Math.max(result,maxs[i]+nexts[i]);
            }
        }
        return result;
    }

    private int calc(int num){
        int result = 0;
        while (num != 0){
            result = Math.max(result,num%10);
            num /= 10;
        }
        return result;
    }
}