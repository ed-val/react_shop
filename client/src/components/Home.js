import React, { Component } from 'react';
import { connect } from 'react-redux';
import NewsCard from './NewsCard';
import {
  getNewsByKeyword,
  getNewsfeed,
} from '../actions';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: null,
    };
    this.props.getNewsByKeyword('apple'),
    this.props.getNewsfeed(),
  }

  render() {
    return (
      <NewsCard />
    );
  }
};

const mapStateToProps = ({ }) => ({

});

export default connect(mapStateToProps, {
  getNewsByKeyword,
  getNewsfeed,
})(Home);

