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

const FindLucky = () => {
  const code = `function findLucky(arr) {
    // Step 1: Count frequency of each number
    const map = {};
    for (const num of arr) {
        map[num] = 1 + (map[num] || 0);
    }

    // Step 2: Find the largest lucky number
    let lucky = -1;
    for (const num in map) {
        // Convert string key back to number for comparison
        const numKey = parseInt(num);
        if (numKey === map[num]) {
            lucky = Math.max(lucky, numKey);
        }
    }

    return lucky;
}`;

  const approaches = [
    {
      name: "Brute Force",
      complexity: "O(n²) time, O(1) space",
      description:
        "For each unique number, count its occurrences by scanning entire array",
    },
    {
      name: "Hash Map (Optimal)",
      complexity: "O(n) time, O(n) space",
      description:
        "Count frequencies with hash map, then find largest lucky number",
    },
  ];

  const processingSteps = [
    "• Build frequency map for [2, 2, 3, 4]:",
    "• map[2] = 2, map[3] = 1, map[4] = 1",
    "• Check for lucky numbers (value == frequency):",
    "• num=2: 2 == map[2]=2 ✓ → lucky = max(-1, 2) = 2",
    "• num=3: 3 ≠ map[3]=1 ✗ → skip",
    "• num=4: 4 ≠ map[4]=1 ✗ → skip",
  ];

  const exampleTwoSteps = [
    "• Build frequency map for [1, 2, 2, 3, 3, 3]:",
    "• map[1] = 1, map[2] = 2, map[3] = 3",
    "• Check for lucky numbers:",
    "• num=1: 1 == map[1]=1 ✓ → lucky = max(-1, 1) = 1",
    "• num=2: 2 == map[2]=2 ✓ → lucky = max(1, 2) = 2",
    "• num=3: 3 == map[3]=3 ✓ → lucky = max(2, 3) = 3",
  ];

  const noLuckySteps = [
    "• Build frequency map for [2, 2, 2, 3, 3]:",
    "• map[2] = 3, map[3] = 2",
    "• Check for lucky numbers:",
    "• num=2: 2 ≠ map[2]=3 ✗ → skip",
    "• num=3: 3 ≠ map[3]=2 ✗ → skip",
    "• No lucky numbers found → return -1",
  ];

  return (
    <SlideContainer>
      <AlgorithmTitle title="Find Lucky Integer in Array" />

      <StepsBox>
        <Step
          number={1}
          title="Initialize frequency map"
          description="create empty hash map to count occurrences of each number"
        />
        <Step
          number={2}
          title="Count frequencies"
          description="traverse array and increment count for each number using map[num] = 1 + (map[num] || 0)"
        />
        <Step
          number={3}
          title="Initialize lucky variable"
          description="set lucky = -1 to handle case where no lucky number exists"
        />
        <Step
          number={4}
          title="Iterate through frequency map"
          description="check each number-frequency pair to find lucky numbers"
        />
        <Step
          number={5}
          title="Check lucky condition"
          description="if number equals its frequency (num == map[num]), it's a lucky number"
        />
        <Step
          number={6}
          title="Track maximum lucky number"
          description="use Math.max() to keep the largest lucky number found so far"
        />
        <Step
          number={7}
          title="Return result"
          description="return the largest lucky number, or -1 if none exist"
        />
      </StepsBox>

      <IntuitionBox>
        <p>
          A <strong>lucky integer</strong> is defined as an integer whose value
          equals its frequency in the array. For example, if the number 3
          appears exactly 3 times, then 3 is lucky. The key insight is to use a
          hash map to count frequencies efficiently, then iterate through the
          frequency map to find numbers where <code>value = frequency</code>,
          keeping track of the largest such number.
        </p>
      </IntuitionBox>

      <ExampleBox title="Example with Lucky Number">
        <div>
          <Highlight>arr = [2, 2, 3, 4]</Highlight>
          <br />
          <Highlight>expected output = 2</Highlight>
          <br />
          <small style={{ color: "#a1a1a6" }}>
            Number 2 appears 2 times → 2 is lucky (value = frequency)
          </small>
        </div>

        <ProcessingSteps
          title="Step-by-step execution:"
          steps={processingSteps}
          result="2 (largest and only lucky number)"
        />
      </ExampleBox>

      <ExampleBox title="Example with Multiple Lucky Numbers">
        <div>
          <Highlight>arr = [1, 2, 2, 3, 3, 3]</Highlight>
          <br />
          <Highlight>expected output = 3</Highlight>
          <br />
          <small style={{ color: "#a1a1a6" }}>
            Lucky numbers: 1 (appears 1 time), 2 (appears 2 times), 3 (appears 3
            times) → return largest: 3
          </small>
        </div>

        <ProcessingSteps
          title="Step-by-step execution:"
          steps={exampleTwoSteps}
          result="3 (largest lucky number)"
        />
      </ExampleBox>

      <ExampleBox title="Example with No Lucky Numbers">
        <div>
          <Highlight>arr = [2, 2, 2, 3, 3]</Highlight>
          <br />
          <Highlight>expected output = -1</Highlight>
          <br />
          <small style={{ color: "#a1a1a6" }}>
            Number 2 appears 3 times, number 3 appears 2 times → no number
            equals its frequency
          </small>
        </div>

        <ProcessingSteps
          title="Step-by-step execution:"
          steps={noLuckySteps}
          result="-1 (no lucky numbers found)"
        />
      </ExampleBox>

      <CodeBlock code={code} />

      <div className="section">
        <div className="section-title">Lucky Number Analysis</div>
        <div className="processing-steps">
          <div
            style={{
              marginBottom: "16px",
              color: "#007aff",
              fontWeight: "bold",
            }}
          >
            Definition: Lucky Integer = Value equals its frequency
          </div>
          <div style={{ marginBottom: "12px" }}>
            <span style={{ color: "#34c759" }}>
              Example Array: [1, 2, 2, 3, 3, 3]
            </span>
          </div>
          <div
            style={{
              marginLeft: "20px",
              marginBottom: "12px",
              fontFamily: "SF Mono, Monaco, monospace",
            }}
          >
            Number 1: appears 1 time → 1 = 1 ✓ (lucky)
            <br />
            Number 2: appears 2 times → 2 = 2 ✓ (lucky)
            <br />
            Number 3: appears 3 times → 3 = 3 ✓ (lucky)
            <br />
          </div>
          <div style={{ color: "#ff3b30", fontWeight: "bold" }}>
            All are lucky → return largest: 3
          </div>
        </div>
      </div>

      <div className="section">
        <div className="section-title">Key Observations</div>
        <ul className="list">
          <li className="list-item">
            <strong>Frequency Constraint:</strong> A number n can be lucky only
            if it appears exactly n times
          </li>
          <li className="list-item">
            <strong>Maximum Constraint:</strong> For array of length L, maximum
            possible lucky number is L
          </li>
          <li className="list-item">
            <strong>Uniqueness:</strong> Each lucky number appears exactly as
            many times as its value
          </li>
          <li className="list-item">
            <strong>Return Policy:</strong> Return largest lucky number, or -1
            if none exist
          </li>
          <li className="list-item">
            <strong>Hash Map Keys:</strong> Remember to convert string keys back
            to numbers for comparison
          </li>
        </ul>
      </div>

      <div className="section">
        <div className="section-title">Edge Cases</div>
        <ul className="list">
          <li className="list-item">
            <strong>Single Element:</strong> [1] → 1 appears 1 time → return 1
          </li>
          <li className="list-item">
            <strong>All Same:</strong> [2, 2] → 2 appears 2 times → return 2
          </li>
          <li className="list-item">
            <strong>No Lucky:</strong> [1, 1, 2] → no number equals its
            frequency → return -1
          </li>
          <li className="list-item">
            <strong>Large Numbers:</strong> [7, 7, 7, 7, 7, 7, 7] → 7 appears 7
            times → return 7
          </li>
          <li className="list-item">
            <strong>Mixed Case:</strong> [5, 5, 5, 5, 5, 1] → 5 appears 5 times,
            1 appears 1 time → return 5
          </li>
        </ul>
      </div>

      <ApproachBox approaches={approaches} />

      <ComplexityBox
        timeComplexity={{
          value: "O(n)",
          description:
            "Two passes: one to build frequency map, one to find lucky numbers",
        }}
        spaceComplexity={{
          value: "O(n)",
          description: "Hash map storing up to n unique elements",
        }}
      />
    </SlideContainer>
  );
};

export default FindLucky;
