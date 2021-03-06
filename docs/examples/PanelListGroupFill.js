const panelInstance = (
  <Panel collapsible defaultExpanded header="Panel heading">
    Some default panel content here.
    <ListGroup>
      <ListGroupItem>Item 1</ListGroupItem>
      <ListGroupItem>Item 2</ListGroupItem>
      <ListGroupItem>&hellip;</ListGroupItem>
    </ListGroup>
    Some more panel content here.
  </Panel>
);

ReactDOM.render(panelInstance, mountNode);
