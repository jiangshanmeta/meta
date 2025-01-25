class RecentCounter {
    Queue<Integer> queue = new LinkedList<>();

    public RecentCounter() {
        
    }

    public int ping(int t) {
        while (!queue.isEmpty() && queue.peek()<t-3000){
            queue.poll();
        }
        queue.offer(t);
        return queue.size();
    }
}

/**
 * Your RecentCounter object will be instantiated and called as such:
 * RecentCounter obj = new RecentCounter();
 * int param_1 = obj.ping(t);
 */