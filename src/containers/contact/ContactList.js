import React, { Component } from 'react';
import ContactDetail from './ContactDetail';

class ContactList extends Component {
  render() {
    const { data } = this.props;
    const list = data.map(info => <ContactDetail key={info.id} info={info} />);

    return <div>{list}</div>;
  }
}

export default ContactList;
