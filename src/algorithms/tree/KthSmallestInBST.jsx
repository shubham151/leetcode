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

const KthSmallestInBST = () => {
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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let count = 0;
    const stack = [];
    let curr = root;
    while (stack.length > 0 || curr) {
        while (curr) {
            stack.push(curr);
            curr = curr.left;
        }
        const node = stack.pop();
        count++;
        if (count === k) return node.val;
        curr = node.right;
    }
};`

  const approaches = [
    {
      name: 'Iterative inorder traversal',
      complexity: 'O(h + k)',
      description: 'Use a stack to simulate inorder traversal. When count reaches k, return value.',
    },
    {
      name: 'Recursive inorder traversal',
      complexity: 'O(h + k)',
      description: 'Traverse recursively while decrementing k. Stop when k == 0.',
    },
    {
      name: 'Augmented BST with subtree sizes',
      complexity: 'O(h)',
      description: 'Maintain subtree sizes in each node. Move left/right based on subtree counts.',
    },
  ]

  const processingSteps = [
    'Initialize stack and set count = 0.',
    'Traverse left subtree while pushing nodes to stack.',
    'Pop node from stack and increment count.',
    'If count == k, return node.val.',
    'Otherwise, move to right subtree and continue.',
  ]

  return (
    <SlideContainer>
      <AlgorithmTitle title="Kth Smallest Element in a BST" />

      <StepsBox>
        <Step
          number={1}
          title="Use BST property"
          description="Inorder traversal of BST gives sorted order."
        />
        <Step
          number={2}
          title="Iterative traversal"
          description="Push nodes to stack until leftmost node reached."
        />
        <Step
          number={3}
          title="Counting"
          description="Increment count at each pop. If count == k, return."
        />
      </StepsBox>

      <IntuitionBox>
        <p>
          In a BST, the <Highlight>inorder traversal</Highlight> produces sorted values. The{' '}
          <Highlight>kth node visited</Highlight> corresponds to the kth smallest element.
        </p>
      </IntuitionBox>

      <ExampleBox title="Example Walkthrough">
        <div>
          <Highlight>Input: root = [3,1,4,null,2], k = 1</Highlight> → Output: 1
          <br />
          <Highlight>Input: root = [5,3,6,2,4,null,null,1], k = 3</Highlight> → Output: 3
        </div>
        <ProcessingSteps
          title="Inorder Process"
          steps={processingSteps}
          result="Return kth smallest value when count reaches k."
        />
      </ExampleBox>

      <CodeBlock code={code} />

      <ApproachBox approaches={approaches} />

      <ComplexityBox
        timeComplexity={{
          value: 'O(h + k)',
          description: 'h = tree height. Traverses only nodes necessary to reach kth.',
        }}
        spaceComplexity={{
          value: 'O(h)',
          description: 'Stack size proportional to tree height.',
        }}
      />
    </SlideContainer>
  )
}

export default KthSmallestInBST
