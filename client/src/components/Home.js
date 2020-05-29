import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from './itemsForm';
import Order from './Order';
import {
  getOrder,
  updateOrder,
} from '../actions';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: null,
    };
    this.props.getOrder();
  }

  render() {
    return (
      <div>
        {this.props.formIsVisible && 
          <Form 
            items={this.props.items}
            updateOrder={this.props.updateOrder}
          />
        }
        <div style={{ marginLeft: 20 }}>
          <h4>ORDER #{this.props.number}</h4>
        </div>
        <Order 
          items={this.props.items}
          currency={this.props.currency}
        />
      </div>
    );
  }
};

const mapStateToProps = ({ home, header }) => ({
  items: home.items,
  number: home.number,
  currency: home.currency,
  formIsVisible: header.formIsVisible
});

export default connect(mapStateToProps, {
  getOrder,
  updateOrder,
})(Home);

