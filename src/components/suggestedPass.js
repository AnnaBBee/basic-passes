import React, { Component } from 'react';

export default class SuggestedPass extends Component {
  render() {
    const props = this.props;
    return (
      <div style={{ backgroundColor: 'lightblue' }}>
        <p>{props.suggestedSubscriptionName}</p>
        {`${props.nextRenewalDateS} per month`}
      </div>
    );
  }
}
