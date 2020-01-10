import React, { Component } from 'react';

import axios from '../Axios';

class SinglePost extends Component {
    state = {
        loadedPost: null
    }

    componentDidUpdate(){
        if(this.props.id){
            if(!this.state.loadedPost || this.state.loadedPost && this.state.loadedPost.id !== this.props.id){
                axios.get("/posts/" + this.props.id)
                .then(response => {
                    this.setState({
                        loadedPost: response.data
                    })
                })
                .catch(error => {
                    console.log(error);
                })
            }
        }
    }

    render(){
        let post = <p>Please select a post</p>;
        if(this.props.id){
            post = <div>Loading....</div>
        }
        if(this.state.loadedPost){
            post = (
                <article className="single-post post">
                    <h4 className="title">{this.state.loadedPost.title}</h4>
                    <h5 className="body">{this.state.loadedPost.body}</h5>
                </article>
            )
        }
        return post;
    }
}

export default SinglePost;