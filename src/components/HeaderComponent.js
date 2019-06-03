import React, { Component } from "react";
import StaticHeader from "@nowtv/nowtv-web-toolkit/src/react/components/StaticHeader/StaticHeader.react";

export default class HeaderComponent extends Component {
  render() {
    return (
      <StaticHeader
        className="no-circle"
        colour="green"
        icon="<svg xmlns='http://www.w3.org/2000/svg' width='210.938' height='49.794' viewBox='0 0 55.811 13.175'><path d='M55.5.805a.553.553 0 0 0-.511-.336.555.555 0 0 0-.52.354l-1.452 3.68-1.452-3.68c0-.003-.002-.004-.003-.007l-.006-.014a.422.422 0 0 0-.017-.037l-.004-.007a.553.553 0 0 0-.375-.277L51.157.48l-.05-.008H51.1a.487.487 0 0 0-.054-.004h-4.812a.559.559 0 0 0 0 1.117h1.58v4.438a.559.559 0 0 0 1.116 0V1.585h1.736l1.832 4.643.007.016v.003c.075.17.226.29.404.324l.008.002a.262.262 0 0 0 .04.006l.011.001a.38.38 0 0 0 .048.003h.001a.396.396 0 0 0 .05-.003l.01-.001.04-.005.008-.003a.553.553 0 0 0 .402-.324l.002-.003.007-.016 1.972-4.996A.554.554 0 0 0 55.5.804M11.439.507A1.88 1.88 0 0 0 9.223 1.97l-.807 3.955L5.45 1.328l-.006-.008a1.64 1.64 0 0 0-.072-.1l-.038-.052a2.617 2.617 0 0 0-.21-.219L5.078.908C5.054.886 5.027.867 5 .847c-.023-.016-.045-.035-.069-.05-.02-.015-.043-.028-.065-.041-.03-.02-.06-.039-.092-.056a4.099 4.099 0 0 0-.24-.108C4.503.58 4.471.567 4.438.556 4.418.55 4.395.546 4.373.54 4.335.529 4.296.518 4.257.51l-.01-.003-.062-.01C4.148.49 4.11.484 4.073.48a1.134 1.134 0 0 0-.082-.005 1.148 1.148 0 0 0-.187-.003l-.1.005a1.333 1.333 0 0 0-.08.01 1.147 1.147 0 0 0-.102.016l-.075.016a2.19 2.19 0 0 0-.105.026c-.024.007-.046.016-.07.024-.034.012-.069.023-.104.037-.023.01-.046.02-.068.032a1.435 1.435 0 0 0-.097.045c-.026.013-.05.029-.076.044-.024.014-.05.026-.074.042l-.01.008c-.025.016-.049.034-.073.052-.026.019-.054.037-.08.057a1.83 1.83 0 0 0-.338.358l-.031.042c-.019.028-.035.057-.052.086-.015.023-.031.047-.045.072-.012.021-.02.043-.031.064a1.95 1.95 0 0 0-.074.168c-.014.035-.027.069-.038.103l-.017.063c-.01.04-.023.08-.03.12l-.004.01-1.727 8.467a1.878 1.878 0 0 0 3.68.75l.807-3.954 2.966 4.597.005.007c.04.061.083.118.129.174l.042.048a1.928 1.928 0 0 0 .51.405l.038.019c.05.025.101.05.154.071l.066.023c.045.017.09.03.138.044l.074.02c.015.002.03.008.046.011.032.006.066.01.098.015l.067.01c.071.008.142.014.212.014h.017c.044 0 .087-.004.13-.007.018-.002.035-.005.053-.006l.096-.012.055-.01a1.716 1.716 0 0 0 .254-.068l.031-.01c.047-.017.095-.036.14-.057h.002c.043-.022.087-.043.13-.068l.043-.025c.021-.013.043-.025.064-.039l.016-.01c.04-.027.077-.054.114-.082l.03-.023c.045-.036.087-.074.128-.114l.045-.046.075-.08.045-.056.062-.082.039-.058c.02-.03.038-.06.056-.091l.032-.058c.016-.032.033-.066.048-.1l.025-.057c.015-.034.028-.07.04-.106l.02-.059c.012-.034.02-.07.03-.106l.015-.064.003-.01 1.729-8.467A1.877 1.877 0 0 0 11.438.506m32.03.166a1.946 1.946 0 0 0-2.61.877l-2.073 4.176-1.34-3.937c-.005-.018-.013-.035-.02-.053a2.262 2.262 0 0 0-.043-.107c-.01-.026-.023-.05-.036-.075a1.712 1.712 0 0 0-.05-.095c-.014-.026-.03-.051-.045-.076a4.549 4.549 0 0 0-.055-.084c-.018-.027-.037-.05-.057-.075l-.06-.074a1.763 1.763 0 0 0-.21-.209l-.063-.053a2.095 2.095 0 0 0-.094-.068l-.045-.033-.02-.011a1.606 1.606 0 0 0-.097-.057c-.024-.013-.048-.028-.073-.04-.029-.015-.059-.028-.088-.04-.029-.013-.058-.027-.088-.039l-.08-.027c-.033-.01-.067-.023-.1-.032-.028-.008-.056-.013-.084-.02-.033-.007-.066-.016-.1-.021-.034-.006-.07-.01-.105-.014l-.08-.01a1.664 1.664 0 0 0-.123-.003L35.566.47c-.04 0-.08.005-.12.008l-.069.005c-.034.004-.069.01-.103.016-.03.005-.06.009-.088.016-.029.006-.057.014-.084.022a1.83 1.83 0 0 0-.107.03l-.02.006-.054.02a2.243 2.243 0 0 0-.106.043c-.026.011-.05.024-.075.036-.032.016-.065.032-.095.05-.027.015-.05.03-.076.046a2.335 2.335 0 0 0-.159.11 1.75 1.75 0 0 0-.282.269l-.056.067-.065.09c-.012.016-.025.032-.035.048l-2.673 4.099-.474-3.093a1.948 1.948 0 0 0-3.85.59l1.246 8.127c.003.018.008.036.01.054l.018.085c.008.034.016.067.026.1.007.025.013.05.022.073a1.785 1.785 0 0 0 .064.169l.05.106.03.058c.02.035.041.069.062.102.011.019.021.037.034.054a2.162 2.162 0 0 0 .228.277l.054.05c.027.026.055.05.083.074l.058.046.094.068.028.02.045.027.053.032c.031.018.062.034.094.05l.046.023c.096.045.195.082.295.11.016.005.03.009.046.012.037.01.073.017.108.025l.056.01a2.037 2.037 0 0 0 .309.027h.007c.072 0 .143-.005.214-.013l.047-.005.038-.005c.045-.007.088-.017.13-.027l.053-.01a1.981 1.981 0 0 0 .413-.157l.06-.033c.044-.025.088-.052.13-.08l.062-.043c.045-.032.088-.067.13-.104l.042-.035a2.007 2.007 0 0 0 .293-.34l.023-.033 3.272-5.014 1.557 4.571.002.007c.018.054.04.107.062.159l.02.04c.018.04.038.08.058.117l.03.048a1.281 1.281 0 0 0 .097.15c.024.034.05.067.076.099l.033.038c.037.044.076.086.117.125l.027.025a2.106 2.106 0 0 0 .302.229c.05.03.101.06.154.086l.004.001c.06.03.12.056.183.079l.05.018c.06.02.122.04.185.054l.03.005c.054.013.11.022.166.03l.054.005c.064.007.13.011.195.011h.02c.04 0 .082-.003.123-.006.02 0 .038-.004.057-.005l.09-.01.06-.01.09-.02.055-.013c.034-.01.068-.019.1-.03.012-.003.023-.005.033-.009l.009-.004c.055-.019.108-.04.162-.064.013-.005.025-.012.04-.019.039-.02.08-.04.12-.063l.039-.021c.047-.029.093-.059.138-.092l.034-.025c.036-.027.07-.056.104-.084l.034-.03c.083-.076.16-.159.231-.25l.025-.034c.027-.036.052-.073.077-.111l.022-.035c.028-.047.056-.095.08-.145l4.153-8.364a1.947 1.947 0 0 0-.878-2.61M19.823.265a6.323 6.323 0 1 0 0 12.646 6.323 6.323 0 0 0 0-12.646' fill='#ffffff'/></svg>"
      />
    );
  }
}
