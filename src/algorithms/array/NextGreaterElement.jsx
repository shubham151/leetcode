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

const NextGreaterElement = () => {
  const code = `function nextGreaterElement(nums1, nums2) {
    const stack = [];
    const n = nums2.length - 1;
    const hmap = {};
    
    for(let i = n; i >= 0; i--) {
        hmap[nums2[i]] = -1;
        while(stack.length > 0 && stack[stack.length - 1] < nums2[i]) {
            stack.pop();
        }
        
        if(stack.length > 0) {
            hmap[nums2[i]] = stack[stack.length - 1];
        }
        
        stack.push(nums2[i]);
    }
    
    const result = [];
    for(const num of nums1) {
        result.push(hmap[num]);
    }
    
    return result;
}`;

  const approaches = [
    {
      name: "Brute Force",
      complexity: "O(n×m) time, O(1) space",
      description: "For each element in nums1, scan nums2 to find next greater",
    },
    {
      name: "Monotonic Stack",
      complexity: "O(n + m) time, O(n) space",
      description: "Preprocess nums2 with stack to build next greater mapping",
    },
  ];

  const processingSteps = [
    "• 2: stack=[], next=-1, stack=[2]",
    "• 4: stack=[2], pop 2, next=-1, stack=[4]",
    "• 3: stack=[4], next=4, stack=[4,3]",
    "• 1: stack=[4,3], next=3, stack=[4,3,1]",
  ];

  return (
    <SlideContainer>
      <AlgorithmTitle title="Next Greater Element Algorithm" />

      <StepsBox>
        <Step
          number={1}
          title="Traverse nums2 from right to left"
          description="using a stack to track potential next greater elements"
        />
        <Step
          number={2}
          title="Pop smaller elements"
          description="from stack top while current element is greater"
        />
        <Step
          number={3}
          title="Store mapping"
          description="in hashmap: current element → next greater element (or -1)"
        />
        <Step
          number={4}
          title="Push current element"
          description="onto stack for future comparisons"
        />
        <Step
          number={5}
          title="Build result array"
          description="by looking up each nums1 element in the hashmap"
        />
      </StepsBox>

      <IntuitionBox>
        <p>
          The key insight is to process the array from right to left,
          maintaining a stack of potential 'next greater' candidates. For each
          element, we remove smaller elements from the stack (they can never be
          the answer for current element), then the stack top becomes our next
          greater element.
        </p>
      </IntuitionBox>

      <ExampleBox>
        <div>
          <Highlight>nums2 = [1, 3, 4, 2]</Highlight>
          <br />
          <Highlight>nums1 = [4, 1, 2]</Highlight>
        </div>

        <ProcessingSteps
          title="Processing nums2 right-to-left:"
          steps={processingSteps}
          result="[-1, 3, -1]"
        />
      </ExampleBox>

      <CodeBlock code={code} />

      <ApproachBox approaches={approaches} />

      <ComplexityBox
        timeComplexity={{
          value: "O(n + m)",
          description: "n = nums2 length, m = nums1 length",
        }}
        spaceComplexity={{
          value: "O(n)",
          description: "Stack + HashMap storage",
        }}
      />
    </SlideContainer>
  );
};

export default NextGreaterElement;
