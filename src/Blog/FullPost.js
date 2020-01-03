import React, { Component } from 'react';

import axios from 'axios';

class FullPost extends Component {
    state = {
        post: null
    }

    componentDidMount(){
        if(this.props.match.params.id){
            axios.get("https://jsonplaceholder.typicode.com/posts/" + this.props.match.params.id)
                .then(response => {
                    this.setState({
                        post: response.data
                    })
                })
                .catch(error => {
                    console.log(error);
                })
        }
    }
    
    render(){
        let post = <p>Something error occurs...</p>
        if(this.props.match.params.id){
            post = <div>Loading....</div>
        }
        if(this.state.post){
            post = (
                <article>
                    <h3>{this.state.post.title}</h3>
                    <p>{this.state.post.body}</p>
                </article>
            )
        }
        return(
            <div className="container">
                <section className="post-section">
                    { post }
                    <button onClick={this.props.history.goBack} 
                        style={{display: 'block', backgroundColor: '#ddd', 
                                border: 0, padding: '5px 20px'}}>Back</button>
                </section>
            </div>
        )
    }
}

export default FullPost;