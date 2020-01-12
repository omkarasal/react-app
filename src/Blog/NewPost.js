import React, { Component } from 'react'
import axios from 'axios';

class NewPost extends Component {
    constructor(props) {
        super(props)
    
        this.initialState = {
            id: parseInt(Math.random() * 1000),
            title: '',
            body: '',
            author: ''
        }

        this.state = this.initialState
    }
    
    handleChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        })
    }

    submitHandler = event => {
        event.preventDefault();

        if(this.state.title === '' || this.state.body === '' || this.state.author === ''){
            alert('Please enter all the fields!');
        }else{
            this.props.added(this.state);
            this.setState(this.initialState);
            
            // send data to dummy URL
            const data = {
                title: this.state.title,
                body: this.state.body,
                author: this.state.author
            }
            axios.post('https://jsonplaceholder.typicode.com/posts', data)
                .then(response => {
                    console.log(response)
                })
                .catch(error => {
                    console.log(error);
                })
        }
        console.log(this.state);
        
    }

    render() {
        return (
            <div className="new-post-section">
                <h3>Add new post</h3>
                <div className="card">
                    <div className="card-body">
                        <form onSubmit={this.submitHandler}>
                            <div className="form-group">
                                <label htmlFor="title">Title</label>
                                <input type="text" className="form-control" id="title"
                                    name="title" value={this.state.title}
                                    onChange={this.handleChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="body">Content</label>
                                <textarea className="form-control" id="body"
                                    name="body" value={this.state.content} 
                                    onChange={this.handleChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="author">Author</label>
                                <input type="text" className="form-control" id="author"
                                    name="author" value={this.state.author} 
                                    onChange={this.handleChange} />
                            </div>
                            <button type="submit" className="btn btn-primary">Add Post</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewPost
