import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div class="jumbotron">
            <div class="container">
                <h1 class="display-3">Welcome to React!</h1>
                <p>This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
                <p><Link class="btn btn-primary btn-lg" to={'/about'}>Learn more »</Link></p>
            </div>
        </div>
    )
}

export default Home
