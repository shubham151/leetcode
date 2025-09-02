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

const DivideArrayPairs = () => {
  const code = `function divideArray(nums) {
    const n = nums.length;
    const hmap = {};

    // Count frequency of each number
    for (const num of nums) {
        hmap[num] = 1 + (hmap[num] || 0);
    }

    // Check if all frequencies are even
    for (const num in hmap) {
        if (hmap[num] % 2 === 1) {
            return false; // Odd frequency means unpaired elements
        }
    }

    return true; // All numbers can be paired
}`;

  const approaches = [
    {
      name: "Sorting + Pairing",
      complexity: "O(n log n) time, O(1) space",
      description: "Sort array, then check if adjacent elements can form pairs",
    },
    {
      name: "Frequency Counting (Optimal)",
      complexity: "O(n) time, O(n) space",
      description: "Count frequencies, check if all are even numbers",
    },
    {
      name: "Set Toggle",
      complexity: "O(n) time, O(n) space",
      description:
        "Use set to track unpaired elements, toggle on each occurrence",
    },
  ];

  const canDivideSteps = [
    "• Build frequency map for [3, 2, 3, 2, 2, 2]:",
    "• hmap[3] = 2, hmap[2] = 4",
    "• Check frequencies:",
    "• num=3: frequency=2 → 2%2=0 (even) ✓ can form 1 pair",
    "• num=2: frequency=4 → 4%2=0 (even) ✓ can form 2 pairs",
    "• All frequencies are even → return true",
  ];

  const cannotDivideSteps = [
    "• Build frequency map for [1, 2, 3, 4]:",
    "• hmap[1] = 1, hmap[2] = 1, hmap[3] = 1, hmap[4] = 1",
    "• Check frequencies:",
    "• num=1: frequency=1 → 1%2=1 (odd) ✗ cannot pair",
    "• Found odd frequency → return false immediately",
  ];

  const mixedCaseSteps = [
    "• Build frequency map for [1, 1, 2, 2, 3, 3, 4]:",
    "• hmap[1] = 2, hmap[2] = 2, hmap[3] = 2, hmap[4] = 1",
    "• Check frequencies:",
    "• num=1: frequency=2 → 2%2=0 (even) ✓",
    "• num=2: frequency=2 → 2%2=0 (even) ✓",
    "• num=3: frequency=2 → 2%2=0 (even) ✓",
    "• num=4: frequency=1 → 1%2=1 (odd) ✗ cannot pair",
    "• Found odd frequency → return false",
  ];

  return (
    <SlideContainer>
      <AlgorithmTitle title="Divide Array Into Equal Pairs" />

      <StepsBox>
        <Step
          number={1}
          title="Initialize frequency map"
          description="create empty hash map to count occurrences of each number"
        />
        <Step
          number={2}
          title="Count element frequencies"
          description="traverse array and increment count using hmap[num] = 1 + (hmap[num] || 0)"
        />
        <Step
          number={3}
          title="Iterate through frequencies"
          description="check each unique number's frequency in the hash map"
        />
        <Step
          number={4}
          title="Check parity of frequency"
          description="if frequency % 2 === 1, the number has odd occurrences"
        />
        <Step
          number={5}
          title="Handle unpaired elements"
          description="odd frequency means some elements cannot be paired → return false"
        />
        <Step
          number={6}
          title="Continue if even frequency"
          description="even frequency means all occurrences can be paired → continue"
        />
        <Step
          number={7}
          title="Return pairing result"
          description="if all frequencies are even, array can be divided → return true"
        />
      </StepsBox>

      <IntuitionBox>
        <p>
          To divide an array into pairs where both elements are equal, each
          unique number must appear an <strong>even number of times</strong>.
          This is because we can only form pairs from identical elements. If any
          number appears an odd number of times, there will be at least one
          element left unpaired, making it impossible to divide the entire array
          into equal pairs.
        </p>
      </IntuitionBox>

      <ExampleBox title="Can Be Divided">
        <div>
          <Highlight>nums = [3, 2, 3, 2, 2, 2]</Highlight>
          <br />
          <Highlight>expected output = true</Highlight>
          <br />
          <small style={{ color: "#a1a1a6" }}>
            Pairs: (3,3), (2,2), (2,2) → all elements can be paired
          </small>
        </div>

        <ProcessingSteps
          title="Step-by-step execution:"
          steps={canDivideSteps}
          result="true (can form 3 equal pairs)"
        />
      </ExampleBox>

      <ExampleBox title="Cannot Be Divided">
        <div>
          <Highlight>nums = [1, 2, 3, 4]</Highlight>
          <br />
          <Highlight>expected output = false</Highlight>
          <br />
          <small style={{ color: "#a1a1a6" }}>
            All elements appear once → no pairs can be formed
          </small>
        </div>

        <ProcessingSteps
          title="Step-by-step execution:"
          steps={cannotDivideSteps}
          result="false (all frequencies are odd)"
        />
      </ExampleBox>

      <ExampleBox title="Mixed Frequencies">
        <div>
          <Highlight>nums = [1, 1, 2, 2, 3, 3, 4]</Highlight>
          <br />
          <Highlight>expected output = false</Highlight>
          <br />
          <small style={{ color: "#a1a1a6" }}>
            Most can pair: (1,1), (2,2), (3,3), but 4 appears once
          </small>
        </div>

        <ProcessingSteps
          title="Step-by-step execution:"
          steps={mixedCaseSteps}
          result="false (element 4 cannot be paired)"
        />
      </ExampleBox>

      <CodeBlock code={code} />

      <div className="section">
        <div className="section-title">Pairing Analysis</div>
        <div className="processing-steps">
          <div
            style={{
              marginBottom: "16px",
              color: "#007aff",
              fontWeight: "bold",
            }}
          >
            Frequency → Pairing Relationship:
          </div>
          <div style={{ marginLeft: "20px", marginBottom: "12px" }}>
            <span style={{ color: "#34c759" }}>
              ✓ Even Frequencies (Can Pair):
            </span>
          </div>
          <div
            style={{
              marginLeft: "40px",
              marginBottom: "12px",
              fontFamily: "SF Mono, Monaco, monospace",
            }}
          >
            Frequency 2 → 1 pair (e.g., [3,3])
            <br />
            Frequency 4 → 2 pairs (e.g., [2,2,2,2] → (2,2) + (2,2))
            <br />
            Frequency 6 → 3 pairs (e.g., [1,1,1,1,1,1] → 3 pairs of (1,1))
          </div>
          <div style={{ marginLeft: "20px", marginBottom: "12px" }}>
            <span style={{ color: "#ff3b30" }}>
              ✗ Odd Frequencies (Cannot Pair):
            </span>
          </div>
          <div
            style={{
              marginLeft: "40px",
              fontFamily: "SF Mono, Monaco, monospace",
            }}
          >
            Frequency 1 → 0 pairs + 1 leftover
            <br />
            Frequency 3 → 1 pair + 1 leftover
            <br />
            Frequency 5 → 2 pairs + 1 leftover
          </div>
        </div>
      </div>

      <div className="section">
        <div className="section-title">Mathematical Foundation</div>
        <div className="processing-steps">
          <div
            style={{
              marginBottom: "12px",
              color: "#007aff",
              fontWeight: "bold",
            }}
          >
            Why Even Frequencies Work:
          </div>
          <div style={{ marginLeft: "20px", marginBottom: "12px" }}>
            • Each pair requires exactly 2 identical elements
          </div>
          <div style={{ marginLeft: "20px", marginBottom: "12px" }}>
            • From n identical elements, we can form floor(n/2) pairs
          </div>
          <div style={{ marginLeft: "20px", marginBottom: "12px" }}>
            • If n is even: floor(n/2) = n/2, no leftover elements
          </div>
          <div style={{ marginLeft: "20px", marginBottom: "16px" }}>
            • If n is odd: floor(n/2) = (n-1)/2, exactly 1 leftover element
          </div>

          <div
            style={{
              marginBottom: "12px",
              color: "#ff9500",
              fontWeight: "bold",
            }}
          >
            Example Calculation:
          </div>
          <div
            style={{
              marginLeft: "20px",
              fontFamily: "SF Mono, Monaco, monospace",
            }}
          >
            [2, 2, 2, 2, 3, 3] → freq[2]=4, freq[3]=2
            <br />
            Pairs from 2: floor(4/2) = 2 pairs, 0 leftover
            <br />
            Pairs from 3: floor(2/2) = 1 pair, 0 leftover
            <br />
            Total: 3 pairs, 0 leftover → ✓ can divide
          </div>
        </div>
      </div>

      <div className="section">
        <div className="section-title">Edge Cases</div>
        <ul className="list">
          <li className="list-item">
            <strong>All Same Even Count:</strong> [1,1,1,1] → return true (can
            form 2 pairs)
          </li>
          <li className="list-item">
            <strong>All Same Odd Count:</strong> [1,1,1] → return false (1
            element leftover)
          </li>
          <li className="list-item">
            <strong>Two Elements:</strong> [1,1] → return true (forms 1 pair)
          </li>
          <li className="list-item">
            <strong>Two Different:</strong> [1,2] → return false (no pairs
            possible)
          </li>
          <li className="list-item">
            <strong>Empty Array:</strong> [] → return true (vacuously dividable)
          </li>
          <li className="list-item">
            <strong>Large Even Array:</strong> 1000 elements, all same → depends
            on total count
          </li>
        </ul>
      </div>

      <ApproachBox approaches={approaches} />

      <ComplexityBox
        timeComplexity={{
          value: "O(n)",
          description:
            "Two passes: one to count frequencies, one to check parity",
        }}
        spaceComplexity={{
          value: "O(n)",
          description: "Hash map storing frequencies of unique elements",
        }}
      />
    </SlideContainer>
  );
};

export default DivideArrayPairs;
