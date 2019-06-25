import React, { Component } from 'react';
import Button from '@nowtv/nowtv-web-toolkit/src/react/components/Button/Button.react';
import Accordion from '@nowtv/nowtv-web-toolkit/src/react/components/Accordion/Accordion.react';
import AccordionItem from '@nowtv/nowtv-web-toolkit/src/react/components/Accordion/AccordionItem.react';
import AccordionContent from '@nowtv/nowtv-web-toolkit/src/react/components/Accordion/AccordionContent.react';
import variables from '../../styles/variables.scss';

export default class SuggestedPass extends Component {
  render() {
    // console.log('this.props', this.props);
    const props = this.props;
    let theme;
    let themeBg;
    let chevronColor;

    switch (this.props.suggestedPass.category) {
      case 'SPORTS':
        theme = { color: variables.sports };
        themeBg = { backgroundColor: variables.sports };
        chevronColor = 'blue';
        break;

      case 'SPORTSMOBILE':
        theme = { color: variables.sports };
        themeBg = { backgroundColor: variables.sports };
        chevronColor = 'blue';
        break;

      case 'HAYU':
        theme = { color: variables.hayu };
        themeBg = { backgroundColor: variables.hayu };
        chevronColor = 'hayu-pink';
        break;

      case 'ENTERTAINMENT':
        theme = { color: variables.entertainment };
        themeBg = { backgroundColor: variables.entertainment };
        chevronColor = 'orange';
        break;

      case 'KIDS':
        theme = { color: variables.kids };
        themeBg = { backgroundColor: variables.kids };
        chevronColor = 'red';
        break;

      case 'HD':
        theme = { color: variables.boost };
        themeBg = { backgroundColor: variables.boost };
        chevronColor = 'hd';
        break;

      case 'CINEMA':
        theme = { color: variables.cinema };
        themeBg = { backgroundColor: variables.cinema };
        chevronColor = 'purple';
        break;

      default:
        theme = { color: variables.darkBlue };
        themeBg = { backgroundColor: variables.darkBlue };
        chevronColor = 'dark-blue';
    }

    return (
      <div className="pass-styles">
        <h5 style={theme} className="subscription-name">
          {props.suggestedSubscriptionName}
        </h5>
        <h5>{`£${props.nextRenewalDateS} a month`}</h5>
        <Button style={themeBg} href="" disabled={false}>
          Start free trial
        </Button>
        <Accordion colour={chevronColor} type="chevron-bottom">
          <AccordionItem>
            <AccordionContent>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et
                risus commodo turpis semper laoreet. Proin at sem et sapien
                cursus sodales. Cras dictum nisi vitae fermentum laoreet.
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Aliquam facilisis pulvinar
                sagittis. Quisque vel nisl at massa blandit fermentum vel eget
                elit. Nullam velit urna, bibendum sed lorem quis, efficitur
                maximus neque.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    );
  }
}
