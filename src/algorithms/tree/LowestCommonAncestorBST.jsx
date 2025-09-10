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

const LowestCommonAncestorBST = () => {
  const code = `/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    let node = root;
    while (node) {
        if (p.val > node.val && q.val > node.val) {
            node = node.right;
        } else if (p.val < node.val && q.val < node.val) {
            node = node.left;
        } else {
            return node;
        }
    }
};`;

  const approaches = [
    {
      name: "Iterative BST Traversal",
      complexity: "O(h) time, O(1) space",
      description:
        "Start at root, traverse down. If both nodes are smaller → go left. If both larger → go right. Otherwise, current node is LCA.",
    },
    {
      name: "Recursive BST Traversal",
      complexity: "O(h) time, O(h) space",
      description:
        "Same logic but recursive. Use call stack instead of explicit loop.",
    },
  ];

  const processingSteps = [
    "Input: root = [6,2,8,0,4,7,9], p = 2, q = 8",
    "Start at root (6).",
    "p=2 < 6 and q=8 > 6 → they are split → 6 is LCA.",
  ];

  return (
    <SlideContainer>
      <AlgorithmTitle title="Lowest Common Ancestor of BST" />

      <StepsBox>
        <Step
          number={1}
          title="Start at root"
          description="Compare values of p and q with current node."
        />
        <Step
          number={2}
          title="Go left"
          description="If both p and q are smaller than current node, move left."
        />
        <Step
          number={3}
          title="Go right"
          description="If both p and q are greater than current node, move right."
        />
        <Step
          number={4}
          title="Found LCA"
          description="If they diverge at current node, that's the LCA."
        />
      </StepsBox>

      <IntuitionBox>
        <p>
          In a BST, all left subtree values are smaller and all right subtree
          values are larger. The LCA is the first node where p and q split into
          different branches.
        </p>
      </IntuitionBox>

      <ExampleBox title="Example Walkthrough">
        <div>
          <Highlight>Input: root = [6,2,8,0,4,7,9], p = 2, q = 8</Highlight>
          <br />
          <Highlight>Output: 6</Highlight>
        </div>

        <ProcessingSteps
          title="Step-by-step execution:"
          steps={processingSteps}
          result="6"
        />
      </ExampleBox>

      <CodeBlock code={code} />

      <ApproachBox approaches={approaches} />

      <ComplexityBox
        timeComplexity={{
          value: "O(h)",
          description: "h = height of tree, single pass down the tree",
        }}
        spaceComplexity={{
          value: "O(1)",
          description: "Iterative approach uses no extra space",
        }}
      />
    </SlideContainer>
  );
};

export default LowestCommonAncestorBST;
