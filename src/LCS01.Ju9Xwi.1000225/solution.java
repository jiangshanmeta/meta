class Solution {
    public int leastMinutes(int n) {
        int base = 1;
        int count = 1;
        while (base<n){
            count++;
            base *= 2;
        }
        return count;
    }
}