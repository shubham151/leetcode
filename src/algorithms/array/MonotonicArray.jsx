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

const MonotonicArray = () => {
  const code = `function isMonotonic(nums) {
    let increasing = false;
    let decreasing = false;
    const n = nums.length;

    // Check each adjacent pair
    for (let i = 1; i < n; i++) {
        if (nums[i - 1] < nums[i]) {
            increasing = true; // Found an increasing transition
        } else if (nums[i - 1] > nums[i]) {
            decreasing = true; // Found a decreasing transition
        }

        // If both trends exist, array is not monotonic
        if (increasing && decreasing) {
            return false;
        }
    }

    return true; // Array is monotonic (only one trend or all equal)
}`;

  const approaches = [
    {
      name: "Two-Pass Check",
      complexity: "O(n) time, O(1) space",
      description:
        "Check if array is non-decreasing, then check if non-increasing",
    },
    {
      name: "Single-Pass Tracking (Optimal)",
      complexity: "O(n) time, O(1) space",
      description:
        "Track both trends simultaneously, return false if both exist",
    },
  ];

  const monotonicIncreasingSteps = [
    "• n = 5, increasing = false, decreasing = false",
    "• i=1: nums[0]=1 < nums[1]=2 → increasing = true, decreasing = false",
    "• i=2: nums[1]=2 < nums[2]=2 → no change (equal), increasing = true, decreasing = false",
    "• i=3: nums[2]=2 < nums[3]=3 → increasing = true, decreasing = false",
    "• i=4: nums[3]=3 < nums[4]=4 → increasing = true, decreasing = false",
    "• Only increasing trend found → return true",
  ];

  const nonMonotonicSteps = [
    "• n = 5, increasing = false, decreasing = false",
    "• i=1: nums[0]=6 > nums[1]=5 → increasing = false, decreasing = true",
    "• i=2: nums[1]=5 < nums[2]=6 → increasing = true, decreasing = true",
    "• Both trends detected → return false immediately",
  ];

  const allEqualSteps = [
    "• n = 4, increasing = false, decreasing = false",
    "• i=1: nums[0]=4 == nums[1]=4 → no change, both remain false",
    "• i=2: nums[1]=4 == nums[2]=4 → no change, both remain false",
    "• i=3: nums[2]=4 == nums[3]=4 → no change, both remain false",
    "• Neither trend detected → return true (all equal is monotonic)",
  ];

  return (
    <SlideContainer>
      <AlgorithmTitle title="Monotonic Array" />

      <StepsBox>
        <Step
          number={1}
          title="Initialize trend trackers"
          description="set increasing = false, decreasing = false to track directional changes"
        />
        <Step
          number={2}
          title="Iterate through adjacent pairs"
          description="start from i=1, compare each nums[i] with nums[i-1]"
        />
        <Step
          number={3}
          title="Detect increasing trend"
          description="if nums[i-1] < nums[i], set increasing = true"
        />
        <Step
          number={4}
          title="Detect decreasing trend"
          description="if nums[i-1] > nums[i], set decreasing = true"
        />
        <Step
          number={5}
          title="Handle equal elements"
          description="if nums[i-1] == nums[i], maintain current trend status"
        />
        <Step
          number={6}
          title="Check for contradiction"
          description="if both increasing && decreasing are true, return false immediately"
        />
        <Step
          number={7}
          title="Return monotonic status"
          description="if loop completes without contradiction, array is monotonic → return true"
        />
      </StepsBox>

      <IntuitionBox>
        <p>
          A <strong>monotonic array</strong> is one that is either entirely
          non-decreasing (monotonic increasing) or entirely non-increasing
          (monotonic decreasing). The key insight is to track both directional
          trends simultaneously. If we ever find both an increasing and
          decreasing transition, the array cannot be monotonic. Equal elements
          don't break monotonicity in either direction.
        </p>
      </IntuitionBox>

      <ExampleBox title="Monotonic Increasing">
        <div>
          <Highlight>nums = [1, 2, 2, 3, 4]</Highlight>
          <br />
          <Highlight>expected output = true</Highlight>
          <br />
          <small style={{ color: "#a1a1a6" }}>
            Non-decreasing: 1 ≤ 2 ≤ 2 ≤ 3 ≤ 4 (monotonic increasing)
          </small>
        </div>

        <ProcessingSteps
          title="Step-by-step execution:"
          steps={monotonicIncreasingSteps}
          result="true (monotonic increasing)"
        />
      </ExampleBox>

      <ExampleBox title="Non-Monotonic Array">
        <div>
          <Highlight>nums = [6, 5, 6, 8]</Highlight>
          <br />
          <Highlight>expected output = false</Highlight>
          <br />
          <small style={{ color: "#a1a1a6" }}>
            Has both increasing (5→6, 6→8) and decreasing (6→5) transitions
          </small>
        </div>

        <ProcessingSteps
          title="Step-by-step execution:"
          steps={nonMonotonicSteps}
          result="false (not monotonic - mixed trends)"
        />
      </ExampleBox>

      <ExampleBox title="All Equal Elements">
        <div>
          <Highlight>nums = [4, 4, 4, 4]</Highlight>
          <br />
          <Highlight>expected output = true</Highlight>
          <br />
          <small style={{ color: "#a1a1a6" }}>
            All elements equal → both non-decreasing and non-increasing
          </small>
        </div>

        <ProcessingSteps
          title="Step-by-step execution:"
          steps={allEqualSteps}
          result="true (monotonic - all equal)"
        />
      </ExampleBox>

      <CodeBlock code={code} />

      <div className="section">
        <div className="section-title">Monotonic Types</div>
        <div className="processing-steps">
          <div
            style={{
              marginBottom: "16px",
              color: "#007aff",
              fontWeight: "bold",
            }}
          >
            Types of Monotonic Arrays:
          </div>
          <div style={{ marginLeft: "20px", marginBottom: "12px" }}>
            <span style={{ color: "#34c759" }}>
              ✓ Monotonic Increasing (Non-decreasing):
            </span>
          </div>
          <div
            style={{
              marginLeft: "40px",
              marginBottom: "12px",
              fontFamily: "SF Mono, Monaco, monospace",
            }}
          >
            [1, 2, 2, 3, 4] → each element ≥ previous
          </div>
          <div style={{ marginLeft: "20px", marginBottom: "12px" }}>
            <span style={{ color: "#ff9500" }}>
              ✓ Monotonic Decreasing (Non-increasing):
            </span>
          </div>
          <div
            style={{
              marginLeft: "40px",
              marginBottom: "12px",
              fontFamily: "SF Mono, Monaco, monospace",
            }}
          >
            [4, 3, 2, 2, 1] → each element ≤ previous
          </div>
          <div style={{ marginLeft: "20px", marginBottom: "12px" }}>
            <span style={{ color: "#5ac8fa" }}>✓ All Equal:</span>
          </div>
          <div
            style={{
              marginLeft: "40px",
              marginBottom: "12px",
              fontFamily: "SF Mono, Monaco, monospace",
            }}
          >
            [3, 3, 3, 3] → satisfies both conditions
          </div>
          <div style={{ marginLeft: "20px" }}>
            <span style={{ color: "#ff3b30" }}>✗ Mixed Trends:</span>
          </div>
          <div
            style={{
              marginLeft: "40px",
              fontFamily: "SF Mono, Monaco, monospace",
            }}
          >
            [1, 3, 2, 4] → has both increasing and decreasing
          </div>
        </div>
      </div>

      <div className="section">
        <div className="section-title">Algorithm Visualization</div>
        <div className="processing-steps">
          <div
            style={{
              marginBottom: "12px",
              color: "#007aff",
              fontWeight: "bold",
            }}
          >
            Trend Detection Logic:
          </div>
          <div
            style={{
              marginLeft: "20px",
              marginBottom: "12px",
              fontFamily: "SF Mono, Monaco, monospace",
            }}
          >
            nums[i-1] &lt; nums[i] →{" "}
            <span style={{ color: "#34c759" }}>increasing = true</span>
            <br />
            nums[i-1] &gt; nums[i] →{" "}
            <span style={{ color: "#ff9500" }}>decreasing = true</span>
            <br />
            nums[i-1] == nums[i] →{" "}
            <span style={{ color: "#a1a1a6" }}>no change</span>
          </div>
          <div
            style={{
              marginBottom: "12px",
              color: "#ff3b30",
              fontWeight: "bold",
            }}
          >
            Contradiction Check:
          </div>
          <div
            style={{
              marginLeft: "20px",
              fontFamily: "SF Mono, Monaco, monospace",
            }}
          >
            if (increasing && decreasing) return false;
          </div>
        </div>
      </div>

      <div className="section">
        <div className="section-title">Edge Cases</div>
        <ul className="list">
          <li className="list-item">
            <strong>Single Element:</strong> [5] → return true (trivially
            monotonic)
          </li>
          <li className="list-item">
            <strong>Two Elements Equal:</strong> [3, 3] → return true (both
            directions valid)
          </li>
          <li className="list-item">
            <strong>Two Elements Different:</strong> [1, 2] or [2, 1] → return
            true (one direction)
          </li>
          <li className="list-item">
            <strong>Strictly Increasing:</strong> [1, 2, 3, 4] → return true (no
            equal elements)
          </li>
          <li className="list-item">
            <strong>Strictly Decreasing:</strong> [4, 3, 2, 1] → return true (no
            equal elements)
          </li>
          <li className="list-item">
            <strong>Empty Array:</strong> [] → return true (vacuously monotonic)
          </li>
        </ul>
      </div>

      <ApproachBox approaches={approaches} />

      <ComplexityBox
        timeComplexity={{
          value: "O(n)",
          description: "Single pass through array comparing adjacent elements",
        }}
        spaceComplexity={{
          value: "O(1)",
          description: "Only using two boolean variables for trend tracking",
        }}
      />
    </SlideContainer>
  );
};

export default MonotonicArray;
