class Solution {
    public List<List<Integer>> mergeSimilarItems(int[][] items1, int[][] items2) {
        Arrays.sort(items1,(a,b)->a[0]-b[0]);
        Arrays.sort(items2,(a,b)->a[0]-b[0]);
        List<List<Integer>> result = new ArrayList<>();
        int index1 = 0;
        int index2 = 0;
        while (index1< items1.length && index2< items2.length){
            if(items1[index1][0]<items2[index2][0]){
                result.add(List.of(items1[index1][0],items1[index1][1]));
                index1++;
            }else if(items1[index1][0]>items2[index2][0]){
                result.add(List.of( items2[index2][0], items2[index2][1] ));
                index2++;
            }else{
                result.add(List.of( items2[index2][0], items2[index2][1]+items1[index1][1] ));
                index1++;
                index2++;
            }
        }
        
        while (index1< items1.length){
            result.add(List.of(items1[index1][0],items1[index1][1]));
            index1++;
        }
        while (index2< items2.length){
            result.add(List.of( items2[index2][0], items2[index2][1] ));
            index2++;
        }
        

        return result;
    }
}