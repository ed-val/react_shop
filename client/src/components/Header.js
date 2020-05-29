import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { showForm } from '../actions';
// import Payments from './Payments';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSearchBar: false,
      searchbarText: '',
    };
  }

  _renderContent() {
    const { showForm, formIsVisible } = this.props;
    switch (this.props.user) {
      case null:
        return;
      default:
        return [
          <li key="2" onClick={() => showForm(!formIsVisible)}>
            {this.props.formIsVisible ? 
              <a href='#!'>
                <i className="material-icons left">done</i>
                DONE EDITING
              </a> 
            : 
              <a href='#!'>
                <i className="material-icons left">add_shopping_cart</i>
                ADD ITEMS
              </a> 
            }
          </li>,
          <li key="3"><a href="/api/logout">LOG OUT</a></li>
        ];
    }
  }

 
  renderNavigationBar() {
    return (
      <div className="red darken-4 nav-wrapper">
        <Link
          to={'/home'}
          className="brand-logo"
        >
          <img 
            style={{ marginLeft: 15 }}
            src={require("../assets/shop_logo_white.png")} 
            alt={''} 
            height="60" 
            width="70"
          >
          </img>
        </Link>
        <ul className="right hide-on-med-and-down">
          {this._renderContent()}
        </ul>
      </div>
    );
  }

  render() {
    return (
      <nav>
        {
          this.state.showSearchBar ? 
          this.renderSearchBar() : 
          this.renderNavigationBar()
        }
      </nav>
    );
  }
}

const mapStateToProps = ({ auth, header }) => {
  return {
    user: auth.user,
    formIsVisible: header.formIsVisible
  };
};

export default connect(mapStateToProps, {
  showForm,
})(Header);
