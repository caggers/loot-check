import { FETCH_BITCOIN } from './constants';

// create an asynchronous thunk action creator
// return a dispatch method that returns a fetch with thunk, boil down the returned data
export const fetchBitcoin = () => {
  return dispatch => {
    return fetch('http://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => response.json())
      .then(json => dispatch({ type: FETCH_BITCOIN, bitcoin: json }));
  };
};
