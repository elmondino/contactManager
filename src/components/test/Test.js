import React, { Component } from 'react';

class Test extends Component {
  state = {
    title: '',
    body: ''
  };

  componentDidMount() {
    console.log('2 - componentDidMount()');
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data =>
        this.setState({
          title: data.title,
          body: data.body
        })
      );
  }

  componentWillMount() {
    console.log('1 - componentWillMount()');
  }

  componentDidUpdate() {
    console.log('4 - componentDidUpdate()');
  }

  componentWillUpdate() {
    console.log('3 - ComponentWillUpdate()');
  }

  componentWillReceiveProps(nextProps, nextState) {
    console.log('componentWillReceiveProps');
  }

  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    );
  }
}

export default Test;
