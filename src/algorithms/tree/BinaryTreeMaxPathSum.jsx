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

const BinaryTreeMaxPathSum = () => {
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
var maxPathSum = function(root) {
    let max = -Infinity;
    function find(node) {
        if (!node) return 0;
        const left = Math.max(find(node.left), 0);
        const right = Math.max(find(node.right), 0);
        max = Math.max(max, node.val + left + right);
        return node.val + Math.max(left, right);
    }
    find(root);
    return max;
};`

  const approaches = [
    {
      name: 'DFS recursion',
      complexity: 'O(n)',
      description:
        'At each node, compute max contribution from left and right. Update global max with node + left + right.',
    },
    {
      name: 'Top-down traversal with memoization (less common)',
      complexity: 'O(n)',
      description: 'Cache results for subtrees, but recursion with global max is simpler.',
    },
  ]

  const processingSteps = [
    'Start DFS from root.',
    'At each node, compute max path sum from left and right child (ignore negative paths by clamping to 0).',
    'Update global max with node.val + left + right.',
    'Return node.val + max(left, right) as contribution to parent.',
    'After traversal, return global max.',
  ]

  return (
    <SlideContainer>
      <AlgorithmTitle title="Binary Tree Maximum Path Sum" />

      <StepsBox>
        <Step
          number={1}
          title="Understand path definition"
          description="A path can start and end at any node, and must connect parent-child links."
        />
        <Step
          number={2}
          title="DFS with contribution"
          description="At each node, compute the maximum contribution from left and right."
        />
        <Step
          number={3}
          title="Update global max"
          description="Compare current max with node + left + right."
        />
      </StepsBox>

      <IntuitionBox>
        <p>
          Each node can either be part of a path going <Highlight>upwards</Highlight> (to its
          parent) or can <Highlight>form a path through itself</Highlight> combining left and right
          subtrees. By keeping track of both cases, we ensure the maximum path is considered
          globally.
        </p>
      </IntuitionBox>

      <ExampleBox title="Example Walkthrough">
        <div>
          <Highlight>Input: root = [-10,9,20,null,null,15,7]</Highlight>
          <br />
          Paths: [9], [15], [7], [15+20+7], [-10+9], etc.
          <br />
          Max path = <Highlight>15 + 20 + 7 = 42</Highlight>
        </div>
        <ProcessingSteps
          title="DFS Process"
          steps={processingSteps}
          result="Global max updated to maximum path sum across all nodes."
        />
      </ExampleBox>

      <CodeBlock code={code} />

      <ApproachBox approaches={approaches} />

      <ComplexityBox
        timeComplexity={{
          value: 'O(n)',
          description: 'Visit each node once in DFS.',
        }}
        spaceComplexity={{
          value: 'O(h)',
          description: 'Recursion stack depth = tree height.',
        }}
      />
    </SlideContainer>
  )
}

export default BinaryTreeMaxPathSum
