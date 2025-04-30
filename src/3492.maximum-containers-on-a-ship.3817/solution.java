class Solution {
    public int maxContainers(int n, int w, int maxWeight) {
        int size = n*n;
        return Math.min(size, maxWeight/w);
    }
}