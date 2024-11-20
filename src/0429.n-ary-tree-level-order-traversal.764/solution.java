/*
// Definition for a Node.
class Node {
    public int val;
    public List<Node> children;

    public Node() {}

    public Node(int _val) {
        val = _val;
    }

    public Node(int _val, List<Node> _children) {
        val = _val;
        children = _children;
    }
};
*/

class Solution {
    public List<List<Integer>> levelOrder(Node root) {
        List<List<Integer>> result = new ArrayList<>();
        if(root == null){
            return result;
        }
        levelOrder(List.of(root),result);
        return result;
    }

    private void levelOrder(List<Node> nodes,List<List<Integer>> result){
        List<Integer> row = new ArrayList<>();
        List<Node> nextRow = new ArrayList<>();
        for(Node node : nodes){
            row.add(node.val);
            nextRow.addAll(node.children);
        }
        result.add(row);
        if(!nextRow.isEmpty()){
            levelOrder(nextRow,result);
        }

    }

}