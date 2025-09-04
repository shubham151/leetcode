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

const OrangesRotting = () => {
  const code = `/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
    const queue = [];
    const m = grid.length;
    const n = grid[0].length;
    let fresh = 0;

    // Step 1: Initialize queue with rotten oranges
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 2) {
                queue.push([i, j]);
            } else if (grid[i][j] === 1) {
                fresh++;
            }
        }
    }

    function addRotten(i, j) {
        if (i < 0 || j < 0 || i >= m || j >= n || grid[i][j] !== 1) return;
        grid[i][j] = 2;
        fresh--;
        queue.push([i, j]);
    }

    let minutes = 0;

    // Step 2: BFS level by level
    while (queue.length > 0) {
        let qLen = queue.length;
        minutes++;
        while (qLen > 0) {
            const [row, col] = queue.shift();
            addRotten(row + 1, col);
            addRotten(row - 1, col);
            addRotten(row, col + 1);
            addRotten(row, col - 1);
            qLen--;
        }
    }

    return fresh === 0 ? Math.max(0, minutes - 1) : -1;
};`;

  const approaches = [
    {
      name: "BFS (Multi-source Breadth-First Search)",
      complexity: "O(m×n) time, O(m×n) space",
      description:
        "Treat all initially rotten oranges as BFS sources. Spread rotting in waves, tracking minutes as BFS levels.",
    },
    {
      name: "DFS (not practical)",
      complexity: "O(m×n) time, O(m×n) space",
      description:
        "DFS can simulate spread, but harder to track minimum minutes. BFS is more natural here.",
    },
  ];

  const processingSteps = [
    "• Count fresh oranges and collect all initially rotten ones in queue.",
    "• Start BFS: each level = 1 minute of rotting spread.",
    "• For each rotten orange, rot its fresh neighbors (turn 1 → 2) and enqueue them.",
    "• Continue until queue is empty.",
    "• If fresh = 0, return elapsed minutes; else return -1.",
  ];

  return (
    <SlideContainer>
      <AlgorithmTitle title="Rotting Oranges" />

      <StepsBox>
        <Step
          number={1}
          title="Initialize queue"
          description="Add all rotten oranges (value 2) to queue, count fresh ones"
        />
        <Step
          number={2}
          title="BFS spread"
          description="Each round of BFS = 1 minute. Rot neighbors of current rotten oranges"
        />
        <Step
          number={3}
          title="Update state"
          description="Change fresh → rotten, decrement fresh count, enqueue new rotten cells"
        />
        <Step
          number={4}
          title="Track time"
          description="Increment minutes after each BFS level"
        />
        <Step
          number={5}
          title="Finish"
          description="If fresh = 0, return minutes-1; otherwise return -1"
        />
      </StepsBox>

      <IntuitionBox>
        <p>
          This problem is essentially a{" "}
          <strong>multi-source BFS in a grid</strong>. All initially rotten
          oranges rot their neighbors simultaneously each minute, like a wave
          spreading outward. The minimum minutes equals the number of BFS levels
          needed until no fresh orange remains.
        </p>
      </IntuitionBox>

      <ExampleBox title="Example Walkthrough">
        <div>
          <Highlight>grid = [[2,1,1],[1,1,0],[0,1,1]]</Highlight>
          <br />
          <Highlight>expected output = 4</Highlight>
          <br />
          <small style={{ color: "#a1a1a6" }}>
            All fresh oranges rot after 4 minutes
          </small>
        </div>

        <ProcessingSteps
          title="Step-by-step BFS execution:"
          steps={processingSteps}
          result="4 minutes"
        />
      </ExampleBox>

      <CodeBlock code={code} />

      <ApproachBox approaches={approaches} />

      <ComplexityBox
        timeComplexity={{
          value: "O(m × n)",
          description: "Each cell processed once",
        }}
        spaceComplexity={{
          value: "O(m × n)",
          description: "Queue can hold all cells in worst case",
        }}
      />
    </SlideContainer>
  );
};

export default OrangesRotting;
