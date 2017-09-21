var Item = React.createClass({
    getInitialState() {
        return {editable: false}
    },
    render() {
        var name = this.state.editable ?
            <input className="col-sm-2" type='text' ref={(input) => this.name = input} defaultValue={this.props.item.name} /> :
            <div className="d-inline-block col-sm-2">{this.props.item.name}</div>;
        var description = this.state.editable ?
            <input className="col-sm-8" type='text' ref={(input) => this.description = input} defaultValue={this.props.item.description} />:
            <div className="d-inline-block col-sm-8">{this.props.item.description}</div>;

        return (
            <div className="item">
                {name}
                {description}
                <button onClick={this.handleEdit}> {this.state.editable ? 'Submit' : 'Edit' } </button>
                <button className="item-button" onClick={this.props.handleDelete} >Delete</button>
            </div>
        )
    },
    handleEdit() {
        if(this.state.editable) {
            var name = this.name.value;
            var id = this.props.item.id;
            var description = this.description.value;
            var item = {id: id , name: name , description: description};
            this.props.handleUpdate(item);
        }
        this.setState({ editable: !this.state.editable })
    },
});
