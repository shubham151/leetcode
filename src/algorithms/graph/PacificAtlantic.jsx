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

const PacificAtlantic = () => {
  const code = `/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function (heights) {
    const m = heights.length;
    const n = heights[0].length;
    const pac = new Set();
    const atl = new Set();

    function dfs(i, j, visited, prevHeight) {
        if (i < 0 || j < 0 || i >= m || j >= n || visited.has(\`\${i}-\${j}\`) || heights[i][j] < prevHeight) {
            return;
        }
        visited.add(\`\${i}-\${j}\`);
        dfs(i + 1, j, visited, heights[i][j]);
        dfs(i - 1, j, visited, heights[i][j]);
        dfs(i, j + 1, visited, heights[i][j]);
        dfs(i, j - 1, visited, heights[i][j]);
    }

    // Pacific touches left and top borders
    for (let i = 0; i < m; i++) {
        dfs(i, 0, pac, heights[i][0]);
        dfs(i, n - 1, atl, heights[i][n - 1]);
    }

    // Atlantic touches right and bottom borders
    for (let j = 0; j < n; j++) {
        dfs(0, j, pac, heights[0][j]);
        dfs(m - 1, j, atl, heights[m - 1][j]);
    }

    const result = [];
    for (const cell of pac) {
        if (atl.has(cell)) {
            result.push(cell.split("-").map(Number));
        }
    }
    return result;
};`;

  const approaches = [
    {
      name: "DFS from ocean borders",
      complexity: "O(m×n) time, O(m×n) space",
      description:
        "Run DFS from all cells adjacent to Pacific and Atlantic borders, tracking reachable cells. Intersection = result.",
    },
    {
      name: "BFS (alternative)",
      complexity: "O(m×n) time, O(m×n) space",
      description:
        "BFS from ocean-border cells spreading inward. Works similarly but iterative.",
    },
  ];

  const processingSteps = [
    "• Pacific = cells reachable from left/top edges.",
    "• Atlantic = cells reachable from right/bottom edges.",
    "• Run DFS/BFS from these edges, moving only to equal or higher heights.",
    "• Collect intersection of reachable cells from both oceans.",
  ];

  return (
    <SlideContainer>
      <AlgorithmTitle title="Pacific Atlantic Water Flow" />

      <StepsBox>
        <Step
          number={1}
          title="Setup"
          description="Create sets for Pacific and Atlantic reachable cells"
        />
        <Step
          number={2}
          title="DFS/BFS from borders"
          description="Traverse from ocean-border cells inward, only moving uphill or flat"
        />
        <Step
          number={3}
          title="Track reachability"
          description="Mark visited cells reachable from each ocean"
        />
        <Step
          number={4}
          title="Find intersection"
          description="Cells visited by both DFS runs are added to result"
        />
      </StepsBox>

      <IntuitionBox>
        <p>
          Water can only flow from higher to lower/equal heights. Instead of
          starting from each cell and checking if it reaches an ocean,{" "}
          <strong>reverse the problem</strong>: start from the oceans and move
          inward, only climbing uphill. The intersection of Pacific-reachable
          and Atlantic-reachable cells gives the answer.
        </p>
      </IntuitionBox>

      <ExampleBox title="Example Walkthrough">
        <div>
          <Highlight>
            heights = [[1,2,2,3,5], [3,2,3,4,4], [2,4,5,3,1], [6,7,1,4,5],
            [5,1,1,2,4]]
          </Highlight>
          <br />
          <Highlight>
            output = [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]
          </Highlight>
          <br />
          <small style={{ color: "#a1a1a6" }}>
            These coordinates can reach both oceans.
          </small>
        </div>

        <ProcessingSteps
          title="Step-by-step idea:"
          steps={processingSteps}
          result="Cells flowing to both oceans"
        />
      </ExampleBox>

      <CodeBlock code={code} />

      <ApproachBox approaches={approaches} />

      <ComplexityBox
        timeComplexity={{
          value: "O(m × n)",
          description: "Each cell visited at most twice (once for each ocean)",
        }}
        spaceComplexity={{
          value: "O(m × n)",
          description: "Visited sets store reachable cells",
        }}
      />
    </SlideContainer>
  );
};

export default PacificAtlantic;
