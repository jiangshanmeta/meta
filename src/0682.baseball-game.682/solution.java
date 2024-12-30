class Solution {
    public int calPoints(String[] operations) {
        int[] scores = new int[operations.length];
        int index = 0;
        for(String operation : operations){
            if(operation.equals("+")){
                scores[index] = scores[index-1]+scores[index-2];
                index++;
            }else if(operation.equals("D")){
                scores[index] = scores[index-1]*2;
                index++;
            }else if(operation.equals("C")){
                index--;
            }else{
                scores[index++] = Integer.parseInt(operation);
            }
        }
        int sum = 0;
        while (index>0){
            sum += scores[--index];
        }
        return sum;
    }
}