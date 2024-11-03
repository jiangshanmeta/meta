class Solution {
    public List<Boolean> prefixesDivBy5(int[] nums) {
        List<Boolean> result = new ArrayList<>();
        int a = 0;
        for(int n : nums){
            a = (a*2+n)%5;
            result.add(a == 0);
        }
        return result;
    }
}