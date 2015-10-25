import React, { PropTypes } from 'react'
import {connect} from 'react-redux';
import Form from './Form';

class App extends React.Component {
  handleSubmit() {
    console.log('Sumitted!');
    console.log("Test!");
    var a = 1;
  }

  render () {
    return <div>
      <h1>Form example</h1>
      <h3>Form here</h3>
      <div className="col-md-4 col-sm-3 col-lg-3 col-xs-6">
        <Form onSubmit={this.handleSubmit.bind(this)} />
      </div>
    </div>
  }
}

export default connect()(App);
