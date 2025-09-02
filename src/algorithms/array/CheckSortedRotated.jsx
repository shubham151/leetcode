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

const CheckSortedRotated = () => {
  const code = `function check(nums) {
    let rotations = 0;
    const n = nums.length;

    // Count the number of "breaks" in ascending order
    for (let i = 1; i < n; i++) {
        if (nums[i] < nums[i - 1]) {
            rotations++;
        }
        
        // More than 1 break means array cannot be sorted and rotated
        if (rotations > 1) {
            return false;
        }
    }

    // If there's exactly 1 break, check if last element > first element
    // This would mean the rotation point doesn't connect properly
    if (rotations === 1 && nums[n - 1] > nums[0]) {
        return false;
    }

    return true;
}`;

  const approaches = [
    {
      name: "Brute Force",
      complexity: "O(n²) time, O(n) space",
      description:
        "Try all possible rotations and check if any results in sorted array",
    },
    {
      name: "Break Point Counting (Optimal)",
      complexity: "O(n) time, O(1) space",
      description: "Count descending breaks and validate rotation connectivity",
    },
  ];

  const validRotatedSteps = [
    "• n = 5, rotations = 0",
    "• i=1: nums[1]=4 ≥ nums[0]=3 → no break, rotations=0",
    "• i=2: nums[2]=5 ≥ nums[1]=4 → no break, rotations=0",
    "• i=3: nums[3]=1 < nums[2]=5 → break found! rotations=1",
    "• i=4: nums[4]=2 ≥ nums[3]=1 → no break, rotations=1",
    "• rotations=1, check connection: nums[4]=2 ≤ nums[0]=3 ✓",
    "• Valid: array can be [1,2,3,4,5] rotated by 3 positions",
  ];

  const invalidSteps = [
    "• n = 4, rotations = 0",
    "• i=1: nums[1]=1 < nums[0]=2 → break found! rotations=1",
    "• i=2: nums[2]=1 ≥ nums[1]=1 → no break, rotations=1",
    "• i=3: nums[3]=3 ≥ nums[2]=1 → no break, rotations=1",
    "• rotations=1, check connection: nums[3]=3 > nums[0]=2 ✗",
    "• Invalid: rotation doesn't connect properly",
  ];

  const alreadySortedSteps = [
    "• n = 5, rotations = 0",
    "• i=1: nums[1]=2 ≥ nums[0]=1 → no break, rotations=0",
    "• i=2: nums[2]=3 ≥ nums[1]=2 → no break, rotations=0",
    "• i=3: nums[3]=4 ≥ nums[2]=3 → no break, rotations=0",
    "• i=4: nums[4]=5 ≥ nums[3]=4 → no break, rotations=0",
    "• rotations=0, already sorted → return true",
  ];

  return (
    <SlideContainer>
      <AlgorithmTitle title="Check If Array Is Sorted and Rotated" />

      <StepsBox>
        <Step
          number={1}
          title="Initialize break counter"
          description="rotations = 0 to count descending transitions"
        />
        <Step
          number={2}
          title="Scan for descending breaks"
          description="iterate through array, increment rotations when nums[i] < nums[i-1]"
        />
        <Step
          number={3}
          title="Early termination check"
          description="if rotations > 1, return false (too many breaks for valid rotation)"
        />
        <Step
          number={4}
          title="Handle zero breaks case"
          description="if rotations = 0, array is already sorted → return true"
        />
        <Step
          number={5}
          title="Handle one break case"
          description="if rotations = 1, check if rotation connects properly"
        />
        <Step
          number={6}
          title="Validate rotation connectivity"
          description="if nums[n-1] > nums[0], rotation doesn't wrap properly → return false"
        />
        <Step
          number={7}
          title="Return validation result"
          description="if all checks pass, array is sorted and rotated → return true"
        />
      </StepsBox>

      <IntuitionBox>
        <p>
          A sorted rotated array has a special property: there can be{" "}
          <strong>at most one point</strong>
          where a larger number is followed by a smaller number (the rotation
          point). Additionally, if such a break exists, the last element must be
          ≤ first element for the rotation to "wrap around" properly. For
          example, [3,4,5,1,2] has one break at 5→1, and the last element 2 ≤
          first element 3, making it a valid rotated sorted array.
        </p>
      </IntuitionBox>

      <ExampleBox title="Valid Rotated Array">
        <div>
          <Highlight>nums = [3, 4, 5, 1, 2]</Highlight>
          <br />
          <Highlight>expected output = true</Highlight>
          <br />
          <small style={{ color: "#a1a1a6" }}>
            Original sorted: [1, 2, 3, 4, 5] rotated right by 3 positions
          </small>
        </div>

        <ProcessingSteps
          title="Step-by-step execution:"
          steps={validRotatedSteps}
          result="true (valid sorted and rotated array)"
        />
      </ExampleBox>

      <ExampleBox title="Invalid Array">
        <div>
          <Highlight>nums = [2, 1, 1, 3]</Highlight>
          <br />
          <Highlight>expected output = false</Highlight>
          <br />
          <small style={{ color: "#a1a1a6" }}>
            Has rotation break but doesn't wrap properly (3 {">"} 2)
          </small>
        </div>

        <ProcessingSteps
          title="Step-by-step execution:"
          steps={invalidSteps}
          result="false (invalid rotation connectivity)"
        />
      </ExampleBox>

      <ExampleBox title="Already Sorted Array">
        <div>
          <Highlight>nums = [1, 2, 3, 4, 5]</Highlight>
          <br />
          <Highlight>expected output = true</Highlight>
          <br />
          <small style={{ color: "#a1a1a6" }}>
            No rotation breaks, already in sorted order
          </small>
        </div>

        <ProcessingSteps
          title="Step-by-step execution:"
          steps={alreadySortedSteps}
          result="true (already sorted, 0 rotations)"
        />
      </ExampleBox>

      <CodeBlock code={code} />

      <div className="section">
        <div className="section-title">Rotation Break Analysis</div>
        <div className="processing-steps">
          <div
            style={{
              marginBottom: "16px",
              color: "#007aff",
              fontWeight: "bold",
            }}
          >
            Valid Sorted Rotated Array Properties:
          </div>
          <div style={{ marginLeft: "20px", marginBottom: "12px" }}>
            <span style={{ color: "#34c759" }}>✓ Zero Breaks:</span> Already
            sorted [1,2,3,4,5]
          </div>
          <div style={{ marginLeft: "20px", marginBottom: "12px" }}>
            <span style={{ color: "#34c759" }}>✓ One Break + Valid Wrap:</span>{" "}
            [3,4,5,1,2] (break at 5→1, 2≤3)
          </div>
          <div style={{ marginLeft: "20px", marginBottom: "16px" }}>
            <span style={{ color: "#ff3b30" }}>✗ Multiple Breaks:</span>{" "}
            [1,3,2,4] (breaks at 3→2)
          </div>

          <div
            style={{
              marginBottom: "12px",
              color: "#ff9500",
              fontWeight: "bold",
            }}
          >
            Wrap-Around Check:
          </div>
          <div
            style={{
              marginLeft: "20px",
              fontFamily: "SF Mono, Monaco, monospace",
            }}
          >
            If rotations == 1: last_element must be ≤ first_element
            <br />
            Example: [4,5,1,2,3] → 3 ≤ 4 ✓ (valid)
            <br />
            Counter: [2,1,1,3] → 3 {">"} 2 ✗ (invalid)
          </div>
        </div>
      </div>

      <div className="section">
        <div className="section-title">Visual Examples</div>
        <div className="processing-steps">
          <div
            style={{
              marginBottom: "12px",
              color: "#007aff",
              fontWeight: "bold",
            }}
          >
            Rotation Visualization:
          </div>
          <div
            style={{
              marginLeft: "20px",
              marginBottom: "12px",
              fontFamily: "SF Mono, Monaco, monospace",
            }}
          >
            <span style={{ color: "#34c759" }}>Original:</span> [1, 2, 3, 4, 5]
            <br />
            <span style={{ color: "#ff9500" }}>Rotate 2:</span> [4, 5, 1, 2, 3]
            ← break at 5→1
            <br />
            <span style={{ color: "#ff9500" }}>Rotate 3:</span> [3, 4, 5, 1, 2]
            ← break at 5→1
            <br />
          </div>

          <div
            style={{
              marginBottom: "12px",
              color: "#ff3b30",
              fontWeight: "bold",
            }}
          >
            Invalid Cases:
          </div>
          <div
            style={{
              marginLeft: "20px",
              fontFamily: "SF Mono, Monaco, monospace",
            }}
          >
            [1, 3, 2, 4] → 2 breaks (3→2, 2→4 ascending doesn't count)
            <br />
            [2, 1, 1, 3] → 1 break but bad wrap (3 {">"} 2)
          </div>
        </div>
      </div>

      <div className="section">
        <div className="section-title">Edge Cases</div>
        <ul className="list">
          <li className="list-item">
            <strong>Single Element:</strong> [1] → return true (trivially
            sorted)
          </li>
          <li className="list-item">
            <strong>Two Elements Sorted:</strong> [1, 2] → return true (no
            breaks)
          </li>
          <li className="list-item">
            <strong>Two Elements Rotated:</strong> [2, 1] → return true (1
            break, 1 ≤ 2)
          </li>
          <li className="list-item">
            <strong>All Same Elements:</strong> [2, 2, 2] → return true (no
            breaks)
          </li>
          <li className="list-item">
            <strong>Reverse Sorted:</strong> [5, 4, 3, 2, 1] → return false (4
            breaks)
          </li>
        </ul>
      </div>

      <ApproachBox approaches={approaches} />

      <ComplexityBox
        timeComplexity={{
          value: "O(n)",
          description: "Single pass through array counting break points",
        }}
        spaceComplexity={{
          value: "O(1)",
          description: "Only using constant extra variables",
        }}
      />
    </SlideContainer>
  );
};

export default CheckSortedRotated;
