import { Component, h, Host, Prop } from '@stencil/core';
import { Element, Text } from 'slate';

@Component({
  tag: 'plait-element',
  shadow: false,
})
export class PlaitElementComponent {
  @Prop() element: Element

  render() {
    return <Host class="plait-richtext-element">
      {
        this.element.children.map((textOrElement) => {
          if (Text.isText(textOrElement)) {
            return <div>{textOrElement.text}</div>
          } else {
            return <plait-element element={this.element}></plait-element>
          }
        })
      }
    </Host>
  }
}
