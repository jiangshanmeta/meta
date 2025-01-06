class Solution {
    public double trimMean(int[] arr) {
        Arrays.sort(arr);
        int R = arr.length/20;
        int sum = 0;
        for(int i=R;i<arr.length-R;i++){
            sum += arr[i];            
        }
        return (double) sum/(arr.length-2*R);
    }
}