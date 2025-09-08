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

const MaxDepthBinaryTree = () => {
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
var maxDepth = function(root) {
    if (!root) return 0;
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};`;

  const approaches = [
    {
      name: "Recursive DFS",
      complexity: "O(n) time, O(h) space",
      description:
        "At each node, recursively compute the depth of left and right subtrees, and return 1 + max(leftDepth, rightDepth). h = height of tree.",
    },
    {
      name: "Iterative BFS",
      complexity: "O(n) time, O(w) space",
      description:
        "Use a queue for level-order traversal. Count levels until traversal finishes. w = max width of tree.",
    },
  ];

  const processingSteps = [
    "Input: root = [3,9,20,null,null,15,7]",
    "At node=3 → recurse left(9) and right(20)",
    "Node=9 → left=null, right=null → depth=1",
    "Node=20 → recurse left(15), right(7) → each returns 1 → depth=2",
    "Return max(1, 1+2) + 1 = 3",
  ];

  return (
    <SlideContainer>
      <AlgorithmTitle title="Maximum Depth of Binary Tree" />

      <StepsBox>
        <Step
          number={1}
          title="Base case"
          description="If root is null, return 0"
        />
        <Step
          number={2}
          title="Recursive case"
          description="Recurse into left and right subtrees"
        />
        <Step
          number={3}
          title="Combine results"
          description="Take max of left and right depths"
        />
        <Step
          number={4}
          title="Add current node"
          description="Return 1 + maximum depth of children"
        />
      </StepsBox>

      <IntuitionBox>
        <p>
          The depth of a binary tree is the{" "}
          <strong>longest path from root to a leaf</strong>. By recursively
          asking each child for its depth, we can compute the answer in one
          traversal.
        </p>
      </IntuitionBox>

      <ExampleBox title="Example Walkthrough">
        <div>
          <Highlight>Input: root = [3,9,20,null,null,15,7]</Highlight>
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
          description: "Recursive stack depth (worst h = n for skewed tree)",
        }}
      />
    </SlideContainer>
  );
};

export default MaxDepthBinaryTree;
