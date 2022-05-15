import { Component, h } from '@stencil/core';

@Component({
    tag: 'app-root'
})
export class AppRoot {
    initializeValue = [{
        type: 'paragraph',
        children: [
            { text: 'xxx' }
        ]
    }];

    render() {
        return <plait-richtext value={this.initializeValue}></plait-richtext>;
    }
}