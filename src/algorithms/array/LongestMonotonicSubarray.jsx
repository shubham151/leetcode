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

const LongestMonotonicSubarray = () => {
  const code = `function longestMonotonicSubarray(nums) {
    let incLength = 1, decLength = 1, maxLength = 1;
    let n = nums.length;

    for(let i = 1; i < n; i++) {
        if(nums[i-1] < nums[i]) {
            // Increasing sequence continues
            incLength++;
            decLength = 1;  // Reset decreasing
        } else if(nums[i-1] > nums[i]) {
            // Decreasing sequence continues  
            decLength++;
            incLength = 1;  // Reset increasing
        } else {
            // Equal elements - reset both
            incLength = 1;
            decLength = 1;
        }

        // Track maximum length seen so far
        maxLength = Math.max(maxLength, incLength, decLength);
    }

    return maxLength;
}`;

  const approaches = [
    {
      name: "Brute Force",
      complexity: "O(n³) time, O(1) space",
      description:
        "Check every subarray to see if it's monotonic and track maximum length",
    },
    {
      name: "Two Pointers (Optimized)",
      complexity: "O(n²) time, O(1) space",
      description:
        "For each starting position, extend as far as possible while maintaining monotonicity",
    },
    {
      name: "Single Pass (Optimal)",
      complexity: "O(n) time, O(1) space",
      description:
        "Track increasing and decreasing lengths simultaneously in one pass",
    },
  ];

  const processingSteps = [
    "• i=1: nums[0]=3, nums[1]=3 → equal → incLength=1, decLength=1, max=1",
    "• i=2: nums[1]=3, nums[2]=4 → increasing → incLength=2, decLength=1, max=2",
    "• i=3: nums[2]=4, nums[3]=4 → equal → incLength=1, decLength=1, max=2",
    "• i=4: nums[3]=4, nums[4]=1 → decreasing → incLength=1, decLength=2, max=2",
  ];

  return (
    <SlideContainer>
      <AlgorithmTitle title="Longest Monotonic Subarray" />

      <StepsBox>
        <Step
          number={1}
          title="Initialize tracking variables"
          description="incLength=1, decLength=1, maxLength=1 for current and maximum lengths"
        />
        <Step
          number={2}
          title="Iterate through array from index 1"
          description="compare each element with the previous one"
        />
        <Step
          number={3}
          title="Handle increasing case"
          description="if nums[i-1] < nums[i], increment incLength and reset decLength=1"
        />
        <Step
          number={4}
          title="Handle decreasing case"
          description="if nums[i-1] > nums[i], increment decLength and reset incLength=1"
        />
        <Step
          number={5}
          title="Handle equal case"
          description="if nums[i-1] == nums[i], reset both incLength=1 and decLength=1"
        />
        <Step
          number={6}
          title="Update maximum length"
          description="maxLength = Math.max(maxLength, incLength, decLength)"
        />
      </StepsBox>

      <IntuitionBox>
        <p>
          The key insight is that we can track both increasing and decreasing
          subsequence lengths simultaneously in a single pass. When we encounter
          an increasing pair, the decreasing sequence breaks (and vice versa).
          When elements are equal, both sequences break. This allows us to find
          the longest monotonic subarray efficiently without checking every
          possible subarray.
        </p>
      </IntuitionBox>

      <ExampleBox>
        <div>
          <Highlight>nums = [3, 3, 4, 4, 1]</Highlight>
          <br />
          <Highlight>expected output = 2</Highlight>
        </div>

        <ProcessingSteps
          title="Step-by-step execution:"
          steps={processingSteps}
          result="2 (either [3,4] increasing or [4,1] decreasing)"
        />
      </ExampleBox>

      <CodeBlock code={code} />

      <ApproachBox approaches={approaches} />

      <div className="section">
        <div className="section-title">Key Observations</div>
        <ul className="list">
          <li className="list-item">
            <strong>Monotonic Definition:</strong> Either strictly increasing or
            strictly decreasing
          </li>
          <li className="list-item">
            <strong>Sequence Break:</strong> Equal elements break both
            increasing and decreasing sequences
          </li>
          <li className="list-item">
            <strong>State Tracking:</strong> We need to track both increasing
            and decreasing lengths simultaneously
          </li>
          <li className="list-item">
            <strong>Reset Logic:</strong> When one type continues, the other
            resets to 1
          </li>
        </ul>
      </div>

      <ComplexityBox
        timeComplexity={{
          value: "O(n)",
          description: "Single pass through the array",
        }}
        spaceComplexity={{
          value: "O(1)",
          description: "Only using constant extra variables",
        }}
      />
    </SlideContainer>
  );
};

export default LongestMonotonicSubarray;
