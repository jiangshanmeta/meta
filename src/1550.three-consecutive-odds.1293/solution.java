class Solution {
    public boolean threeConsecutiveOdds(int[] arr) {
        int index = 0;
        while (index<arr.length){
            if(arr[index++]%2 == 0){
                continue;
            }
            
            int cnt = 1;
            while(index<arr.length && arr[index]%2 == 1){
                cnt++;
                index++;
            }
            if(cnt>2){
                return true;
            }
        }
        return false;
    }
}