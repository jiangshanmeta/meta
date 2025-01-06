class Solution {
    public int minSetSize(int[] arr) {
        Map<Integer,Long> map = Arrays.stream(arr).boxed().collect(Collectors.groupingBy(Function.identity(),HashMap::new,Collectors.counting() ));
        List<Long> values = new ArrayList<>(map.values());

        values.sort(Collections.reverseOrder());


        int H = arr.length/2;
        int count = 0;
        for(long n : values){
            H -= (int)n;
            count++;
            if(H<=0){
                break;
            }
        }
        return count;
    }
}