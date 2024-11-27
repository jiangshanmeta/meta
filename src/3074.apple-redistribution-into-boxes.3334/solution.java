class Solution {
    public int minimumBoxes(int[] apple, int[] capacity) {
        int sum = 0;
        for(int a : apple){
            sum += a;
        }
        Arrays.sort(capacity);
        int index = capacity.length-1;
        while (index>-1 && sum>0){
            sum -= capacity[index--];
        }

        return capacity.length-index-1;
    }
}