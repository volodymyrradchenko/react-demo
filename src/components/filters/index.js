import React, { Component } from 'react';

import SelectFilter from './select';
import DateRange from './date-range';

import { connect } from 'react-redux';

class Filters extends Component {
  render() {
    return (
      <div>
        <SelectFilter articles={this.props.articles} />
        <DateRange />
      </div>
    );
  }
}

export default connect(({ articles }) => ({
  articles
}))(Filters);
