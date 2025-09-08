import {
  SlideContainer,
  AlgorithmTitle,
  StepsBox,
  Step,
  ExampleBox,
  ProcessingSteps,
  CodeBlock,
  IntuitionBox,
  ApproachBox,
  ComplexityBox,
  Highlight,
} from "../../components/algorithm";

const DiameterBinaryTree = () => {
  const code = `/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    let max = 0;
    function dfs(node) {
        if (!node) return 0;
        const left = dfs(node.left);
        const right = dfs(node.right);
        max = Math.max(max, left + right);
        return 1 + Math.max(left, right);
    }
    dfs(root);
    return max;
};`;

  const approaches = [
    {
      name: "DFS with Depth Calculation",
      complexity: "O(n) time, O(h) space",
      description:
        "At each node, compute depth of left and right subtrees. Diameter passing through that node is leftDepth + rightDepth. Track global maximum.",
    },
    {
      name: "BFS / Level Order (less common)",
      complexity: "O(n) time, O(w) space",
      description:
        "You can also compute heights iteratively, but DFS recursion is simpler and direct.",
    },
  ];

  const processingSteps = [
    "Input: root = [1,2,3,4,5]",
    "Start DFS at node=1",
    "At node=2 → recurse into 4 and 5 → depths=1 each → diameter candidate=2",
    "At node=1 → left depth=2, right depth=1 → diameter candidate=3",
    "Update max=3 → final answer=3",
  ];

  return (
    <SlideContainer>
      <AlgorithmTitle title="Diameter of Binary Tree" />

      <StepsBox>
        <Step
          number={1}
          title="Definition"
          description="The diameter is the longest path between any two nodes in the tree."
        />
        <Step
          number={2}
          title="DFS traversal"
          description="For each node, compute the depth of left and right subtrees."
        />
        <Step
          number={3}
          title="Update diameter"
          description="Update global max with leftDepth + rightDepth."
        />
        <Step
          number={4}
          title="Return depth"
          description="Return 1 + max(leftDepth, rightDepth) for recursion."
        />
      </StepsBox>

      <IntuitionBox>
        <p>
          The <strong>longest path</strong> may or may not pass through the
          root. By checking every node’s leftDepth + rightDepth, we ensure all
          possible paths are considered.
        </p>
      </IntuitionBox>

      <ExampleBox title="Example Walkthrough">
        <div>
          <Highlight>Input: root = [1,2,3,4,5]</Highlight>
          <br />
          <Highlight>Output: 3</Highlight>
        </div>

        <ProcessingSteps
          title="Step-by-step execution:"
          steps={processingSteps}
          result="3"
        />
      </ExampleBox>

      <CodeBlock code={code} />

      <ApproachBox approaches={approaches} />

      <ComplexityBox
        timeComplexity={{
          value: "O(n)",
          description: "Each node visited once",
        }}
        spaceComplexity={{
          value: "O(h)",
          description: "Recursive stack depth, h = height of tree",
        }}
      />
    </SlideContainer>
  );
};

export default DiameterBinaryTree;
