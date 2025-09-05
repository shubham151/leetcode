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

const GasStation = () => {
  const code = `/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let sumGas = 0, sumCost = 0;
    const n = gas.length;

    for (let i = 0; i < n; i++) {
        sumGas += gas[i];
        sumCost += cost[i];
    }

    if (sumGas < sumCost) return -1;

    let total = 0;
    let start = 0;
    for (let i = 0; i < n; i++) {
        total += gas[i] - cost[i];
        if (total < 0) {
            total = 0;
            start = i + 1;
        }
    }
    return start;
};`;

  const approaches = [
    {
      name: "Greedy Approach",
      complexity: "O(n) time, O(1) space",
      description:
        "If the total gas is less than the total cost, no solution exists. Otherwise, iterate once: whenever balance goes negative, reset start to next station.",
    },
    {
      name: "Brute Force",
      complexity: "O(n^2) time, O(1) space",
      description:
        "Try starting from every station and simulate a full cycle. Too slow for large inputs.",
    },
  ];

  const processingSteps = [
    "gas = [1,2,3,4,5], cost = [3,4,5,1,2]",
    "sumGas=15, sumCost=15 → possible",
    "Start from station 0: total = -2 → reset start=1, total=0",
    "At station 1: total = -2 → reset start=2",
    "At station 2: total = -2 → reset start=3",
    "At station 3: total = 3, station 4: total=6 → finish cycle",
    "Return 3",
  ];

  return (
    <SlideContainer>
      <AlgorithmTitle title="Gas Station" />

      <StepsBox>
        <Step
          number={1}
          title="Check feasibility"
          description="If total gas < total cost, return -1 immediately."
        />
        <Step
          number={2}
          title="Track balance"
          description="Iterate stations, updating total += gas[i] - cost[i]."
        />
        <Step
          number={3}
          title="Reset start"
          description="If total < 0, reset start to next station and total=0."
        />
        <Step
          number={4}
          title="Return start"
          description="At the end, the start index is the valid station."
        />
      </StepsBox>

      <IntuitionBox>
        <p>
          If the car can complete the circuit, the start point must be right{" "}
          <strong>after the point where cumulative fuel is minimum</strong>. The
          greedy reset ensures we skip invalid starting stations.
        </p>
      </IntuitionBox>

      <ExampleBox title="Example Walkthrough">
        <div>
          <Highlight>gas = [1,2,3,4,5], cost = [3,4,5,1,2]</Highlight>
          <br />
          <Highlight>expected = 3</Highlight>
        </div>

        <ProcessingSteps
          title="Step-by-step execution:"
          steps={processingSteps}
          result="3"
        />
      </ExampleBox>

      <CodeBlock code={code} />

      <ApproachBox approaches={approaches} />

      <ComplexityBox
        timeComplexity={{
          value: "O(n)",
          description: "Each station visited once",
        }}
        spaceComplexity={{
          value: "O(1)",
          description: "Only counters and indices used",
        }}
      />
    </SlideContainer>
  );
};

export default GasStation;
