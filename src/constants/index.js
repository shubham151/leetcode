import { arrayQuestions } from "./array.js";
import { graphQuestions } from "./graph.js";
import { treeQuestions } from "./tree.js";
import { stackQuestions } from "./stack.js";
import { dynamicProgrammingQuestions } from "./dynamic-programming.js";
import { stringQuestions } from "./string.js";
import { triesQuestions } from "./tries.js";
import { greedyQuestions } from "./greedy.js";

// Category metadata
export const categories = [
  {
    id: "array",
    title: "Array",
    description:
      "Two pointers, sliding window, subarray, and linear data structure problems",
  },
  {
    id: "graph",
    title: "Graph",
    description:
      "Traversal algorithms, shortest paths, topological sorting, and connectivity",
  },
  {
    id: "tree",
    title: "Tree",
    description:
      "Binary trees, BST operations, traversals, and tree construction",
  },
  {
    id: "stack",
    title: "Stack",
    description:
      "Monotonic stacks, parentheses validation, and expression evaluation",
  },
  {
    id: "dynamic-programming",
    title: "Dynamic Programming",
    description:
      "Optimization problems, memoization, and tabulation techniques",
  },
  {
    id: "string",
    title: "String",
    description: "Pattern matching, manipulation, and substring algorithms",
  },

  {
    id: "tries",
    title: "Tries",
    description:
      "Prefix trees used for efficient string storage, search, autocomplete, and word problems",
  },
  {
    id: "greedy",
    title: "Greedy",
    description:
      "Optimization problems solved by making locally optimal choices that lead to a global solution",
  },
];

export const questionsData = {
  array: arrayQuestions,
  graph: graphQuestions,
  tree: treeQuestions,
  stack: stackQuestions,
  "dynamic-programming": dynamicProgrammingQuestions,
  string: stringQuestions,
  tries: triesQuestions,
  greedy: greedyQuestions,
};
