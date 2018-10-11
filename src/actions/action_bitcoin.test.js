// http://api.coindesk.com/v1/bpi/currentprice.json

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { FETCH_BITCOIN } from './constants';
import { fetchBitcoin } from './action_bitcoin';

const createMockStore = configureMockStore([thunk]);
const store = createMockStore({ bitcoin: {} });
const mockResponse = { bpi: 'bitcoin price index' };

// Mocking the GET req & res
fetchMock.get('http://api.coindesk.com/v1/bpi/currentprice.json', mockResponse);

// async action should return a val that redux can use
it('creates an async action to fetch the bitcoin value', () => {
  // build an array of expected dispatch actions
  const expectedActions = [{ bitcoin: mockResponse, type: FETCH_BITCOIN }];

  // mock a dispatch of this entire fetchBitcoin action creator on to the store
  // In Jest, when using promises, in order to test correctly we need to return the promise
  return store.dispatch(fetchBitcoin()).then(() => {
    expect(store.getActions()).toEqual(expectedActions);
  });
});
