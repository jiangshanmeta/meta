class Solution {
    public int getLucky(String s, int k) {

        int sum = 0;
        for(char c : s.toCharArray()){
            int offset = c-'a'+1;
            sum += offset%10 + offset/10;
        }

        while (k>1){
            k--;
            int newSum = 0;
            while (sum != 0){
                newSum += sum%10;
                sum /= 10;
            }
            sum = newSum;
        }
        
        return sum;
    }
}