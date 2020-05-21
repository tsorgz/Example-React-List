/*
@Filename: Item.js
@Author: TJ Soregaroli

This component is used to display, update, and remove entries
from our server.
*/

import React from 'react';

class Item extends React.Component {
    /*
    Initializes Component, sets initial state.
    @StateProperties:
        name: The name of the current object, changing only when in editMode.
        category: The category of the current object, changing only when in editMode.
        editMode: A toggleable state used to exit an object currently in our server. (Off by default).
    
    */
    constructor(props) {
        super(props)
        this.state = {
            name: this.props.item['name'], 
            category: this.props.item['category'], 
            editMode: false
        }
    }
    
    /*Calls onItemDeletion from ItemDashboard to delete this entry from the server.*/
    onDelete = () => {
        this.props.onDelete(this.props.index)
    } 
    
    /*Handles any value change of inputs when item state is in edit mode.*/
    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    /*Toggles edit mode when "Edit" and "Cancel" buttons are clicked.*/
    toggleEditMode = () => {
        this.setState({name: this.props.item['name'], category: this.props.item['category'], editMode: !this.state.editMode})
    }

    /*Formats data from name and category states, then calls onItemUpdate from ItemDashboard to update this entry from server.*/
    sendData = () => {
        var data = {
            name: this.state.name,
            category: this.state.category
        }
        this.props.onUpdate(data, this.props.index)
    }

    render() {
        if (this.state.editMode)
            /*Generates form for editing when edit mode is active.*/
            return (
                <form>
                    <div className="row py-2 my-1 mx-2 border-top border-dark">
                        <input type="text" name="name" className="col-4 mx-2" defaultValue={this.props.item['name']} onChange={this.handleChange}/>
                        <input type="text" name="category" className="col-4 mx-2" defaultValue={this.props.item['category']} onChange={this.handleChange}/>
                        <button className="btn btn-primary col-1 mx-4" onClick={this.sendData}>Update</button>
                        <button className="btn btn-secondary col-1 ml-5" onClick={this.toggleEditMode}>Cancel</button>
                    </div>
                </form>
            )
        /*Generates item listing when edit mode is not active.*/
        return (
            <div className="row py-2 my-1 mx-2 border-top border-dark">
                <div className="col-4 mx-2">{this.props.item['name']}</div>
                <div className="col-4 mx-2">{this.props.item['category']}</div>
                <button className="btn btn-primary col-1 mx-4" onClick={this.toggleEditMode}>Edit</button>
                <button className="btn btn-danger col-1 ml-5" onClick={this.onDelete}>Delete</button>
            </div>
        );
    }
}
  
export default Item;