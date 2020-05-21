/*
@Filename: ItemForm.js
@Author: TJ Soregaroli

This component is used to create entries and send
the data to the server.
*/
import React from 'react';

class ItemForm extends React.Component {
    /*
    Initializes Component, sets initial state.
    @StateProperties:
        name: The value of the name field.
        category: The value of the category field.
    */
    constructor(props) {
        super(props)
        this.state = {name: '', category:''}
    }

    /*Handles any value change of inputs.*/
    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    /*Formats data from name and category states, then calls onItemCreation from ItemDashboard to update this entry from server.*/
    sendData = () => {
        var data = {
            name: this.state.name,
            category: this.state.category
        }
        this.props.onCreate(data)
    }


    render() {
        return (
            <form onSubmit={this.sendData} >
                <div className="row py-2 my-1 mx-2">
                    <input type="text" name="name" className="col-4 mx-2" onChange={this.handleChange}/>
                    <input type="text" name="category" className="col-4 mx-2" onChange={this.handleChange}/>
                    <button className="btn btn-primary col-3 mx-2">Add</button>
                </div>
            </form>
        );
    }
}
  
export default ItemForm;