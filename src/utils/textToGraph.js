import Graph from './Graph';

/**
 * Converts multi-line text with "a calls b" patterns into Graph object
 * @param {string} text - the multi-line text to parse
 * @returns {object | undefined} the Graph object or undefined if the text was invalid
 */
const textToGraph = (text) => {
  if (!text || typeof text !== 'string' || text.trim() === '') return undefined;

  const graph = new Graph();

  const lines = text.split('\n');  
  for (let line of lines) {
    line = line.replace(/(\r\n|\n|\r)/gm, "").trim(); // Remove \r and other "brakes"

    if (line === '') continue; // skip empty lines
    const [from, calls, to, bad] = line.split(' ');
    if (!from || !to || bad || calls.toLowerCase() !== 'calls') {
      console.error('textToGraph() - invalid line:', line);
      return undefined;
    }
    graph.addVertex(from);
    graph.addVertex(to);
    graph.addEdge(from, to);
  }

  return graph;
};

export default textToGraph;
