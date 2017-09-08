var NewItem= React.createClass({
    render() {
        return (
            <div>
                <input type="text" placeholder='Enter the name of the item' ref={(input) => this.name = input}/>
                <input type="text" placeholder='Enter a description' ref={(input) => this.description = input}/>
                <button onClick={this.handleClick}>Submit</button>
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
