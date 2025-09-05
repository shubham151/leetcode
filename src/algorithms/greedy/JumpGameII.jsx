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

const JumpGameII = () => {
  const code = `/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let n = nums.length - 1;
    if (n === 0) return 0;

    let res = 0;
    let far = 0;
    let l = 0, r = 0;

    while (r < n) {
        far = 0;
        while (l <= r) {
            far = Math.max(far, nums[l] + l);
            l++;
        }
        l = r + 1;
        r = far;
        res++;
    }
    return res;
};`;

  const approaches = [
    {
      name: "Greedy BFS (layered jumps)",
      complexity: "O(n) time, O(1) space",
      description:
        "Treat the array as levels of BFS: each level is the range you can reach with one jump. Move through levels until you can reach the end.",
    },
    {
      name: "Dynamic Programming",
      complexity: "O(n^2) time, O(n) space",
      description:
        "Compute minimum jumps to each index by checking all reachable positions before it. Too slow for large inputs.",
    },
  ];

  const processingSteps = [
    "nums = [2,3,1,1,4]",
    "Start l=0, r=0, res=0",
    "Expand range: far = max(0+2) = 2 → res=1 → new range [1,2]",
    "Expand again: far = max(1+3, 2+1) = 4 → res=2 → new range [3,4]",
    "Reached end at index 4 → return 2",
  ];

  return (
    <SlideContainer>
      <AlgorithmTitle title="Jump Game II" />

      <StepsBox>
        <Step
          number={1}
          title="Initialization"
          description="Set res=0, l=0, r=0 to represent the current window of reachable indices"
        />
        <Step
          number={2}
          title="Expand window"
          description="For all indices in [l,r], compute farthest reach"
        />
        <Step
          number={3}
          title="Advance layer"
          description="Move to next window [r+1, far], increment res"
        />
        <Step
          number={4}
          title="Stop"
          description="When r covers the last index, return res"
        />
      </StepsBox>

      <IntuitionBox>
        <p>
          Think of the array as <strong>levels of BFS</strong>. Each jump moves
          you to the next layer of indices reachable from the current one. The
          first time you can reach the end, you know the minimum number of jumps
          required.
        </p>
      </IntuitionBox>

      <ExampleBox title="Example Walkthrough">
        <div>
          <Highlight>nums = [2,3,1,1,4]</Highlight>
          <br />
          <Highlight>expected = 2</Highlight>
          <br />
          <small style={{ color: "#a1a1a6" }}>
            From index 0 → jump to index 1 (max reach 4) → directly jump to end.
          </small>
        </div>

        <ProcessingSteps
          title="Step-by-step execution:"
          steps={processingSteps}
          result="2"
        />
      </ExampleBox>

      <CodeBlock code={code} />

      <ApproachBox approaches={approaches} />

      <ComplexityBox
        timeComplexity={{
          value: "O(n)",
          description: "Each index processed once",
        }}
        spaceComplexity={{
          value: "O(1)",
          description: "Only counters and pointers used",
        }}
      />
    </SlideContainer>
  );
};

export default JumpGameII;
