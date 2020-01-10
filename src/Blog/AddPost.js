import React, { Component } from 'react';
import axios from 'axios';

class AddPost extends Component {
    constructor(props){
        super(props);

        this.initialState = {
            title: '',
            body: '',
            author: ''
        }

        this.state = this.initialState
    }

    handleChange = (e) => {
        const { name, value } = e.target;

        this.setState({
            [name]: value
        })
    }

    onPostAdded = (e) => {
        e.preventDefault();

        const data = {
            title : this.state.title,
            body : this.state.body,
            author : this.state.author
        }
        if(this.state.title === '' || this.state.body === '' || this.state.author === '') {
            alert('Please enter all the fields!');
        }else{
            axios.post("/posts/", data)
                .then(response => {
                    console.log(response);
                    this.setState(this.initialState);
                })
                .catch(error => {
                    console.log(error);
                })
        }
    }

    render(){
        return(
            <React.Fragment>
                <h3>New Post</h3>
                <form onSubmit={this.onPostAdded}>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input type="text" className="form-control" id="title"
                            name="title" value={this.state.title} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="body">Content</label>
                        <input type="text" className="form-control" id="body"
                            name="body" value={this.state.body} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                    <label htmlFor="author">Author</label>
                        <select className="custom-select" id="author" name="author"
                            value={this.state.author} onChange={this.handleChange}>
                            <option value="">Select</option>
                            <option value="mary">Mary</option>
                            <option value="john">John</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary">Add Post</button>
                </form>
            </React.Fragment>
        )
    }
}

export default AddPost;