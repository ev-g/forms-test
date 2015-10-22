import React, { PropTypes } from 'react'
import {connectReduxForm} from 'redux-form';
import validate from './validate';

@connectReduxForm({
  form: 'form',
  fields: ['name', 'address', 'phone'],
  validate: validate
})
export default class Form extends React.Component {
  static propTypes = {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired
  }

  render () {
    const {fields: {name, address, phone}, handleSubmit} = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" {...name}/>
        {name.error && name.touched && <div>{name.error}</div>}

        <label>Address</label>
        <input type="text" {...address}/>
        {address.error && address.touched && <div>{address.error}</div>}

        <label>Phone</label>
        <input type="text" {...phone}/>
        {phone.error && phone.touched && <div>{phone.error}</div>}

        <button onClick={handleSubmit}>Submit</button>
      </form>
    );
  }
}
