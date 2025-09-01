// src/algorithms/array/MaxAscendingSum.jsx
import React from "react";
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

const MaxAscendingSum = () => {
  const code = `function maxAscendingSum(nums) {
    let max = nums[0];
    let n = nums.length;
    let sum = max;
    
    for(let i = 1; i < n; i++) {
        if(nums[i-1] < nums[i]) {
            // Continue ascending sequence - add to current sum
            sum += nums[i];
        } else {
            // Ascending sequence breaks - start new sequence
            sum = nums[i];
        }
        
        // Track maximum sum seen so far
        max = Math.max(max, sum);
    }
    
    return max;
}`;

  const approaches = [
    {
      name: "Brute Force",
      complexity: "O(n³) time, O(1) space",
      description:
        "Generate all subarrays, check if ascending, calculate sum, track maximum",
    },
    {
      name: "Two Pointers",
      complexity: "O(n²) time, O(1) space",
      description:
        "For each starting position, extend while ascending and calculate sum",
    },
    {
      name: "Single Pass (Optimal)",
      complexity: "O(n) time, O(1) space",
      description: "Track current ascending sum and maximum sum in one pass",
    },
  ];

  const processingSteps = [
    "• i=0: Initialize max=10, sum=10",
    "• i=1: nums[0]=10 < nums[1]=20 → ascending → sum=10+20=30, max=30",
    "• i=2: nums[1]=20 < nums[2]=30 → ascending → sum=30+30=60, max=60",
    "• i=3: nums[2]=30 > nums[3]=5 → not ascending → sum=5, max=60",
    "• i=4: nums[3]=5 < nums[4]=10 → ascending → sum=5+10=15, max=60",
    "• i=5: nums[4]=10 < nums[5]=15 → ascending → sum=15+15=30, max=60",
  ];

  return (
    <SlideContainer>
      <AlgorithmTitle title="Maximum Ascending Subarray Sum" />

      <StepsBox>
        <Step
          number={1}
          title="Initialize variables"
          description="max = nums[0], sum = nums[0] to track maximum and current sum"
        />
        <Step
          number={2}
          title="Iterate from index 1"
          description="compare each element with the previous one"
        />
        <Step
          number={3}
          title="Check if ascending"
          description="if nums[i-1] < nums[i], continue ascending sequence by adding nums[i] to sum"
        />
        <Step
          number={4}
          title="Handle sequence break"
          description="if not ascending, start new sequence with sum = nums[i]"
        />
        <Step
          number={5}
          title="Update maximum"
          description="max = Math.max(max, sum) to track the highest sum encountered"
        />
        <Step
          number={6}
          title="Return result"
          description="return max after processing all elements"
        />
      </StepsBox>

      <IntuitionBox>
        <p>
          The key insight is to maintain a running sum of the current ascending
          subarray. When we encounter a non-ascending pair (nums[i-1] ≥
          nums[i]), the ascending sequence breaks, so we start a new sequence
          from the current element. We continuously track the maximum sum seen
          so far. This is similar to Kadane's algorithm but with the constraint
          that we only consider strictly ascending subarrays.
        </p>
      </IntuitionBox>

      <ExampleBox>
        <div>
          <Highlight>nums = [10, 20, 30, 5, 10, 15]</Highlight>
          <br />
          <Highlight>expected output = 60</Highlight>
        </div>

        <ProcessingSteps
          title="Step-by-step execution:"
          steps={processingSteps}
          result="60 (subarray [10, 20, 30] has sum 60)"
        />
      </ExampleBox>

      <CodeBlock code={code} />

      <div className="section">
        <div className="section-title">Alternative Example</div>
        <div className="processing-steps">
          <div>
            <strong>nums = [10, 20, 30, 40]</strong>
          </div>
          <div>• Entire array is ascending: [10, 20, 30, 40]</div>
          <div>• Sum = 10 + 20 + 30 + 40 = 100</div>
          <div className="result-line">
            <strong>Result:</strong> <span className="highlight">100</span>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="section-title">Visual Trace</div>
        <div className="processing-steps">
          <div
            style={{
              marginBottom: "12px",
              color: "#007aff",
              fontWeight: "bold",
            }}
          >
            Array: [10, 20, 30, 5, 10, 15]
          </div>
          <div style={{ marginBottom: "8px" }}>
            <span style={{ color: "#34c759" }}>Ascending subarrays:</span>
          </div>
          <div style={{ marginLeft: "20px", marginBottom: "8px" }}>
            • [10, 20, 30] → sum = 60
          </div>
          <div style={{ marginLeft: "20px", marginBottom: "8px" }}>
            • [5, 10, 15] → sum = 30
          </div>
          <div style={{ color: "#ff3b30", fontWeight: "bold" }}>
            <strong>Maximum sum: 60</strong>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="section-title">Edge Cases</div>
        <ul className="list">
          <li className="list-item">
            <strong>Single Element:</strong> [5] → Return 5 (single element is
            ascending)
          </li>
          <li className="list-item">
            <strong>All Descending:</strong> [5, 4, 3, 2] → Return 5 (each
            element forms its own subarray)
          </li>
          <li className="list-item">
            <strong>All Equal:</strong> [3, 3, 3] → Return 3 (equal elements
            break ascending sequence)
          </li>
          <li className="list-item">
            <strong>Mixed Pattern:</strong> [12, 17, 15, 13, 10, 11, 12] →
            Return 33 (subarray [10, 11, 12])
          </li>
        </ul>
      </div>

      <ApproachBox approaches={approaches} />

      <ComplexityBox
        timeComplexity={{
          value: "O(n)",
          description: "Single pass through the array",
        }}
        spaceComplexity={{
          value: "O(1)",
          description: "Only using constant extra variables",
        }}
      />
    </SlideContainer>
  );
};

export default MaxAscendingSum;
