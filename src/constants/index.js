import { arrayQuestions } from './array.js'
import { graphQuestions } from './graph.js'
import { treeQuestions } from './tree.js'
import { stackQuestions } from './stack.js'
import { dynamicProgrammingQuestions } from './dynamic-programming.js'
import { stringQuestions } from './string.js'
import { triesQuestions } from './tries.js'
import { greedyQuestions } from './greedy.js'
import { twoPointersQuestions } from './two-pointers.js'
import { slidingWindowQuestions } from './sliding-window.js'

// Category metadata
export const categories = [
  {
    id: 'array',
    title: 'Array',
    description: 'Two pointers, sliding window, subarray, and linear data structure problems',
  },
  {
    id: 'graph',
    title: 'Graph',
    description: 'Traversal algorithms, shortest paths, topological sorting, and connectivity',
  },
  {
    id: 'tree',
    title: 'Tree',
    description: 'Binary trees, BST operations, traversals, and tree construction',
  },
  {
    id: 'stack',
    title: 'Stack',
    description: 'Monotonic stacks, parentheses validation, and expression evaluation',
  },
  {
    id: 'dynamic-programming',
    title: 'Dynamic Programming',
    description: 'Optimization problems, memoization, and tabulation techniques',
  },
  {
    id: 'string',
    title: 'String',
    description: 'Pattern matching, manipulation, and substring algorithms',
  },

  {
    id: 'tries',
    title: 'Tries',
    description:
      'Prefix trees used for efficient string storage, search, autocomplete, and word problems',
  },
  {
    id: 'greedy',
    title: 'Greedy',
    description:
      'Optimization problems solved by making locally optimal choices that lead to a global solution',
  },
  {
    id: 'two-pointers',
    title: 'Two Pointers',
    description:
      'Technique for solving problems by maintaining two pointers to iterate through data structures, often used for searching, sorting, and partitioning arrays or linked lists',
  },
  {
    id: 'sliding-window',
    title: 'Sliding Window',
    description:
      'Optimize problems involving arrays or lists by maintaining a subset of elements (a "window") that can be moved across the input. ',
  },
]

export const questionsData = {
  'array': arrayQuestions,
  'graph': graphQuestions,
  'tree': treeQuestions,
  'stack': stackQuestions,
  'dynamic-programming': dynamicProgrammingQuestions,
  'string': stringQuestions,
  'tries': triesQuestions,
  'greedy': greedyQuestions,
  'two-pointers': twoPointersQuestions,
  'sliding-window': slidingWindowQuestions,
}
