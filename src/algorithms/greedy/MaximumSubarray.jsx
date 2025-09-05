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

const MaximumSubarray = () => {
  const code = `/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    const n = nums.length;
    let l = 0, r = 1;
    let curr = nums[0];
    let max = nums[0];

    while (r < n) {
        if (curr < 0) {
            l = r;
            curr = 0;
        }
        curr += nums[r];
        max = Math.max(max, curr);
        r++;
    }
    return max;
};`;

  const approaches = [
    {
      name: "Kadane’s Algorithm",
      complexity: "O(n) time, O(1) space",
      description:
        "Iterate once while maintaining the maximum subarray sum ending at each index. If the running sum becomes negative, reset it.",
    },
    {
      name: "Divide and Conquer",
      complexity: "O(n log n) time, O(log n) space",
      description:
        "Recursively compute maximum subarray in left, right, and crossing mid, then combine results.",
    },
  ];

  const processingSteps = [
    "• nums = [-2,1,-3,4,-1,2,1,-5,4]",
    "• Start: curr=-2, max=-2",
    "• r=1: curr<0 → reset curr=0; curr+1=1, max=1",
    "• r=2: curr=1+(-3)=-2, max=1",
    "• r=3: curr<0 → reset curr=0; curr+4=4, max=4",
    "• r=4: curr=4+(-1)=3, max=4",
    "• r=5: curr=3+2=5, max=5",
    "• r=6: curr=5+1=6, max=6",
    "• r=7: curr=6+(-5)=1, max=6",
    "• r=8: curr=1+4=5, max=6",
    "• Final result = 6",
  ];

  return (
    <SlideContainer>
      <AlgorithmTitle title="Maximum Subarray (Kadane’s Algorithm)" />

      <StepsBox>
        <Step
          number={1}
          title="Initialize"
          description="Set curr and max to nums[0]"
        />
        <Step
          number={2}
          title="Iterate"
          description="Traverse nums while updating curr sum and max"
        />
        <Step
          number={3}
          title="Reset if negative"
          description="If curr < 0, reset curr to 0 before adding next number"
        />
        <Step
          number={4}
          title="Track maximum"
          description="Update max whenever curr exceeds it"
        />
      </StepsBox>

      <IntuitionBox>
        <p>
          The key insight is that a{" "}
          <strong>negative running sum can’t help</strong> future subarrays — it
          only decreases the total. So we reset whenever the sum drops below 0.
          This greedy step ensures we only extend profitable subarrays.
        </p>
      </IntuitionBox>

      <ExampleBox title="Example Walkthrough">
        <div>
          <Highlight>nums = [-2,1,-3,4,-1,2,1,-5,4]</Highlight>
          <br />
          <Highlight>expected = 6</Highlight>
          <br />
          <small style={{ color: "#a1a1a6" }}>
            Best subarray is [4, -1, 2, 1] with sum 6.
          </small>
        </div>

        <ProcessingSteps
          title="Step-by-step execution:"
          steps={processingSteps}
          result="6"
        />
      </ExampleBox>

      <CodeBlock code={code} />

      <ApproachBox approaches={approaches} />

      <ComplexityBox
        timeComplexity={{
          value: "O(n)",
          description: "Single pass over array",
        }}
        spaceComplexity={{
          value: "O(1)",
          description: "Constant extra space",
        }}
      />
    </SlideContainer>
  );
};

export default MaximumSubarray;
