// src/algorithms/array/KthDistinct.jsx
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

const KthDistinct = () => {
  const code = `function kthDistinct(arr, k) {
    // Step 1: Count frequency of each string
    const hmap = {};
    for (const str of arr) {
        hmap[str] = 1 + (hmap[str] || 0);
    }

    // Step 2: Find kth distinct string (frequency = 1)
    let count = 0;
    for (const str of arr) {
        if (hmap[str] === 1) {
            count++;
            if (count === k) {
                return str; // Found kth distinct string
            }
        }
    }

    return ""; // Less than k distinct strings exist
}`;

  const approaches = [
    {
      name: "Brute Force",
      complexity: "O(n² * m) time, O(1) space",
      description:
        "For each string, scan entire array to check if it appears exactly once",
    },
    {
      name: "Hash Map (Optimal)",
      complexity: "O(n * m) time, O(n * m) space",
      description:
        "Use hash map to count frequencies, then find kth distinct in order",
    },
  ];

  const processingSteps = [
    "• Build frequency map: {'d': 1, 'b': 2, 'c': 1, 'a': 1}",
    "• Start second pass to find distinct strings:",
    "• arr[0]='d': hmap['d']=1 → distinct, count=1 → 1≠2, continue",
    "• arr[1]='b': hmap['b']=2 → not distinct, skip",
    "• arr[2]='c': hmap['c']=1 → distinct, count=2 → 2=2 ✓ return 'c'",
  ];

  const noResultSteps = [
    "• Build frequency map: {'a': 3, 'b': 2}",
    "• Start second pass to find distinct strings:",
    "• arr[0]='a': hmap['a']=3 → not distinct, skip",
    "• arr[1]='a': hmap['a']=3 → not distinct, skip",
    "• arr[2]='a': hmap['a']=3 → not distinct, skip",
    "• arr[3]='b': hmap['b']=2 → not distinct, skip",
    "• arr[4]='b': hmap['b']=2 → not distinct, skip",
    "• End of array: count=0, k=3 → return empty string",
  ];

  return (
    <SlideContainer>
      <AlgorithmTitle title="Kth Distinct String in Array" />

      <StepsBox>
        <Step
          number={1}
          title="Build frequency map"
          description="count occurrences of each string using hash map"
        />
        <Step
          number={2}
          title="Initialize counter"
          description="count = 0 to track how many distinct strings we've seen"
        />
        <Step
          number={3}
          title="Second pass through array"
          description="iterate through original array to maintain order"
        />
        <Step
          number={4}
          title="Check if string is distinct"
          description="if hmap[str] === 1, it appears exactly once (distinct)"
        />
        <Step
          number={5}
          title="Increment counter"
          description="count++ when we find a distinct string"
        />
        <Step
          number={6}
          title="Check if kth found"
          description="if count === k, return current string"
        />
        <Step
          number={7}
          title="Handle not found case"
          description="if loop ends without finding k distinct strings, return empty string"
        />
      </StepsBox>

      <IntuitionBox>
        <p>
          The key insight is that we need to find strings that appear{" "}
          <strong>exactly once</strong>
          in the array, and return the{" "}
          <strong>kth such string in the order they appear</strong>. We use a
          two-pass approach: first pass builds a frequency map, second pass
          iterates through the original array (to preserve order) and counts
          distinct strings until we find the kth one.
        </p>
      </IntuitionBox>

      <ExampleBox title="Example with Result Found">
        <div>
          <Highlight>arr = ["d", "b", "c", "b", "c", "a"], k = 2</Highlight>
          <br />
          <Highlight>expected output = "a"</Highlight>
          <br />
          <small style={{ color: "#a1a1a6" }}>
            Distinct strings in order: "d" (1st), "a" (2nd)
          </small>
        </div>

        <ProcessingSteps
          title="Step-by-step execution:"
          steps={[
            "• Build frequency map: {'d': 1, 'b': 2, 'c': 2, 'a': 1}",
            "• Start second pass to find distinct strings:",
            "• arr[0]='d': hmap['d']=1 → distinct, count=1 → 1≠2, continue",
            "• arr[1]='b': hmap['b']=2 → not distinct, skip",
            "• arr[2]='c': hmap['c']=2 → not distinct, skip",
            "• arr[3]='b': hmap['b']=2 → not distinct, skip",
            "• arr[4]='c': hmap['c']=2 → not distinct, skip",
            "• arr[5]='a': hmap['a']=1 → distinct, count=2 → 2=2 ✓ return 'a'",
          ]}
          result="'a' (2nd distinct string)"
        />
      </ExampleBox>

      <ExampleBox title="Example with No Result">
        <div>
          <Highlight>arr = ["a", "a", "a", "b", "b"], k = 3</Highlight>
          <br />
          <Highlight>expected output = ""</Highlight>
          <br />
          <small style={{ color: "#a1a1a6" }}>
            No distinct strings exist (all appear multiple times)
          </small>
        </div>

        <ProcessingSteps
          title="Step-by-step execution:"
          steps={noResultSteps}
          result="'' (less than k distinct strings exist)"
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
            Array: ["d", "b", "c", "b", "c", "a"], k = 2
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
            "d": 1 ✓ (distinct)
            <br />
            "b": 2 ✗ (not distinct)
            <br />
            "c": 2 ✗ (not distinct)
            <br />
            "a": 1 ✓ (distinct)
          </div>
          <div style={{ marginBottom: "12px" }}>
            <span style={{ color: "#ff9500" }}>Order of Distinct Strings:</span>
          </div>
          <div
            style={{
              marginLeft: "20px",
              fontFamily: "SF Mono, Monaco, monospace",
            }}
          >
            1st distinct: "d" (appears at index 0)
            <br />
            2nd distinct: "a" (appears at index 5)
          </div>
          <div
            style={{ color: "#ff3b30", fontWeight: "bold", marginTop: "12px" }}
          >
            ✓ Return "a" (2nd distinct string)
          </div>
        </div>
      </div>

      <div className="section">
        <div className="section-title">Edge Cases</div>
        <ul className="list">
          <li className="list-item">
            <strong>k = 1:</strong> Return the first distinct string encountered
          </li>
          <li className="list-item">
            <strong>All strings distinct:</strong> Return arr[k-1] if k ≤
            arr.length
          </li>
          <li className="list-item">
            <strong>No distinct strings:</strong> All strings appear multiple
            times, return ""
          </li>
          <li className="list-item">
            <strong>{"k > distinct count:"}</strong> Not enough distinct
            strings, return ""
          </li>
          <li className="list-item">
            <strong>Single element array:</strong> ["a"], k=1 → return "a"
          </li>
        </ul>
      </div>

      <ApproachBox approaches={approaches} />

      <ComplexityBox
        timeComplexity={{
          value: "O(n * m)",
          description:
            "n = array length, m = average string length for hashing",
        }}
        spaceComplexity={{
          value: "O(n * m)",
          description: "Hash map storing up to n strings of average length m",
        }}
      />
    </SlideContainer>
  );
};

export default KthDistinct;
