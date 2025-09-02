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

const MaxAreaOfIsland = () => {
  const code = `/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    const m = grid.length;
    const n = grid[0].length;

    function dfs(i, j) {
        if (i < 0 || j < 0 || i >= m || j >= n || grid[i][j] === 0)
            return 0;

        // Mark visited
        grid[i][j] = 0;

        // Count current + neighbors
        return 1 +
            dfs(i + 1, j) +
            dfs(i - 1, j) +
            dfs(i, j + 1) +
            dfs(i, j - 1);
    }

    let maxArea = 0;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                const area = dfs(i, j);
                maxArea = Math.max(maxArea, area);
            }
        }
    }

    return maxArea;
};`;

  const approaches = [
    {
      name: "DFS (Depth-First Search)",
      complexity: "O(m×n) time, O(m×n) space",
      description:
        "Explore each island recursively, compute area by summing connected cells.",
    },
    {
      name: "BFS (Breadth-First Search)",
      complexity: "O(m×n) time, O(m×n) space",
      description:
        "Use a queue to iteratively count connected land cells and update max area.",
    },
    {
      name: "Union-Find",
      complexity: "O(m×n×α(m×n)) time, O(m×n) space",
      description:
        "Union all connected land cells and track maximum component size.",
    },
  ];

  const processingSteps = [
    "• Start scanning the grid cell by cell.",
    "• (0,0) = 0 → skip.",
    "• (0,1) = 0 → skip.",
    "• (1,2) = 1 → found land → start DFS.",
    "  - DFS marks connected land cells and counts area = 3.",
    "  - Update maxArea = 3.",
    "• Continue scanning until all cells are visited.",
    "• Next island area = 4 → update maxArea = 4.",
    "• Final result: maxArea = 4.",
  ];

  return (
    <SlideContainer>
      <AlgorithmTitle title="Max Area of Island" />

      <StepsBox>
        <Step
          number={1}
          title="Get grid dimensions"
          description="store m = rows, n = columns for boundary checks"
        />
        <Step
          number={2}
          title="Define DFS helper"
          description="explore connected land cells and return total area"
        />
        <Step
          number={3}
          title="Handle DFS base case"
          description="stop if out of bounds or cell is water (0)"
        />
        <Step
          number={4}
          title="Mark visited"
          description="set grid[i][j] = 0 to avoid revisiting same land"
        />
        <Step
          number={5}
          title="Count area"
          description="sum 1 (current cell) + recursive results from neighbors"
        />
        <Step
          number={6}
          title="Iterate grid"
          description="when land is found, compute island area via DFS"
        />
        <Step
          number={7}
          title="Track max area"
          description="update global maxArea after each island"
        />
        <Step
          number={8}
          title="Return result"
          description="return the largest island area found"
        />
      </StepsBox>

      <IntuitionBox>
        <p>
          The key insight is that{" "}
          <strong>
            area of an island is just the count of connected land cells
          </strong>
          . We can use DFS or BFS to explore each island. For every unvisited
          land cell, start a traversal, mark all connected cells as visited, and
          return the area. Keep updating a global maximum as we go.
        </p>
      </IntuitionBox>

      <ExampleBox title="Example Walkthrough">
        <div>
          <Highlight>
            grid = [[0,0,1,0,0], [0,1,1,1,0], [0,0,1,0,0], [1,0,0,0,0]]
          </Highlight>
          <br />
          <Highlight>expected output = 5</Highlight>
          <br />
          <small style={{ color: "#a1a1a6" }}>
            Largest island consists of 5 connected cells in the middle
          </small>
        </div>

        <ProcessingSteps
          title="Step-by-step execution:"
          steps={processingSteps}
          result="5 (largest island area)"
        />
      </ExampleBox>

      <CodeBlock code={code} />

      <ApproachBox approaches={approaches} />

      <ComplexityBox
        timeComplexity={{
          value: "O(m × n)",
          description: "Every cell is visited at most once",
        }}
        spaceComplexity={{
          value: "O(m × n)",
          description:
            "DFS recursion stack in worst case (all land connected). BFS uses queue of similar size",
        }}
      />
    </SlideContainer>
  );
};

export default MaxAreaOfIsland;
