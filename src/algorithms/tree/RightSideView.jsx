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

const RightSideView = () => {
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
 * @return {number[]}
 */
var rightSideView = function(root) {
    const result = [];
    if (!root) return result;

    const queue = [root];
    while (queue.length > 0) {
        let n = queue.length;
        result.push(queue[n - 1].val); // last node in current level
        while (n > 0) {
            const node = queue.shift();
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
            n--;
        }
    }
    return result;
};`

  const approaches = [
    {
      name: 'BFS by levels',
      complexity: 'O(n) time, O(n) space',
      description:
        'At each level, record the last node value (rightmost node) before moving to the next level.',
    },
    {
      name: 'DFS with depth tracking',
      complexity: 'O(n) time, O(h) space',
      description:
        'Traverse right-first, and at each depth record the first node encountered. Ensures rightmost node is captured.',
    },
  ]

  const processingSteps = [
    'Input: root = [1,2,3,null,5,null,4]',
    'Level 0: [1] → rightmost = 1',
    'Level 1: [2,3] → rightmost = 3',
    'Level 2: [5,4] → rightmost = 4',
    'Result = [1,3,4]',
  ]

  return (
    <SlideContainer>
      <AlgorithmTitle title="Binary Tree Right Side View" />

      <StepsBox>
        <Step
          number={1}
          title="Initialize queue"
          description="Use a queue to perform BFS level by level."
        />
        <Step
          number={2}
          title="Process each level"
          description="At each level, capture the last node’s value."
        />
        <Step
          number={3}
          title="Expand children"
          description="Add left and right children to queue for the next level."
        />
        <Step
          number={4}
          title="Return result"
          description="After traversal, result contains rightmost node values per level."
        />
      </StepsBox>

      <IntuitionBox>
        <p>
          From the <Highlight>right side view</Highlight>, only the last node at each level is
          visible. BFS (or right-prioritized DFS) ensures we pick these nodes correctly.
        </p>
      </IntuitionBox>

      <ExampleBox title="Example Walkthrough">
        <div>
          <Highlight>Input: [1,2,3,null,5,null,4]</Highlight>
          <br />
          <Highlight>Output: [1,3,4]</Highlight>
        </div>

        <ProcessingSteps title="Step-by-step execution:" steps={processingSteps} result="[1,3,4]" />
      </ExampleBox>

      <CodeBlock code={code} />

      <ApproachBox approaches={approaches} />

      <ComplexityBox
        timeComplexity={{
          value: 'O(n)',
          description: 'Each node is processed once',
        }}
        spaceComplexity={{
          value: 'O(n)',
          description: 'Queue or recursion depth storage',
        }}
      />
    </SlideContainer>
  )
}

export default RightSideView
