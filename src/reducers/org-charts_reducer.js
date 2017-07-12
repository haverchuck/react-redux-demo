export default(state = [], payload) => {
  switch(payload.type) {
    case 'addNode':
      return payload.treeData;
    default:
      return state;
  }
}