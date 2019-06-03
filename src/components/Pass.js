import React, { Component } from 'react';
import Button from '@nowtv/nowtv-web-toolkit/src/react/components/Button/Button.react';
import Accordion from '@nowtv/nowtv-web-toolkit/src/react/components/Accordion/Accordion.react';
import AccordionItem from '@nowtv/nowtv-web-toolkit/src/react/components/Accordion/AccordionItem.react';
import AccordionContent from '@nowtv/nowtv-web-toolkit/src/react/components/Accordion/AccordionContent.react';

export default class Pass extends Component {
  render() {
    const props = this.props;
    return (
      <div className="pass-styles">
        <h4 className="subscription-name">{props.subscriptionName}</h4>
        <p>{`${props.amount} per month`}</p>
        <p>{`Your next payment is: ${props.amount}`}</p>
        <p>{`Due on: ${props.nextRenewalDate}`}</p>
        <Button colour="purple" href="" disabled={false}>
          Cancel Pass
        </Button>
        <Accordion type="chevron-bottom" colour="purple">
          <AccordionItem svgicon="false">
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
