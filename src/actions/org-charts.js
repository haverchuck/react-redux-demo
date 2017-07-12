export const updateTree = (treeData) => {
  console.log('adding node', treeData);
  return {
    type: 'addNode',
    treeData
  }
}