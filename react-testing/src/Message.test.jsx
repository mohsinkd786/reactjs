import { create } from "react-test-renderer";
import Message from "./Message";
import React from 'react';

it(`should given the number of times clicked`,()=>{
    const message = create(<Message/>)
    expect(message.getInstance().state.clicked).toEqual(0)
    message.getInstance().handleClicked()
    expect(message.getInstance().state.clicked).toEqual(1)
    // Click the button to update the state
    message.getInstance().handleClicked()
    message.getInstance().handleClicked()
    // Assertion
    expect(message.getInstance().state.clicked).toEqual(3)
})
it(`should h2 have button clicked count`,()=>{
    const messageComponent = create(<Message/>)
    expect(messageComponent.getInstance().state.clicked).toEqual(0)
    // clicked 1
    messageComponent.getInstance().handleClicked()
    // clicked 2
    messageComponent.getInstance().handleClicked()
    // access HTML Element from the Component
    const h2Element = messageComponent.root.findByType('h2')
    // Assertion
    expect(messageComponent.getInstance().state.clicked).toEqual(h2Element.props.children)
})
