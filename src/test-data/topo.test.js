import { textToGraph, sortedObjectToText, topoSort, compareText } from '../utils';
import { testCasesBad, testCasesGood } from './index';


// Test failing cases (first two, )
testCasesBad.forEach(({ input, out, name }) => {
  test(name, () => {
    // put your parsing and topoSort code here
    const output = out.trim(); // Single word for bad cases...
    const graph = textToGraph(input);
    const sorted = topoSort(graph);
    expect(sorted).toBeUndefined();
    expect('impossible').toEqual(output)
  });
});


// test regular cases
testCasesGood.forEach(({ input, out, name }) => {
  test(name, () => {
    // put your parsing and topoSort code here
    // console.log('Regular - input:', input, 'output:', out);
    const graph = textToGraph(input);
    const sorted = topoSort(graph);
    const text = sortedObjectToText(sorted);
    expect(compareText(text, out)).toEqual(0);
  });
});

