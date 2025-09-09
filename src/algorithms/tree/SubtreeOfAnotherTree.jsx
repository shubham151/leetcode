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

const SubtreeOfAnotherTree = () => {
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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    function isMatch(p, q) {
        if (!p && !q) return true;
        if (!p || !q || p.val !== q.val) return false;
        return isMatch(p.left, q.left) && isMatch(p.right, q.right);
    }

    function check(node) {
        if (!node) return false;
        if (node.val === subRoot.val && isMatch(node, subRoot)) return true;
        return check(node.left) || check(node.right);
    }

    if (!root || !subRoot) return false;
    return check(root);
};`;

  const approaches = [
    {
      name: "DFS + Matching",
      complexity: "O(n * m) worst case",
      description:
        "Traverse each node of root. If node value matches subRoot root, perform DFS to check full subtree match.",
    },
    {
      name: "Serialization + String Matching",
      complexity: "O(n + m)",
      description:
        "Serialize both trees (e.g., preorder with null markers) and check if subRoot string is a substring of root string.",
    },
  ];

  const processingSteps = [
    "Input: root = [3,4,5,1,2], subRoot = [4,1,2]",
    "Traverse root: first match at node 4",
    "Compare subtree rooted at 4 with subRoot → identical",
    "Return true",
  ];

  return (
    <SlideContainer>
      <AlgorithmTitle title="Subtree of Another Tree" />

      <StepsBox>
        <Step
          number={1}
          title="Traverse root"
          description="Check each node in the main tree."
        />
        <Step
          number={2}
          title="Find candidate match"
          description="When root node value matches subRoot root value, check further."
        />
        <Step
          number={3}
          title="Check subtree match"
          description="Use DFS to compare both subtrees node by node."
        />
        <Step
          number={4}
          title="Return result"
          description="If full match found, return true, otherwise keep searching."
        />
      </StepsBox>

      <IntuitionBox>
        <p>
          A subtree means an exact structural and value match. We check each
          node in the main tree and verify if its subtree is identical to{" "}
          <Highlight>subRoot</Highlight>.
        </p>
      </IntuitionBox>

      <ExampleBox title="Example Walkthrough">
        <div>
          <Highlight>Input: root = [3,4,5,1,2], subRoot = [4,1,2]</Highlight>
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
          value: "O(n * m)",
          description:
            "For each node in root (n), compare subtree with subRoot (m).",
        }}
        spaceComplexity={{
          value: "O(h)",
          description: "Recursive stack height of DFS, h = tree height",
        }}
      />
    </SlideContainer>
  );
};

export default SubtreeOfAnotherTree;
