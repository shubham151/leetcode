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

const SurroundedRegions = () => {
  const code = `/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    const queue = [];
    const m = board.length;
    const n = board[0].length;

    // Step 1: Collect border 'O's
    for (let i = 0; i < m; i++) {
        if (board[i][0] === 'O') queue.push([i, 0]);
        if (board[i][n - 1] === 'O') queue.push([i, n - 1]);
    }
    for (let j = 0; j < n; j++) {
        if (board[0][j] === 'O') queue.push([0, j]);
        if (board[m - 1][j] === 'O') queue.push([m - 1, j]);
    }

    function dfs(i, j) {
        if (i < 0 || j < 0 || i >= m || j >= n || board[i][j] !== 'O') return;
        board[i][j] = 'S'; // Mark safe
        dfs(i + 1, j);
        dfs(i - 1, j);
        dfs(i, j + 1);
        dfs(i, j - 1);
    }

    // Step 2: Mark all border-connected regions as safe
    while (queue.length > 0) {
        const [row, col] = queue.shift();
        dfs(row, col);
    }

    // Step 3: Flip remaining cells
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === 'S') board[i][j] = 'O';
            else board[i][j] = 'X';
        }
    }
};`;

  const approaches = [
    {
      name: "DFS from borders",
      complexity: "O(m×n) time, O(m×n) space",
      description:
        "Mark border-connected 'O's as safe, then flip the rest. Recursive DFS is straightforward.",
    },
    {
      name: "BFS from borders",
      complexity: "O(m×n) time, O(m×n) space",
      description:
        "Same idea as DFS but uses a queue to iteratively traverse border-connected 'O's.",
    },
  ];

  const processingSteps = [
    "• Identify all border 'O's and add to queue.",
    "• DFS/BFS from these to mark connected 'O's as safe (e.g., 'S').",
    "• Flip all remaining 'O's to 'X'.",
    "• Flip safe markers 'S' back to 'O'.",
  ];

  return (
    <SlideContainer>
      <AlgorithmTitle title="Surrounded Regions" />

      <StepsBox>
        <Step
          number={1}
          title="Find border 'O's"
          description="Collect all 'O's on the border into a queue"
        />
        <Step
          number={2}
          title="Mark safe regions"
          description="Use DFS/BFS to traverse and mark all 'O's connected to borders"
        />
        <Step
          number={3}
          title="Flip cells"
          description="Turn unmarked 'O's into 'X', and safe ones back to 'O'"
        />
      </StepsBox>

      <IntuitionBox>
        <p>
          Only <strong>'O's connected to the border</strong> can remain 'O'. Any
          other 'O's are trapped and must be flipped to 'X'. By marking
          border-connected regions first, we ensure only the surrounded ones get
          flipped.
        </p>
      </IntuitionBox>

      <ExampleBox title="Example Walkthrough">
        <div>
          <Highlight>
            board = [[X,X,X,X], [X,O,O,X], [X,X,O,X], [X,O,X,X]]
          </Highlight>
          <br />
          <Highlight>
            output = [[X,X,X,X], [X,X,X,X], [X,X,X,X], [X,O,X,X]]
          </Highlight>
          <br />
          <small style={{ color: "#a1a1a6" }}>
            The middle O’s are surrounded and flipped, border-connected remain.
          </small>
        </div>

        <ProcessingSteps
          title="Steps:"
          steps={processingSteps}
          result="Correctly flipped board"
        />
      </ExampleBox>

      <CodeBlock code={code} />

      <ApproachBox approaches={approaches} />

      <ComplexityBox
        timeComplexity={{
          value: "O(m × n)",
          description: "Each cell visited at most once",
        }}
        spaceComplexity={{
          value: "O(m × n)",
          description: "DFS stack/queue can hold all cells in worst case",
        }}
      />
    </SlideContainer>
  );
};

export default SurroundedRegions;
