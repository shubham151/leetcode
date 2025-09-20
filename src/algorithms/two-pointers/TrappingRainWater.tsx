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
} from '../../components/algorithm'

const TrappingRainWater = () => {
  const code = `function trap(height) {
  let l = 0, r = height.length - 1;
  let maxPrefix = height[l];
  let maxSuffix = height[r];
  let water = 0;

  while (l < r) {
    if (maxPrefix < maxSuffix) {
      water += maxPrefix - Math.min(height[l], maxPrefix);
      l++;
      maxPrefix = Math.max(maxPrefix, height[l]);
    } else {
      water += maxSuffix - Math.min(height[r], maxSuffix);
      r--;
      maxSuffix = Math.max(maxSuffix, height[r]);
    }
  }

  return water;
}`

  const approaches = [
    {
      name: 'Brute Force',
      complexity: 'O(n²) time, O(1) space',
      description: 'For each index, compute water by scanning left and right max heights.',
    },
    {
      name: 'Dynamic Programming (Precomputed Max Arrays)',
      complexity: 'O(n) time, O(n) space',
      description:
        'Precompute prefixMax and suffixMax arrays, then compute trapped water in one pass.',
    },
    {
      name: 'Two Pointers',
      complexity: 'O(n) time, O(1) space',
      description:
        'Maintain left and right pointers with running max prefix/suffix, add trapped water as we shrink window.',
    },
    {
      name: 'Monotonic Stack',
      complexity: 'O(n) time, O(n) space',
      description: 'Use a decreasing stack to calculate trapped water between boundaries.',
    },
  ]

  const processingSteps = [
    '• Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]',
    '• Initialize: l=0, r=11, maxPrefix=0, maxSuffix=1, water=0',
    '• Compare maxPrefix < maxSuffix → move l',
    '  - l=1: water += maxPrefix - height[1]=0-1 → 0 (no water), maxPrefix=1',
    '• Next: l=2: water += 1 - 0 = 1 → water=1',
    '• l=3: water += 1 - 2 = 0, maxPrefix=2',
    '• Continue moving pointers inward:',
    '  - At l=5: add 2 units',
    '  - At l=6: add 1 unit',
    '  - At l=8: trapped water calculated from right side',
    '• Final total water = 6',
  ]

  return (
    <SlideContainer>
      <AlgorithmTitle title="Trapping Rain Water" />

      <StepsBox>
        <Step
          number={1}
          title="Initialize pointers"
          description="Set left = 0, right = n-1; keep maxPrefix and maxSuffix."
        />
        <Step
          number={2}
          title="Compare max heights"
          description="If maxPrefix < maxSuffix, process left side; else process right."
        />
        <Step
          number={3}
          title="Calculate trapped water"
          description="Water = maxPrefix - height[left] (if left side smaller) or maxSuffix - height[right]."
        />
        <Step
          number={4}
          title="Update maximums"
          description="Update maxPrefix and maxSuffix as pointers move inward."
        />
        <Step number={5} title="Repeat" description="Continue until left >= right." />
        <Step
          number={6}
          title="Return result"
          description="Sum of trapped water over all positions."
        />
      </StepsBox>

      <IntuitionBox>
        <p>
          The water above a bar depends on the{' '}
          <strong>minimum of the tallest bar to its left and right</strong>. Instead of scanning
          both sides for each bar (O(n²)), we can maintain running max values from both ends using
          two pointers. The side with the smaller max decides the trapped water at that step.
        </p>
      </IntuitionBox>

      <ExampleBox>
        <div>
          <Highlight>height = [0,1,0,2,1,0,1,3,2,1,2,1]</Highlight>
          <br />
          <Highlight>expected output = 6</Highlight>
        </div>

        <ProcessingSteps
          title="Step-by-step execution:"
          steps={processingSteps}
          result="6 (units of trapped rain water)"
        />
      </ExampleBox>

      <CodeBlock code={code} />

      <ApproachBox approaches={approaches} />

      <ComplexityBox
        timeComplexity={{
          value: 'O(n)',
          description: 'Each pointer moves at most n steps.',
        }}
        spaceComplexity={{
          value: 'O(1)',
          description: 'Only constant extra variables used.',
        }}
      />
    </SlideContainer>
  )
}

export default TrappingRainWater
