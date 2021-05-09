import Graph from './Graph';

const RESULT_BAD = undefined; // 'impossible';
const RESULT_CYCLE = undefined; // 'impossible'; // 'cycle detected';

/**
 * Topological sorting using Khan algorithm
 * @param {Graph} graph - the Graph object to sort
 * @returns {object | undefined} - object with "sorted" Graph's Vertexes or undefined if not possible to sort
 */
const topoSortKhan = (graph) => {
  if (!graph || !(graph instanceof Graph)) return RESULT_BAD;

  // Calculate the incoming degree of each vertex
  const vertices = Object.keys(graph.list);
  const inDegree = {};
  for (const v of vertices) {
    for (const neighbor of graph.list[v]) {
      inDegree[neighbor] = inDegree[neighbor] + 1 || 1;
    }
  }

  // Create a queue to store vertexes without dependencies
  const queue = vertices.filter((v) => !inDegree[v]);
  const result = {};
  let index = 0;
  while (queue.length) {
    const v = queue.shift();
    result[v] = index++;
    // Adjust the incoming degree for neighbors
    for (const neighbor of graph.list[v]) {
      inDegree[neighbor]--;
      if (inDegree[neighbor] === 0) {
        queue.push(neighbor);
      }
    }
  }

  if (index !== vertices.length) {
    // Cycle detected
    return RESULT_CYCLE;
  }

  return result;
};

export default topoSortKhan;
