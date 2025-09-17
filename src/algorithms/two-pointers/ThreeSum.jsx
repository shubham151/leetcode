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

const ThreeSum = () => {
  const code = `/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const result = [];
    nums.sort((a, b) => a - b);

    for (let k = 0; k < nums.length - 2; k++) {
        if (k > 0 && nums[k] === nums[k - 1]) continue; // skip duplicates

        let l = k + 1, r = nums.length - 1;
        while (l < r) {
            const sum = nums[k] + nums[l] + nums[r];
            if (sum < 0) {
                l++;
            } else if (sum > 0) {
                r--;
            } else {
                result.push([nums[k], nums[l], nums[r]]);
                l++;
                while (l < r && nums[l] === nums[l - 1]) l++; // skip duplicates
            }
        }
    }
    return result;
};`

  const approaches = [
    {
      name: 'Sorting + Two Pointers',
      complexity: 'O(n²)',
      description:
        'Sort the array. Fix one number and use two pointers to find pairs that sum to the negative of that number.',
    },
    {
      name: 'Hashset (less common)',
      complexity: 'O(n²)',
      description:
        'Fix one number and use a set to detect complements. Works but needs careful duplicate handling.',
    },
  ]

  const processingSteps = [
    'Sort input array.',
    'Iterate with index k as fixed element.',
    'Skip duplicates for k.',
    'Set l = k+1, r = end.',
    'Move l and r inward depending on sum.',
    'Record triplet if sum == 0, skipping duplicates.',
  ]

  return (
    <SlideContainer>
      <AlgorithmTitle title="3Sum" />

      <StepsBox>
        <Step
          number={1}
          title="Sort the array"
          description="Sorting helps with duplicate handling and pointer movement."
        />
        <Step number={2} title="Fix one element" description="Use index k as the anchor element." />
        <Step
          number={3}
          title="Two-pointer search"
          description="Search for pairs in remaining array that sum to -nums[k]."
        />
        <Step
          number={4}
          title="Avoid duplicates"
          description="Skip repeated numbers for both k and l to ensure unique triplets."
        />
      </StepsBox>

      <IntuitionBox>
        <p>
          The key trick is leveraging <Highlight>sorting</Highlight> +
          <Highlight>two pointers</Highlight>. Sorting allows us to move inward intelligently and
          skip duplicates to avoid repeated triplets.
        </p>
      </IntuitionBox>

      <ExampleBox title="Example Walkthrough">
        <div>
          <Highlight>Input: nums = [-1, 0, 1, 2, -1, -4]</Highlight>
          <br />
          Sorted: [-4, -1, -1, 0, 1, 2]
          <br />
          k = -1, l = 0, r = 2 → sum = 0 → triplet [-1, 0, 1]
          <br />k = -1 (next), l = 2, r = 5 → sum = 0 → triplet [-1, -1, 2]
        </div>
        <ProcessingSteps
          title="Finding triplets"
          steps={processingSteps}
          result="[[-1, -1, 2], [-1, 0, 1]]"
        />
      </ExampleBox>

      <CodeBlock code={code} />

      <ApproachBox approaches={approaches} />

      <ComplexityBox
        timeComplexity={{
          value: 'O(n²)',
          description: 'Outer loop runs n times, inner two-pointer loop ~n. Sorting is O(n log n).',
        }}
        spaceComplexity={{
          value: 'O(1)',
          description: 'Ignoring output storage, only a few pointers are used.',
        }}
      />
    </SlideContainer>
  )
}

export default ThreeSum
