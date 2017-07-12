export const addToUsers = (user) => {
  console.log('adding item', user);
  return {
    type: 'addUser',
    user
  }
}