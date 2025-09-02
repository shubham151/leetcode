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

const TrieDataStructure = () => {
  const code = `class TrieNode {
    constructor() {
        this.children = new Map();
        this.isEnd = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }
    
    insert(word) {
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
        let node = this.root;
        
        for (const char of word) {
            if (!node.children.has(char)) {
                return false;
            }
            node = node.children.get(char);
        }
        
        return node.isEnd;
    }
    
    startsWith(prefix) {
        let node = this.root;
        
        for (const char of prefix) {
            if (!node.children.has(char)) {
                return false;
            }
            node = node.children.get(char);
        }
        
        return true;
    }
}`;

  const approaches = [
    {
      name: "Array/Set for Dictionary",
      complexity: "O(n*m) time for operations",
      description: "Store words in array/set, linear search for each operation",
    },
    {
      name: "Hash Table",
      complexity: "O(1) exact search, O(n*m) prefix",
      description: "Fast exact match but inefficient for prefix operations",
    },
    {
      name: "Trie (Optimal)",
      complexity: "O(m) for all operations",
      description:
        "Tree structure optimized for string operations and prefix matching",
    },
  ];

  const insertSteps = [
    "• Insert 'cat':",
    "  - Start at root, add 'c' → new node",
    "  - From 'c' node, add 'a' → new node",
    "  - From 'a' node, add 't' → new node, mark isEnd=true",
    "• Insert 'car':",
    "  - 'c' exists, move to 'c' node",
    "  - 'a' exists, move to 'a' node",
    "  - Add 'r' → new node, mark isEnd=true",
    "• Insert 'card':",
    "  - Follow path 'c'→'a'→'r' (all exist)",
    "  - Add 'd' → new node, mark isEnd=true",
  ];

  const searchSteps = [
    "• Search 'car':",
    "  - 'c' exists → move to 'c' node",
    "  - 'a' exists → move to 'a' node",
    "  - 'r' exists → move to 'r' node",
    "  - Check isEnd: true → return true",
    "• Search 'ca':",
    "  - 'c' exists → move to 'c' node",
    "  - 'a' exists → move to 'a' node",
    "  - Check isEnd: false → return false (prefix exists but not a word)",
  ];

  const prefixSteps = [
    "• startsWith 'ca':",
    "  - 'c' exists → move to 'c' node",
    "  - 'a' exists → move to 'a' node",
    "  - All characters found → return true",
    "• startsWith 'dog':",
    "  - 'd' does not exist at root → return false immediately",
  ];

  return (
    <SlideContainer>
      <AlgorithmTitle title="Trie (Prefix Tree) Data Structure" />

      <StepsBox>
        <Step
          number={1}
          title="Design TrieNode structure"
          description="each node has Map for children and boolean isEnd flag"
        />
        <Step
          number={2}
          title="Initialize root node"
          description="create empty root node to start the trie"
        />
        <Step
          number={3}
          title="Implement insert operation"
          description="traverse/create path for each character, mark end of word"
        />
        <Step
          number={4}
          title="Implement search operation"
          description="follow character path and check if final node is end of word"
        />
        <Step
          number={5}
          title="Implement prefix search"
          description="check if path exists for given prefix (ignore isEnd flag)"
        />
        <Step
          number={6}
          title="Handle edge cases"
          description="empty strings, duplicate insertions, non-existent paths"
        />
      </StepsBox>

      <IntuitionBox>
        <p>
          A <strong>Trie (Prefix Tree)</strong> is a tree data structure
          designed for efficient storage and retrieval of strings. Each node
          represents a single character, and paths from root to leaf represent
          complete words. The key insight is that words sharing common prefixes
          share the same path in the tree, making prefix operations extremely
          efficient. The <code>isEnd</code> flag distinguishes between prefixes
          and complete words.
        </p>
      </IntuitionBox>

      <ExampleBox title="Building a Trie">
        <div>
          <Highlight>
            Operations: insert("cat"), insert("car"), insert("card")
          </Highlight>
          <br />
          <small style={{ color: "#a1a1a6" }}>
            Words share common prefixes "c" and "ca", creating shared tree paths
          </small>
        </div>

        <ProcessingSteps
          title="Step-by-step construction:"
          steps={insertSteps}
          result="Trie built with shared prefix paths"
        />
      </ExampleBox>

      <ExampleBox title="Search Operations">
        <div>
          <Highlight>Trie contains: ["cat", "car", "card"]</Highlight>
          <br />
          <small style={{ color: "#a1a1a6" }}>
            Testing search vs prefix operations
          </small>
        </div>

        <ProcessingSteps
          title="Search examples:"
          steps={searchSteps}
          result="search() checks isEnd flag, startsWith() only checks path existence"
        />
      </ExampleBox>

      <ExampleBox title="Prefix Operations">
        <div>
          <Highlight>Testing startsWith() functionality</Highlight>
          <br />
          <small style={{ color: "#a1a1a6" }}>
            Prefix search doesn't require complete words
          </small>
        </div>

        <ProcessingSteps
          title="Prefix search examples:"
          steps={prefixSteps}
          result="startsWith() returns true if prefix path exists"
        />
      </ExampleBox>

      <CodeBlock code={code} />

      <div className="section">
        <div className="section-title">Trie Structure Visualization</div>
        <div className="processing-steps">
          <div
            style={{
              marginBottom: "16px",
              color: "#007aff",
              fontWeight: "bold",
            }}
          >
            Trie after inserting ["cat", "car", "card"]:
          </div>
          <div
            style={{
              marginLeft: "20px",
              marginBottom: "12px",
              fontFamily: "SF Mono, Monaco, monospace",
            }}
          >
            <span style={{ color: "#a1a1a6" }}>root</span>
            <br />
            &nbsp;&nbsp;└── <span style={{ color: "#34c759" }}>c</span>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└──{" "}
            <span style={{ color: "#34c759" }}>a</span>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──{" "}
            <span style={{ color: "#ff9500" }}>t</span>{" "}
            <span style={{ color: "#ff3b30" }}>(isEnd=true)</span> ← "cat"
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└──{" "}
            <span style={{ color: "#ff9500" }}>r</span>{" "}
            <span style={{ color: "#ff3b30" }}>(isEnd=true)</span> ← "car"
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└──{" "}
            <span style={{ color: "#ff9500" }}>d</span>{" "}
            <span style={{ color: "#ff3b30" }}>(isEnd=true)</span> ← "card"
          </div>
          <div style={{ marginBottom: "12px", color: "#5ac8fa" }}>
            <strong>Key Properties:</strong>
          </div>
          <div style={{ marginLeft: "20px", fontSize: "0.875rem" }}>
            • Common prefix "ca" shared by all three words
            <br />
            • Each complete word marked with isEnd=true
            <br />• Space-efficient: prefix sharing reduces memory usage
          </div>
        </div>
      </div>

      <div className="section">
        <div className="section-title">Operation Comparison</div>
        <div className="processing-steps">
          <div
            style={{
              marginBottom: "12px",
              color: "#007aff",
              fontWeight: "bold",
            }}
          >
            search() vs startsWith():
          </div>
          <div style={{ marginLeft: "20px", marginBottom: "12px" }}>
            <span style={{ color: "#34c759" }}>search("car"):</span>
          </div>
          <div
            style={{
              marginLeft: "40px",
              marginBottom: "12px",
              fontFamily: "SF Mono, Monaco, monospace",
            }}
          >
            Path: root → c → a → r<br />
            Check: node.isEnd === true → return true
          </div>
          <div style={{ marginLeft: "20px", marginBottom: "12px" }}>
            <span style={{ color: "#ff9500" }}>search("ca"):</span>
          </div>
          <div
            style={{
              marginLeft: "40px",
              marginBottom: "12px",
              fontFamily: "SF Mono, Monaco, monospace",
            }}
          >
            Path: root → c → a<br />
            Check: node.isEnd === false → return false
          </div>
          <div style={{ marginLeft: "20px", marginBottom: "12px" }}>
            <span style={{ color: "#5ac8fa" }}>startsWith("ca"):</span>
          </div>
          <div
            style={{
              marginLeft: "40px",
              fontFamily: "SF Mono, Monaco, monospace",
            }}
          >
            Path: root → c → a<br />
            Check: path exists → return true (ignore isEnd)
          </div>
        </div>
      </div>

      <div className="section">
        <div className="section-title">Use Cases & Applications</div>
        <ul className="list">
          <li className="list-item">
            <strong>Autocomplete Systems:</strong> Efficiently find all words
            with given prefix
          </li>
          <li className="list-item">
            <strong>Spell Checkers:</strong> Fast word validation and suggestion
            generation
          </li>
          <li className="list-item">
            <strong>IP Routing:</strong> Longest prefix matching in network
            routing tables
          </li>
          <li className="list-item">
            <strong>Search Engines:</strong> Query suggestion and prefix-based
            search
          </li>
          <li className="list-item">
            <strong>Phone Contacts:</strong> T9 predictive text and contact
            search
          </li>
          <li className="list-item">
            <strong>Dictionary Apps:</strong> Word lookup and prefix-based word
            games
          </li>
        </ul>
      </div>

      <ApproachBox approaches={approaches} />

      <ComplexityBox
        timeComplexity={{
          value: "O(m)",
          description:
            "m = length of word/prefix. All operations linear in input length",
        }}
        spaceComplexity={{
          value: "O(ALPHABET_SIZE * N * M)",
          description:
            "Worst case: N words of average length M with full alphabet branching",
        }}
      />
    </SlideContainer>
  );
};

export default TrieDataStructure;
