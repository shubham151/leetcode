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

const AlgorithmTemplate = () => {
  const code = `// Your algorithm implementation here
function algorithmName(input) {
    // Implementation
    return result;
}`;

  const approaches = [
    {
      name: "Approach 1",
      complexity: "O(?) time, O(?) space",
      description: "Description of approach",
    },
    // Add more approaches
  ];

  const processingSteps = [
    "• Step 1: Description",
    "• Step 2: Description",
    "• Step 3: Description",
  ];

  return (
    <SlideContainer>
      <AlgorithmTitle title="Algorithm Name" />

      <StepsBox>
        <Step
          number={1}
          title="First step"
          description="what happens in this step"
        />
        <Step
          number={2}
          title="Second step"
          description="what happens in this step"
        />
        {/* Add more steps as needed */}
      </StepsBox>

      {/* Optional: Add intuition */}
      <IntuitionBox>
        <p>Explain the key insight that makes this algorithm work...</p>
      </IntuitionBox>

      <ExampleBox>
        <div>
          <Highlight>input = [example]</Highlight>
          <br />
          <Highlight>expected = [output]</Highlight>
        </div>

        <ProcessingSteps
          title="Step-by-step execution:"
          steps={processingSteps}
          result="[final result]"
        />
      </ExampleBox>

      <CodeBlock code={code} />

      {/* Optional: Show different approaches */}
      <ApproachBox approaches={approaches} />

      <ComplexityBox
        timeComplexity={{
          value: "O(?)",
          description: "explanation of time complexity",
        }}
        spaceComplexity={{
          value: "O(?)",
          description: "explanation of space complexity",
        }}
      />
    </SlideContainer>
  );
};

export default AlgorithmTemplate;

// Usage Instructions:
// 1. Copy this template
// 2. Rename the component and file
// 3. Fill in your algorithm details
// 4. Remove unused sections (IntuitionBox, ApproachBox, etc.)
// 5. Add to your routing
