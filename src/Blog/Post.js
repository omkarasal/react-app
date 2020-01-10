import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Post extends Component {
    render(){
        return(
            <article className="post" onClick={this.props.clicked}>
                <h4 className="title">{this.props.title}}</h4>
                <h6 className="author">- {this.props.author}</h6>
                <Link className="clearfix" to={'/post/' + this.props.id}>click</Link>
                <button type="button" className="btn btn-danger mt-3" onClick={this.props.deleted}>Delete</button>
            </article>
        )
    }
}

export default Post;