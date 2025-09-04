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

const CloneGraph = () => {
  const code = `/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function(node) {
    if (!node) return null;

    const cloned = new Map();

    function dfs(currNode) {
        if (cloned.has(currNode.val)) {
            return cloned.get(currNode.val);
        }
        const newNode = new _Node(currNode.val);
        cloned.set(currNode.val, newNode);

        for (const neighbor of currNode.neighbors) {
            newNode.neighbors.push(dfs(neighbor));
        }

        return newNode;
    }

    return dfs(node);
};`;

  const approaches = [
    {
      name: "DFS (Depth-First Search)",
      complexity: "O(V+E) time, O(V) space",
      description:
        "Use recursion to traverse graph, clone each node and its neighbors. Maintain a map to avoid infinite cycles.",
    },
    {
      name: "BFS (Breadth-First Search)",
      complexity: "O(V+E) time, O(V) space",
      description:
        "Use a queue to clone nodes level by level. Keep a hash map of visited nodes.",
    },
  ];

  const processingSteps = [
    "• Start at node 1 → create clone with value 1.",
    "• Visit neighbors of 1: nodes 2 and 4.",
    "• DFS(2): create clone of node 2, explore neighbors.",
    "• DFS(4): create clone of node 4, explore neighbors.",
    "• Each neighbor links back to previously cloned nodes (avoiding duplication).",
    "• Final cloned graph mirrors structure of original graph.",
  ];

  return (
    <SlideContainer>
      <AlgorithmTitle title="Clone Graph" />

      <StepsBox>
        <Step
          number={1}
          title="Check base case"
          description="If input node is null, return null"
        />
        <Step
          number={2}
          title="Use hash map"
          description="Maintain a map from original node value → cloned node"
        />
        <Step
          number={3}
          title="DFS helper"
          description="Clone current node and recursively clone all its neighbors"
        />
        <Step
          number={4}
          title="Avoid cycles"
          description="If node already cloned, return from map (prevents infinite recursion)"
        />
        <Step
          number={5}
          title="Build connections"
          description="Push cloned neighbors into current cloned node"
        />
        <Step
          number={6}
          title="Return cloned graph"
          description="Return cloned root node after traversal"
        />
      </StepsBox>

      <IntuitionBox>
        <p>
          The problem is essentially{" "}
          <strong>deep copying a graph with cycles</strong>. Each node must be
          cloned once, and its neighbors must reference cloned versions rather
          than original nodes. The critical trick is using a{" "}
          <strong>hash map</strong> to remember already cloned nodes and avoid
          infinite loops in cyclic graphs.
        </p>
      </IntuitionBox>

      <ExampleBox title="Example Walkthrough">
        <div>
          <Highlight>
            Input graph (adjacency list):{" "}
            {"{1:[2,4], 2:[1,3], 3:[2,4], 4:[1,3]}"}
          </Highlight>
          <br />
          <Highlight>
            Output graph (deep clone):{" "}
            {"{1':[2',4'], 2':[1',3'], 3':[2',4'], 4':[1',3']}"}
          </Highlight>
        </div>

        <ProcessingSteps
          title="DFS Execution:"
          steps={processingSteps}
          result="Graph cloned successfully with identical structure"
        />
      </ExampleBox>

      <CodeBlock code={code} />

      <ApproachBox approaches={approaches} />

      <ComplexityBox
        timeComplexity={{
          value: "O(V + E)",
          description: "Each node and edge is visited once",
        }}
        spaceComplexity={{
          value: "O(V)",
          description: "Hash map to store cloned nodes + recursion stack",
        }}
      />
    </SlideContainer>
  );
};

export default CloneGraph;
