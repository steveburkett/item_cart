class Main extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <Body items={this.props.items}/>
      </div>
    )
  }
}