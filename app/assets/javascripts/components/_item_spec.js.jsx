var TestUtils = React.addons.TestUtils

describe('CheckboxWithLabel', function () {

  it('sets up the Item node correct', function () {
    // Render a checkbox with label in the document
    var test_item = {name: 'batman', description: 'beats superman'}

    var item = TestUtils.renderIntoDocument(
      <Item item={test_item} />
    );

    var itemNode = ReactDOM.findDOMNode(item);

    expect(itemNode.innerHTML).toContain('batman');
    expect(itemNode.innerHTML).toContain('beats superman');
  });
});



// // Simulate a click and verify that it is now On
// TestUtils.Simulate.change(
//   TestUtils.findRenderedDOMComponentWithTag(
//     checkbox,
//     'input'
//   )
// );
// expect(checkboxNode.textContent).toEqual('On');