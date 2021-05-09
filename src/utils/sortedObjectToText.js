
const RESULT_BAD = 'impossible';

/**
 * Converts "Sorted Object" {a: 0, b: 1, c: 5} into multi-line text
 * @param {object} obj - the object with {name: integer} pattern
 * @returns {sting} multi-line text with line per object property
 */
const sortedObjectToText = (obj) => {
  if (!obj || typeof obj !== 'object') return RESULT_BAD;

  const sortedProperties =
    Object.entries(obj)
      .sort(([, a], [, b]) => a - b)
      .map(([name]) => name);
  // console.log('sortedProperties:', sortedProperties)
 
  return sortedProperties.join('\r\n');
};

export default sortedObjectToText;
