import React, { PropTypes } from 'react'
import {connect} from 'react-redux';
import Form from './Form';

class App extends React.Component {
  handleSubmit() {
    console.log('Sumitted!');
  }

  render () {
    return <div>
      <h1>Form example</h1>
      <Form onSubmit={this.handleSubmit.bind(this)} />
    </div>
  }
}

export default connect()(App);
