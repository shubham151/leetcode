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

const ValidPalindrome = () => {
  const code = `/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    function isAlphaNumeric(char) {
        const code = char.charCodeAt(0);
        return (
            (code >= 48 && code <= 57) || // 0-9
            (code >= 97 && code <= 122)   // a-z
        );
    }

    let l = 0, r = s.length - 1;
    while (l < r) {
        let left = s[l].toLowerCase();
        while (l < r && !isAlphaNumeric(left)) {
            l++;
            left = s[l].toLowerCase();
        }

        let right = s[r].toLowerCase();
        while (l < r && !isAlphaNumeric(right)) {
            r--;
            right = s[r].toLowerCase();
        }

        if (left !== right) return false;
        l++;
        r--;
    }

    return true;
};`

  const approaches = [
    {
      name: 'Two pointers (left and right)',
      complexity: 'O(n)',
      description:
        'Move inward skipping non-alphanumeric characters. Compare lowercase left and right characters.',
    },
    {
      name: 'Filter and reverse',
      complexity: 'O(n)',
      description:
        'Preprocess string into only lowercase alphanumerics, then check if it equals its reverse. Simpler but uses extra space.',
    },
  ]

  const processingSteps = [
    'Initialize two pointers: left at 0, right at end.',
    'Skip characters until both point to alphanumeric chars.',
    'Compare lowercased chars. If mismatch, return false.',
    'Move both pointers inward and continue.',
    'Return true if all comparisons succeed.',
  ]

  return (
    <SlideContainer>
      <AlgorithmTitle title="Valid Palindrome" />

      <StepsBox>
        <Step
          number={1}
          title="Normalize string"
          description="Ignore spaces, punctuation, and case sensitivity."
        />
        <Step
          number={2}
          title="Use two pointers"
          description="Check left and right characters until they meet."
        />
        <Step
          number={3}
          title="Return result"
          description="If all matches succeed, the string is a palindrome."
        />
      </StepsBox>

      <IntuitionBox>
        <p>
          A palindrome reads the same forward and backward. Using{' '}
          <Highlight>two pointers</Highlight> avoids extra memory and allows linear-time comparison
          while skipping non-alphanumeric characters.
        </p>
      </IntuitionBox>

      <ExampleBox title="Example Walkthrough">
        <div>
          <Highlight>Input: "A man, a plan, a canal: Panama"</Highlight>
          <br />
          Filtered = "amanaplanacanalpanama"
          <br />
          Forward and backward are identical → <Highlight>return true</Highlight>.
        </div>
        <ProcessingSteps
          title="Two Pointer Check"
          steps={processingSteps}
          result="All characters matched → palindrome"
        />
      </ExampleBox>

      <CodeBlock code={code} />

      <ApproachBox approaches={approaches} />

      <ComplexityBox
        timeComplexity={{
          value: 'O(n)',
          description: 'Scan each character at most once.',
        }}
        spaceComplexity={{
          value: 'O(1)',
          description: 'Constant extra space for pointers.',
        }}
      />
    </SlideContainer>
  )
}

export default ValidPalindrome
