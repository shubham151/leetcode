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

const JumpGame = () => {
  const code = `/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let goal = nums.length - 1;
    
    for (let i = goal; i >= 0; i--) {
        if (nums[i] + i >= goal) {
            goal = i;
        }
    }
    return goal === 0;
};`;

  const approaches = [
    {
      name: "Greedy Backward",
      complexity: "O(n) time, O(1) space",
      description:
        "Start from the last index as the goal. Move backwards and update goal whenever an index can reach it. If goal becomes 0, return true.",
    },
    {
      name: "Greedy Forward",
      complexity: "O(n) time, O(1) space",
      description:
        "Track the farthest index reachable while iterating left-to-right. If you reach or exceed the last index, return true. If stuck, return false.",
    },
    {
      name: "Dynamic Programming",
      complexity: "O(n^2) time, O(n) space",
      description:
        "For each position, check if it can reach a 'good' index (that can reach the end). Less efficient than greedy.",
    },
  ];

  const processingSteps = [
    "nums = [2,3,1,1,4]",
    "Goal starts at index 4",
    "i=4: nums[4]+4=8 >= goal=4 → goal=4",
    "i=3: nums[3]+3=4 >= 4 → goal=3",
    "i=2: nums[2]+2=3 >= 3 → goal=2",
    "i=1: nums[1]+1=2 >= 2 → goal=1",
    "i=0: nums[0]+0=2 >= 1 → goal=0",
    "Goal reached 0 → return true",
  ];

  return (
    <SlideContainer>
      <AlgorithmTitle title="Jump Game" />

      <StepsBox>
        <Step
          number={1}
          title="Initialize"
          description="Set goal = last index of nums"
        />
        <Step
          number={2}
          title="Iterate backwards"
          description="For each index, check if it can reach the goal"
        />
        <Step
          number={3}
          title="Update goal"
          description="If nums[i] + i >= goal, move goal to i"
        />
        <Step
          number={4}
          title="Final check"
          description="If goal becomes 0, the start index can reach the end"
        />
      </StepsBox>

      <IntuitionBox>
        <p>
          Work <strong>backwards</strong> from the last index: instead of asking
          “can I jump forward to the end?”, ask “can the end jump back to me?”.
          If at the end goal is index 0, it means the start can eventually reach
          the last index.
        </p>
      </IntuitionBox>

      <ExampleBox title="Example Walkthrough">
        <div>
          <Highlight>nums = [2,3,1,1,4]</Highlight>
          <br />
          <Highlight>expected = true</Highlight>
          <br />
          <small style={{ color: "#a1a1a6" }}>
            Start at index 0, jump length 2 → reach index 1, from there jump 3 →
            end.
          </small>
        </div>

        <ProcessingSteps
          title="Step-by-step execution:"
          steps={processingSteps}
          result="true"
        />
      </ExampleBox>

      <CodeBlock code={code} />

      <ApproachBox approaches={approaches} />

      <ComplexityBox
        timeComplexity={{
          value: "O(n)",
          description: "Single pass from right to left",
        }}
        spaceComplexity={{
          value: "O(1)",
          description: "No extra storage",
        }}
      />
    </SlideContainer>
  );
};

export default JumpGame;
