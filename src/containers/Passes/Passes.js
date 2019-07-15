import React, { Component } from 'react';
import { connect } from 'react-redux';
import Pass from '../../components/Pass/Pass';
import SuggestedPass from '../../components/SuggestedPass/suggestedPass';

export class Passes extends Component {
  render() {
    const passes = this.props.subscriptionNameArr.map((pass, index) => (
      <Pass
        pass={pass}
        key={index}
        subscriptionName={pass.name}
        amount={pass.nextRenewalAmount}
        nextRenewalDate={pass.nextRenewalDueDate}
      />
    ));

    const suggestedPasses = this.props.suggestedMonthlySubscriptions
      .filter(pass => pass.available === true)
      .map((suggestedPass, index) => (
        <SuggestedPass
          suggestedPass={suggestedPass}
          key={index}
          suggestedSubscriptionName={suggestedPass.name}
          nextRenewalDateS={suggestedPass.price.map(
            (price, index) => price.recurring
          )}
        />
      ));

    return (
      <div className="container">
        <h2>Your Passes</h2>
        <ul>{passes}</ul>
        <h2>You might also like</h2>
        <ul>{suggestedPasses}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    subscriptionNameArr: state.subscriptionNameArr,
    suggestedMonthlySubscriptions: state.suggestedMonthlySubscriptions
  };
};

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Passes);
