import React, { Component as ReactComponent } from 'react';

export default OriginalComponent =>
  class Accordion extends ReactComponent {
    state = {
      openItemId: null
    };

    render() {
      // return <OriginalComponent {...this.props} isOpen = {this.state.isOpen} toggleOpen = {this.state.toggleOpen} />
      return (
        <OriginalComponent
          {...this.props}
          {...this.state}
          toggleOpen={this.toggleOpen}
        />
      );
    }

    toggleOpen = item_id => ev => {
      this.setState({
        openItemId: item_id === this.state.openItemId ? null : item_id
      });
    };
  };
