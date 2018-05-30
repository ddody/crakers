import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import NoticeList from './NoticeList';
import Header from '../components/Header';
import * as api from '../../modules/api';

const styles = theme => ({
  root: {
    width: '100%',
    letterSpacing: '-0.05em'
  }
});

class Notice extends Component {
  static defaultProps = {
    heading: '공지사항'
  };

  state = {
    list: [
      {
        id: 0,
        title: '크래커 베타 서비스 오픈합니다.',
        created: '2017.11.23',
        contents:
          '크래커 베타 서비스 오픈합니다./n 많은 서비스 이용 바랍니다./n 이용하시다가 불편하신 점은 언제든지 고객센터로 말씀해주세요./n 감사합니다./n'
      }
    ]
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

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Header heading={this.props.heading} />
        <NoticeList data={this.state.list} />
      </div>
    );
  }
}
Notice.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Notice);
