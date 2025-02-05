class MinStack {

    private final List<Integer> stack1 = new ArrayList<>();
    private final List<Integer> stack2 = new ArrayList<>();
    public MinStack() {

    }

    public void push(int x) {
        stack1.add(x);
        if(stack2.isEmpty() || stack2.getLast() >= x){
            stack2.add(x);
        }

    }

    public void pop() {
        int x = stack1.removeLast();
        if(stack2.getLast() == x){
            stack2.removeLast();
        }
        
    }

    public int top() {
        return stack1.getLast();
    }

    public int getMin() {
        return stack2.getLast();
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