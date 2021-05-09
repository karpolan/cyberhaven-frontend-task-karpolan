import React, { useCallback, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { compareText, textToGraph } from '../../utils';
import './GraphBuilder.css';

/**
 * Renders controls to build and edit Graph data
 */
const GraphBuilder = ({ text: propText = '', onChange }) => {
  const [text, setText] = useState(propText);
  const [error, setError] = useState('');

  const validateGraph = useCallback((text) => {
    const graph = textToGraph(text);
    if (!graph) {
      setError('Syntax error');
    } else {
      setError('');
    }
  }, []);

  const doChange = useCallback(
    (text) => {
      if (onChange && typeof onChange === 'function') {
        onChange(text);
      }
    },
    [onChange]
  );

  useEffect(() => {
    // Update and validate when .text prop is changed
    setText(propText);
    validateGraph(propText);
  }, [propText, validateGraph]);

  const onTextChange = useCallback(
    (event) => {
      const newText = event?.target?.value;
      setText(newText);
      validateGraph(newText);
    },
    [validateGraph]
  );

  const onRollbackClick = () => {
    setError('');
    setText(propText);
    doChange(propText);
  };

  const onSaveClick = () => {
    doChange(text);
  };

  const rollbackDisabled = compareText(text, propText) === 0;
  const saveDisabled = Boolean(error) || rollbackDisabled;

  return (
    <div className="GraphBuilder">
      <label htmlFor="graph-as-text">Graph as text:</label>
      <textarea
        autoFocus
        id="graph-as-text"
        value={text}
        onChange={onTextChange}
      />
      {error ? (
        <div className="status error">Error: {error}</div>
      ) : (
        <div className="status">Status: Input is valid</div>
      )}
      <div className="actions">
        <button disabled={rollbackDisabled} onClick={onRollbackClick}>
          Rollback
        </button>
        <button disabled={saveDisabled} onClick={onSaveClick}>
          Save
        </button>
      </div>
    </div>
  );
};

GraphBuilder.propTypes = {
  text: PropTypes.string,
  onChange: PropTypes.func,
};

export default GraphBuilder;
