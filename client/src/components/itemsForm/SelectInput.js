import React, { Component } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';

// props added by Field component
// two level destructuring saying: look at the prop 'meta' and bring those to props
export default class SelectInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      getSelectValues: () => {},
    }
  }

  componentDidMount() {
    this.props.change('name', this.props.options[0].id);
    M.FormSelect.init(this.Select);
  }

  createOptions() {
    return this.props.options.map((option, i) => {
      return (
        <option 
          key={option.id.toString()} 
          value={option.id}
          data-icon={option.imageUrl}
        >
          {option.name}
        </option>
      );
    });
  }

  onSelectorChange(event) {
    this.props.change('name', event.target.value);
  }

  render() {
    return (
        <div style={{ paddingLeft: 10, paddingRight: 10 }} className='input-field col s12'>
            <select 
              style={{ marginBottom: '5px' }}
              onChange={this.onSelectorChange.bind(this)} 
              ref={Select => {this.Select = Select}}
            >
            {this.createOptions()}
            </select>
          <label>{this.props.label}</label>
        </div>
    );
  }
};
