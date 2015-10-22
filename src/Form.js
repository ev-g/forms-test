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
    const renderInput = (input, label) => {
      return <div className={'form-group' + (input.error && input.touched ? ' has-error' : '')}>
        <label className="control-label">{label}</label>
        <input className="form-control" type="text" {...input}/>
        {input.error && input.touched && <div className="text-danger">{input.error}</div>}
      </div>
    }
    return (
      <form onSubmit={handleSubmit}>
        {renderInput(name, 'Name')}
        {renderInput(address, 'Address')}
        {renderInput(phone, 'Phone')}
        <button onClick={handleSubmit} type="submit"  className="btn btn-default">Submit</button>
      </form>
    );
  }
}
