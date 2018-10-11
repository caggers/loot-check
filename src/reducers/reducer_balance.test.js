import balanceReducer from './reducer_balance';
import balanceReducer2 from './reducer_balance';
import * as constants from '../actions/constants';

describe('balanceReducer', () => {
  describe('when initialising', () => {
    const balance = 10;

    it('sets a balance', () => {
      const balance = 10;

      expect(
        balanceReducer(undefined, { type: constants.SET_BALANCE, balance })
      ).toEqual(balance);
    });

    describe('then re-initialising', () => {
      it('it reads the balance from cookies', () => {
        expect(balanceReducer2(undefined, {})).toEqual(balance);
      });
    });
  });

  it('deposits into the balance', () => {
    const deposit = 10;
    const initialState = 5;

    expect(
      balanceReducer(initialState, { type: constants.DEPOSIT, deposit })
    ).toEqual(initialState + deposit);
  });

  it('withdraws from the balance', () => {
    const withdraw = 5;
    const initialState = 10;

    expect(
      balanceReducer(initialState, { type: constants.WITHDRAW, withdraw })
    ).toEqual(initialState - withdraw);
  });
});
