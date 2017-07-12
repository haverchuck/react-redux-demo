export const addNode = (node) => {
  console.log('adding node', node);
  return {
    type: 'addNode',
    node
  }
}