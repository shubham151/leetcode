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

const WordDictionary = () => {
  const code = `class TrieNode {
    constructor() {
        this.children = new Map();
        this.isEnd = false;
    }
}

class WordDictionary {
    constructor() {
        this.root = new TrieNode();
    }
    
    addWord(word) {
        let node = this.root;
        
        for (const char of word) {
            if (!node.children.has(char)) {
                node.children.set(char, new TrieNode());
            }
            node = node.children.get(char);
        }
        
        node.isEnd = true;
    }
    
    search(word) {
        return this._dfs(this.root, 0, word);
    }
    
    _dfs(node, index, word) {
        // Base case: invalid node
        if (!node) return false;
        
        // Base case: reached end of word
        if (index === word.length) {
            return node.isEnd;
        }
        
        const char = word[index];
        
        if (char === '.') {
            // Wildcard: try all possible children
            for (const [key, childNode] of node.children) {
                if (this._dfs(childNode, index + 1, word)) {
                    return true;
                }
            }
            return false;
        } else {
            // Regular character: follow specific path
            const childNode = node.children.get(char);
            return this._dfs(childNode, index + 1, word);
        }
    }
}`;

  const approaches = [
    {
      name: "Array + Linear Search",
      complexity: "O(n*m) search, O(1) add",
      description:
        "Store words in array, search with wildcard matching for each word",
    },
    {
      name: "Trie + DFS (Optimal)",
      complexity: "O(n^m) worst case, O(m) best",
      description: "Trie structure with DFS for wildcard pattern matching",
    },
  ];

  const addWordSteps = [
    "• addWord('bad'):",
    "  - root → b → a → d (isEnd=true)",
    "• addWord('dad'):",
    "  - root → d → a → d (isEnd=true)",
    "• addWord('mad'):",
    "  - root → m → a → d (isEnd=true)",
    "• Dictionary now contains: ['bad', 'dad', 'mad']",
  ];

  const searchExactSteps = [
    "• search('pad') - looking for exact match:",
    "  - Start DFS at root, index=0, word='pad'",
    "  - char='p': no 'p' child at root → return false",
    "  - 'pad' not found in dictionary",
  ];

  const searchWildcardSteps = [
    "• search('.ad') - wildcard at position 0:",
    "  - Start DFS at root, index=0, word='.ad'",
    "  - char='.': try all children of root",
    "    - Try 'b': DFS(b_node, 1, '.ad')",
    "      - char='a': follow 'a' path → DFS(ba_node, 2, '.ad')",
    "      - char='d': follow 'd' path → DFS(bad_node, 3, '.ad')",
    "      - index==length && isEnd=true → return true",
    "  - Found match: 'bad' matches '.ad'",
  ];

  const searchComplexSteps = [
    "• search('b..') - multiple wildcards:",
    "  - DFS(root, 0, 'b..')",
    "  - char='b': follow 'b' path → DFS(b_node, 1, 'b..')",
    "  - char='.': try all children of b_node",
    "    - Try 'a': DFS(ba_node, 2, 'b..')",
    "    - char='.': try all children of ba_node",
    "      - Try 'd': DFS(bad_node, 3, 'b..')",
    "      - index==length && isEnd=true → return true",
    "  - Found match: 'bad' matches 'b..'",
  ];

  return (
    <SlideContainer>
      <AlgorithmTitle title="Design Add and Search Words Data Structure" />

      <StepsBox>
        <Step
          number={1}
          title="Design Trie structure"
          description="use TrieNode with Map for children and isEnd flag"
        />
        <Step
          number={2}
          title="Implement addWord()"
          description="standard trie insertion - create path and mark word end"
        />
        <Step
          number={3}
          title="Design DFS search helper"
          description="recursive function to handle both regular chars and wildcards"
        />
        <Step
          number={4}
          title="Handle base cases in DFS"
          description="check for null node and end of word conditions"
        />
        <Step
          number={5}
          title="Process wildcard character"
          description="when char is '.', recursively try all possible children"
        />
        <Step
          number={6}
          title="Process regular character"
          description="when char is specific, follow single path in trie"
        />
        <Step
          number={7}
          title="Implement search() method"
          description="call DFS helper starting from root with index 0"
        />
      </StepsBox>

      <IntuitionBox>
        <p>
          This problem extends the basic Trie with{" "}
          <strong>wildcard pattern matching</strong>. The key insight is using{" "}
          <strong>DFS (Depth-First Search)</strong> for the search operation.
          When we encounter a wildcard '.', we must explore{" "}
          <em>all possible paths</em> at that position, making it a branching
          search problem. For regular characters, we follow the standard trie
          path. The DFS naturally handles the backtracking needed for wildcard
          exploration.
        </p>
      </IntuitionBox>

      <ExampleBox title="Adding Words">
        <div>
          <Highlight>addWord("bad"), addWord("dad"), addWord("mad")</Highlight>
          <br />
          <small style={{ color: "#a1a1a6" }}>
            Building trie with three 3-letter words ending in 'ad'
          </small>
        </div>

        <ProcessingSteps
          title="Dictionary construction:"
          steps={addWordSteps}
          result="Trie built with shared 'ad' suffix structure"
        />
      </ExampleBox>

      <ExampleBox title="Exact Search (No Match)">
        <div>
          <Highlight>search("pad") - exact character matching</Highlight>
          <br />
          <small style={{ color: "#a1a1a6" }}>
            No wildcards, should return false since 'pad' not in dictionary
          </small>
        </div>

        <ProcessingSteps
          title="Exact search process:"
          steps={searchExactSteps}
          result="false (word not found)"
        />
      </ExampleBox>

      <ExampleBox title="Wildcard Search">
        <div>
          <Highlight>search(".ad") - wildcard at first position</Highlight>
          <br />
          <small style={{ color: "#a1a1a6" }}>
            '.' can match any character, should find 'bad', 'dad', or 'mad'
          </small>
        </div>

        <ProcessingSteps
          title="Wildcard search process:"
          steps={searchWildcardSteps}
          result="true (matches 'bad', 'dad', and 'mad')"
        />
      </ExampleBox>

      <ExampleBox title="Multiple Wildcards">
        <div>
          <Highlight>search("b..") - multiple wildcard positions</Highlight>
          <br />
          <small style={{ color: "#a1a1a6" }}>
            First char must be 'b', last two can be anything
          </small>
        </div>

        <ProcessingSteps
          title="Complex wildcard search:"
          steps={searchComplexSteps}
          result="true (matches 'bad')"
        />
      </ExampleBox>

      <CodeBlock code={code} />

      <div className="section">
        <div className="section-title">DFS Recursion Tree</div>
        <div className="processing-steps">
          <div
            style={{
              marginBottom: "16px",
              color: "#007aff",
              fontWeight: "bold",
            }}
          >
            search(".ad") - DFS exploration tree:
          </div>
          <div
            style={{
              marginLeft: "20px",
              marginBottom: "12px",
              fontFamily: "SF Mono, Monaco, monospace",
            }}
          >
            <span style={{ color: "#a1a1a6" }}>DFS(root, 0, ".ad")</span>
            <br />
            &nbsp;&nbsp;├── try 'b':{" "}
            <span style={{ color: "#34c759" }}>DFS(b_node, 1, ".ad")</span>
            <br />
            &nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;└── 'a':{" "}
            <span style={{ color: "#34c759" }}>DFS(ba_node, 2, ".ad")</span>
            <br />
            &nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── 'd':{" "}
            <span style={{ color: "#ff3b30" }}>
              DFS(bad_node, 3, ".ad") → TRUE
            </span>
            <br />
            &nbsp;&nbsp;├── try 'd':{" "}
            <span style={{ color: "#34c759" }}>DFS(d_node, 1, ".ad")</span>
            <br />
            &nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;└── 'a':{" "}
            <span style={{ color: "#34c759" }}>DFS(da_node, 2, ".ad")</span>
            <br />
            &nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── 'd':{" "}
            <span style={{ color: "#ff3b30" }}>
              DFS(dad_node, 3, ".ad") → TRUE
            </span>
            <br />
            &nbsp;&nbsp;└── try 'm':{" "}
            <span style={{ color: "#34c759" }}>DFS(m_node, 1, ".ad")</span>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── 'a':{" "}
            <span style={{ color: "#34c759" }}>DFS(ma_node, 2, ".ad")</span>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── 'd':{" "}
            <span style={{ color: "#ff3b30" }}>
              DFS(mad_node, 3, ".ad") → TRUE
            </span>
          </div>
          <div style={{ color: "#ff9500", fontWeight: "bold" }}>
            Any TRUE result propagates up → final result: TRUE
          </div>
        </div>
      </div>

      <div className="section">
        <div className="section-title">Algorithm Complexity Analysis</div>
        <div className="processing-steps">
          <div
            style={{
              marginBottom: "12px",
              color: "#007aff",
              fontWeight: "bold",
            }}
          >
            Time Complexity Breakdown:
          </div>
          <div style={{ marginLeft: "20px", marginBottom: "12px" }}>
            <span style={{ color: "#34c759" }}>Best Case:</span> O(m) - no
            wildcards, direct path
          </div>
          <div style={{ marginLeft: "20px", marginBottom: "12px" }}>
            <span style={{ color: "#ff9500" }}>Average Case:</span> O(n^k × m) -
            k wildcards, n avg branching
          </div>
          <div style={{ marginLeft: "20px", marginBottom: "16px" }}>
            <span style={{ color: "#ff3b30" }}>Worst Case:</span> O(26^m) - all
            wildcards, full alphabet
          </div>

          <div
            style={{
              marginBottom: "12px",
              color: "#007aff",
              fontWeight: "bold",
            }}
          >
            Space Complexity:
          </div>
          <div
            style={{
              marginLeft: "20px",
              fontFamily: "SF Mono, Monaco, monospace",
            }}
          >
            Recursion depth: O(m) - word length
            <br />
            Trie storage: O(ALPHABET_SIZE × N × M) - all words stored
          </div>
        </div>
      </div>

      <div className="section">
        <div className="section-title">Key Design Decisions</div>
        <ul className="list">
          <li className="list-item">
            <strong>Map vs Array:</strong> Using Map allows any character and
            cleaner API
          </li>
          <li className="list-item">
            <strong>DFS vs BFS:</strong> DFS naturally handles backtracking for
            wildcards
          </li>
          <li className="list-item">
            <strong>Helper Method:</strong> Separate _dfs() keeps clean public
            interface
          </li>
          <li className="list-item">
            <strong>Index Parameter:</strong> Tracks position in word during
            recursion
          </li>
          <li className="list-item">
            <strong>Early Returns:</strong> Optimize by returning immediately on
            first match
          </li>
        </ul>
      </div>

      <ApproachBox approaches={approaches} />

      <ComplexityBox
        timeComplexity={{
          value: "O(m) to O(26^m)",
          description:
            "m = word length. Best: no wildcards. Worst: all wildcards with full alphabet",
        }}
        spaceComplexity={{
          value: "O(m + ALPHABET_SIZE × N × M)",
          description:
            "Recursion depth + trie storage for N words of average length M",
        }}
      />
    </SlideContainer>
  );
};

export default WordDictionary;
