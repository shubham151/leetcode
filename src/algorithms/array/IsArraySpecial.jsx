// src/algorithms/array/IsArraySpecial.jsx
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

const IsArraySpecial = () => {
  const code = `function isArraySpecial(nums) {
    const n = nums.length;

    // Check each adjacent pair
    for (let i = 1; i < n; i++) {
        // If sum is even, both numbers have same parity (both odd or both even)
        if ((nums[i - 1] + nums[i]) % 2 === 0) {
            return false; // Not special - adjacent elements have same parity
        }
    }

    return true; // All adjacent pairs have different parity
}`;

  const approaches = [
    {
      name: "Sum Parity Check (Given)",
      complexity: "O(n) time, O(1) space",
      description:
        "Check if sum of adjacent elements is odd (different parity)",
    },
    {
      name: "Direct Parity Check",
      complexity: "O(n) time, O(1) space",
      description:
        "Check if nums[i] % 2 !== nums[i-1] % 2 for each adjacent pair",
    },
    {
      name: "Bitwise XOR",
      complexity: "O(n) time, O(1) space",
      description: "Use nums[i] ^ nums[i-1] to check if last bits differ",
    },
  ];

  const specialArraySteps = [
    "• n = 4, checking adjacent pairs:",
    "• i=1: nums[0]=1, nums[1]=2 → sum=1+2=3 → 3%2=1 (odd) ✓ continue",
    "• i=2: nums[1]=2, nums[2]=3 → sum=2+3=5 → 5%2=1 (odd) ✓ continue",
    "• i=3: nums[2]=3, nums[3]=4 → sum=3+4=7 → 7%2=1 (odd) ✓ continue",
    "• All adjacent pairs have odd sums → different parity → return true",
  ];

  const nonSpecialSteps = [
    "• n = 3, checking adjacent pairs:",
    "• i=1: nums[0]=2, nums[1]=1 → sum=2+1=3 → 3%2=1 (odd) ✓ continue",
    "• i=2: nums[1]=1, nums[2]=3 → sum=1+3=4 → 4%2=0 (even) ✗ return false",
    "• Found adjacent pair with same parity (both odd) → return false",
  ];

  return (
    <SlideContainer>
      <AlgorithmTitle title="Special Array I" />

      <StepsBox>
        <Step
          number={1}
          title="Get array length"
          description="store n = nums.length for iteration bounds"
        />
        <Step
          number={2}
          title="Iterate through adjacent pairs"
          description="start from i=1, check each nums[i] with nums[i-1]"
        />
        <Step
          number={3}
          title="Calculate sum of adjacent elements"
          description="compute nums[i-1] + nums[i] for current pair"
        />
        <Step
          number={4}
          title="Check parity of sum"
          description="if (sum % 2 == 0), both elements have same parity"
        />
        <Step
          number={5}
          title="Return false on same parity"
          description="if sum is even, array is not special → return false"
        />
        <Step
          number={6}
          title="Continue if different parity"
          description="if sum is odd, elements have different parity → continue checking"
        />
        <Step
          number={7}
          title="Return true if all pairs pass"
          description="if no same-parity pairs found, array is special → return true"
        />
      </StepsBox>

      <IntuitionBox>
        <p>
          A <strong>special array</strong> is one where no two adjacent elements
          have the same parity (both odd or both even). The key insight is that
          when we add two numbers:
          <ul style={{ marginTop: "12px", marginLeft: "20px" }}>
            <li>
              <strong>Odd + Odd = Even</strong> (same parity)
            </li>
            <li>
              <strong>Even + Even = Even</strong> (same parity)
            </li>
            <li>
              <strong>Odd + Even = Odd</strong> (different parity)
            </li>
            <li>
              <strong>Even + Odd = Odd</strong> (different parity)
            </li>
          </ul>
          So if the sum is even, the adjacent elements have the same parity,
          making the array non-special.
        </p>
      </IntuitionBox>

      <ExampleBox title="Special Array Example">
        <div>
          <Highlight>nums = [1, 2, 3, 4]</Highlight>
          <br />
          <Highlight>expected output = true</Highlight>
          <br />
          <small style={{ color: "#a1a1a6" }}>
            Adjacent pairs: (1,2)→odd+even, (2,3)→even+odd, (3,4)→odd+even → all
            different parity
          </small>
        </div>

        <ProcessingSteps
          title="Step-by-step execution:"
          steps={specialArraySteps}
          result="true (array is special)"
        />
      </ExampleBox>

      <ExampleBox title="Non-Special Array Example">
        <div>
          <Highlight>nums = [2, 1, 3]</Highlight>
          <br />
          <Highlight>expected output = false</Highlight>
          <br />
          <small style={{ color: "#a1a1a6" }}>
            Adjacent pairs: (2,1)→even+odd, (1,3)→odd+odd → second pair has same
            parity
          </small>
        </div>

        <ProcessingSteps
          title="Step-by-step execution:"
          steps={nonSpecialSteps}
          result="false (array is not special)"
        />
      </ExampleBox>

      <CodeBlock code={code} />

      <div className="section">
        <div className="section-title">Parity Mathematics</div>
        <div className="processing-steps">
          <div
            style={{
              marginBottom: "16px",
              color: "#007aff",
              fontWeight: "bold",
            }}
          >
            Sum Parity Rules:
          </div>
          <div
            style={{
              marginLeft: "20px",
              marginBottom: "12px",
              fontFamily: "SF Mono, Monaco, monospace",
            }}
          >
            <span style={{ color: "#34c759" }}>
              Different Parity (Special):
            </span>
            <br />
            Odd + Even = Odd (e.g., 3 + 2 = 5)
            <br />
            Even + Odd = Odd (e.g., 4 + 1 = 5)
            <br />
            <br />
            <span style={{ color: "#ff3b30" }}>Same Parity (Not Special):</span>
            <br />
            Odd + Odd = Even (e.g., 3 + 1 = 4)
            <br />
            Even + Even = Even (e.g., 2 + 4 = 6)
          </div>
          <div style={{ color: "#ff9500", fontWeight: "bold" }}>
            ✓ If sum % 2 == 1 → different parity → continue
            <br />✗ If sum % 2 == 0 → same parity → return false
          </div>
        </div>
      </div>

      <div className="section">
        <div className="section-title">Alternative Approaches</div>
        <div className="processing-steps">
          <div
            style={{
              marginBottom: "12px",
              color: "#007aff",
              fontWeight: "bold",
            }}
          >
            Method 1: Direct Parity Check
          </div>
          <div
            style={{
              marginLeft: "20px",
              marginBottom: "16px",
              fontFamily: "SF Mono, Monaco, monospace",
            }}
          >
            if (nums[i] % 2 === nums[i-1] % 2) return false;
          </div>

          <div
            style={{
              marginBottom: "12px",
              color: "#007aff",
              fontWeight: "bold",
            }}
          >
            Method 2: Bitwise XOR
          </div>
          <div
            style={{
              marginLeft: "20px",
              marginBottom: "16px",
              fontFamily: "SF Mono, Monaco, monospace",
            }}
          >
            if ((nums[i] ^ nums[i-1]) % 2 === 0) return false;
          </div>

          <div
            style={{
              marginBottom: "12px",
              color: "#007aff",
              fontWeight: "bold",
            }}
          >
            Method 3: Sum Parity (Given Solution)
          </div>
          <div
            style={{
              marginLeft: "20px",
              fontFamily: "SF Mono, Monaco, monospace",
            }}
          >
            if ((nums[i-1] + nums[i]) % 2 === 0) return false;
          </div>
        </div>
      </div>

      <div className="section">
        <div className="section-title">Edge Cases</div>
        <ul className="list">
          <li className="list-item">
            <strong>Single Element:</strong> [5] → return true (vacuously
            special, no adjacent pairs)
          </li>
          <li className="list-item">
            <strong>Two Elements Different Parity:</strong> [1, 2] → return true
            (odd, even)
          </li>
          <li className="list-item">
            <strong>Two Elements Same Parity:</strong> [1, 3] → return false
            (both odd)
          </li>
          <li className="list-item">
            <strong>All Alternating:</strong> [1, 2, 3, 4, 5] → return true
            (perfect alternation)
          </li>
          <li className="list-item">
            <strong>Large Numbers:</strong> Works for any integer values, parity
            rules still apply
          </li>
        </ul>
      </div>

      <ApproachBox approaches={approaches} />

      <ComplexityBox
        timeComplexity={{
          value: "O(n)",
          description: "Single pass through array checking adjacent pairs",
        }}
        spaceComplexity={{
          value: "O(1)",
          description: "Only using constant extra variables",
        }}
      />
    </SlideContainer>
  );
};

export default IsArraySpecial;
