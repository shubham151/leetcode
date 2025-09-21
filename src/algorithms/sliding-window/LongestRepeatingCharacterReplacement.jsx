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

const LongestRepeatingCharacterReplacement = () => {
  const code = `/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let hmap = {};
    function increment(key) {
        if (hmap.hasOwnProperty(key)) {
            hmap[key]++;
        } else {
            hmap[key] = 1;
        }
    }

    function decrement(key) {
        hmap[key]--;
    }

    let max = 0, l = 0, r = 0, res = 0;
    const n = s.length;

    while (r < n) {
        increment(s[r]);
        max = Math.max(max, hmap[s[r]]);
        if ((max + k) < (r - l + 1)) {
            decrement(s[l]);
            l++;
        }
        res = Math.max(res, r - l + 1);
        r++;
    }
    return res;
};`

  const approaches = [
    {
      name: 'Sliding Window with HashMap',
      complexity: 'O(n) time, O(26) ≈ O(1) space',
      description:
        'Use two pointers and a frequency map to maintain the count of characters. Expand the window until it becomes invalid, then shrink from the left.',
    },
  ]

  const processingSteps = [
    '• Initialize left = 0, right = 0, res = 0, maxCount = 0',
    '• Expand right, increment frequency map',
    '• Update maxCount = max(maxCount, count of current char)',
    '• If window size > maxCount + k, shrink from left',
    '• Track res as max window length seen so far',
  ]

  return (
    <SlideContainer>
      <AlgorithmTitle title="424. Longest Repeating Character Replacement" />

      <StepsBox>
        <Step
          number={1}
          title="Initialize pointers and helpers"
          description="Use left, right, res, maxCount, and a frequency map to track window state."
        />
        <Step
          number={2}
          title="Expand window"
          description="Move the right pointer, incrementing the count of the character in the map."
        />
        <Step
          number={3}
          title="Validate window"
          description="If the window size exceeds maxCount + k, shrink it from the left."
        />
        <Step
          number={4}
          title="Update result"
          description="Track the largest valid window length as the answer."
        />
      </StepsBox>

      <IntuitionBox>
        <p>
          The key idea is that a valid substring can contain at most <Highlight>k</Highlight>{' '}
          characters that are not the most frequent character. We maintain the count of the most
          frequent character in the current window and ensure the window size never exceeds{' '}
          <Highlight>maxCount + k</Highlight>.
        </p>
      </IntuitionBox>

      <ExampleBox>
        <div>
          <Highlight>s = "AABABBA", k = 1</Highlight>
          <br />
          <Highlight>expected = 4</Highlight>
        </div>

        <ProcessingSteps
          title="Step-by-step execution:"
          steps={[
            "Right = 0 → 'A' → window = 'A' → res = 1",
            "Right = 1 → 'AA' → window valid → res = 2",
            "Right = 2 → 'AAB' → window valid → res = 3",
            "Right = 3 → 'AABA' → window valid → res = 4",
            "Right = 4 → 'AABAB' → invalid → shrink left → window 'ABAB'",
            'Max window length seen = 4',
          ]}
          result="4"
        />
      </ExampleBox>

      <CodeBlock code={code} />

      <ApproachBox approaches={approaches} />

      <ComplexityBox
        timeComplexity={{
          value: 'O(n)',
          description:
            'Each character is processed at most twice (once when added, once when removed).',
        }}
        spaceComplexity={{
          value: 'O(1)',
          description: 'The frequency map stores counts for at most 26 uppercase letters.',
        }}
      />
    </SlideContainer>
  )
}

export default LongestRepeatingCharacterReplacement
