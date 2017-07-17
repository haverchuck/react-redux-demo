import fetch from 'isomorphic-fetch';

export const addToAccounts = (account) => {
  console.log('adding item', account);
  return {
    type: 'addAccount',
    account
  }
}

export function fetchAccountsIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchAccounts(getState())) {
      return dispatch(fetchAccounts())
    }
  }
}

function requestAccounts() {
  return {
    type: 'requestAccounts',
  }
}

function receiveAccounts(json) {
  return {
    type: 'receiveAccounts',
    json
  }
}

function fetchAccounts() {
  return dispatch => {
    dispatch(requestAccounts())
    return fetch(`http://localhost:8000/api/accounts/allAccounts`)
      .then(response => response.json())
      .then(json => dispatch(receiveAccounts(json)))
  }
}

function shouldFetchAccounts(state) {
  if (!state.accounts || state.accounts.length == 0) {
    return true
  } else if (state.isFetching) {
    return false
  } else {
    return state.didInvalidate
  }
}