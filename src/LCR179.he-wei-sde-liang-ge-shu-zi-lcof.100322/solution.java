class Solution {
    public int[] twoSum(int[] price, int target) {
        Set<Integer> set = new HashSet<>();
        int res = 0;
        for(int k : price){
            if(set.contains(target-k)){
                res = k;
                break;
            }
            set.add(k);
        }
        return new int[]{res,target-res};
    }
}