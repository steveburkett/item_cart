class Main extends React.Component {
  render() {
    return (
      <div>
        <div className="header">
          <h1>Coffee cart</h1>
        </div>
        <Body items={this.props.items}/>
      </div>
    )
  }
}