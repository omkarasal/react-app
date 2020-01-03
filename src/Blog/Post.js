import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Post extends Component {
    render(){
        return(
            <article className="post" onClick={this.props.clicked}>
                <h4 className="title">{this.props.title}}</h4>
                <h6 className="author">- {this.props.author}</h6>
                <Link to={'/post/' + this.props.id}>click</Link>
            </article>
        )
    }
}

export default Post;