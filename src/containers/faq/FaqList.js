import React, { Component } from 'react';
import FaqDetail from './FaqDetail';

class FaqList extends Component {
  render() {
    const { data } = this.props;
    const list = data.map(info => <FaqDetail key={info.id} info={info} />);

    return <div>{list}</div>;
  }
}

export default FaqList;
