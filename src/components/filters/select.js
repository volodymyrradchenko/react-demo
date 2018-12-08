import React, { Component } from 'react';
import Select from 'react-select';

class SelectFilter extends Component {
  state = {
    selected: null
  };

  handleChange = selected => this.setState({ selected });

  render() {
    const options = this.props.articles.map(article => ({
      label: article.title,
      value: article.id
    }));

    return (
      <Select
        options={options}
        value={this.state.selected}
        onChange={this.handleChange}
        isMulti
      />
    );
  }
}

export default SelectFilter;
