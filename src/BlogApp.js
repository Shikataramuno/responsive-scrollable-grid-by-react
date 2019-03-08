import React, { Component } from 'react';

export class BlogApp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      columns: ["id", "title", "content"],
      posts: [
        {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
        {id: 2, title: 'Installation', content: 'You can install React from npm.'}
      ]
    }
  }

  Blog(props) {
    const sidebar = (
      <ul>
        {props.posts.map((post) =>
          <li key={post.id}>
            {post.title}
          </li>
        )}
      </ul>
    );
    const content = props.posts.map((post) =>
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
      </div>
    );
    return (
      <div>
        {sidebar}
        <hr />
        {content}
      </div>
    );
  }

  list(props) {
    console.log(props.posts);
    console.log(props.columns);
    return (
      <div>
        {
          props.posts.map(post => {
            return props.columns.map((name,idx) => <div key={idx}>{post[name]}</div>);
          })
        }
      </div>
    );
  }

  render () {
    return (
      // <this.Blog posts={this.state.posts} />
      <this.list posts={this.state.posts} columns={this.state.columns} />
    );
  }
}