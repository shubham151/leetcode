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

const FindDisappearedNumbers = () => {
  const code = `function findDisappearedNumbers(nums) {
    const n = nums.length;
    const result = [];
    
    // Phase 1: Cyclic sort - place each number at its correct position
    for (let i = 0; i < n; i++) {
        while (nums[i] !== nums[nums[i] - 1]) {
            // Swap current number to its correct position
            const temp = nums[i];
            nums[i] = nums[temp - 1];
            nums[temp - 1] = temp;
        }
    }
    
    // Phase 2: Find missing numbers
    for (let i = 0; i < n; i++) {
        if (i + 1 !== nums[i]) {
            result.push(i + 1);
        }
    }
    
    return result;
}`;

  const approaches = [
    {
      name: "Hash Set",
      complexity: "O(n) time, O(n) space",
      description:
        "Use hash set to track present numbers, then find missing ones",
    },
    {
      name: "Boolean Array",
      complexity: "O(n) time, O(n) space",
      description: "Use boolean array to mark present numbers",
    },
    {
      name: "Cyclic Sort (Optimal)",
      complexity: "O(n) time, O(1) space",
      description: "Place each number at correct position, then identify gaps",
    },
  ];

  const processingSteps = [
    "• Initial array: [4, 3, 2, 7, 8, 2, 3, 1]",
    "• Phase 1 - Cyclic Sort:",
    "• i=0: nums[0]=4, should be at index 3. Swap 4↔7: [7, 3, 2, 4, 8, 2, 3, 1]",
    "• i=0: nums[0]=7, should be at index 6. Swap 7↔3: [3, 3, 2, 4, 8, 2, 7, 1]",
    "• i=0: nums[0]=3, should be at index 2. Swap 3↔2: [2, 3, 3, 4, 8, 2, 7, 1]",
    "• i=0: nums[0]=2, should be at index 1. Swap 2↔3: [3, 2, 3, 4, 8, 2, 7, 1]",
    "• i=0: nums[0]=3, already at correct position (index 2). Continue...",
    "• After all swaps: [1, 2, 3, 4, 3, 2, 7, 8] (approximately)",
    "• Phase 2 - Find Missing:",
    "• i=0: expect 1, got 1 ✓",
    "• i=1: expect 2, got 2 ✓",
    "• i=4: expect 5, got something else → 5 is missing",
    "• i=5: expect 6, got something else → 6 is missing",
  ];

  const simpleExampleSteps = [
    "• Initial array: [1, 1]",
    "• Phase 1 - Cyclic Sort:",
    "• i=0: nums[0]=1, check nums[1-1]=nums[0]=1 → equal, no swap needed",
    "• i=1: nums[1]=1, check nums[1-1]=nums[0]=1 → equal, no swap needed",
    "• After cyclic sort: [1, 1] (unchanged)",
    "• Phase 2 - Find Missing:",
    "• i=0: expect 1, got 1 ✓",
    "• i=1: expect 2, got 1 ✗ → 2 is missing",
  ];

  return (
    <SlideContainer>
      <AlgorithmTitle title="Find All Numbers Disappeared in Array" />

      <StepsBox>
        <Step
          number={1}
          title="Phase 1: Cyclic Sort Setup"
          description="iterate through array to place each number at its correct position"
        />
        <Step
          number={2}
          title="Check if number is in correct position"
          description="for number nums[i], it should be at index nums[i]-1"
        />
        <Step
          number={3}
          title="Perform cyclic swap"
          description="while nums[i] ≠ nums[nums[i]-1], swap to place number correctly"
        />
        <Step
          number={4}
          title="Continue until sorted"
          description="repeat for all positions until each number is at correct index"
        />
        <Step
          number={5}
          title="Phase 2: Identify missing numbers"
          description="iterate through sorted array"
        />
        <Step
          number={6}
          title="Check expected vs actual"
          description="at index i, we expect number i+1. If different, i+1 is missing"
        />
        <Step
          number={7}
          title="Collect results"
          description="add all missing numbers to result array"
        />
      </StepsBox>

      <IntuitionBox>
        <p>
          The key insight is to use <strong>cyclic sort</strong> to place each
          number at its "natural" position: number <code>k</code> should be at
          index <code>k-1</code>. After this rearrangement, any position where
          the expected number doesn't match indicates a missing number. This
          approach achieves O(1) extra space by modifying the input array
          in-place, making it optimal for this problem.
        </p>
      </IntuitionBox>

      <ExampleBox title="Simple Example">
        <div>
          <Highlight>nums = [1, 1]</Highlight>
          <br />
          <Highlight>expected output = [2]</Highlight>
          <br />
          <small style={{ color: "#a1a1a6" }}>
            Range [1, 2], but 2 is missing from the array
          </small>
        </div>

        <ProcessingSteps
          title="Step-by-step execution:"
          steps={simpleExampleSteps}
          result="[2]"
        />
      </ExampleBox>

      <ExampleBox title="Complex Example">
        <div>
          <Highlight>nums = [4, 3, 2, 7, 8, 2, 3, 1]</Highlight>
          <br />
          <Highlight>expected output = [5, 6]</Highlight>
          <br />
          <small style={{ color: "#a1a1a6" }}>
            Range [1, 8], numbers 5 and 6 are missing
          </small>
        </div>

        <ProcessingSteps
          title="Step-by-step execution:"
          steps={processingSteps}
          result="[5, 6]"
        />
      </ExampleBox>

      <CodeBlock code={code} />

      <div className="section">
        <div className="section-title">Cyclic Sort Visualization</div>
        <div className="processing-steps">
          <div
            style={{
              marginBottom: "16px",
              color: "#007aff",
              fontWeight: "bold",
            }}
          >
            Goal: Place each number k at index k-1
          </div>
          <div style={{ marginBottom: "12px" }}>
            <span style={{ color: "#34c759" }}>Before Cyclic Sort:</span>
          </div>
          <div
            style={{
              marginLeft: "20px",
              marginBottom: "12px",
              fontFamily: "SF Mono, Monaco, monospace",
            }}
          >
            Index: [0, 1, 2, 3, 4, 5, 6, 7]
            <br />
            Array: [4, 3, 2, 7, 8, 2, 3, 1]
            <br />
            Should: [1, 2, 3, 4, 5, 6, 7, 8]
          </div>
          <div style={{ marginBottom: "12px" }}>
            <span style={{ color: "#ff9500" }}>After Cyclic Sort:</span>
          </div>
          <div
            style={{
              marginLeft: "20px",
              fontFamily: "SF Mono, Monaco, monospace",
            }}
          >
            Index: [0, 1, 2, 3, 4, 5, 6, 7]
            <br />
            Array: [1, 2, 3, 4, ?, ?, 7, 8]
            <br />
            Missing: positions 4,5 → numbers 5,6
          </div>
        </div>
      </div>

      <div className="section">
        <div className="section-title">Key Observations</div>
        <ul className="list">
          <li className="list-item">
            <strong>Perfect Mapping:</strong> Number k should be at index k-1
            (1-based to 0-based)
          </li>
          <li className="list-item">
            <strong>Cyclic Sort Property:</strong> Keep swapping until nums[i] =
            i+1 or duplicate found
          </li>
          <li className="list-item">
            <strong>Duplicate Handling:</strong> When nums[i] = nums[nums[i]-1],
            stop swapping
          </li>
          <li className="list-item">
            <strong>Missing Detection:</strong> If nums[i] ≠ i+1, then i+1 is
            missing
          </li>
          <li className="list-item">
            <strong>In-Place:</strong> No extra space needed except for result
            array
          </li>
        </ul>
      </div>

      <ApproachBox approaches={approaches} />

      <ComplexityBox
        timeComplexity={{
          value: "O(n)",
          description:
            "Each number is moved at most once to its correct position",
        }}
        spaceComplexity={{
          value: "O(1)",
          description: "Only constant extra space (excluding result array)",
        }}
      />
    </SlideContainer>
  );
};

export default FindDisappearedNumbers;
