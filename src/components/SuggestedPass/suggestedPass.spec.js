import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import SuggestedPass from './suggestedPass';
import Button from '@nowtv/nowtv-web-toolkit/src/react/components/Button/Button.react';
import Accordion from '@nowtv/nowtv-web-toolkit/src/react/components/Accordion/Accordion.react';

describe('Suggested pass component', () => {
  const mockSuggestedPass = {
    available: true,
    available_end_date: '2099-12-31',
    available_start_date: '2016-04-11',
    business_id: 'C_005335',
    category: 'SPORTS',
    item_type: 'MONTHLY_SUBSCRIPTION',
    name: 'Sky Sports Month Pass',
    price: [{ 'non-recurring': '0.00', recurring: '33.99' }],
    static_id: 'SPORTS_SUBSCRIPTION_MONTH'
  };
  it('renderes correctly', () => {
    const wrapper = shallow(
      <SuggestedPass suggestedPass={mockSuggestedPass} />
    );
    expect(wrapper.find('h5.subscription-name')).to.have.lengthOf(1);
    expect(wrapper.find(Button)).to.have.lengthOf(1);
    expect(wrapper.find(Accordion)).to.have.lengthOf(1);
  });
});
