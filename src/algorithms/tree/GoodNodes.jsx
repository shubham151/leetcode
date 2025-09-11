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
} from '../../components/algorithm'

const GoodNodes = () => {
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
var goodNodes = function(root) {
    let good = 0;
    function dfs(node, max) {
        if (!node) return;
        if (node.val >= max) {
            good++;
        }
        const newMax = Math.max(max, node.val);
        dfs(node.left, newMax);
        dfs(node.right, newMax);
    }
    dfs(root, -Infinity);
    return good;
};`

  const approaches = [
    {
      name: 'DFS (recursive)',
      complexity: 'O(n) time, O(h) space',
      description:
        'Keep track of the maximum value seen along the path. If current node ≥ max, it’s good.',
    },
    {
      name: 'DFS (iterative with stack)',
      complexity: 'O(n) time, O(h) space',
      description:
        'Use explicit stack storing (node, maxSoFar). Increment counter if condition holds.',
    },
  ]

  const processingSteps = [
    'Input: [3,1,4,3,null,1,5]',
    'Path to 3: max = -∞ → 3 ≥ -∞ → good++',
    'Path to 1: max = 3 → 1 < 3 → not good',
    'Path to 3 (left child of 1): max = 3 → 3 ≥ 3 → good++',
    'Path to 4: max = 3 → 4 ≥ 3 → good++',
    'Path to 1: max = 4 → 1 < 4 → not good',
    'Path to 5: max = 4 → 5 ≥ 4 → good++',
    'Result = 4',
  ]

  return (
    <SlideContainer>
      <AlgorithmTitle title="Count Good Nodes in Binary Tree" />

      <StepsBox>
        <Step
          number={1}
          title="Initialize counter"
          description="Set good = 0 to track number of good nodes."
        />
        <Step
          number={2}
          title="DFS traversal"
          description="At each node, compare node value with max so far."
        />
        <Step
          number={3}
          title="Update maximum"
          description="If node ≥ max, increment good and update max."
        />
        <Step
          number={4}
          title="Recurse children"
          description="Pass updated max to left and right children."
        />
      </StepsBox>

      <IntuitionBox>
        <p>
          A <Highlight>good node</Highlight> is one where no ancestor has a greater value. By
          carrying the <Highlight>max so far</Highlight> down the path, we can check this in O(1) at
          each step.
        </p>
      </IntuitionBox>

      <ExampleBox title="Example Walkthrough">
        <div>
          <Highlight>Input: [3,1,4,3,null,1,5]</Highlight>
          <br />
          <Highlight>Output: 4</Highlight>
        </div>
        <ProcessingSteps title="Step-by-step execution:" steps={processingSteps} result="4" />
      </ExampleBox>

      <CodeBlock code={code} />

      <ApproachBox approaches={approaches} />

      <ComplexityBox
        timeComplexity={{
          value: 'O(n)',
          description: 'Each node is visited once',
        }}
        spaceComplexity={{
          value: 'O(h)',
          description: 'Recursion depth = height of tree',
        }}
      />
    </SlideContainer>
  )
}

export default GoodNodes
