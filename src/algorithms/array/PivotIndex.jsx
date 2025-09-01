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

const PivotIndex = () => {
  const code = `function pivotIndex(nums) {
    // Calculate total sum of all elements
    let total = 0;
    nums.forEach(num => {
        total += num;
    });

    let leftTotal = 0;
    const n = nums.length;

    for (let i = 0; i < n; i++) {
        // Calculate right sum: total - leftSum - current element
        let rightTotal = total - leftTotal - nums[i];

        // Check if left sum equals right sum
        if (rightTotal === leftTotal) {
            return i; // Found pivot index
        }

        // Add current element to left sum for next iteration
        leftTotal += nums[i];
    }

    return -1; // No pivot index found
}`;

  const approaches = [
    {
      name: "Brute Force",
      complexity: "O(n²) time, O(1) space",
      description: "For each index, calculate left and right sums separately",
    },
    {
      name: "Prefix Sum Array",
      complexity: "O(n) time, O(n) space",
      description: "Precompute prefix sums, then check each index",
    },
    {
      name: "Running Sum (Optimal)",
      complexity: "O(n) time, O(1) space",
      description: "Use total sum and running left sum to calculate right sum",
    },
  ];

  const processingSteps = [
    "• total = 1+8+11+6+2+10+3 = 41",
    "• i=0: leftTotal=0, rightTotal=41-0-1=40 → 0≠40, leftTotal=1",
    "• i=1: leftTotal=1, rightTotal=41-1-8=32 → 1≠32, leftTotal=9",
    "• i=2: leftTotal=9, rightTotal=41-9-11=21 → 9≠21, leftTotal=20",
    "• i=3: leftTotal=20, rightTotal=41-20-6=15 → 20≠15, leftTotal=26",
    "• i=4: leftTotal=26, rightTotal=41-26-2=13 → 26≠13, leftTotal=28",
    "• i=5: leftTotal=28, rightTotal=41-28-10=3 → 28≠3, leftTotal=38",
    "• i=6: leftTotal=38, rightTotal=41-38-3=0 → 38≠0, return -1",
  ];

  const betterExampleSteps = [
    "• total = 1+7+3+6+5+6 = 28",
    "• i=0: leftTotal=0, rightTotal=28-0-1=27 → 0≠27, leftTotal=1",
    "• i=1: leftTotal=1, rightTotal=28-1-7=20 → 1≠20, leftTotal=8",
    "• i=2: leftTotal=8, rightTotal=28-8-3=17 → 8≠17, leftTotal=11",
    "• i=3: leftTotal=11, rightTotal=28-11-6=11 → 11=11 ✓ return 3",
  ];

  return (
    <SlideContainer>
      <AlgorithmTitle title="Find Pivot Index" />

      <StepsBox>
        <Step
          number={1}
          title="Calculate total sum"
          description="sum all elements in the array to get the total"
        />
        <Step
          number={2}
          title="Initialize left sum"
          description="leftTotal = 0 to track sum of elements to the left"
        />
        <Step
          number={3}
          title="Iterate through array"
          description="for each index i, calculate the right sum using formula"
        />
        <Step
          number={4}
          title="Calculate right sum"
          description="rightTotal = total - leftTotal - nums[i]"
        />
        <Step
          number={5}
          title="Check pivot condition"
          description="if leftTotal equals rightTotal, return current index i"
        />
        <Step
          number={6}
          title="Update left sum"
          description="add current element to leftTotal for next iteration"
        />
        <Step
          number={7}
          title="Return result"
          description="if no pivot found after loop, return -1"
        />
      </StepsBox>

      <IntuitionBox>
        <p>
          The key insight is that we don't need to recalculate sums for every
          index. By calculating the total sum once, we can derive the right sum
          using the formula:
          <strong> rightSum = totalSum - leftSum - currentElement</strong>. As
          we iterate, we maintain a running left sum, making the algorithm
          efficient with just one pass through the array.
        </p>
      </IntuitionBox>

      <ExampleBox title="Example with Pivot">
        <div>
          <Highlight>nums = [1, 7, 3, 6, 5, 6]</Highlight>
          <br />
          <Highlight>expected output = 3</Highlight>
          <br />
          <small style={{ color: "#a1a1a6" }}>
            At index 3: left sum = [1,7,3] = 11, right sum = [5,6] = 11
          </small>
        </div>

        <ProcessingSteps
          title="Step-by-step execution:"
          steps={betterExampleSteps}
          result="3 (pivot index found)"
        />
      </ExampleBox>

      <ExampleBox title="Example with No Pivot">
        <div>
          <Highlight>nums = [1, 8, 11, 6, 2, 10, 3]</Highlight>
          <br />
          <Highlight>expected output = -1</Highlight>
          <br />
          <small style={{ color: "#a1a1a6" }}>
            No index where left sum equals right sum
          </small>
        </div>

        <ProcessingSteps
          title="Step-by-step execution:"
          steps={processingSteps}
          result="-1 (no pivot found)"
        />
      </ExampleBox>

      <CodeBlock code={code} />

      <div className="section">
        <div className="section-title">Visual Representation</div>
        <div className="processing-steps">
          <div
            style={{
              marginBottom: "16px",
              color: "#007aff",
              fontWeight: "bold",
            }}
          >
            Array: [1, 7, 3, 6, 5, 6]
          </div>
          <div
            style={{
              marginBottom: "12px",
              fontFamily: "SF Mono, Monaco, monospace",
            }}
          >
            <span style={{ color: "#34c759" }}>Index 3 (Pivot):</span>
          </div>
          <div
            style={{
              marginLeft: "20px",
              marginBottom: "8px",
              fontFamily: "SF Mono, Monaco, monospace",
            }}
          >
            Left: [1, 7, 3] | 6 | [5, 6] :Right
          </div>
          <div
            style={{
              marginLeft: "20px",
              marginBottom: "8px",
              fontFamily: "SF Mono, Monaco, monospace",
            }}
          >
            Sum: 11 | 6 | 11 :Sum
          </div>
          <div style={{ color: "#ff3b30", fontWeight: "bold" }}>
            ✓ Left sum (11) = Right sum (11)
          </div>
        </div>
      </div>

      <div className="section">
        <div className="section-title">Key Observations</div>
        <ul className="list">
          <li className="list-item">
            <strong>Definition:</strong> Pivot index is where sum of left
            elements equals sum of right elements
          </li>
          <li className="list-item">
            <strong>Boundary Cases:</strong> For index 0, left sum = 0; for last
            index, right sum = 0
          </li>
          <li className="list-item">
            <strong>Formula:</strong> rightSum = totalSum - leftSum -
            currentElement
          </li>
          <li className="list-item">
            <strong>First Found:</strong> Return the leftmost (first) pivot
            index if multiple exist
          </li>
        </ul>
      </div>

      <ApproachBox approaches={approaches} />

      <ComplexityBox
        timeComplexity={{
          value: "O(n)",
          description: "Two passes: one for total sum, one for finding pivot",
        }}
        spaceComplexity={{
          value: "O(1)",
          description: "Only using constant extra variables",
        }}
      />
    </SlideContainer>
  );
};

export default PivotIndex;
