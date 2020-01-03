import React, { Component } from 'react';
import axios from 'axios';

import Post from './Post';
import SinglePost from './SinglePost';
import './Blog.css';

class Blog extends Component {
    state = {
        posts: null,
        selectedPostId: null
    }

    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(response => {
                const posts = response.data.slice(0, 10);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Mark'
                    }
                })
                this.setState({
                    posts: updatedPosts
                })
            })
    }

    selectedPostHandler = (id) => {
        this.setState({
            selectedPostId: id
        })
    }

    render(){
        let posts = <div>Loading...</div>;
        if(this.state.posts){
            posts = this.state.posts.map(post => {
                return <Post 
                        key={post.id}
                        title={post.title} 
                        author={post.author}
                        id={post.id}
                        clicked={() => this.selectedPostHandler(post.id)} />
            })
        }
        return(
            <div className="container">
                <section className="post-section">
                    {
                        posts            
                    }
                </section>
                <section>
                    <SinglePost id={this.state.selectedPostId} />
                </section>
            </div>
        )
    }
}

export default Blog;