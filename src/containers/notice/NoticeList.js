import React, { Component } from 'react';
import NoticeDetail from './NoticeDetail';

class NoticeList extends Component {
  render() {
    const { data } = this.props;
    const list = data.map(info => <NoticeDetail key={info.id} info={info} />);

    return <div>{list}</div>;
  }
}

export default NoticeList;
