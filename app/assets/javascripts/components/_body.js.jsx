var Body = React.createClass({
    getInitialState() {
        return { items: [] }
    },

    componentDidMount() {
        console.log('calling items.json');
        $.getJSON('/api/v1/items.json', (response) => {
            this.setState({ items: this.orderItems(response) })
        });
    },

    render() {
        return (
            <div>
                <NewItem handleSubmit={this.handleSubmit} />
                <br/>
                <AllItems  items={this.state.items}  handleDelete={this.handleDelete} onUpdate={this.handleUpdate}/>
            </div>
        )
    },

    handleUpdate(item) {
        $.ajax({
            url: `/api/v1/items/${item.id}`,
            type: 'PUT',
            data: { item: item },
            success: () => { this.updateItems(item);
            }
        }
    )},

    orderItems(items) {
      return items.sort(function(a,b) {return (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0);} );
    },

    updateItems(item) {
        var items = this.state.items.filter((i) => {
            return i.id != item.id
        });
        items.push(item);
        this.setState({items: this.orderItems(items) });
    },

    handleSubmit(item) {
        var newState = this.state.items.concat(item);
        this.setState({ items: newState });
    },
    handleDelete(id) {
        console.log('in handle delete');
        $.ajax({
            url: `/api/v1/items/${id}`,
            type: 'DELETE',
            success:() => {
                this.removeItemClient(id);
            }
        });
    },
    removeItemClient(id) {
        var newItems = this.state.items.filter((item) => {
            return item.id != id; });
        this.setState({ items: this.orderItems(newItems) });
    },
});
