import React, { Component } from 'react';
import { connect } from 'react-redux';
import { landingIsActive } from '../actions';

const divStyle = {
  display: 'flex',
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center'
};

class Landing extends Component {
  constructor(props) {
    super(props);
    props.landingIsActive(true);
    this.state = {};
  }

  renderPromo() {
    return (
      <div style={{ backgroundColor: 'rgba(52, 52, 52, 0.05)', borderRadius: '25px', margin: "30px"}} className="row">
        <div className="row s12">
          <img 
            src={require("../assets/shop_logo.png")} 
            alt={''} 
            height="60%" 
            width="60%">
          </img>
        </div>

        <div className="col s12 m12 l4">
          <div className="center promo promo-example">
            <i style={{ fontSize: "90px", color: '#b71c1c'}} className="material-icons ">flash_on</i>
            <p className="promo-caption">Enjoy the fastest experience</p>
            <p className="light center">With our app you can add up elements to your order in NO TIME and edit it in any way you see fit</p>
          </div>
        </div>
        <div className="col s12 m12 l4">
          <div className="center promo promo-example">
            <i style={{ fontSize: "90px", color: '#b71c1c'}} className="material-icons ">devices</i>
            <p className="promo-caption">Simple, yet elegant</p>
            <p className="light center">Use this web application, at anytime in any device. Yes, it also supports mobile screens, so you can keep on buy from anywhere, anytime!</p>
          </div>
        </div>
        <div className="col s12 m12 l4">
          <div className="center promo promo-example">
            <i style={{ fontSize: "90px", color: '#b71c1c'}} className="material-icons ">settings_applications</i>
            <p className="promo-caption">All tools in just one place</p>
            <p className="light center">Now you dont need to keep looking for that small button just to get your cart ready. Add items and make your purchase in the easiest way</p>
          </div>
        </div>
        <div style={{ margin: '20px 0px 20px 0px' }} className="col s12">
          <h4>Get started by loggin in!</h4>
        </div>

        <div className="col s12">
          <a href="/auth/google">
            <button 
              style={{ margin: "25px" }}
              className="waves-effect waves-light btn red darken-4"
              onClick={() => {
                setTimeout(() => { // to avoid visual hiccup
                  this.props.landingIsActive(false)
                }, 1000);
              }}
            > 
              Login with Google
            </button>
          </a>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div style={divStyle}>
      {this.renderPromo()}
    </div>
    );
  }
}

const mapStateToProps = ({  }) => ({
  
});

export default connect(mapStateToProps, { 
  landingIsActive,
})(Landing);

