class MinStack {
    List<Integer> stack = new ArrayList<>();
    List<Integer> min = new ArrayList<>();

    /** initialize your data structure here. */
    public MinStack() {

    }

    public void push(int x) {
        stack.addLast(x);
        if(min.isEmpty() || min.getLast()>=x ){
            min.addLast(x);
        }

    }

    public void pop() {
        if(stack.isEmpty()){
            return;
        }
        int n = stack.removeLast();
        if(min.getLast() == n){
            min.removeLast();
        }

    }

    public int top() {
        return stack.getLast();
    }

    public int getMin() {
        return min.getLast();
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * MinStack obj = new MinStack();
 * obj.push(x);
 * obj.pop();
 * int param_3 = obj.top();
 * int param_4 = obj.getMin();
 */