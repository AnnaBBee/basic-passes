import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Passes } from './Passes';

describe('Passes Component', () => {
  const mockSubscriptionNameArr = [
    {
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
    }
  ];

  const mockSuggestedMonthlySubscriptions = [
    {
      available: false,
      available_end_date: '2099-12-31',
      available_start_date: '2016-04-11',
      business_id: 'C_005372',
      category: 'CINEMA',
      item_type: 'MONTHLY_SUBSCRIPTION',
      name: 'Sky Cinema Month Pass',
      price: [{ 'non-recurring': '0.00', recurring: '11.99' }],
      static_id: 'CINEMA_SUBSCRIPTION_MONTH'
    },
    {
      available: true,
      available_end_date: '2099-12-31',
      available_start_date: '2016-04-11',
      business_id: 'C_005335',
      category: 'SPORTS',
      item_type: 'MONTHLY_SUBSCRIPTION',
      name: 'Sky Sports Month Pass',
      price: [{ 'non-recurring': '0.00', recurring: '33.99' }],
      static_id: 'SPORTS_SUBSCRIPTION_MONTH'
    }
  ];

  it.only('renders without throwing an error', () => {
    const wrapper = shallow(
      <Passes
        subscriptionNameArr={mockSubscriptionNameArr}
        suggestedMonthlySubscriptions={mockSuggestedMonthlySubscriptions}
      />
    );
    expect(wrapper.find('.container')).to.have.lengthOf(1);
  });
});
