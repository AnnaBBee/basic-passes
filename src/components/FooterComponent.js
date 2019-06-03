import React, { Component } from "react";
import Footer from "@nowtv/nowtv-web-toolkit/src/react/components/Footer/Footer.react";

export default class FooterComponent extends Component {
  render() {
    return (
      <Footer
        footerMenuItems={[
          {
            id: "d2419c10-4223-11e7-ba8e-9b7d60c4c4fe",
            title: "The Legal Bit",
            isExpandable: true,
            alias: "The Legal Bit"
          },
          {
            id: "bd92c6e0-4223-11e7-ba82-b72d084d9c1d",
            href: "/gb/widget/eng/privacy",
            title: "Privacy & Cookies"
          },
          {
            id: "e3de1822-4223-11e7-b631-e738d3d87f25",
            href: "/gb/widget/eng/terms",
            title: "Terms & Conditions"
          },
          {
            id: "24539a10-6e04-11e7-b999-1fc0075ba712",
            href: "https://help.nowtv.com/article/Accessibility-at-NOW-TV",
            title: "Accessibility"
          },
          {
            id: "836ed62c-6e04-11e7-9e96-dba53ddd97c7",
            href: "https://help.nowtv.com/article/how-to-contact-now-tv",
            title: "How to Contact Us"
          },
          {
            id: "94676fca-6e04-11e7-9ea1-d3cf61ee08d3",
            href: "https://community.nowtv.com",
            title: "Community"
          },
          {
            id: "aa8bc88c-6e04-11e7-b9ea-43ce64be8b59",
            isLocaleChanger: true,
            IE: { title: "Go to UK site" },
            GB: { title: "Go to Ireland site" }
          }
        ]}
        socialMenuItems={[
          {
            href: "http://www.facebook.com/NOWTV",
            title: "Facebook",
            icons: [
              {
                url:
                  "https://uk.imageservice.sky.com/pcms/f81c9684-a2c1-11e7-a893-9ba01baa9fd1/MASTER",
                alt: "Facebook",
                title: "Facebook - White Icon"
              }
            ],
            id: "f1d7538c-6dff-11e7-a8cc-13310505f972"
          },
          {
            href: "http://www.twitter.com/NOWTV",
            title: "Twitter",
            icons: [
              {
                url:
                  "https://uk.imageservice.sky.com/pcms/3b63ba62-a2c2-11e7-a8ea-b720f280739b/MASTER",
                alt: "Twitter",
                title: "Twitter - White Icon"
              }
            ],
            id: "d7f75bcc-9c5a-11e7-b5e7-4307c9abfdd1"
          },
          {
            href: "http://www.youtube.com/nowtvofficial",
            title: "YouTube",
            icons: [
              {
                url:
                  "https://uk.imageservice.sky.com/pcms/50ba4fc0-a2c2-11e7-b7cc-e7680d03877b/MASTER",
                alt: "YouTube",
                title: "YouTube - White Icon"
              }
            ],
            id: "132c9470-6e00-11e7-ad0a-e7148f4d6e67"
          }
        ]}
        expandableContent={{
          "The Legal Bit": (
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ex
              augue, pharetra eu posuere quis, pulvinar eu leo. Donec suscipit
              sodales lobortis. Fusce quis maximus quam. Maecenas massa sem,
              congue ut augue at, ornare pretium odio. Sed vehicula nec dui
              vitae luctus. Vivamus tempus sapien et metus pulvinar pulvinar.
              Nam vitae cursus ipsum, vel hendrerit neque. Nulla tincidunt lorem
              sed nisi sodales, a tincidunt ipsum pharetra. Nam dapibus pharetra
              magna, nec pellentesque ex mollis eu. Quisque gravida turpis et
              nulla euismod, quis lacinia dolor imperdiet. Fusce a mollis mi,
              sit amet viverra massa. Morbi laoreet sollicitudin augue et
              semper. Sed ante tortor, ultrices et iaculis nec, cursus ac
              tortor. Class aptent taciti sociosqu ad litora torquent per
              conubia nostra, per inceptos himenaeos. Sed vulputate urna et quam
              tempor vehicula. Morbi tempus nulla sed magna tincidunt, vitae
              laoreet nulla consequat.
            </div>
          )
        }}
      />
    );
  }
}
