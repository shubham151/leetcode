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

const IsValidBST = () => {
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
 * @return {boolean}
 */
var isValidBST = function(root) {
    function validate(node, min, max) {
        if (!node) return true;
        if (node.val <= min || node.val >= max) return false;
        return (
            validate(node.left, min, node.val) &&
            validate(node.right, node.val, max)
        );
    }
    return validate(root, -Infinity, Infinity);
};`

  const approaches = [
    {
      name: 'DFS with bounds (recursive)',
      complexity: 'O(n) time, O(h) space',
      description:
        'For each node, enforce value must be within (min, max). Update bounds as you recurse.',
    },
    {
      name: 'Inorder traversal',
      complexity: 'O(n) time, O(h) space',
      description: 'Traverse inorder and ensure sequence is strictly increasing.',
    },
  ]

  const processingSteps = [
    'Start at root with (-∞, ∞).',
    'Check if node.val lies within range.',
    'Recurse left with (min, node.val).',
    'Recurse right with (node.val, max).',
    'Return false if any node violates constraint.',
    'Return true if traversal finishes with no violations.',
  ]

  return (
    <SlideContainer>
      <AlgorithmTitle title="Validate Binary Search Tree" />

      <StepsBox>
        <Step
          number={1}
          title="Initialize bounds"
          description="Set min = -∞ and max = ∞ for root."
        />
        <Step
          number={2}
          title="Recursive check"
          description="Ensure node value lies within (min, max)."
        />
        <Step
          number={3}
          title="Recurse left"
          description="For left child, update max = current node value."
        />
        <Step
          number={4}
          title="Recurse right"
          description="For right child, update min = current node value."
        />
      </StepsBox>

      <IntuitionBox>
        <p>
          A valid BST requires <Highlight>all nodes in the left subtree</Highlight> to be less than
          the root and <Highlight>all nodes in the right subtree</Highlight> to be greater. By
          carrying <Highlight>min and max bounds</Highlight> down the tree, we can validate each
          node in O(1).
        </p>
      </IntuitionBox>

      <ExampleBox title="Example Walkthrough">
        <div>
          <Highlight>Input: [2,1,3]</Highlight> → Output: true
          <br />
          <Highlight>Input: [5,1,4,null,null,3,6]</Highlight> → Output: false
        </div>
        <ProcessingSteps
          title="Validation Process"
          steps={processingSteps}
          result="True if all nodes respect BST property"
        />
      </ExampleBox>

      <CodeBlock code={code} />

      <ApproachBox approaches={approaches} />

      <ComplexityBox
        timeComplexity={{
          value: 'O(n)',
          description: 'Each node visited once',
        }}
        spaceComplexity={{
          value: 'O(h)',
          description: 'Recursion depth proportional to tree height',
        }}
      />
    </SlideContainer>
  )
}

export default IsValidBST
