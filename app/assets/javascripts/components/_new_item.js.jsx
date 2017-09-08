var NewItem= React.createClass({
    render() {
        return (
            <div className="container">
                <input type="text" placeholder='New item name' ref={(input) => this.name = input}/>
                <input type="text" placeholder='New description' ref={(input) => this.description = input}/>
                <button onClick={this.handleClick}>Add</button>
            </div>
        )
    },
    handleClick() {
        var name = this.name.value;
        var description = this.description.value;
        console.log('The name value is ' + name + 'the description value is ' + description);

        $.ajax({ url: '/api/v1/items',
            type: 'POST',
            data: { item: { name: name, description: description } },
            success: (item) => {
                this.props.handleSubmit(item);
            }
        });
    }
});
