import React from 'react'
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

const LongestSubstringWithoutRepeatingCharacters = () => {
  const code = `/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let l = 0, r = 0;
    let n = s.length;
    let set = new Set();
    let max = 0;

    while (r < n) {
        if (set.has(s[r])) {
            while (set.has(s[r])) {
                set.delete(s[l]);
                l++;
            }
        }
        max = Math.max(max, r - l + 1);
        set.add(s[r]);
        r++;
    }

    return max;
};`

  const approaches = [
    {
      name: 'Brute Force',
      complexity: 'O(n^2) time, O(n) space',
      description: 'Check all substrings and use a set to determine if all characters are unique.',
    },
    {
      name: 'Optimal Sliding Window',
      complexity: 'O(n) time, O(n) space',
      description:
        'Use two pointers (left and right) with a set to maintain the current window of unique characters.',
    },
  ]

  const processingSteps = [
    '• Initialize left = 0, right = 0, set = {}, max = 0',
    '• Expand right pointer, adding characters to set',
    '• If duplicate found, shrink window from left until duplicate is removed',
    '• Update max length at each step',
    '• Return max at the end',
  ]

  return (
    <SlideContainer>
      <AlgorithmTitle title="3. Longest Substring Without Repeating Characters" />

      <StepsBox>
        <Step
          number={1}
          title="Initialize pointers"
          description="Set left and right pointers to 0, and use a Set to store unique characters."
        />
        <Step
          number={2}
          title="Expand window"
          description="Move the right pointer, adding characters into the Set."
        />
        <Step
          number={3}
          title="Handle duplicates"
          description="If a duplicate is found, increment left pointer and remove characters until duplicate is gone."
        />
        <Step
          number={4}
          title="Update max length"
          description="At each step, compute max length = max(max, right - left + 1)."
        />
      </StepsBox>

      <IntuitionBox>
        <p>
          The sliding window technique works because we only need to keep track of the current
          substring without duplicates. If a duplicate is encountered, we shrink the window until
          it’s valid again, ensuring each character is visited at most twice.
        </p>
      </IntuitionBox>

      <ExampleBox>
        <div>
          <Highlight>s = "abcabcbb"</Highlight>
          <br />
          <Highlight>expected = 3</Highlight>
        </div>

        <ProcessingSteps
          title="Step-by-step execution:"
          steps={[
            'Window "a" → length 1',
            'Expand → "ab" → length 2',
            'Expand → "abc" → length 3',
            'Duplicate "a" found, shrink → window becomes "bca"',
            'Continue expanding/shrinking, max length stays 3',
          ]}
          result="3"
        />
      </ExampleBox>

      <CodeBlock code={code} />

      <ApproachBox approaches={approaches} />

      <ComplexityBox
        timeComplexity={{
          value: 'O(n)',
          description:
            'Each character is visited at most twice (once by right pointer, once by left).',
        }}
        spaceComplexity={{
          value: 'O(n)',
          description: 'A set is used to store characters in the current substring window.',
        }}
      />
    </SlideContainer>
  )
}

export default LongestSubstringWithoutRepeatingCharacters
