
export default(state = [], payload) => {
  switch(payload.type) {
    case 'addAccount':
      return [...state, payload.account];
    case 'requestAccounts':
      // return Object.assign({}, state, {
      //   isFetching: true,
      //   didInvalidate: false
      // })
      return state;
    case 'receiveAccounts':
      return payload.json.accounts
    case 'fetchAccountsIfNeeded':
      return state;
    default:
      return state;
  }
}