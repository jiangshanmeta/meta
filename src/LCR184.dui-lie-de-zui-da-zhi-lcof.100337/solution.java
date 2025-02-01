class Checkout {
    List<Integer> queue = new LinkedList<>();
    List<Integer> maxQueue = new LinkedList<>();

    public Checkout() {

    }

    public int get_max() {
        if(maxQueue.isEmpty()){
            return -1;
        }
        return maxQueue.getFirst();
    }

    public void add(int value) {
        queue.addLast(value);
        while (!maxQueue.isEmpty() && maxQueue.getLast()<value){
            maxQueue.removeLast();
        }
        maxQueue.addLast(value);
    }

    public int remove() {
        if(queue.isEmpty()){
            return -1;
        }
        int result = queue.removeFirst();
        if(maxQueue.getFirst() == result){
            maxQueue.removeFirst();
        }
        return result;
    }
}

/**
 * Your Checkout object will be instantiated and called as such:
 * Checkout obj = new Checkout();
 * int param_1 = obj.get_max();
 * obj.add(value);
 * int param_3 = obj.remove();
 */