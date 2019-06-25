import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Pass from './Pass';
import Button from '@nowtv/nowtv-web-toolkit/src/react/components/Button/Button.react';
import Accordion from '@nowtv/nowtv-web-toolkit/src/react/components/Accordion/Accordion.react';

describe('Pass component', () => {
  const mockPass = {
    allowedOperations: (8)[
      ('AGENT_CANCEL',
      'UPDATE_PRODUCT',
      'UPDATE_SUBSCRIPTION',
      'DELETE',
      'SYSTEM_CANCEL',
      'USER_CANCEL',
      'IMMEDIATE_CANCEL',
      'TRANSFER_CANCEL')
    ],
    category: 'CINEMA',
    currency: 'GBP',
    entitlements: ['c0c298c5-c56a-413d-8123-06a87e0cb0a4'],
    id: '2f964538-a46b-440d-89a1-07eecdb1d789',
    name: 'Sky Cinema Month Pass',
    nextRenewalAmount: '11.99',
    nextRenewalDueDate: '2019-06-21T11:32:11Z',
    offerAllowed: true,
    product: {
      id: 'C_005372',
      staticId: 'CINEMA_SUBSCRIPTION_MONTH',
      context: {
        isIncluded: 'False',
        nextRenewalDueDate: '2019-06-21T11:32:11Z',
        paymentType: 'PAYMENT',
        startDate: '2019-05-21T11:32:12Z',
        staticId: 'CINEMA_SUBSCRIPTION_MONTH',
        subscriptionType: 'MONTHLY'
      }
    },
    retryWindow: false,
    startDate: '2019-05-21T11:32:12Z',
    state: 'ACTIVE',
    upfrontAllowed: true
  };
  it('renderes correctly', () => {
    const wrapper = shallow(<Pass pass={mockPass} />);
    expect(wrapper.find('h5.subscription-name')).to.have.lengthOf(1);
    expect(wrapper.find(Button)).to.have.lengthOf(1);
    expect(wrapper.find(Accordion)).to.have.lengthOf(1);
  });
});
