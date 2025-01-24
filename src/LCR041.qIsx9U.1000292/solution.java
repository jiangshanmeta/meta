class MovingAverage {
    Queue<Integer> queue = new LinkedList<>();
    int size;
    int sum = 0;

    /** Initialize your data structure here. */
    public MovingAverage(int size) {
        this.size = size;
    }

    public double next(int val) {
        if(queue.size() == size){
            sum -= queue.remove();
        }
        sum += val;

        queue.offer(val);
        
        return (double) sum / Math.min(size, queue.size());
    }
}

/**
 * Your MovingAverage object will be instantiated and called as such:
 * MovingAverage obj = new MovingAverage(size);
 * double param_1 = obj.next(val);
 */