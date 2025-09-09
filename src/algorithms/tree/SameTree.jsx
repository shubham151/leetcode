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

const SameTree = () => {
  const code = `/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if (!p && !q) return true;
    if (!p || !q || p.val !== q.val) return false;
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};`;

  const approaches = [
    {
      name: "DFS (Recursive)",
      complexity: "O(n) time, O(h) space",
      description:
        "Compare both trees node by node. If both nodes are null → true. If one is null or values differ → false. Recurse left and right.",
    },
    {
      name: "BFS / Iterative",
      complexity: "O(n) time, O(n) space",
      description:
        "Use a queue, push nodes from both trees together. Compare values while traversing level by level.",
    },
  ];

  const processingSteps = [
    "Input: p = [1,2,3], q = [1,2,3]",
    "Compare roots → both 1 → ok",
    "Go left → p=2, q=2 → ok",
    "Go right → p=3, q=3 → ok",
    "All nodes matched → return true",
  ];

  return (
    <SlideContainer>
      <AlgorithmTitle title="Same Tree" />

      <StepsBox>
        <Step
          number={1}
          title="Check nulls"
          description="If both nodes are null, return true. If only one is null, return false."
        />
        <Step
          number={2}
          title="Compare values"
          description="If values differ, trees are not the same."
        />
        <Step
          number={3}
          title="Recurse"
          description="Recursively check left children and right children."
        />
        <Step
          number={4}
          title="Combine results"
          description="Return true only if both left and right subtrees are the same."
        />
      </StepsBox>

      <IntuitionBox>
        <p>
          Two trees are the same if they are structurally identical and nodes
          have the same values. We compare them node by node.
        </p>
      </IntuitionBox>

      <ExampleBox title="Example Walkthrough">
        <div>
          <Highlight>Input: p = [1,2,3], q = [1,2,3]</Highlight>
          <br />
          <Highlight>Output: true</Highlight>
        </div>

        <ProcessingSteps
          title="Step-by-step execution:"
          steps={processingSteps}
          result="true"
        />
      </ExampleBox>

      <CodeBlock code={code} />

      <ApproachBox approaches={approaches} />

      <ComplexityBox
        timeComplexity={{
          value: "O(n)",
          description: "Each node compared once",
        }}
        spaceComplexity={{
          value: "O(h)",
          description: "Recursive call stack (h = tree height)",
        }}
      />
    </SlideContainer>
  );
};

export default SameTree;
