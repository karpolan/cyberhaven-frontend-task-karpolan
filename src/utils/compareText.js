
/**
 * Compares two strings ignoring new lines and other special chars
 * @param {string} a 
 * @param {string} b 
 * @returns {number} standard sort/compare numeric result: 0, -1, 1
 */
const compareText = (a, b) => {
  if (!a && b) return -1;
  if (a && !b) return 1;
  if (!a && !b) return 0;

  const cleanA = a.replace(/[^a-zA-Z]/g, '').trim();
  const cleanB = b.replace(/[^a-zA-Z]/g, '').trim();
  // console.log('compareText()',  cleanA, cleanB)
  return cleanA.localeCompare(cleanB);
};

export default compareText
