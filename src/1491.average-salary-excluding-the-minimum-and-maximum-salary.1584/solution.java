class Solution {
    public double average(int[] salary) {
        int max = salary[0];
        int min = salary[0];
        int sum = 0;
        for(int n: salary){
            sum += n;
            max = Math.max(max,n);
            min = Math.min(min,n);
        }
        
        return (double) (sum-max-min)/(salary.length-2);
    }
}