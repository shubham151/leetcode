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

const NumberOfIslands = () => {
  const code = `function numIslands(grid) {
    const m = grid.length;
    const n = grid[0].length;

    function dfs(i, j) {
        // Base case: out of bounds or water
        if (i < 0 || j < 0 || i >= m || j >= n || grid[i][j] === "0") {
            return;
        }
        
        // Mark current cell as visited by setting to "0"
        grid[i][j] = "0";
        
        // Explore all 4 adjacent cells
        dfs(i + 1, j); // down
        dfs(i - 1, j); // up
        dfs(i, j + 1); // right
        dfs(i, j - 1); // left
    }
    
    let islandCount = 0;
    
    // Iterate through every cell in the grid
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === "1") {
                // Found unvisited land - start DFS to mark entire island
                dfs(i, j);
                islandCount++;
            }
        }
    }
    
    return islandCount;
}`;

  const approaches = [
    {
      name: "DFS (Depth-First Search)",
      complexity: "O(m×n) time, O(m×n) space",
      description:
        "Use DFS to mark connected land cells, count number of DFS calls needed",
    },
    {
      name: "BFS (Breadth-First Search)",
      complexity: "O(m×n) time, O(min(m,n)) space",
      description: "Use BFS with queue to explore islands level by level",
    },
    {
      name: "Union-Find",
      complexity: "O(m×n×α(m×n)) time, O(m×n) space",
      description:
        "Use disjoint set data structure to group connected components",
    },
  ];

  const processingSteps = [
    "• Initial grid state (1=land, 0=water):",
    "  [['1','1','1','1','0'],",
    "   ['1','1','0','1','0'],",
    "   ['1','1','0','0','0'],",
    "   ['0','0','0','0','0']]",
    "• (0,0): found '1' → start DFS, mark connected cells as '0'",
    "  - DFS marks: (0,0)→(0,1)→(0,2)→(0,3)→(1,0)→(1,1)→(2,0)→(2,1)",
    "  - Island #1 fully explored → islandCount = 1",
    "• Continue scanning: (1,3): found '1' → start DFS",
    "  - DFS marks: (1,3) only (isolated land cell)",
    "  - Island #2 found → islandCount = 2",
    "• Rest of grid is '0' → final count = 2",
  ];

  const singleIslandSteps = [
    "• Grid: [['1','1','0'],",
    "         ['0','1','0'],",
    "         ['0','0','0']]",
    "• (0,0): found '1' → start DFS",
    "  - Mark (0,0) as '0', explore neighbors",
    "  - Go to (0,1): mark as '0', explore neighbors",
    "  - Go to (1,1): mark as '0', explore neighbors",
    "  - All connected land cells marked → islandCount = 1",
    "• Continue scanning: only '0's remain → final count = 1",
  ];

  return (
    <SlideContainer>
      <AlgorithmTitle title="Number of Islands" />

      <StepsBox>
        <Step
          number={1}
          title="Get grid dimensions"
          description="store m = rows, n = columns for boundary checking"
        />
        <Step
          number={2}
          title="Define DFS helper function"
          description="recursive function to explore and mark connected land cells"
        />
        <Step
          number={3}
          title="Handle DFS base cases"
          description="return if out of bounds or current cell is water ('0')"
        />
        <Step
          number={4}
          title="Mark current cell as visited"
          description="set grid[i][j] = '0' to avoid revisiting (sink the land)"
        />
        <Step
          number={5}
          title="Explore 4 directions"
          description="recursively call DFS on up, down, left, right neighbors"
        />
        <Step
          number={6}
          title="Iterate through entire grid"
          description="check each cell (i,j) for unvisited land"
        />
        <Step
          number={7}
          title="Count islands"
          description="when '1' found, call DFS and increment island counter"
        />
        <Step
          number={8}
          title="Return total count"
          description="return final island count after processing all cells"
        />
      </StepsBox>

      <IntuitionBox>
        <p>
          The key insight is that an{" "}
          <strong>island is a connected component</strong> of land cells. We can
          use <strong>DFS (Depth-First Search)</strong> to explore all connected
          land cells starting from any unvisited '1'. The algorithm "sinks" each
          island by marking all its cells as '0' during DFS traversal, ensuring
          we don't double-count. Each DFS call represents discovering one
          complete island, so we simply count how many times we initiate a DFS.
        </p>
      </IntuitionBox>

      <ExampleBox title="Multiple Islands">
        <div>
          <Highlight>
            grid =
            [["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]
          </Highlight>
          <br />
          <Highlight>expected output = 2</Highlight>
          <br />
          <small style={{ color: "#a1a1a6" }}>
            Two separate islands: large connected component + isolated cell
          </small>
        </div>

        <ProcessingSteps
          title="Step-by-step execution:"
          steps={processingSteps}
          result="2 (two distinct islands found)"
        />
      </ExampleBox>

      <ExampleBox title="Single Connected Island">
        <div>
          <Highlight>
            grid = [["1","1","0"],["0","1","0"],["0","0","0"]]
          </Highlight>
          <br />
          <Highlight>expected output = 1</Highlight>
          <br />
          <small style={{ color: "#a1a1a6" }}>
            All '1' cells are connected through adjacent cells
          </small>
        </div>

        <ProcessingSteps
          title="Step-by-step execution:"
          steps={singleIslandSteps}
          result="1 (single connected island)"
        />
      </ExampleBox>

      <CodeBlock code={code} />

      <div className="section">
        <div className="section-title">DFS Traversal Visualization</div>
        <div className="processing-steps">
          <div
            style={{
              marginBottom: "16px",
              color: "#007aff",
              fontWeight: "bold",
            }}
          >
            Island Sinking Process:
          </div>
          <div style={{ marginBottom: "12px" }}>
            <span style={{ color: "#34c759" }}>Initial State:</span>
          </div>
          <div
            style={{
              marginLeft: "20px",
              marginBottom: "12px",
              fontFamily: "SF Mono, Monaco, monospace",
            }}
          >
            [['1', '1', '0'],
            <br />
            &nbsp;['0', '1', '0'],
            <br />
            &nbsp;['0', '0', '0']]
          </div>
          <div style={{ marginBottom: "12px" }}>
            <span style={{ color: "#ff9500" }}>After DFS from (0,0):</span>
          </div>
          <div
            style={{
              marginLeft: "20px",
              marginBottom: "12px",
              fontFamily: "SF Mono, Monaco, monospace",
            }}
          >
            [['0', '0', '0'], ← marked as visited
            <br />
            &nbsp;['0', '0', '0'], ← marked as visited
            <br />
            &nbsp;['0', '0', '0']]
          </div>
          <div style={{ color: "#ff3b30", fontWeight: "bold" }}>
            Entire island "sunk" in one DFS call → count = 1
          </div>
        </div>
      </div>

      <div className="section">
        <div className="section-title">Connected Component Theory</div>
        <div className="processing-steps">
          <div
            style={{
              marginBottom: "12px",
              color: "#007aff",
              fontWeight: "bold",
            }}
          >
            Graph Theory Perspective:
          </div>
          <div style={{ marginLeft: "20px", marginBottom: "12px" }}>
            • Grid cells are <strong>vertices</strong> in a graph
          </div>
          <div style={{ marginLeft: "20px", marginBottom: "12px" }}>
            • Adjacent land cells are connected by <strong>edges</strong>
          </div>
          <div style={{ marginLeft: "20px", marginBottom: "12px" }}>
            • Each island is a <strong>connected component</strong>
          </div>
          <div style={{ marginLeft: "20px", marginBottom: "16px" }}>
            • DFS explores one complete connected component per call
          </div>

          <div
            style={{
              marginBottom: "12px",
              color: "#ff9500",
              fontWeight: "bold",
            }}
          >
            Adjacency Definition:
          </div>
          <div
            style={{
              marginLeft: "20px",
              fontFamily: "SF Mono, Monaco, monospace",
            }}
          >
            4-directional: up, down, left, right
            <br />
            Diagonal connections are NOT considered adjacent
          </div>
        </div>
      </div>

      <div className="section">
        <div className="section-title">Edge Cases & Variations</div>
        <ul className="list">
          <li className="list-item">
            <strong>All Water:</strong> Grid of all '0's → return 0 islands
          </li>
          <li className="list-item">
            <strong>All Land:</strong> Grid of all '1's → return 1 island (all
            connected)
          </li>
          <li className="list-item">
            <strong>Single Cell:</strong> [["1"]] → return 1, [["0"]] → return 0
          </li>
          <li className="list-item">
            <strong>Diagonal Only:</strong> Adjacent diagonally but not
            4-directionally → separate islands
          </li>
          <li className="list-item">
            <strong>Large Grid:</strong> Algorithm scales to large grids
            efficiently
          </li>
          <li className="list-item">
            <strong>Modification:</strong> Could use visited array instead of
            modifying input grid
          </li>
        </ul>
      </div>

      <ApproachBox approaches={approaches} />

      <ComplexityBox
        timeComplexity={{
          value: "O(m × n)",
          description: "Visit each cell at most once. m=rows, n=columns",
        }}
        spaceComplexity={{
          value: "O(m × n)",
          description:
            "Worst case recursion depth when entire grid is one island",
        }}
      />
    </SlideContainer>
  );
};

export default NumberOfIslands;
