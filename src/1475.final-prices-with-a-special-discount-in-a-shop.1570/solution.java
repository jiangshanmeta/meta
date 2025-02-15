class Solution {
    public int[] finalPrices(int[] prices) {
        int[] result = new int[prices.length];
        System.arraycopy(prices,0,result,0,prices.length);
        Stack<Integer> stack = new Stack<>();
        for(int i=0;i<prices.length;i++){
            while (!stack.isEmpty() && prices[i]<=prices[stack.peek()] ){
                result[stack.pop()] -= prices[i];
            }
            stack.add(i);
        }
        return result;
    }
}