class Solution {
    public int[] replaceElements(int[] arr) {
        int[] result = new int[arr.length];
        result[result.length-1] = -1;
        for(int i=arr.length-2;i>-1;i--){
            result[i] = Math.max(result[i+1],arr[i+1]);
        }
        
        return result;
    }
}