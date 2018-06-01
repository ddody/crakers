import React from 'react';
import PropTypes from 'prop-types';
import ContactList from './ContactList';
import { withStyles } from '@material-ui/core/styles';
import * as api from '../../modules/api';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    justifyContent: 'space-between',
    position: 'absolute',
    width: '100%',
    minHeight: 'calc(100% - 56px)'
  }
});

class ContactView extends React.Component {
  state = {
    list: [
      {
        id: 0,
        title: '크래커 베타 서비스 오픈합니다.',
        created: '2017.11.23',
        contents:
          '크래커 베타 서비스 오픈합니다./n 많은 서비스 이용 바랍니다./n 이용하시다가 불편하신 점은 언제든지 고객센터로 말씀해주세요./n 감사합니다./n'
      }
    ],
    open: true
  };

  getNotice = async data => {
    const response = await api.getCRAKERS(data);
    this.setState({
      list: response.data
    });
  };

  componentDidMount() {
    this.getNotice('notices');
  }

  handleClick = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <ContactList data={this.state.list} />
      </div>
    );
  }
}

ContactView.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ContactView);
