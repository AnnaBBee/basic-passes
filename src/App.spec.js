import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import App from './App';
import HeaderComponent from './components/HeaderComponent';
import Layout from '@nowtv/nowtv-web-toolkit/src/react/components/Layout/Layout.react';
import FooterComponent from './components/FooterComponent';

describe('App Component', () => {
  it('renders without throwing an error', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.App')).to.have.lengthOf(1);
    expect(wrapper.find(HeaderComponent)).to.have.lengthOf(1);
    expect(wrapper.find(Layout)).to.have.lengthOf(1);
    expect(wrapper.find(FooterComponent)).to.have.lengthOf(1);
  });
});
