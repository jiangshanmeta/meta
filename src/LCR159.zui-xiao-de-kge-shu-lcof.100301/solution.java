class Solution {
    public int[] inventoryManagement(int[] stock, int cnt) {
        Arrays.sort(stock);
        int[] result = new int[cnt];
        System.arraycopy(stock,0,result,0,cnt);

        return result;
    }
}