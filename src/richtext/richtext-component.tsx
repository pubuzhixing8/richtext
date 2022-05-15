import { Component, Host, h, Prop } from '@stencil/core';
import { createEditor, Element } from 'slate';
import { withRichtext } from '../plugins/with-richtext';

@Component({
  tag: 'plait-richtext',
  styleUrl: '../index.css',
  shadow: false
})
export class PlaitRichtextComponent {
  @Prop() value: Element[] = [];

  editor = withRichtext(createEditor());

  componentDidLoad() {
    this.editor.children = this.value;
    console.log(this.editor);
  }

  render() {
    return <Host contenteditable="true" class="plait-richtext-container">
      {
        this.value.map((element) => {
          return <plait-element element={element}></plait-element>
        })
      }
    </Host>
  }
}
