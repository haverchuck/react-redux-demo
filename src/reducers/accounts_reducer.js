export default(state = [], payload) => {
  switch(payload.type) {
    case 'addAccount':
      return [...state, payload.account];
    default:
      return state;
  }
}