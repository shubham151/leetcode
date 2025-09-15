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

const TwoSumII = () => {
  const code = `/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let l = 0, r = numbers.length - 1;

    while (l < r) {
        const sum = numbers[l] + numbers[r];
        if (sum < target) {
            l++;
        } else if (sum > target) {
            r--;
        } else {
            return [l + 1, r + 1]; // 1-indexed
        }
    }
};`

  const approaches = [
    {
      name: 'Two Pointers',
      complexity: 'O(n)',
      description:
        'Start with left at 0 and right at end. Adjust pointers inward depending on sum vs target.',
    },
    {
      name: 'Binary Search per element',
      complexity: 'O(n log n)',
      description:
        'For each element, binary search for target - element in remaining array. Slower but valid.',
    },
  ]

  const processingSteps = [
    'Initialize left pointer at 0, right pointer at end.',
    'Compute sum = numbers[left] + numbers[right].',
    'If sum < target → move left pointer right.',
    'If sum > target → move right pointer left.',
    'If sum == target → return [left+1, right+1].',
  ]

  return (
    <SlideContainer>
      <AlgorithmTitle title="Two Sum II – Input Array Is Sorted" />

      <StepsBox>
        <Step
          number={1}
          title="Pointer initialization"
          description="Left pointer at start, right pointer at end."
        />
        <Step
          number={2}
          title="Iteratively adjust pointers"
          description="Shrink window until sum matches target."
        />
        <Step
          number={3}
          title="Return result"
          description="Return 1-indexed indices of the two numbers."
        />
      </StepsBox>

      <IntuitionBox>
        <p>
          Because the input array is sorted, we can efficiently use the{' '}
          <Highlight>two-pointer technique</Highlight>. By moving pointers inward depending on
          whether the sum is too small or too large, we guarantee linear time.
        </p>
      </IntuitionBox>

      <ExampleBox title="Example Walkthrough">
        <div>
          <Highlight>Input: numbers = [1, 4, 8, 10], target = 9</Highlight>
          <br />
          {`left = 1, right = 10 → sum = 11 > 9 → move right`}
          <br />
          left = 1, right = 8 → sum = 9 → return [1, 3]
        </div>
        <ProcessingSteps title="Two Pointers in Action" steps={processingSteps} result="[1, 3]" />
      </ExampleBox>

      <CodeBlock code={code} />

      <ApproachBox approaches={approaches} />

      <ComplexityBox
        timeComplexity={{
          value: 'O(n)',
          description: 'Each pointer moves at most once through array.',
        }}
        spaceComplexity={{
          value: 'O(1)',
          description: 'Only a few variables used regardless of input size.',
        }}
      />
    </SlideContainer>
  )
}

export default TwoSumII
