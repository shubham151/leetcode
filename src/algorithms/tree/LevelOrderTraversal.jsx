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

const LevelOrderTraversal = () => {
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    const result = [];
    function levelOrderTravel(node, level) {
        if (!node) return null;
        if (!result[level]) result[level] = [];
        result[level].push(node.val);
        levelOrderTravel(node.left, level + 1);
        levelOrderTravel(node.right, level + 1);
    }
    levelOrderTravel(root, 0);
    return result;
};`;

  const approaches = [
    {
      name: "Recursive DFS with level tracking",
      complexity: "O(n) time, O(n) space",
      description:
        "Pass current depth during recursion, and group node values by depth in result array.",
    },
    {
      name: "BFS with Queue",
      complexity: "O(n) time, O(n) space",
      description:
        "Use a queue to process nodes level by level, appending children each round.",
    },
  ];

  const processingSteps = [
    "Input: root = [3,9,20,null,null,15,7]",
    "Start at root → level 0 → [3]",
    "Traverse children → level 1 → [9,20]",
    "Traverse next → level 2 → [15,7]",
    "Result = [[3],[9,20],[15,7]]",
  ];

  return (
    <SlideContainer>
      <AlgorithmTitle title="Binary Tree Level Order Traversal" />

      <StepsBox>
        <Step
          number={1}
          title="Initialize result"
          description="Maintain a 2D array where each row stores values of a level."
        />
        <Step
          number={2}
          title="Traverse"
          description="Either DFS with level tracking or BFS with a queue."
        />
        <Step
          number={3}
          title="Group by level"
          description="At each node, insert value into the correct level array."
        />
        <Step
          number={4}
          title="Return"
          description="Return the final 2D array containing all levels."
        />
      </StepsBox>

      <IntuitionBox>
        <p>
          Level order means <Highlight>breadth-first traversal</Highlight>. We
          group nodes level by level and return as a 2D array.
        </p>
      </IntuitionBox>

      <ExampleBox title="Example Walkthrough">
        <div>
          <Highlight>Input: root = [3,9,20,null,null,15,7]</Highlight>
          <br />
          <Highlight>Output: [[3],[9,20],[15,7]]</Highlight>
        </div>

        <ProcessingSteps
          title="Step-by-step execution:"
          steps={processingSteps}
          result="[[3],[9,20],[15,7]]"
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
          value: "O(n)",
          description: "Result storage and recursion/queue overhead",
        }}
      />
    </SlideContainer>
  );
};

export default LevelOrderTraversal;
