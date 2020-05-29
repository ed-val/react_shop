import React, { Component } from 'react';
import _ from 'lodash';
import { reduxForm, Field } from 'redux-form';
import getComponent from '../../utils/formHelper'
import FORM_FIELDS from './FORM_FIELDS';

const btnContainer = {
  display: 'flex',
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center'
}

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  _renderFields() {
    if(this.props.items.length === 0) return;
    return _.map(FORM_FIELDS, ({ label, name, type }) => {
      const component = getComponent(type);
      return (
        <Field 
          key={name} 
          component={component} 
          label={label} 
          name={name} 
          options={this.props.items || []}
          change={this.props.change}
        />
      );
    });
  }
  
  _onFormSubmit(formValues) {
    const newItems = this.props.items.map(item => {
      if (item.id === formValues.name) {
        return { 
          ...item, 
          quantity: (parseInt(formValues.quantity) + parseInt(item.quantity))
          .toString(),
        };
      } else {
        return item;
      }
    });
    this.props.updateOrder(newItems);
    this.props.dispatch(this.props.reset('itemsForm'))
  }
  // handleSubmit is provided by reduxForm
  render() {
    return (
      <div style={{ marginTop: 25 }}>
        <form onSubmit={this.props.handleSubmit(this._onFormSubmit.bind(this))}>
          {this._renderFields()}
          <div className='col s12' style={btnContainer}>
            <button className="red darken-4 btn-flat center white-text" type="submit">
              ADD
              <i className="material-icons right">add_circle_outline</i>
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const validate = (inputs) => {
  const errors = {};

  _.each(FORM_FIELDS, ({ name }) => {
    if (!inputs[name]) {
      errors[name]= `You must provide a ${name}`;
    }
  });

  return errors;
};

export default reduxForm({
  validate, //this fx will run every time the submit event is triggered
  form: 'itemsForm',
  destroyOnUnmount: false, //this persist the form values even on leave
})(Form);
