class Solution {
    public boolean isHappy(int n) {
        Set<Integer> set = new HashSet<>();
        
        while (!set.contains(n)){
            set.add(n);
            int m = 0;
            while (n>0){
                int d = n%10;
                m += d*d;
                n /= 10;
            }
            n = m;
            if(n == 1){
                return true;
            }
        }
        
        return false;
    }
}