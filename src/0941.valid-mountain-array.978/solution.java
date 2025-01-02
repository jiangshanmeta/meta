class Solution {
    public boolean validMountainArray(int[] arr) {
        if(arr.length<3){
            return false;
        }
        int index= 1 ;
        while (index<arr.length){
            if(arr[index]>arr[index-1]){
                index++;
            }else if(arr[index] == arr[index-1]){
                return false;
            }else{
                break;
            }

        }
        if(index == arr.length || index == 1){
            return false;
        }
        while (index<arr.length){
            if(arr[index]<arr[index-1]){
                index++;
            }else{
                return false;
            }

        }


        return true;
    }
}