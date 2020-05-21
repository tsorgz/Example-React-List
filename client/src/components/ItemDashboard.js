/*
@Filename: ItemDashboard.js
@Author: TJ Soregaroli

This component is used to hold all Item entries from the server, and an ItemForm 
entry to create new entries. All API calls to the server are done within this component. 
*/

import React from 'react';
import axios from 'axios';
import Item from './Item';
import ItemForm from './ItemForm';

class ItemDashboard extends React.Component {
    /*
    Initializes Component, sets initial state. Binds all API call functions to this
    component instance.
    @StateProperties:
        items: The list of items retrieved from the server.
    */
    constructor(props) {
        super(props)
        this.state = {items: []}
        this.onItemCreation = this.onItemCreation.bind(this)
        this.onItemUpdate = this.onItemUpdate.bind(this)
        this.onItemDeletion = this.onItemDeletion.bind(this)
        this.triggerUpdate = this.triggerUpdate.bind(this)
    }

    /*Makes an API call to retrieve list when component mounts to view.*/
    componentDidMount() {
        this.triggerUpdate()
    }

    /*Creates a new Item instance from ItemForm and updates the view.*/
    onItemCreation(data) {
        axios.post('http://127.0.0.1:5000/api/', data)
            .then(this.triggerUpdate)
    }

    /*Updates an existing Item instance and updates the view.*/
    onItemUpdate = (data, index) => {
        axios.put('http://127.0.0.1:5000/api/' + index, data)
            .then(this.triggerUpdate)
    }

    /*Deletes an Item instance and updates the view.*/
    onItemDeletion = (index) => {
        axios.delete('http://127.0.0.1:5000/api/' + index)
            .then(this.triggerUpdate)
    }

    /*Retrieves Item instances from server, and populates the state with them.*/
    triggerUpdate = () => {
        var currentComponent = this;
        axios.get('http://127.0.0.1:5000/api/')
            .then( res => this.setState({items: res.data}))
    }

    render() {
        const itemList = []
        
        //Creates each Item instance from items in state, adds callbacks and index to each one.
        for (var item in this.state.items)
            itemList.push(<Item item={this.state.items[item]} key={item} index={item} onDelete={this.onItemDeletion} onUpdate={this.onItemUpdate} />)
        
        //Appends ItemForm and each Item into view
        return (
            <div className="container bg-light px-3 py-3">
                <h2 className="text-center py-4">React List Example</h2>
                <div className="row py-1">
                    <h4 className="col-4 mx-2 text-center">Name</h4>
                    <h4 className="col-4 mx-2 text-center">Category</h4>
                </div>
                <ItemForm onCreate={this.onItemCreation} />
                {itemList}
            </div>
            
        );
    }
}
  
export default ItemDashboard;