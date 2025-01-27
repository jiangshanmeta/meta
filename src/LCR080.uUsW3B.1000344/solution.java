class Solution {
    int[] candidates;
    List<List<Integer>> result;
    int n;
    int k;

    public List<List<Integer>> combine(int n, int k) {
        candidates = IntStream.rangeClosed(1,n).toArray();
        this.n = n;
        this.k = k;

        result = new ArrayList<>();

        backTracking(0,new ArrayList<>());

        return result;
    }

    private void backTracking(int index,List<Integer> accumulate){
        if(accumulate.size()+n-index<k  ){
            return;
        }
        
        if(index == candidates.length){
            if(accumulate.size() == k){
                result.add(new ArrayList<>(accumulate));
            }
            return;
        }

        backTracking(index+1,accumulate);

        accumulate.addLast(candidates[index]);
        backTracking(index+1,accumulate);
        accumulate.removeLast();
    }
}