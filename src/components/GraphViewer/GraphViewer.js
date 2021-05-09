import { useCallback, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { sortedObjectToText, textToGraph, topoSort } from '../../utils';
import './GraphViewer.css';

/**
 * Renders controls to review Graph data
 */
const GraphViewer = ({ text = '' }) => {
  const [sorted, setSorted] = useState('');

  const sortGraph = useCallback((text) => {
    const sorted = topoSort(textToGraph(text));
    if (!sorted) {
      setSorted('impossible');
      return;
    }
    setSorted(sortedObjectToText(sorted));
  }, []);

  useEffect(() => {
    // Update when .text prop is changed
    sortGraph(text);
  }, [text, sortGraph]);

  return (
    <div className="GraphViewer">
      <label htmlFor="sorted-graph">Sorted graph:</label>
      <textarea id="sorted-graph" value={sorted} readOnly />
    </div>
  );
};

GraphViewer.propTypes = {
  text: PropTypes.string,
};

export default GraphViewer;
