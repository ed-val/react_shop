import React, { Component } from 'react';
import M from 'materialize-css';

let instanceModal = {};
const btnContainer = {
  display: 'flex',
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  marginTop: 25,
  marginBottom: 25,
}

class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    M.AutoInit();
    instanceModal = M.Modal.getInstance(this.Modal);
  }
  
  getGrandTotal() {
    let sum = 0;
    this.props.items.forEach(({price, quantity}) => {
      sum += price * quantity;
    })
    return sum;
  }

  getSubtotal(price, quantity) {
    return price * quantity;
  }

  renderItems() {
    if (this.props.items.length === 0) return null;
    return this.props.items.map((item, i) => {
      return (
        <li key={i.toString()} className="collection-item avatar">
          <img src={item.imageUrl} alt="" className="circle"></img>
          <span className="title">{item.name}</span>
          <p>Price: {item.price} {this.props.currency} <br />
            Quantity: {item.quantity}
          </p>
          <div className="secondary-content red-text ">
          <p>Subtotal: <br />
            {item.price * item.quantity} {this.props.currency}
          </p>
          </div>
        </li>
      )
    });
  }

  render() {
    return (
      <ul className="collection col s12">
        {this.renderItems()}
        <li className="collection-item avatar">
          
          <div className="secondary-content black-text ">
          <h4>Total:{'  '}
            {this.getGrandTotal()} {this.props.currency}
          </h4>
          </div>
        </li>
        <div className='col s12' style={btnContainer}>
          <button onClick={() => instanceModal.open()} className="indigo btn-flat center white-text" type="submit">
            PLACE ORDER
            <i className="material-icons right">check_circle</i>
          </button>
        </div>

        <div ref={Modal => {this.Modal = Modal}} id="modal1" className="modal">
          <div className="modal-content">
            <h4>Awesome!...</h4>
            <p>Thanks for your purchase! Your order has been received and it's beign processed, we'll let you know when the items are shipped to your address.</p>
          </div>
          <div onClick={() => instanceModal.close()} className="modal-footer">
            <a href="#!" className="modal-close waves-effect waves-green btn-flat">AGREED</a>
          </div>
        </div>

      </ul>
    );
  }
}

export default Order;