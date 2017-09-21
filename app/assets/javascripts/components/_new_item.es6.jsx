class NewItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { name: '', description: ''}
  }

  render() {
    return (
      <div className="item">
        <input className="col-sm-2" type="text" placeholder='New item name'
               onChange={event => this.setState({ name: event.target.value })}/>
        <input className="col-sm-8" type="text" placeholder='New description'
               onChange={event => this.setState({ description: event.target.value })}/>
        <button className="item-button" onClick={this.handleClick}>Add</button>
      </div>
    )
  }

  handleClick(event) {
    var name = this.state.name;
    var description = this.state.description;
    console.log('The name value is ' + name + 'the description value is ' + description);

    $.ajax({ url: '/api/v1/items',
      type: 'POST',
      data: { item: { name: name, description: description } },
      success: (item) => {
        this.props.handleSubmit(item);
      }
    });
    event.preventDefault();
  }
}
