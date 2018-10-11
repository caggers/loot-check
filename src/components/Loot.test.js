import React from 'react';
import { shallow, mount } from 'enzyme';
import { Loot } from './Loot';

describe('Loot', () => {
  const mockFetchBitcoin = jest.fn();
  let props = { balance: 10, bitcoin: {}, fetchBitcoin: mockFetchBitcoin };
  let loot = shallow(<Loot {...props} />);

  it('renders properly', () => {;
    expect(loot).toMatchSnapshot();
  });

  describe('when mounted', () => {
    beforeEach(() => {
      loot = mount(<Loot {...props} className="lootieloot" />);
    });

    it('dispatches the `fetchBitcoin()` method it receives from props', () => {
      expect(mockFetchBitcoin).toHaveBeenCalled();
    });
  });

  describe('when there are valid bitcoin props', () => {
    beforeEach(() => {
      props = { balance: 10, bitcoin: { bpi: { EUR: { rate: '1,000' } } }, fetchBitcoin: mockFetchBitcoin };
      loot = shallow(<Loot {...props} />);
    });

    it('displays the correct bitcoin val', () => {
      expect(loot.find('span.bitcoin-amount').text()).toEqual('0.01');
    });
  });
});
