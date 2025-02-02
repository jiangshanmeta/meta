class Solution {
    public int halfQuestions(int[] questions) {
        int N = questions.length/2;
        Map<Integer,Long> map = Arrays.stream(questions).boxed().collect(Collectors.groupingBy(Function.identity(),Collectors.counting()));

        List<Long> list = map.values().stream().sorted(Comparator.reverseOrder()).toList();
        
        int result = 0;
        for(long count:list){
            result++;
            N -= (int)count;
            if(N<=0){
                break;
            }
        }
        return result;
    }
}