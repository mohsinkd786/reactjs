const helloAction = (newText) => {
    return {
        type: 'CHANGE_TEXT',
        text: newText
    }
}
export default helloAction;