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

const FindMissingAndRepeatedValues = () => {
  const code = `function findMissingAndRepeatedValues(grid) {
    const n = grid.length;
    
    // Expected sum of numbers 1 to n²
    let expectedSum = (n * n) * (n * n + 1) / 2;
    
    const set = new Set();
    let repeatedValue = -1;

    // Traverse the grid
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (set.has(grid[i][j])) {
                // Found the repeated value
                repeatedValue = grid[i][j];
            } else {
                // Subtract from expected sum (first time seeing this number)
                expectedSum -= grid[i][j];
            }
            
            set.add(grid[i][j]);
        }
    }

    // expectedSum now contains the missing value
    return [repeatedValue, expectedSum];
}`;

  const approaches = [
    {
      name: "Brute Force",
      complexity: "O(n⁴) time, O(1) space",
      description:
        "For each number 1 to n², count its frequency by scanning entire grid",
    },
    {
      name: "Frequency Array",
      complexity: "O(n²) time, O(n²) space",
      description:
        "Use array to count frequency of each number, then find anomalies",
    },
    {
      name: "Hash Set + Math (Optimal)",
      complexity: "O(n²) time, O(n²) space",
      description:
        "Use set to detect duplicate, math formula to find missing number",
    },
  ];

  const processingSteps = [
    "• n=3, expectedSum = 3²×(3²+1)/2 = 9×10/2 = 45",
    "• Process grid[0][0]=1: not in set, expectedSum=45-1=44, add to set",
    "• Process grid[0][1]=1: found in set! repeatedValue=1, add to set",
    "• Process grid[0][2]=4: not in set, expectedSum=44-4=40, add to set",
    "• Process grid[1][0]=2: not in set, expectedSum=40-2=38, add to set",
    "• Process grid[1][1]=7: not in set, expectedSum=38-7=31, add to set",
    "• Process grid[1][2]=8: not in set, expectedSum=31-8=23, add to set",
    "• Process grid[2][0]=3: not in set, expectedSum=23-3=20, add to set",
    "• Process grid[2][1]=9: not in set, expectedSum=20-9=11, add to set",
    "• Process grid[2][2]=6: not in set, expectedSum=11-6=5, add to set",
  ];

  return (
    <SlideContainer>
      <AlgorithmTitle title="Find Missing and Repeated Values" />

      <StepsBox>
        <Step
          number={1}
          title="Calculate expected sum"
          description="sum of 1 to n² using formula: n²×(n²+1)/2"
        />
        <Step
          number={2}
          title="Initialize tracking variables"
          description="set for detecting duplicates, variable for repeated value"
        />
        <Step
          number={3}
          title="Traverse grid"
          description="iterate through all elements in row-major order"
        />
        <Step
          number={4}
          title="Check for duplicates"
          description="if element already in set, it's the repeated value"
        />
        <Step
          number={5}
          title="Subtract from expected sum"
          description="for first occurrence of each number, subtract from expected sum"
        />
        <Step
          number={6}
          title="Add to set"
          description="add current element to set for future duplicate detection"
        />
        <Step
          number={7}
          title="Return result"
          description="return [repeated value, remaining expected sum (missing value)]"
        />
      </StepsBox>

      <IntuitionBox>
        <p>
          The key insight combines <strong>duplicate detection</strong> using a
          hash set with
          <strong>mathematical sum calculation</strong>. Since we know exactly
          what numbers should be present (1 to n²), we can calculate their
          expected sum. As we traverse the grid, we subtract each number from
          this expected sum <em>only on its first occurrence</em>. The repeated
          number gets detected by the set, and the missing number becomes
          whatever remains in our expected sum after all subtractions.
        </p>
      </IntuitionBox>

      <ExampleBox>
        <div>
          <Highlight>grid = [[1, 1, 4], [2, 7, 8], [3, 9, 6]]</Highlight>
          <br />
          <Highlight>expected output = [1, 5]</Highlight>
          <br />
          <small style={{ color: "#a1a1a6" }}>
            Grid should contain [1,2,3,4,5,6,7,8,9]. Number 1 repeats, number 5
            is missing.
          </small>
        </div>

        <ProcessingSteps
          title="Step-by-step execution:"
          steps={processingSteps}
          result="[1, 5] (1 is repeated, 5 is missing)"
        />
      </ExampleBox>

      <CodeBlock code={code} />

      <div className="section">
        <div className="section-title">Mathematical Foundation</div>
        <div className="processing-steps">
          <div
            style={{
              marginBottom: "16px",
              color: "#007aff",
              fontWeight: "bold",
            }}
          >
            Sum Formula: 1 + 2 + ... + n² = n²×(n²+1)/2
          </div>
          <div style={{ marginBottom: "12px" }}>
            <span style={{ color: "#34c759" }}>For 3×3 grid (n=3):</span>
          </div>
          <div
            style={{
              marginLeft: "20px",
              marginBottom: "12px",
              fontFamily: "SF Mono, Monaco, monospace",
            }}
          >
            Expected numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9]
            <br />
            Expected sum: 3² × (3²+1) / 2 = 9 × 10 / 2 = 45
          </div>
          <div style={{ marginBottom: "12px" }}>
            <span style={{ color: "#ff9500" }}>After processing grid:</span>
          </div>
          <div
            style={{
              marginLeft: "20px",
              fontFamily: "SF Mono, Monaco, monospace",
            }}
          >
            Numbers subtracted: [1, 4, 2, 7, 8, 3, 9, 6]
            <br />
            Sum of subtracted: 1+4+2+7+8+3+9+6 = 40
            <br />
            Remaining: 45 - 40 = 5 (missing number)
          </div>
        </div>
      </div>

      <div className="section">
        <div className="section-title">Visual Grid Analysis</div>
        <div className="processing-steps">
          <div
            style={{
              marginBottom: "16px",
              color: "#007aff",
              fontWeight: "bold",
            }}
          >
            Grid: [[1, 1, 4], [2, 7, 8], [3, 9, 6]]
          </div>
          <div style={{ marginBottom: "12px" }}>
            <span style={{ color: "#34c759" }}>Expected vs Actual:</span>
          </div>
          <div
            style={{
              marginLeft: "20px",
              marginBottom: "12px",
              fontFamily: "SF Mono, Monaco, monospace",
            }}
          >
            Expected: [1, 2, 3, 4, 5, 6, 7, 8, 9]
            <br />
            Actual: [1, 1, 4, 2, 7, 8, 3, 9, 6]
          </div>
          <div style={{ marginBottom: "12px" }}>
            <span style={{ color: "#ff3b30" }}>Analysis:</span>
          </div>
          <div
            style={{
              marginLeft: "20px",
              fontFamily: "SF Mono, Monaco, monospace",
            }}
          >
            ✓ Present: [1, 2, 3, 4, 6, 7, 8, 9]
            <br />
            ⚠ Repeated: 1 (appears twice)
            <br />✗ Missing: 5 (never appears)
          </div>
        </div>
      </div>

      <div className="section">
        <div className="section-title">Edge Cases</div>
        <ul className="list">
          <li className="list-item">
            <strong>Minimum Grid (1×1):</strong> [[2]] → [2, 1] (impossible
            case, but algorithm handles it)
          </li>
          <li className="list-item">
            <strong>Repeated at Start:</strong> First element is the duplicate
          </li>
          <li className="list-item">
            <strong>Repeated at End:</strong> Last element is the duplicate
          </li>
          <li className="list-item">
            <strong>Missing is 1:</strong> Smallest number is missing
          </li>
          <li className="list-item">
            <strong>Missing is n²:</strong> Largest number is missing
          </li>
        </ul>
      </div>

      <ApproachBox approaches={approaches} />

      <ComplexityBox
        timeComplexity={{
          value: "O(n²)",
          description: "Single pass through all elements in the n×n grid",
        }}
        spaceComplexity={{
          value: "O(n²)",
          description: "Hash set storing up to n² elements",
        }}
      />
    </SlideContainer>
  );
};

export default FindMissingAndRepeatedValues;
