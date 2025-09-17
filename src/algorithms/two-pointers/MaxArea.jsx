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

const ContainerWithMostWater = () => {
  const code = `function maxArea(height) {
  let l = 0, r = height.length - 1;
  let max = 0;

  while (l < r) {
    max = Math.max(Math.min(height[l], height[r]) * (r - l), max);
    if (height[l] < height[r]) {
      l++;
    } else {
      r--;
    }
  }

  return max;
}`

  const approaches = [
    {
      name: 'Brute Force',
      complexity: 'O(n²) time, O(1) space',
      description:
        'Try all pairs (i, j), compute area = min(height[i], height[j]) × (j - i), track maximum.',
    },
    {
      name: 'Two Pointers',
      complexity: 'O(n) time, O(1) space',
      description: 'Use two pointers at ends, move inward from shorter side, track maximum area.',
    },
  ]

  const processingSteps = [
    '• Input: height = [1,8,6,2,5,4,8,3,7]',
    '• Start: l=0 (1), r=8 (7), area = min(1,7)×8=8 → max=8',
    '• Compare: height[l]=1 < height[r]=7 → move l→1',
    '• l=1 (8), r=8 (7), area = min(8,7)×7=49 → max=49',
    '• height[l]=8 > height[r]=7 → move r→7',
    '• l=1 (8), r=7 (3), area = min(8,3)×6=18 → max=49',
    '• height[l]=8 > height[r]=3 → move r→6',
    '• l=1 (8), r=6 (8), area = min(8,8)×5=40 → max=49',
    '• height[l]=8 = height[r]=8 → move r→5',
    '• ... continue until l>=r',
    '• Final max area = 49',
  ]

  return (
    <SlideContainer>
      <AlgorithmTitle title="Container With Most Water" />

      <StepsBox>
        <Step
          number={1}
          title="Initialize pointers"
          description="left = 0, right = n-1 (two ends of the container)"
        />
        <Step
          number={2}
          title="Compute area"
          description="area = min(height[left], height[right]) × (right-left)"
        />
        <Step
          number={3}
          title="Update maximum"
          description="Keep track of the largest area seen so far"
        />
        <Step
          number={4}
          title="Move pointer"
          description="Move the pointer at the shorter height inward to try larger area"
        />
        <Step number={5} title="Repeat until pointers meet" description="Stop when left >= right" />
        <Step
          number={6}
          title="Return maximum area"
          description="This is the largest container that can be formed"
        />
      </StepsBox>

      <IntuitionBox>
        <p>
          The area is limited by the <strong>shorter line</strong>, not the taller one. By moving
          the pointer at the shorter line inward, we have a chance to find a taller line that could
          form a larger area. This way we avoid checking all O(n²) pairs, and find the maximum in
          O(n).
        </p>
      </IntuitionBox>

      <ExampleBox>
        <div>
          <Highlight>height = [1,8,6,2,5,4,8,3,7]</Highlight>
          <br />
          <Highlight>expected output = 49</Highlight>
        </div>

        <ProcessingSteps
          title="Step-by-step execution:"
          steps={processingSteps}
          result="49 (maximum water area)"
        />
      </ExampleBox>

      <CodeBlock code={code} />

      <ApproachBox approaches={approaches} />

      <ComplexityBox
        timeComplexity={{
          value: 'O(n)',
          description: 'Each pointer moves at most n steps. Total work = O(n).',
        }}
        spaceComplexity={{
          value: 'O(1)',
          description: 'Only two pointers and a max variable are used.',
        }}
      />
    </SlideContainer>
  )
}

export default ContainerWithMostWater
