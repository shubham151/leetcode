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

const HeightChecker = () => {
  const code = `function heightChecker(heights) {
    // Counting sort approach
    // Heights are in range [1, 100], so create count array
    const count = new Array(101).fill(0);

    // Count frequency of each height
    for (const height of heights) {
        count[height]++;
    }

    let j = 0; // Pointer for expected height
    let result = 0; // Count of students out of order

    // Compare each actual height with expected height
    for (const height of heights) {
        // Find next expected height (skip zeros)
        while (j < count.length && count[j] === 0) {
            j++;
        }

        // If actual height doesn't match expected height
        if (j !== height) {
            result++;
        }

        // Use up one occurrence of expected height
        count[j]--;
    }

    return result;
}`;

  const approaches = [
    {
      name: "Sort and Compare",
      complexity: "O(n log n) time, O(n) space",
      description:
        "Sort the array, then compare with original to count differences",
    },
    {
      name: "Counting Sort (Optimal)",
      complexity: "O(n + k) time, O(k) space",
      description:
        "Use counting sort principle with frequency array (k=101 for height range)",
    },
  ];

  const processingSteps = [
    "• Build count array for heights [1,1,4,2,1,3]:",
    "• count[1] = 3, count[2] = 1, count[3] = 1, count[4] = 1",
    "• Start comparison (j=0, result=0):",
    "• Position 0: height=1, find j where count[j]>0 → j=1, 1==1 ✓, count[1]=2",
    "• Position 1: height=1, j=1, count[1]>0 → j=1, 1==1 ✓, count[1]=1",
    "• Position 2: height=4, j=1, count[1]>0 → j=1, 1≠4 ✗, result=1, count[1]=0",
    "• Position 3: height=2, j=1, count[1]==0 → j=2, 2==2 ✓, count[2]=0",
    "• Position 4: height=1, j=2, count[2]==0 → j=3, 3≠1 ✗, result=2, count[3]=0",
    "• Position 5: height=3, j=3, count[3]==0 → j=4, 4≠3 ✗, result=3, count[4]=0",
  ];

  return (
    <SlideContainer>
      <AlgorithmTitle title="Height Checker" />

      <StepsBox>
        <Step
          number={1}
          title="Create counting array"
          description="initialize array of size 101 (heights range 1-100) with zeros"
        />
        <Step
          number={2}
          title="Count height frequencies"
          description="traverse heights array and increment count for each height value"
        />
        <Step
          number={3}
          title="Initialize comparison variables"
          description="j=0 for expected height pointer, result=0 for mismatch counter"
        />
        <Step
          number={4}
          title="Compare actual vs expected"
          description="for each position, find the expected height and compare"
        />
        <Step
          number={5}
          title="Find next expected height"
          description="advance j to next height with count > 0 (skip empty heights)"
        />
        <Step
          number={6}
          title="Check for mismatch"
          description="if actual height ≠ expected height, increment result counter"
        />
        <Step
          number={7}
          title="Consume expected height"
          description="decrement count[j] to mark one occurrence as used"
        />
        <Step
          number={8}
          title="Return total mismatches"
          description="result contains the number of students not in expected position"
        />
      </StepsBox>

      <IntuitionBox>
        <p>
          The key insight is that we need to compare the original array with its
          sorted version, but without actually sorting. We use{" "}
          <strong>counting sort principles</strong> to generate the expected
          (sorted) sequence on-the-fly. By maintaining a frequency count of each
          height, we can determine what the next smallest height should be at
          each position and compare it with the actual height.
        </p>
      </IntuitionBox>

      <ExampleBox>
        <div>
          <Highlight>heights = [1, 1, 4, 2, 1, 3]</Highlight>
          <br />
          <Highlight>expected output = 3</Highlight>
          <br />
          <small style={{ color: "#a1a1a6" }}>
            Expected (sorted): [1, 1, 1, 2, 3, 4] → positions 2, 4, 5 differ
          </small>
        </div>

        <ProcessingSteps
          title="Step-by-step execution:"
          steps={processingSteps}
          result="3 (students at positions 2, 4, 5 are out of order)"
        />
      </ExampleBox>

      <CodeBlock code={code} />

      <div className="section">
        <div className="section-title">Counting Sort Visualization</div>
        <div className="processing-steps">
          <div
            style={{
              marginBottom: "16px",
              color: "#007aff",
              fontWeight: "bold",
            }}
          >
            heights = [1, 1, 4, 2, 1, 3]
          </div>
          <div style={{ marginBottom: "12px" }}>
            <span style={{ color: "#34c759" }}>Frequency Count:</span>
          </div>
          <div
            style={{
              marginLeft: "20px",
              marginBottom: "12px",
              fontFamily: "SF Mono, Monaco, monospace",
            }}
          >
            Height 1: 3 occurrences
            <br />
            Height 2: 1 occurrence
            <br />
            Height 3: 1 occurrence
            <br />
            Height 4: 1 occurrence
          </div>
          <div style={{ marginBottom: "12px" }}>
            <span style={{ color: "#ff9500" }}>Expected Order:</span>
          </div>
          <div
            style={{
              marginLeft: "20px",
              marginBottom: "12px",
              fontFamily: "SF Mono, Monaco, monospace",
            }}
          >
            [1, 1, 1, 2, 3, 4] ← This is what sorted array would look like
          </div>
          <div style={{ marginBottom: "12px" }}>
            <span style={{ color: "#ff3b30" }}>Comparison:</span>
          </div>
          <div
            style={{
              marginLeft: "20px",
              fontFamily: "SF Mono, Monaco, monospace",
            }}
          >
            Position: 0 1 2 3 4 5<br />
            Actual: [1, 1, 4, 2, 1, 3]
            <br />
            Expected:[1, 1, 1, 2, 3, 4]
            <br />
            Match: ✓ ✓ ✗ ✓ ✗ ✗
          </div>
        </div>
      </div>

      <div className="section">
        <div className="section-title">Algorithm Walkthrough</div>
        <div className="processing-steps">
          <div
            style={{
              marginBottom: "12px",
              color: "#007aff",
              fontWeight: "bold",
            }}
          >
            Why Counting Sort Works Here:
          </div>
          <div style={{ marginLeft: "20px", marginBottom: "12px" }}>
            1. <strong>Limited Range:</strong> Heights are 1-100, perfect for
            counting sort
          </div>
          <div style={{ marginLeft: "20px", marginBottom: "12px" }}>
            2. <strong>No Actual Sorting:</strong> We generate expected sequence
            on-demand
          </div>
          <div style={{ marginLeft: "20px", marginBottom: "12px" }}>
            3. <strong>Linear Time:</strong> O(n + k) where k=101 is constant
          </div>
          <div style={{ marginLeft: "20px" }}>
            4. <strong>Space Efficient:</strong> Only need frequency array, not
            sorted copy
          </div>
        </div>
      </div>

      <div className="section">
        <div className="section-title">Edge Cases</div>
        <ul className="list">
          <li className="list-item">
            <strong>Already Sorted:</strong> [1, 2, 3, 4] → return 0 (no changes
            needed)
          </li>
          <li className="list-item">
            <strong>Reverse Order:</strong> [4, 3, 2, 1] → return 4 (all
            positions wrong)
          </li>
          <li className="list-item">
            <strong>All Same Height:</strong> [2, 2, 2, 2] → return 0 (already
            in order)
          </li>
          <li className="list-item">
            <strong>Single Element:</strong> [5] → return 0 (trivially sorted)
          </li>
          <li className="list-item">
            <strong>Two Elements:</strong> [2, 1] → return 2 (both positions
            wrong)
          </li>
        </ul>
      </div>

      <ApproachBox approaches={approaches} />

      <ComplexityBox
        timeComplexity={{
          value: "O(n + k)",
          description:
            "n for traversals, k=101 for height range (effectively O(n))",
        }}
        spaceComplexity={{
          value: "O(k)",
          description: "Count array of size 101 (constant space O(101) = O(1))",
        }}
      />
    </SlideContainer>
  );
};

export default HeightChecker;
