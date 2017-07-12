export const addToAccounts = (account) => {
  console.log('adding item', account);
  return {
    type: 'addAccount',
    account
  }
}