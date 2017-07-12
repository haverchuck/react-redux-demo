export default(state = [], payload) => {
  switch(payload.type) {
    case 'addUser':
      return [...state, payload.user];
    default:
      return state;
  }
}