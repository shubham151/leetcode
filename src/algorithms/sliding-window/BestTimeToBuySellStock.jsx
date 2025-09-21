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

const BestTimeToBuySellStock = () => {
  const code = `/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minPrice = prices[0];
    let maxProfit = 0;
    for (const price of prices) {
        maxProfit = Math.max(maxProfit, price - minPrice);
        minPrice = Math.min(minPrice, price);
    }
    return maxProfit;
};`

  const approaches = [
    {
      name: 'Brute Force',
      complexity: 'O(n^2) time, O(1) space',
      description:
        'Check every pair (buy, sell) and track the maximum profit. Inefficient for large arrays.',
    },
    {
      name: 'Optimal (One Pass)',
      complexity: 'O(n) time, O(1) space',
      description: 'Track the minimum price so far and update the maximum profit for each price.',
    },
  ]

  const processingSteps = [
    '• Initialize minPrice = prices[0], maxProfit = 0',
    '• For each price, update maxProfit = max(maxProfit, price - minPrice)',
    '• Update minPrice = min(minPrice, price)',
    '• Return maxProfit at the end',
  ]

  return (
    <SlideContainer>
      <AlgorithmTitle title="121. Best Time to Buy and Sell Stock" />

      <StepsBox>
        <Step
          number={1}
          title="Initialize tracking variables"
          description="Set minPrice to the first price, and maxProfit to 0."
        />
        <Step
          number={2}
          title="Iterate through prices"
          description="For each price, compute potential profit and update maxProfit."
        />
        <Step
          number={3}
          title="Update minPrice"
          description="Keep track of the lowest price seen so far."
        />
        <Step
          number={4}
          title="Return result"
          description="At the end, return the maximum profit found."
        />
      </StepsBox>

      <IntuitionBox>
        <p>
          The key idea is to buy at the lowest price seen so far and sell at the current price. By
          maintaining the running minimum and comparing each difference, we can compute the optimal
          profit in one pass.
        </p>
      </IntuitionBox>

      <ExampleBox>
        <div>
          <Highlight>prices = [7,1,5,3,6,4]</Highlight>
          <br />
          <Highlight>expected = 5</Highlight>
        </div>

        <ProcessingSteps
          title="Step-by-step execution:"
          steps={[
            'Start: minPrice = 7, maxProfit = 0',
            'Price = 1 → update minPrice = 1',
            'Price = 5 → profit = 5 - 1 = 4 → maxProfit = 4',
            'Price = 3 → profit = 2 → maxProfit = 4',
            'Price = 6 → profit = 6 - 1 = 5 → maxProfit = 5',
            'Price = 4 → profit = 3 → maxProfit = 5',
          ]}
          result="5"
        />
      </ExampleBox>

      <CodeBlock code={code} />

      <ApproachBox approaches={approaches} />

      <ComplexityBox
        timeComplexity={{
          value: 'O(n)',
          description:
            'We loop through the prices array once, updating minPrice and maxProfit in constant time.',
        }}
        spaceComplexity={{
          value: 'O(1)',
          description:
            'We only use two variables (minPrice and maxProfit) regardless of input size.',
        }}
      />
    </SlideContainer>
  )
}

export default BestTimeToBuySellStock
