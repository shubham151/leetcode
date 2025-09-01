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

const MaxNumberOfBalloons = () => {
  const code = `function maxNumberOfBalloons(text) {
    // Initialize frequency map for letters in "balloon"
    const letterCount = { b: 0, a: 0, l: 0, o: 0, n: 0 };

    // Count frequency of each relevant letter
    for (const char of text) {
        if (letterCount[char] !== undefined) {
            letterCount[char]++;
        }
    }

    // Calculate maximum balloons possible
    // 'l' and 'o' appear twice in "balloon", so divide by 2
    const maxBalloons = Math.min(
        letterCount.b,
        letterCount.a,
        Math.floor(letterCount.l / 2),
        Math.floor(letterCount.o / 2),
        letterCount.n
    );

    return maxBalloons;
}`;

  const approaches = [
    {
      name: "Brute Force",
      complexity: "O(n²) time, O(1) space",
      description:
        "For each possible count, check if we can form that many 'balloon' strings",
    },
    {
      name: "Hash Map Counting (Optimal)",
      complexity: "O(n) time, O(1) space",
      description:
        "Count letter frequencies, find bottleneck using minimum calculation",
    },
  ];

  const processingSteps = [
    "• Initialize: {b:0, a:0, l:0, o:0, n:0}",
    "• Count letters in 'nlaebolko':",
    "• n: letterCount.n = 1",
    "• l: letterCount.l = 2",
    "• a: letterCount.a = 1",
    "• e: not needed, skip",
    "• b: letterCount.b = 1",
    "• o: letterCount.o = 2",
    "• l: letterCount.l = 3",
    "• k: not needed, skip",
    "• o: letterCount.o = 3",
    "• Final counts: {b:1, a:1, l:3, o:3, n:1}",
    "• Calculate: min(1, 1, floor(3/2), floor(3/2), 1) = min(1, 1, 1, 1, 1) = 1",
  ];

  const exampleTwoSteps = [
    "• Initialize: {b:0, a:0, l:0, o:0, n:0}",
    "• Count letters in 'loonbalxballpoon':",
    "• Final counts: {b:2, a:2, l:4, o:4, n:2}",
    "• Calculate: min(2, 2, floor(4/2), floor(4/2), 2) = min(2, 2, 2, 2, 2) = 2",
  ];

  return (
    <SlideContainer>
      <AlgorithmTitle title="Maximum Number of Balloons" />

      <StepsBox>
        <Step
          number={1}
          title="Initialize letter frequency map"
          description="create hash map for letters b, a, l, o, n with count 0"
        />
        <Step
          number={2}
          title="Count relevant letters"
          description="traverse text and increment count for letters needed for 'balloon'"
        />
        <Step
          number={3}
          title="Handle duplicate letters"
          description="'balloon' has 2 'l's and 2 'o's, so divide their counts by 2"
        />
        <Step
          number={4}
          title="Find bottleneck letter"
          description="take minimum of all adjusted counts using Math.min()"
        />
        <Step
          number={5}
          title="Apply floor operation"
          description="use Math.floor() to handle any fractional results from division"
        />
        <Step
          number={6}
          title="Return result"
          description="the minimum count represents maximum 'balloon' strings possible"
        />
      </StepsBox>

      <IntuitionBox>
        <p>
          The key insight is that to form the word <strong>"balloon"</strong>,
          we need specific quantities of each letter: 1 'b', 1 'a', 2 'l's, 2
          'o's, and 1 'n'. The maximum number of "balloon"s we can form is
          limited by whichever letter we have the least of (relative to what we
          need). Since 'l' and 'o' appear twice in "balloon", we divide their
          counts by 2 to see how many complete sets they can contribute to.
        </p>
      </IntuitionBox>

      <ExampleBox title="Example 1">
        <div>
          <Highlight>text = "nlaebolko"</Highlight>
          <br />
          <Highlight>expected output = 1</Highlight>
          <br />
          <small style={{ color: "#a1a1a6" }}>
            Can form 1 "balloon": b(1) + a(1) + l(2) + o(2) + n(1) = "balloon"
          </small>
        </div>

        <ProcessingSteps
          title="Step-by-step execution:"
          steps={processingSteps}
          result="1 (can form 1 'balloon')"
        />
      </ExampleBox>

      <ExampleBox title="Example 2">
        <div>
          <Highlight>text = "loonbalxballpoon"</Highlight>
          <br />
          <Highlight>expected output = 2</Highlight>
          <br />
          <small style={{ color: "#a1a1a6" }}>
            Can form 2 "balloon"s: enough letters for two complete words
          </small>
        </div>

        <ProcessingSteps
          title="Step-by-step execution:"
          steps={exampleTwoSteps}
          result="2 (can form 2 'balloon's)"
        />
      </ExampleBox>

      <CodeBlock code={code} />

      <div className="section">
        <div className="section-title">Letter Requirement Analysis</div>
        <div className="processing-steps">
          <div
            style={{
              marginBottom: "16px",
              color: "#007aff",
              fontWeight: "bold",
            }}
          >
            Word: "balloon" - Letter Requirements
          </div>
          <div
            style={{
              marginLeft: "20px",
              marginBottom: "12px",
              fontFamily: "SF Mono, Monaco, monospace",
            }}
          >
            b: 1 occurrence (appears once)
            <br />
            a: 1 occurrence (appears once)
            <br />
            l: 2 occurrences (appears twice) ← Need to divide by 2<br />
            o: 2 occurrences (appears twice) ← Need to divide by 2<br />
            n: 1 occurrence (appears once)
          </div>
          <div style={{ marginBottom: "12px", color: "#34c759" }}>
            <strong>Formula for max balloons:</strong>
          </div>
          <div
            style={{
              marginLeft: "20px",
              fontFamily: "SF Mono, Monaco, monospace",
              color: "#f5f5f7",
            }}
          >
            min(count_b, count_a, floor(count_l/2), floor(count_o/2), count_n)
          </div>
        </div>
      </div>

      <div className="section">
        <div className="section-title">Visual Example</div>
        <div className="processing-steps">
          <div
            style={{
              marginBottom: "16px",
              color: "#007aff",
              fontWeight: "bold",
            }}
          >
            text = "loonbalxballpoon"
          </div>
          <div style={{ marginBottom: "12px" }}>
            <span style={{ color: "#34c759" }}>Letter Inventory:</span>
          </div>
          <div
            style={{
              marginLeft: "20px",
              marginBottom: "12px",
              fontFamily: "SF Mono, Monaco, monospace",
            }}
          >
            b: 2 → can support 2 balloons
            <br />
            a: 2 → can support 2 balloons
            <br />
            l: 4 → can support 4÷2 = 2 balloons
            <br />
            o: 4 → can support 4÷2 = 2 balloons
            <br />
            n: 2 → can support 2 balloons
          </div>
          <div style={{ color: "#ff3b30", fontWeight: "bold" }}>
            ✓ Bottleneck: All letters support 2 balloons → Answer: 2
          </div>
        </div>
      </div>

      <div className="section">
        <div className="section-title">Edge Cases</div>
        <ul className="list">
          <li className="list-item">
            <strong>Missing Letters:</strong> "baon" → missing 'l', return 0
          </li>
          <li className="list-item">
            <strong>Exact Match:</strong> "balloon" → exactly 1 of each needed
            letter, return 1
          </li>
          <li className="list-item">
            <strong>Extra Letters:</strong> "balloonxyz" → extra letters
            ignored, return 1
          </li>
          <li className="list-item">
            <strong>Insufficient Duplicates:</strong> "ballon" → only 1 'l',
            need 2, return 0
          </li>
          <li className="list-item">
            <strong>Empty String:</strong> "" → no letters available, return 0
          </li>
        </ul>
      </div>

      <ApproachBox approaches={approaches} />

      <ComplexityBox
        timeComplexity={{
          value: "O(n)",
          description:
            "Single pass through the text to count letter frequencies",
        }}
        spaceComplexity={{
          value: "O(1)",
          description: "Hash map with fixed 5 entries (constant space)",
        }}
      />
    </SlideContainer>
  );
};

export default MaxNumberOfBalloons;
