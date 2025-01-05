class Solution {
    public void duplicateZeros(int[] arr) {
        int L = arr.length;
        int[] newIndexs = new int[L];
        int i=1;
        for(;i<L;i++){
            newIndexs[i] = newIndexs[i-1]+ (arr[i-1] == 0? 2:1);
            if(newIndexs[i]>=L){
                break;
            }
        }
        i--;
        while (i>-1){
            int newIndex = newIndexs[i];
            if(arr[i] == 0 && newIndex+1<L){
                arr[newIndex+1] = 0;
            }
            arr[newIndex] = arr[i];
            i--;
        }

    }
}