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

const InvertBinaryTree = () => {
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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    function rTree(node) {
        if (!node) return node;

        const left = rTree(node.left);
        const right = rTree(node.right);

        node.right = left;
        node.left = right;

        return node;
    }
    return rTree(root);
};`;

  const approaches = [
    {
      name: "Recursive DFS",
      complexity: "O(n) time, O(h) space",
      description:
        "Traverse the tree recursively. At each node, swap its left and right children. h = tree height.",
    },
    {
      name: "Iterative BFS",
      complexity: "O(n) time, O(w) space",
      description:
        "Use a queue for level-order traversal, swapping children iteratively. w = max width of tree.",
    },
  ];

  const processingSteps = [
    "Input: root = [4,2,7,1,3,6,9]",
    "Traverse root=4: swap(2,7) → [4,7,2,1,3,6,9]",
    "At node=7: swap(6,9)",
    "At node=2: swap(1,3)",
    "Final: [4,7,2,9,6,3,1]",
  ];

  return (
    <SlideContainer>
      <AlgorithmTitle title="Invert Binary Tree" />

      <StepsBox>
        <Step
          number={1}
          title="Base case"
          description="If node is null, return null"
        />
        <Step
          number={2}
          title="Recursive calls"
          description="Call function on left and right children"
        />
        <Step
          number={3}
          title="Swap"
          description="Assign node.left = right, node.right = left"
        />
        <Step
          number={4}
          title="Return node"
          description="Return the updated node back up the recursion"
        />
      </StepsBox>

      <IntuitionBox>
        <p>
          At each node, we <strong>mirror its children</strong>. Applying this
          recursively in DFS fashion results in the entire tree being inverted.
        </p>
      </IntuitionBox>

      <ExampleBox title="Example Walkthrough">
        <div>
          <Highlight>Input: root = [4,2,7,1,3,6,9]</Highlight>
          <br />
          <Highlight>Output: [4,7,2,9,6,3,1]</Highlight>
        </div>

        <ProcessingSteps
          title="Step-by-step execution:"
          steps={processingSteps}
          result="[4,7,2,9,6,3,1]"
        />
      </ExampleBox>

      <CodeBlock code={code} />

      <ApproachBox approaches={approaches} />

      <ComplexityBox
        timeComplexity={{
          value: "O(n)",
          description: "Each node is visited once",
        }}
        spaceComplexity={{
          value: "O(h)",
          description: "Recursive stack or queue depending on approach",
        }}
      />
    </SlideContainer>
  );
};

export default InvertBinaryTree;
