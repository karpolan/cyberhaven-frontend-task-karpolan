import {useState} from 'react';
import GraphBuilder from '../components/GraphBuilder';
import GraphViewer from '../components/GraphViewer';

import './Graph.css'

/**
 * Renders "Graph" view
 */
const GraphView = () => {
  const [graphAsText, setGraphAsText] = useState('')
    
  const onGraphChange = (newGraph) => {
    setGraphAsText(newGraph)
  }

  return (
    <div className="GraphView">
      <GraphBuilder text={graphAsText} onChange={onGraphChange} />
      <GraphViewer text={graphAsText} />
    </div>
  );
};

export default GraphView;
